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
    
};

firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')

