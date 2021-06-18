import routine from '../src'

describe('routine', () => {
  const plan = routine()

  it('runs action', () => {
    const action = jest.fn()
    plan.do(action).run()
    expect(action).toBeCalledTimes(1)
  })
})
