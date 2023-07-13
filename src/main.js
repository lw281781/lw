import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import ElemetPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import '@/styles/common.scss'
const app =createApp(App)
app.use(router)
app.use(ElemetPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}




app.mount('#app')
