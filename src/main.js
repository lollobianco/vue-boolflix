import Vue from 'vue'
import App from './App.vue'

//BOOTSTRAP
import bootstrap from './bootstrap/dist/css/bootstrap.min.css'
import bootstrap from './bootstrap/dist/js/bootstrap.min.js'


//FONT-AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


//----------------------------------
new Vue({
  render: h => h(App),
}).$mount('#app')
