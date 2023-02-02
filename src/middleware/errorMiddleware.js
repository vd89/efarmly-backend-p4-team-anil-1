import debug from 'debug';
const appLog = debug('app:middleware -> ');

export const notFound = (req, res, next) => {
 const error = new Error(` 🔍 Not Found -${req.originalUrl}`);
 res.status(404).json({ data: { message: 'Error', err: error.message } });
 next();
};

export const errHandler = (err, req, res, next) => {
 const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
 res.status(statusCode);
 res.json({
  data: {
   msg: err.message,
   stack: process.env.NODE_ENV === 'production' ? ' 🌵 🌵 ' : err.stack,
   response: err.response ? err.response.data : null,
  },
 });
};

export const headerFunction = (req, res, next) => {
 // res.header('Access-Control-Allow-Origin', '*');
 // res.header('Access-Control-Allow-Credentials', 'true');
 res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
 res.header(
  'Access-Control-Allow-Headers',
  ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'Accept-Language', 'x-efarmly-token'].join(
   ', '
  )
 );
 if (req.method === 'OPTIONS') {
  return res.status(200).end();
 }
 next();
};

export const unauthorizedErrors = (err, req, res, next) => {
 if (err.name === 'UnauthorizedError') {
  res.status(401).json({ error: err.name + ': ' + err.message });
 } else if (err) {
  res.status(400).json({ error: err.name + ': ' + err.message });
  appLog(err);
 }
 next();
};
