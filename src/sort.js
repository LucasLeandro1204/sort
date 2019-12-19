const meta = {
  type: 'layout',

  docs: {
    description: 'Order imports by length and alphabetically',
  },
};

const create = (ctx) => {
  /**
   * ...
   */

  return {
    Program ({
      body,
    }) {
      const imports = body
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

      console.dir(imports);
    },
  };
};

module.exports = {
  meta,
  create,
};
