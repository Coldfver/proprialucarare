import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFiltre from "@/filters/date.filtre";
import './SCSS/app.scss'
import { BootstrapVue, BootstrapVueIcons, SidebarPlugin } from "bootstrap-vue";

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(SidebarPlugin)
Vue.use(BootstrapVueIcons)
Vue.filter('date', dateFiltre)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
