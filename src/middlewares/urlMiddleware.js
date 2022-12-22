import connectionDB from "../database/db.js";
import urlSchema from "../schemas/urlSchema.js";

export async function urlValidate(req, res, next) {
  const url = req.body;
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const token = authorization?.replace("Bearer ", "");

  const { errors } = urlSchema.validate(url, { abortEarly: false });
  if (errors) {
    const error = errors.details.map((detail) => detail.message);
    return res.status(422).send(error);
  }
  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const session = await connectionDB.query(
      "SELECT * FROM sessions WHERE token = $1",
      [token]
    );
    if (!session.rows[0]) {
      return res.sendStatus(401);
    }
    res.locals.urls = url;
    res.locals.sessions = session.rows[0];
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  next();
}
