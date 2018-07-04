/* eslint-disable */
<template>
  <div id="dashboard">
    
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Meds</h4>
      </li>
      <li v-for="med in meds" v-bind:key="med.id" class="collection-item">
        <div class="chip">{{med.script_num}}</div>
        [{{med.med_gen_name}} | {{med.med_brand_name}}] - {{med.ct_name}} (<span class="badge-">{{med.count_initial}}) {{med.count_timestamp}}</span>
        <router-link v-bind:to="{name: 'view-med', params: {med_id: med.med_id}}" class="secondary-content"><i class="material-icons">pageview</i></router-link>
      </li>
    </ul>
    
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red accent-3 pulse">
        <i class="material-icons medium">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
  import db from './firebaseInit'
  export default {
    name: 'dashboard',
    data () {
      return {
        meds: []
      }
    },
  created () {
      db.collection('meds').get().then
        (querySnapshot => {
          querySnapshot.forEach(doc => {
            const data = {
          'id': doc.id,
          'med_id': doc.data().med_id,
          'ct_name': doc.data().ct_name,
          'script_num': doc.data().script_num,
          'med_gen_name': doc.data().med_gen_name,
          'med_brand_name': doc.data().med_brand_name,
          'count_initial': doc.data().count_initial,
          'count_timestamp': doc.data().count_timestamp
        }
        this.meds.push(data)
      })
    })
  }
}
</script>
