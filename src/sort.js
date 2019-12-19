const meta = {
  type: 'layout',

  docs: {
    description: 'Order imports by length and alphabetically',
  },
};

/**
 * Group imports declaration.
 */
const groupImports = body => body
  .reduce((grouped, node) => {
    if (node.type === 'ImportDeclaration') {
      grouped[0].push(node);
    } else if (grouped[0].length > 0) {
      grouped.unshift([
        //
      ]);
    }

    return grouped;
  }, [
    [
      //
    ],
  ]);

/**
 * Eslint create handler.
 */
const create = (ctx) => {

  return {
    Program ({
      body,
    }) {
      const imports = groupImports(body);

      console.dir(imports);
    },
  };
};

module.exports = {
  meta,
  create,
};
