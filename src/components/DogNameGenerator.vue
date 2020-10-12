<template>
  <!-- <div class="hello">
    <ul id="dogNamesList">
      <li v-for="dogName in dogNames" v-bind:key="dogName.id">
        {{ dogName.id }}. {{dogName.name}}
      </li>
    </ul>
  </div> -->
  <div id="randomDogNameWidget">
    <button class="button is-warning is-rounded" @click="selectRandomDogName(dogNames)">Retrieve a Name <i id="retrieveNameIcon" class="fas fa-paw 2x"></i></button>
    <template v-if="randomDogName != null">
      <div>
        <div id="randomDogName">
          <h1 id="dogName" class="title is-1">
            <i @click="saveDogNameToFavorites()" id="favoriteHeartIcon" v-bind:class="heartIcon.activeClass"></i>
            {{randomDogName.name}}
          </h1>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'

export default {
  name: 'DogNameGenerator',
  data(){
    return {
      dogNames: null,
      randomDogName: null,
      heartIcon: {
        isActive: false,
        activeClass: 'far fa-heart'
      }
    }
  },
  methods:{
    toggleHeartIcon(){
      this.heartIcon.isActive = !this.heartIcon.isActive
      this.heartIcon.activeClass = this.heartIcon.isActive ? 'fas fa-heart' : 'far fa-heart'
    },
    saveDogNameToFavorites(){
      this.toggleHeartIcon()
    },
    selectRandomDogName(dogNames){
      this.heartIcon.isActive = false
      this.heartIcon.activeClass = 'far fa-heart'
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
.fa-heart{
 color: pink;
}
#favoriteHeartIcon{
  margin-right: 5px;
}
#dogName {
font-family: 'Patrick Hand SC', cursive;
}
/* #randomDogName{
  display: inline-block;
} */
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
