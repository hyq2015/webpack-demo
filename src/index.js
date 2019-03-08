import Vue from 'vue'
import Layout from "./pages/index"
import router from "./router"
new Vue({
    router,
    render: h => h(Layout)
}).$mount("#app");