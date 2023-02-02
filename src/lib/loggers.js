import util from 'util';

const createLogger =
 (type) =>
 (...args) => {
  console[type](
   ...args.map((item) => {
    if (typeof item === 'object') {
     return util.inspect(item, { depth: 5, colors: true });
    }
    return item;
   })
  );
 };

export const info = createLogger('log');
export const warn = createLogger('warning');
export const error = createLogger('error');
