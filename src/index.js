const sort = require('./sort');

const meta = {
  type: 'layout',

  docs: {
    description: 'Order imports by length and alphabetically',
  },
};

module.exports = {
  meta,
  rules: {
    sort,
  },
};