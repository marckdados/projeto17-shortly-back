import connectionDB from "../database/db.js";

export async function getInfoUser(req, res) {
  const token = res.locals.tokens;
  const user = res.locals.users;
  try {
    const { rows } = await connectionDB.query(
      'SELECT users.id, users.name, SUM(urls."visitCount") AS "visitCount" FROM urls RIGHT JOIN users ON users.id = urls."userId" JOIN sessions ON sessions."userId" = users.id  WHERE sessions.token = $1 GROUP BY users.id',
      [token]
    );
    const urlsUser = await connectionDB.query(
      'SELECT urls.id, urls."shortUrl", urls.url, urls."visitCount" FROM urls JOIN sessionS ON sessions."userId" = urls."userId" WHERE sessions.token =$1',
      [token]
    );
    rows[0].shortenedUrls = urlsUser.rows;

    const body = rows[0];

    res.status(200).send(body);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
