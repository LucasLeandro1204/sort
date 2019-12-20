/**
 * Pipe helper.
 */
const pipe = (...fns) => arg => fns.reduce((res, next) => next(res), arg);

module.exports = {
  pipe,
};
