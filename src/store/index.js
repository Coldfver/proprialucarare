import Vue from 'vue';
import Vuex from 'vuex';
import postsModule from './Modules/postsModule';

Vue.use(Vuex);

export default function () {
  const Store = new Vuex.Store({
    modules: {
      postsModule,
    },
    // strict: process.env.DEBUGGING,
    strict: false,
  });

  return Store;
}
