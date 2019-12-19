const sort = require('../src/sort');
const { RuleTester } = require('eslint');

const tests = {
  invalid: [
    {
      code: `
        import Bar from 'bar';
        import RandomModule from 'random-module';
        import {
          Quox,
          Foo,
          Baz,
        } from 'another-random-module';
        import { Foo, Bar } from 'quox';
        import Foo from 'foo';
        import { Bar, Foo } from 'abcd';
      `,
      errors: 1,
    },
  ],

  valid: [
    `
      import Bar from 'bar';
      import Foo from 'foo';
      import {
        Baz,
        Foo,
        Quox,
      } from 'another-random-module';
      import { Bar, Foo } from 'abcd';
      import { Bar, Foo } from 'quox';
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
