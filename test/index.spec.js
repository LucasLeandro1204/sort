const sort = require('../src/sort');
const { RuleTester } = require('eslint');

const tests = {
  invalid: [
    {
      code: `
        import Second from 'second';
        import { Ghi, Jkl } from 'efgh';
        import First from 'first';
        import {
          Foo,
          Baz,
          Quox,
        } from 'another-random-module';
        import RandomModule from 'random-module';
        import { Def, Abc } from 'abcd';
      `,
      errors: 1,
    },
  ],

  valid: [
    `
      import First from 'first';
      import Second from 'second';
      import {
        Baz,
        Foo,
        Quox,
      } from 'another-random-module';
      import { Abc, Def } from 'abcd';
      import { Ghi, Jkl } from 'efgh';
      import RandomModule from 'random-module';
    `,
  ],
};

const tester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
});

tester.run('Sort', sort, tests);
