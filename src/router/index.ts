import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import HelloTS from '@/components/HelloTS.vue'
import Counter from '@/components/Counter.vue'
import Users from '@/components/Users.vue'
import Search from '@/components/Search.vue'
import Aop from '@/components/Aop.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hello-ts',
      name: 'HelloTS',
      component: HelloTS
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/aop',
      name: 'Aop',
      component: Aop
    }
  ]
})
