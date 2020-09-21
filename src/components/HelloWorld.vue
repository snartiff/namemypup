<template>
  <div class="hello">
  <ul id="dogNamesList">
    <li v-for="dogName in dogNames" v-bind:key="dogName.id">
      {{ dogName.id }}. {{dogName.name}}
    </li>
  </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data(){
    return {
      dogNames: null
    }
  },
  mounted(){
    console.log('mounted')
    const url = process.env.VUE_APP_DOGNAMESURL
    axios
      // .get('https://localhost:5001/api/dognames')
      .get(url + "dognames")
      .then(response => (this.dogNames = response.data))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
