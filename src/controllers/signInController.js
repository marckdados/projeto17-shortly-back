import { v4 as uuid } from "uuid";
import connectionDB from "../database/db.js";
export async function loginUser(req, res) {
  const user = res.locals.users;
  const token = uuid();

  console.log(user.id, token);
  try {
    await connectionDB.query(
      'INSERT INTO sessions("userId",token) VALUES ($1, $2)',
      [user.id, token]
    );
    res.status(201).send(token);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
