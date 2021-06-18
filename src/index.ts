class Jour {
  private actions: Function[] = []

  do(action: Function) {
    this.actions.push(action)
    return this
  }

  run() {
    for (const action of this.actions) {
      action()
    }
  }
}

export default function jour() {
  return new Jour()
}
