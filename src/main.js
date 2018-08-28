import Vue from 'vue'
import App from './App.vue'
import PortfolioPanel from './components/PortfolioPanel.vue'

Vue.component('portfolio-panel', PortfolioPanel);

new Vue({
  el: '#app',
  render: h => h(App)
})
