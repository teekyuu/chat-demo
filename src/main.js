import {createApp} from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";

axios.defaults.baseURL = "http://192.168.50.149:8080/";


createApp(App).mount('#app')
