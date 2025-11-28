import { createApp } from "vue"; //引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
import App from "./App.vue";

createApp(App).mount("#app"); //调用工厂函数，传入App组件，并挂载到id为app的元素上

/* const app = createApp(App); //创建Vue应用实例对象-app（类似2中的vm，但比2中的vm更轻量）
app.mount("#app"); //挂载到id为app的元素上 */
