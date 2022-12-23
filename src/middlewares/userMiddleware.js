import connectionDB from "../database/db.js";
export async function infoUserValidate(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }
  const token = authorization?.replace("Bearer ", "");
  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const userExists = await connectionDB.query(
      "SELECT users.id FROM users JOIN sessions ON sessions.id = users.id WHERE sessions.token = $1",
      [token]
    );

    res.locals.users = userExists.rows[0];
    res.locals.tokens = token;
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  next();
}
