import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Button from "primevue/button"
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Slider from 'primevue/slider';


import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-purple/theme.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.component('Button', Button);
app.component('Dropdown', Dropdown);
app.component('InputNumber', InputNumber);
app.component('InputText', InputText);
app.component('FloatLabel', FloatLabel);
app.component('Slider', Slider);


app.mount('#app')
