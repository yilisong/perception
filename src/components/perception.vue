<template>
  <div>
    perception
    <input type="text" :value='id' name="">
  </div>
</template>

<script>
export default{
  data () {
    return {
      id: ''
    }
  },
  sockets: {
    connect () {
      // 这里是监听connect事件
    },
    customEmit (val) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  methods: {
    clickButton (val) {
      // $socket is socket.io-client instance
      this.$socket.emit('emit_method', val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
