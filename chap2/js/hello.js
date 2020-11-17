let app = new Vue({
  el: '#app',
  data: {
    message: '皆さん、こんにちは！',
    url: 'https://wings.msn.to/',
    flag: true,
    email: 'Y-Suzuki@example.com',
    current: new Date().toLocaleString()
  },
  computed: {
    localEmail: function() {
      return this.email.split('@')[0].toLowerCase();
    },
    randomc: function() {
      return Math.random();
    }
  },
  methods: {
    localEmailMethod: function() {
      return this.email.split('@')[0].toLowerCase();
    },
    onclick: function() {
      this.current = new Date().toLocaleString();
    },
    randomm: function() {
      return Math.random();
    }
  }
})