const { RuleTester } = require('eslint');
const { sort } = require('../src');

const tests = {
  valid: [
    //
  ],
  
  invalid: [
    //
  ],
};

const tester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
  },
});

tester.run('Sort', sort, tests);
