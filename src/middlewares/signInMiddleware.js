import bcrypt from "bcrypt";
import connectionDB from "../database/db.js";
import signInSchema from "../schemas/signInSchema.js";

export async function signInValidate(req, res, next) {
  const user = req.body;

  const { errors } = signInSchema.validate(user, {
    abortEarly: false,
  });
  if (errors) {
    const error = errors.details.map((detail) => detail.message);
    return res.status(422).send(error);
  }
  try {
    const userExists = await connectionDB.query(
      "SELECT * FROM users WHERE email = $1",
      [user.email]
    );
    if (
      !userExists.rows[0] ||
      !bcrypt.compareSync(user.password, userExists.rows[0].password)
    ) {
      return res.sendStatus(401);
    }
    res.locals.users = userExists.rows[0];
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  next();
}
