<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
	data () {
	    return {
	      
	    }
	},
	methods:{
		
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*font-size:25.875px;*/
}
*{
	padding: 0px;
	margin: 0px;
	text-decoration: none;
	box-sizing: border-box;
}
body{
	max-width: 750px;
	margin: 0 auto;
	background-color: #fff;
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
  /*margin: 0 10px;*/
}
section{
	background-color: #fff;
}
a {
  color: #42b983;
}
input:focus{
	outline: 0;
}
</style>
