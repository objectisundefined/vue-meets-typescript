import { Container } from 'inversify'
import { TYPES } from './types'
import { Warrior, Weapon, ThrowableWeapon, UserService } from './interfaces'
import { Ninja, Katana, Shuriken, UserServiceImpl } from './entities'

const container = new Container()

container.bind<Warrior>(TYPES.Warrior).to(Ninja)
container.bind<Weapon>(TYPES.Weapon).to(Katana)
container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken)
container.bind<UserService>(TYPES.UserService).to(UserServiceImpl)

import Vue from 'Vue'
import { createDecorator } from 'vue-class-component'
import { Provide } from 'vue-property-decorator'

// implements lazyInject from scratch
// according to Provide
/*
const lazyInject = (type?: symbol) => createDecorator((componentOptions: any, k) => {
  let provide = componentOptions.provide

  if (typeof provide !== 'function' || !provide.managed) {
    const original = componentOptions.provide

    provide = componentOptions.provide = function() {
      const rv = Object.create(
        (typeof original === 'function'
          ? original.call(this)
          : original) || null
      )

      for (var i in provide.managed) {
        rv[provide.managed[i]] = (this[i] = container.get(type))
      }

      return rv
    }

    provide.managed = {}
  }

  provide.managed[k] = k
})
*/

// use the power provided by Provide of vue-property-decorator
const lazyInject = (type?: symbol) => (target: Vue, key: string) => {
  Provide()(target, key)

  const fn = createDecorator((componentOptions, k) => {
    const provide: any = componentOptions.provide

    componentOptions.provide = function () {
      const rv = Object.create(provide.call(this))

      for (let i in provide.managed) {
        rv[provide.managed[i]] = this[i]
      }

      rv[provide.managed[k]] = (this[k] = container.get(type))

      return rv
    }
  })(target, key)
}

export { container, lazyInject }
