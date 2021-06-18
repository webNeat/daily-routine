class Routine {
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

export default () => new Routine()
