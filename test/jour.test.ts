import jour from '../src'

describe('jour', () => {
  const plan = jour()

  it('runs action', () => {
    const action = jest.fn()
    plan.do(action).run()
    expect(action).toBeCalledTimes(1)
  })
})
