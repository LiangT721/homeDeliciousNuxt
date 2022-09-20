import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7dd36862 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _ab146caa = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _65128adc = () => interopDefault(import('..\\pages\\setting.vue' /* webpackChunkName: "pages/setting" */))
const _9ab801be = () => interopDefault(import('..\\pages\\share.vue' /* webpackChunkName: "pages/share" */))
const _8f4ff71a = () => interopDefault(import('..\\pages\\search\\result.vue' /* webpackChunkName: "pages/search/result" */))
const _2d2c4db4 = () => interopDefault(import('..\\pages\\search\\tag.vue' /* webpackChunkName: "pages/search/tag" */))
const _25cd6b5c = () => interopDefault(import('..\\pages\\edit\\_editId.vue' /* webpackChunkName: "pages/edit/_editId" */))
const _cdbd7648 = () => interopDefault(import('..\\pages\\food\\_foodId.vue' /* webpackChunkName: "pages/food/_foodId" */))
const _2816783c = () => interopDefault(import('..\\pages\\user\\_userId.vue' /* webpackChunkName: "pages/user/_userId" */))
const _3e63b2d8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7dd36862,
    name: "about"
  }, {
    path: "/login",
    component: _ab146caa,
    name: "login"
  }, {
    path: "/setting",
    component: _65128adc,
    name: "setting"
  }, {
    path: "/share",
    component: _9ab801be,
    name: "share"
  }, {
    path: "/search/result",
    component: _8f4ff71a,
    name: "search-result"
  }, {
    path: "/search/tag",
    component: _2d2c4db4,
    name: "search-tag"
  }, {
    path: "/edit/:editId?",
    component: _25cd6b5c,
    name: "edit-editId"
  }, {
    path: "/food/:foodId?",
    component: _cdbd7648,
    name: "food-foodId"
  }, {
    path: "/user/:userId?",
    component: _2816783c,
    name: "user-userId"
  }, {
    path: "/",
    component: _3e63b2d8,
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
