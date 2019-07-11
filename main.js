let app = new Vue({
  el: '#app',
  data: {
    status: []
  },
  methods: {

  },
  computed:{
    isUpSteel: function() {
      if (this.status.find(x => x.name === 'burnside').isUp === true && this.status.find(x => x.name === 'broadway').isUp === true) {
        return 'probably'
      } else if (this.status.find(x => x.name === 'burnside').isUp === true || this.status.find(x => x.name === 'broadway').isUp === true) {
        return 'maybe'
      } else {
        return 'probably not'
      }
    }
  },
  mounted: function() {
    axios.get('https://api.multco.us/bridges?access_token=merrittlawrenson@gmail.com:36ba562849be18ae8a52b85c84e89013')
    .then(res => {
      this.status = res.data;
    });
  }
});