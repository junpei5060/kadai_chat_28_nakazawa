import Vue from 'vue';
import App from './App.vue';
import router from './router/rourer.js';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'
import 'firebase/auth'


Vue.config.productionTip = false

Vue.use(BootstrapVue)

const firebaseConfig = {
    apiKey: "AIzaSyA365DFhVAAH_WLASehC8uBYi6R25xkfB0",
    authDomain: "chat-app-1715d.firebaseapp.com",
    databaseURL: "https://chat-app-1715d.firebaseio.com",
    projectId: "chat-app-1715d",
    storageBucket: "chat-app-1715d.appspot.com",
    messagingSenderId: "239344260010",
    appId: "1:239344260010:web:bfdae543d4531602dbd1d3"
};

firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')

