import connectionDB from "../database/db.js";

export async function getInfoUser(req, res) {
  const user = res.locals.users;
  try {
    //const body = await connectionDB.query("");

    console.log(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
