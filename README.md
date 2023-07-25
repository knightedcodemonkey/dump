# [`@knighted/dump`](https://www.npmjs.com/package/@knighted/dump)

![CI](https://github.com/knightedcodemonkey/dump/actions/workflows/ci.yml/badge.svg)
[![NPM version](https://img.shields.io/npm/v/@knighted/dump.svg)](https://www.npmjs.com/package/@knighted/dump)

Wrapper around Node's `util.inpsect` to dump your nested objects to the console.

## Example

```js
import { dump } from '@knighted/dump'

const nested = {
  knighted: {
    code: {
      monkey: {
        bananas: true
      }
    }
  }
}

dump({
  obj: nested,
  prefix: 'prefix',
  opts: { depth: 3, colors: true }
})
```

Output:

```
prefix {
  knighted: { code: { monkey: { bananas: true } } }
}
```

Or simply use `dump.log` if not passing `opts`.

```js
dump.log(nested, 'prefix') // Same output as above
```

## Options

* `obj` The object to dump
* `prefix` Helpful hint prefixed to the dump
* `opts` Same as https://nodejs.org/api/util.html#utilinspectobject-options

`dump.log(obj)` uses `until.inspect(obj, false, null, true)`.
