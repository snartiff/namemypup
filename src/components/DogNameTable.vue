<template>
<DataTable :value="dogNames" class="table table is-bordered is-striped" responsiveLayout="stack" breakpoint="960px">
    <Column field="dognames_id" header="ID"></Column>
    <Column field="name" header="NAME"></Column>
    <Column field="tags" header="TAGS">
      <template #body="slotProps">
      <ul>
        <li class="tag is-black is-rounded"  v-for="(tag, index) in slotProps.data.tags" v-bind:key="index">
          {{ tag }}
        </li>      
        </ul>
      </template>
    </Column>
    <Column field="isFavorite" header="FAVORITES">
      <template #body="slotProps">
        <i @click="updateFavorite(slotProps.data)" :class="[slotProps.data.isFavorite ? 'fas fa-heart fa-lg is-pink' : 'far fa-heart fa-lg is-pink']"></i>
      </template>  
    </Column>  
</DataTable>
<ul>
  {{favorites}}
</ul>
    <!-- <button class="button is-warning is-rounded" @click="viewProperties()">Retrieve a Name <i id="retrieveNameIcon" class="fas fa-paw 2x"></i></button>
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
const url = process.env.VUE_APP_DOGNAMESURL

export default {
  name: 'DogNameTable',
  components: {
    DataTable,
    Column
  },
  data(){
    return {
      dogNames: [],
      favorites: [],
      randomDogName: "",
      heartIcon: {
        isActive: false,
        activeClass: 'far fa-heart'
      },
      userId: 1
    }
  },
  methods:{
    toggleHeartIcon(){
      this.heartIcon.isActive = !this.heartIcon.isActive
      this.heartIcon.activeClass = this.heartIcon.isActive ? 'fas fa-heart is-pink' : 'far fa-heart'
    },
    saveDogNameToFavorites(){
      this.toggleHeartIcon()
    },
    updateFavorite(dog){
      dog.isFavorite = !dog.isFavorite
    },
    selectRandomDogName(dogNames){
      this.heartIcon.isActive = false
      this.heartIcon.activeClass = 'far fa-heart'
      this.randomDogName = _.sample(dogNames)
    },
    getDogNamesWithTags(){
      axios
      .get(url + "dognametags?users_id=" + this.userId)
      .then(response => (this.dogNames = response.data))
    }
  },
  mounted(){
    this.getDogNamesWithTags();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fa-heart{
 color: pink;
}

.is-pink {
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
a {
  color: #42b983;
}
</style>
