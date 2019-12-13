// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import mata from 'vue-meta'
import vuex from 'vuex'
import store from './store'
import VueI18n from 'vue-i18n'
import lang from './i18n'

Vue.config.productionTip = false

Vue.use(mata)
Vue.use(vuex)
Vue.use(VueI18n)

const messages = lang;

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'zh-CN', // set locale
  messages, // set locale messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  store,
  i18n,
  components: {
    App
  },
  template: '<App/>',
  data: {
    title: store.state.title
  },
  metaInfo() {
    return {
      title: this.title
    }
  }
})
