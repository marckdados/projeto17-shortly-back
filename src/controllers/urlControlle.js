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

export function getUrlPerId(req, res) {
  const url = res.locals.urls;
  res.status(200).send(url);
}

export async function openShortUrl(req, res) {
  const url = res.locals.urls;
  console.log(url);
  const visitCount = url.visitCount + 1;
  try {
    await connectionDB.query('UPDATE urls SET "visitCount"=$1 WHERE id=$2', [
      visitCount,
      url.id,
    ]);
    console.log(url.url);
    res.redirect(url.url);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
