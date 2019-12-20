const { pipe } = require('./helpers');

/**
 * Rule meta info.
 */
const meta = {
  type: 'layout',

  docs: {
    description: 'Order imports by length and alphabetically',
  },
};

/**
 * Group imports declaration.
 */
const groupImports = ({
  body,
}) => {
  const grouped = body
    .reduce((grouped, node) => {
      const index = grouped.length - 1;

      if (node.type === 'ImportDeclaration') {
        grouped[index].push(node);
      } else if (grouped[index].length > 0) {
        grouped.push([
          //
        ]);
      }

      return grouped;
    }, [
      [],
    ]);

  if (grouped[grouped.length - 1].length === 0) {
    grouped.pop();
  }

  return grouped;
};

/**
 * Eslint create handler.
 */
const create = (ctx) => ({
  Program: pipe(
    groupImports,
    formatImports(ctx),
    reportInvalid,
  ),
});

module.exports = {
  meta,
  create,
};
