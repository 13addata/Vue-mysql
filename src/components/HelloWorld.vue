<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <input type="text" name="username" v-model="userName" placeholder="Username"> <br>
      <input type="text" name="password" v-model="passWord" placeholder="Password"> <br>
      <button href="" @click.prevent="addUser">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userName: '',
      passWord: ''
    }
  },
  methods: {
    addUser() {
      var name = this.userName;
      var pwd = this.passWord;
      this.$http.post('/api/user/addUser', {
        username: name,
        passwd: pwd
      },{}).then((response) => {
        console.log(response);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input {
  margin: 4px 0;
}
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
button {
  cursor: pointer;
  outline: none;
  margin-top: 8px;
  border: none;
  border-radius: 4px;
  padding: 4px 10px;
  background: #252934;
  color: #42b983;
}
button:active, button:hover{
  outline: none;
  background: #42b983;
  color: #252934;
}
</style>
