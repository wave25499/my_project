import Vue from 'vue'
import firebase from "firebase";
import 'firebase/auth'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

var firebaseConfig = {
  apiKey: "AIzaSyAZF3r9jybKxZCt0WEq-GnrCYGvgDROG2w",
  authDomain: "project-edec9.firebaseapp.com",
  projectId: "project-edec9",
  storageBucket: "project-edec9.appspot.com",
  messagingSenderId: "624937491519",
  appId: "1:624937491519:web:1122339497f961213d2c8a"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
