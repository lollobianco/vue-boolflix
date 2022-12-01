import Vue from 'vue'
import App from './App.vue'

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


//FONT-AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'

import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

import { faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';

library.add(faUserSecret, faStarSolid, faStarRegular, faStarHalfStroke)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


//----------------------------------
new Vue({
  render: h => h(App),
}).$mount('#app')
