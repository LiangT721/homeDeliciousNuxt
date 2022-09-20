import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  EditFoodInfoEdit: () => import('../..\\components\\edit\\foodInfoEdit.vue' /* webpackChunkName: "components/edit-food-info-edit" */).then(c => wrapFunctional(c.default || c)),
  EditMethodEdit: () => import('../..\\components\\edit\\methodEdit.vue' /* webpackChunkName: "components/edit-method-edit" */).then(c => wrapFunctional(c.default || c)),
  HomePageSelectionBar: () => import('../..\\components\\homePage\\selectionBar.vue' /* webpackChunkName: "components/home-page-selection-bar" */).then(c => wrapFunctional(c.default || c)),
  HomePageTrendList: () => import('../..\\components\\homePage\\trendList.vue' /* webpackChunkName: "components/home-page-trend-list" */).then(c => wrapFunctional(c.default || c)),
  LoginPageSignUp: () => import('../..\\components\\loginPage\\signUp.vue' /* webpackChunkName: "components/login-page-sign-up" */).then(c => wrapFunctional(c.default || c)),
  FoodVueCookwayIcon: () => import('../..\\components\\food.vue\\cookwayIcon.vue' /* webpackChunkName: "components/food-vue-cookway-icon" */).then(c => wrapFunctional(c.default || c)),
  FoodInfoText: () => import('../..\\components\\food.vue\\foodInfoText.vue' /* webpackChunkName: "components/food-info-text" */).then(c => wrapFunctional(c.default || c)),
  FoodIngredients: () => import('../..\\components\\food.vue\\foodIngredients.vue' /* webpackChunkName: "components/food-ingredients" */).then(c => wrapFunctional(c.default || c)),
  FoodMethods: () => import('../..\\components\\food.vue\\foodMethods.vue' /* webpackChunkName: "components/food-methods" */).then(c => wrapFunctional(c.default || c)),
  FoodPhoto: () => import('../..\\components\\food.vue\\foodPhoto.vue' /* webpackChunkName: "components/food-photo" */).then(c => wrapFunctional(c.default || c)),
  FoodVueRateGrade: () => import('../..\\components\\food.vue\\rateGrade.vue' /* webpackChunkName: "components/food-vue-rate-grade" */).then(c => wrapFunctional(c.default || c)),
  PublicBottomBar: () => import('../..\\components\\public\\bottomBar.vue' /* webpackChunkName: "components/public-bottom-bar" */).then(c => wrapFunctional(c.default || c)),
  PublicCardList: () => import('../..\\components\\public\\cardList.vue' /* webpackChunkName: "components/public-card-list" */).then(c => wrapFunctional(c.default || c)),
  PublicCollection: () => import('../..\\components\\public\\collection.vue' /* webpackChunkName: "components/public-collection" */).then(c => wrapFunctional(c.default || c)),
  PublicFoodCard: () => import('../..\\components\\public\\foodCard.vue' /* webpackChunkName: "components/public-food-card" */).then(c => wrapFunctional(c.default || c)),
  PublicGrade: () => import('../..\\components\\public\\grade.vue' /* webpackChunkName: "components/public-grade" */).then(c => wrapFunctional(c.default || c)),
  PublicIconLoading: () => import('../..\\components\\public\\iconLoading.vue' /* webpackChunkName: "components/public-icon-loading" */).then(c => wrapFunctional(c.default || c)),
  PublicImagePreview: () => import('../..\\components\\public\\imagePreview.vue' /* webpackChunkName: "components/public-image-preview" */).then(c => wrapFunctional(c.default || c)),
  PublicImageUpload: () => import('../..\\components\\public\\imageUpload.vue' /* webpackChunkName: "components/public-image-upload" */).then(c => wrapFunctional(c.default || c)),
  PublicLogo: () => import('../..\\components\\public\\logo.vue' /* webpackChunkName: "components/public-logo" */).then(c => wrapFunctional(c.default || c)),
  PublicSearchBar: () => import('../..\\components\\public\\searchBar.vue' /* webpackChunkName: "components/public-search-bar" */).then(c => wrapFunctional(c.default || c)),
  PublicSideBar: () => import('../..\\components\\public\\sideBar.vue' /* webpackChunkName: "components/public-side-bar" */).then(c => wrapFunctional(c.default || c)),
  PublicUserIcon: () => import('../..\\components\\public\\userIcon.vue' /* webpackChunkName: "components/public-user-icon" */).then(c => wrapFunctional(c.default || c)),
  SearchTag: () => import('../..\\components\\searchPage.vue\\searchTag.vue' /* webpackChunkName: "components/search-tag" */).then(c => wrapFunctional(c.default || c)),
  SettingPageAccountModify: () => import('../..\\components\\settingPage\\accountModify.vue' /* webpackChunkName: "components/setting-page-account-modify" */).then(c => wrapFunctional(c.default || c)),
  SettingPageDeleteAccount: () => import('../..\\components\\settingPage\\deleteAccount.vue' /* webpackChunkName: "components/setting-page-delete-account" */).then(c => wrapFunctional(c.default || c)),
  SettingPageImageEditPreview: () => import('../..\\components\\settingPage\\imageEditPreview.vue' /* webpackChunkName: "components/setting-page-image-edit-preview" */).then(c => wrapFunctional(c.default || c)),
  SettingPageLanuageSetting: () => import('../..\\components\\settingPage\\lanuageSetting.vue' /* webpackChunkName: "components/setting-page-lanuage-setting" */).then(c => wrapFunctional(c.default || c)),
  SettingPagePasswordComfirm: () => import('../..\\components\\settingPage\\passwordComfirm.vue' /* webpackChunkName: "components/setting-page-password-comfirm" */).then(c => wrapFunctional(c.default || c)),
  SettingPagePasswordModify: () => import('../..\\components\\settingPage\\passwordModify.vue' /* webpackChunkName: "components/setting-page-password-modify" */).then(c => wrapFunctional(c.default || c)),
  SharePageFoodInfoUpload: () => import('../..\\components\\sharePage\\foodInfoUpload.vue' /* webpackChunkName: "components/share-page-food-info-upload" */).then(c => wrapFunctional(c.default || c)),
  SharePageFoodIngredientsEdit: () => import('../..\\components\\sharePage\\foodIngredientsEdit.vue' /* webpackChunkName: "components/share-page-food-ingredients-edit" */).then(c => wrapFunctional(c.default || c)),
  SharePageFoodMethodEdit: () => import('../..\\components\\sharePage\\foodMethodEdit.vue' /* webpackChunkName: "components/share-page-food-method-edit" */).then(c => wrapFunctional(c.default || c)),
  SharePageMethodUpload: () => import('../..\\components\\sharePage\\methodUpload.vue' /* webpackChunkName: "components/share-page-method-upload" */).then(c => wrapFunctional(c.default || c)),
  UserCollectionCards: () => import('../..\\components\\userPage\\userCollectionCards.vue' /* webpackChunkName: "components/user-collection-cards" */).then(c => wrapFunctional(c.default || c)),
  UserFoodCards: () => import('../..\\components\\userPage\\userFoodCards.vue' /* webpackChunkName: "components/user-food-cards" */).then(c => wrapFunctional(c.default || c)),
  UserPageToggle: () => import('../..\\components\\userPage\\userPageToggle.vue' /* webpackChunkName: "components/user-page-toggle" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
