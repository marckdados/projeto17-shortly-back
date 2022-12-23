import connectionDB from "../database/db.js";
import urlSchema from "../schemas/urlSchema.js";

export async function urlValidate(req, res, next) {
  const url = req.body;
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  if (
    !url.url.match(
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    )
  ) {
    return res.sendStatus(422);
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

export async function getUrlValidate(req, res, next) {
  const urlId = req.params.id;

  try {
    const url = await connectionDB.query(
      'SELECT id, url, "shortUrl" FROM urls WHERE id=$1',
      [urlId]
    );
    if (!url.rows[0]) {
      return res.sendStatus(404);
    }
    res.locals.urls = url.rows[0];
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  next();
}

export async function shortUrlValidate(req, res, next) {
  const shortUrl = req.params.shortUrl;
  try {
    const urlExists = await connectionDB.query(
      'SELECT * FROM urls WHERE "shortUrl"=$1',
      [shortUrl]
    );
    if (!urlExists.rows[0]) {
      return res.sendStatus(404);
    }
    res.locals.urls = urlExists.rows[0];
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  next();
}

export async function deleteUrlValidate(req, res, next) {
  const { id } = req.params;
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }
  const token = authorization?.replace("Bearer ", "");
  if (!token) {
    return res.sendStatus(401);
  }
  console.log(token);
  console.log(id);
  try {
    const urlExists = await connectionDB.query(
      'SELECT urls.id FROM urls JOIN users ON urls."userId"=users.id JOIN sessions ON sessions.id = users.id WHERE urls.id=$1 AND sessions.token =$2',
      [id, token]
    );
    console.log(urlExists.rows[0]);
    if (!urlExists.rows[0]) {
      return res.sendStatus(404);
    }
    res.locals.urls = urlExists.rows[0];
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  next();
}
