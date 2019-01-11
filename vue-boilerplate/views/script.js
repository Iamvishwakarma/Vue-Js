
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    currentTab: 'Home',
    tabs: ['Home', 'Posts', 'Archive']
  },
  computed: {
    currentTabComponent: function() {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }


});
