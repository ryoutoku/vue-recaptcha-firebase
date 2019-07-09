import Vue from 'vue';
import App from './App.vue';

import firebase from 'firebase/app';
import 'firebase/firestore';

// ここにfirebaseの設定を追加
firebase.initializeApp({
  apiKey: '<api-key>',
  authDomain: 'domain',
  databaseURL: 'url',
  projectId: 'project-id',
  storageBucket: 'storage',
  messagingSenderId: 'Id',
  appId: 'appId',
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
