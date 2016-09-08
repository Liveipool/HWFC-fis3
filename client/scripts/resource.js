new Vue({
  el: '#resource',
  ready: function(){
    this.$http.get('/msg').then(function(response) {
        var data = response.data;
        this.msg = data.msg;
    }, function(response) {
        // handle error
        console.log("error:");
    });
  },
  data: {
    message: 'Hello ',
    msg: ''
  }
});