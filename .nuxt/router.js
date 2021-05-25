import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7cc93c99 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _6628ba75 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _6830a0dc = () => interopDefault(import('..\\pages\\setting.vue' /* webpackChunkName: "pages/setting" */))
const _6e56efeb = () => interopDefault(import('..\\pages\\share.vue' /* webpackChunkName: "pages/share" */))
const _be33522e = () => interopDefault(import('..\\pages\\search\\result.vue' /* webpackChunkName: "pages/search/result" */))
const _7095fefe = () => interopDefault(import('..\\pages\\search\\tag.vue' /* webpackChunkName: "pages/search/tag" */))
const _358ff226 = () => interopDefault(import('..\\pages\\edit\\_editId.vue' /* webpackChunkName: "pages/edit/_editId" */))
const _ae3868b4 = () => interopDefault(import('..\\pages\\food\\_foodId.vue' /* webpackChunkName: "pages/food/_foodId" */))
const _37d8ff06 = () => interopDefault(import('..\\pages\\user\\_userId.vue' /* webpackChunkName: "pages/user/_userId" */))
const _c6fdd144 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _7cc93c99,
    name: "about"
  }, {
    path: "/login",
    component: _6628ba75,
    name: "login"
  }, {
    path: "/setting",
    component: _6830a0dc,
    name: "setting"
  }, {
    path: "/share",
    component: _6e56efeb,
    name: "share"
  }, {
    path: "/search/result",
    component: _be33522e,
    name: "search-result"
  }, {
    path: "/search/tag",
    component: _7095fefe,
    name: "search-tag"
  }, {
    path: "/edit/:editId?",
    component: _358ff226,
    name: "edit-editId"
  }, {
    path: "/food/:foodId?",
    component: _ae3868b4,
    name: "food-foodId"
  }, {
    path: "/user/:userId?",
    component: _37d8ff06,
    name: "user-userId"
  }, {
    path: "/",
    component: _c6fdd144,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
