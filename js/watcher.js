let app = new Vue({
  el: '#app',
  data: {
    name: '', // 入力値
    upperName: '', // 表示する値(大文字変換後の文字列)
    upperName2: '',
  },
  created: function () {
    this.delayFunc = _.debounce(this.getUpper, 2000);
    // watchプロパティは$watchメソッドでも定義できる
    // 戻り値は監視を解除する関数
    const delayFunc2 = _.debounce(this.getUpper2, 2000);
    let unwatch = this.$watch('name', function (newValue, oldValue) {
      delayFunc2();
    });
  },
  watch: {
    name: function (newValue, oldValue) {
      this.delayFunc();
    }
  },
  methods: {
    getUpper: function () {
      this.upperName = this.name.toUpperCase();
    },
    getUpper2: function () {
      this.upperName2 = this.name.toUpperCase();
    }
  },
  computed: {
    upperNameImmediate: function () {
      return this.name.toUpperCase();
    }
  }
});