import { inspect } from 'node:util'

const defaultOpts = {
  showHidden: false,
  depth: 2,
  colors: false,
  customInspect: true,
  showProxy: false,
  maxArrayLength: 100,
  maxStringLength: 10_000,
  breakLength: 80,
  compact: 3,
  sorted: true,
  getters: false,
  numericSeparator: false,
}
const dump = ({ obj = {}, opts = {}, prefix = '' }) => {
  if (Object.keys(opts).length) {
    console.log(prefix, inspect(obj, { ...defaultOpts, ...opts }))
  } else {
    console.log(prefix, inspect(obj, false, null, true))
  }
}

dump.log = (obj, prefix = '') => {
  dump({ obj, prefix })
}

export { dump }
