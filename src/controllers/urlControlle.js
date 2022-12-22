import { nanoid } from "nanoid";
import connectionDB from "../database/db.js";
export async function createUrl(req, res) {
  const urlBody = res.locals.urls;
  const session = res.locals.sessions;
  urlBody.shortUrl = nanoid(9);
  const { shortUrl } = urlBody;
  try {
    await connectionDB.query(
      'INSERT INTO urls(url,"shortUrl", "userId") VALUES ($1, $2,$3)',
      [urlBody.url, urlBody.shortUrl, session.userId]
    );

    res.status(201).send({ shortUrl });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

  try {
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
