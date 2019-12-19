# Sort

> Heavily inspired by https://github.com/lydell/eslint-plugin-simple-import-sort#readme

### What it does?

Input:

```js
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
```

Output:

```js
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
```
