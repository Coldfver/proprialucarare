import Vue from 'vue'
import axios from "axios";
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFiltre from "@/filters/date.filtre";
import './SCSS/app.scss'
import VueAxios from 'vue-axios'
import { BootstrapVue, BootstrapVueIcons, SidebarPlugin } from "bootstrap-vue";
import VueSlickCarousel from 'vue-slick-carousel'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.use(VueSlickCarousel)
Vue.use(SidebarPlugin)
Vue.use(BootstrapVueIcons)
Vue.filter('date', dateFiltre)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
