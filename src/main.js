import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
import VFocus from "@/directives/VFocus.js";

createApp(App)
  .use(bootstrap)
  .directive('focus', VFocus)
  .mount('#app')
