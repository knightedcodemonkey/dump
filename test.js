import { describe, it } from 'node:test'
import assert from 'node:assert'
import { inspect } from 'node:util'

import { dump } from './dump.js'

describe('dump', () => {
  it('wraps console.log and util.inspect', t => {
    const obj = { knighted: { code: 'monkey' } }
    const spy = t.mock.method(global.console, 'log')

    dump({ obj })
    assert.strictEqual(spy.mock.calls.length, 1)
    assert.deepStrictEqual(spy.mock.calls[0].arguments, [
      '',
      inspect(obj, false, null, true),
    ])

    dump({ obj, prefix: 'prefix', opts: { colors: false } })
    assert.strictEqual(spy.mock.calls.length, 2)
    assert.deepStrictEqual(spy.mock.calls[1].arguments, [
      'prefix',
      inspect(obj, { colors: false }),
    ])

    t.mock.reset()
  })

  it('provides a dump.log', t => {
    const spy = t.mock.method(global.console, 'log')

    dump.log({ code: 'monkey' }, 'knighted')
    assert.strictEqual(spy.mock.calls.length, 1)
    assert.deepStrictEqual(spy.mock.calls[0].arguments, [
      'knighted',
      inspect({ code: 'monkey' }, false, null, true),
    ])
  })
})
