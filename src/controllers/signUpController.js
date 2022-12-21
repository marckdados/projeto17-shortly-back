import bcrypt from "bcrypt";
import connectionDB from "../database/db.js";

export async function createUser(req, res) {
  const user = res.locals.users;

  const hashPassword = bcrypt.hashSync(user.password, 10);
  user.password = hashPassword;

  try {
    await connectionDB.query(
      "INSERT INTO users(name, email, password) VALUES ($1, $2, $3)",
      [user.name, user.email, user.password]
    );
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
