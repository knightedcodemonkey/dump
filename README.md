# [`@knighted/dump`](https://www.npmjs.com/package/@knighted/dump)

![CI](https://github.com/morganney/babel-dual-package/actions/workflows/ci.yml/badge.svg)
[![NPM version](https://img.shields.io/npm/v/@knighted/dump.svg)](https://www.npmjs.com/package/@knighted/dump)

Wrapper around Node's `util.inpsect` to dump your nested objects to the console.

## Example

```js
import { dump } from '@knighted/dump'

const nested = {
  obj: {
    nested: {
      prop: 'value'
    }
  }
}

dump({ obj: nested, prefix: 'nested' })
```

Output:

```
nested { obj: { nested: { prop: 'value' } } }
```

## Options

* `obj` The object to dump
* `prefix` Helpful hint prefixed to the dump
* `options` Same as https://nodejs.org/api/util.html#utilinspectobject-options
