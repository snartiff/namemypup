<template>
  <div class="hello">
    <ul id="dogNamesList">
      <li v-for="dogName in dogNames" v-bind:key="dogName.id">
        {{ dogName.id }}. {{dogName.name}}
      </li>
    </ul>
  </div>
  <div id="randomDogNameWidget">
    <button class="button is-warning is-rounded" @click="selectRandomDogName(dogNames)">Retrieve a Name <i id="retrieveNameIcon" class="fas fa-paw"></i></button>
    <h1>Your dog's name:</h1>
    <h1>{{randomDogName == null ? "" : randomDogName.name}}</h1>
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'

export default {
  name: 'HelloWorld',
  data(){
    return {
      dogNames: null,
      randomDogName: null,
    }
  },
  methods:{
    selectRandomDogName(dogNames){
      this.randomDogName = _.sample(dogNames)
    }
  },
  mounted(){
    const url = process.env.VUE_APP_DOGNAMESURL
    axios
      .get(url + "dognames")
      .then(response => (this.dogNames = response.data))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#retrieveNameIcon{
  margin-left: 5px;
}
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
