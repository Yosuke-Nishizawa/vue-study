let app = new Vue({
  el: '#app',
  beforeCreate: function() {
    console.log('インスタンスが生成された(データの初期化前)');
  },
  created: function() {
    console.log('インスタンスが生成された(データの初期化後)');
  },
  beforeMount: function() {
    console.log('インスタンスがページに紐づく前');
  },
  mounted: function() {
    console.log('インスタンスがページに紐付いた後');
  },
  beforeUpdate: function() {
    console.log('データが更新された(再描画前)');
  },
  updated: function() {
    console.log('データが更新された(再描画後)');
  },
  beforeDestroy: function() {
    console.log('インスタンスが破棄される前');
  },
  destroyed: function() {
    console.log('インスタンスが破棄された後');
  }
});
setTimeout(function() {
  app.$destroy();
}, 3000);