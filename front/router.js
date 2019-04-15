import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import Status from './views/status.vue'
import Movie from './views/movie.vue'

Vue.use(Router)

export default new Router({
    model: history,
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/status',
            name: 'status',
            component: Status,
        },
        {
            path: '/movie/:id',
            name: 'movie',
            component: Movie
        }
    ]
})