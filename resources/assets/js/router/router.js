import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/login/Login'
import Signup from '../components/login/Signup'
import Xforum from '../components/forum/Xforum'
import Logout from '../components/Logout'
import SingleQuestion from '../components/forum/SingleQuestion'

const routes = [
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/xforum', component: Xforum ,name:'xforum'},
    { path: '/logout', component: Logout},
    { path: '/question/:slug', component: SingleQuestion},
]

const router = new VueRouter({
    routes, // short for `routes: routes`

})

export default router
