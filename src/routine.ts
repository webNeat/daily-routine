type TimePredicate = (time: Date) => boolean
type TimedAction = {
  action: () => any
  predicates: TimePredicate[]
}

class Routine {
  constructor(private actions: TimedAction[] = []) {}

  do(action: () => any, ...predicates: TimePredicate[]) {
    return new Routine([...this.actions, {action, predicates}])
  }

  run(time = new Date()) {
    for (const {action, predicates} of this.actions) {
      if (predicates.every(fn => fn(time))) {
        action()
      }
    }
  }
}

export const routine = () => new Routine()
