<template>
<DataTable :value="dogNames" class="table table is-bordered is-striped" responsiveLayout="stack" breakpoint="960px">
    <Column field="dognames_id" header="ID"></Column>
    <Column field="name" header="NAME"></Column>
    <Column field="tags" header="TAGS">
    <template #body="slotProps">
      <ul>
        <li>
          {{slotProps.data.tags}}
        </li>
      </ul>
    </template>
    </Column>
    <Column header="FAVORITES"></Column>
</DataTable>
    <button class="button is-warning is-rounded" @click="viewProperties()">Retrieve a Name <i id="retrieveNameIcon" class="fas fa-paw 2x"></i></button>
  <!-- <div class="hello">
    <ul id="dogNamesList">
      <li v-for="dogName in dogNames" v-bind:key="dogName.dogname_id">
        {{ dogName.dognames_id }}. {{dogName.name}}
      </li>
    </ul>
  </div>
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
  </div>  -->
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
// import ColumnGroup from 'primevue/columngroup'

export default {
  name: 'DogNameGenerator',
  components: {
    DataTable,
    Column
  },
  data(){
    return {
      dogNames: [],
      tags: ["Brown", "White"],
      randomDogName: "",
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
    },
    viewProperties(){

    }
  },
  mounted(){
    const url = process.env.VUE_APP_DOGNAMESURL
    axios
    .get(url + "dognames")
      // .then(response => (this.dogNames = response.data))
    .then( response => {
      //use this logic for favorites call since we want to have favorites stored in a separate call
      //return tags in a dognames with tags method
      response.data.forEach(dogName => dogName.tags = this.tags);
      this.dogNames = response.data;
    })
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
