let app = new Vue({
  el: '#app',
  data: {
    author: {
      name: '山田',
    }
  },
  mounted: function () {
    Vue.set(this.author, 'company', 'WINGSプロジェクト');
    // 即時反映されないためfalseになる
    console.log(this.$el.textContent.includes(this.author.company));
    // 反映を待って確認
    let that = this;
    this.$nextTick().then(function () {
      console.log(that.$el.textContent.includes(that.author.company));
    })
  }
});