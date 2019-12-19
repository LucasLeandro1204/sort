const meta = {
  type: 'layout',
  
  docs: {
    description: 'Order imports by length and alphabetically',
  },
};

export const sort = {
  create (ctx) {
    console.dir(ctx);
  },
};

module.exports = {
  meta,
  rules: {
    sort,
  },
};