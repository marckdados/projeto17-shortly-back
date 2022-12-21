import connectionDB from "../database/db.js";
import signUpSchema from "../schemas/signUpSchema.js";

export async function signUpValidate(req, res, next) {
  const user = req.body;

  const { errors } = signUpSchema.validate(user, {
    abortEarly: false,
  });
  if (errors) {
    const error = errors.details.map((detail) => detail.message);
    return res.status(422).send(error);
  }

  if (user.password !== user.confirmPassword) {
    return res.sendStatus(409);
  }
  delete user.confirmPassword;
  try {
    const emailExists = await connectionDB.query(
      "SELECT * FROM users WHERE email=$1",
      [user.email]
    );
    if (emailExists.rows[0]) {
      return res.sendStatus(409);
    }
    res.locals.users = user;
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  next();
}
