import connectionDB from "../database/db.js";

export async function getRanking(req, res) {
  try {
    const { rows } = await connectionDB.query(
      'SELECT users.id, users.name, SUM("visitCount") AS "visitCount", COUNT(urls."userId") AS "linksCount" FROM urls RIGHT JOIN users ON users.id = urls."userId" GROUP BY users.id ORDER BY "visitCount" ASC LIMIT 10 ;'
    );

    rows.forEach((user) => {
      if (user.visitCount === null) {
        user.visitCount = "0";
      }
    });
    res.status(200).send(rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
