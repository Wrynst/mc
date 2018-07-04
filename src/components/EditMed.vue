/* eslint-disable */
<template>
  <div id="edit-med">
    <h3>Edit Med</h3>
    <div class="row">
      <form @submit.prevent="updateMed" class="col s12">
          <div class="row">
    <div class="col s12">
      <div class="row">
        <div class="switch col s3">
          <label>No
      <input type="checkbox" v-model="hold">
      <span class="lever"></span>
      Hold
      </label>
    </div>
  <div class="row">
     <div class="switch col s3">
       <label>No
      <input type="checkbox" v-model="dc">
      <span class="lever"></span>
      DC
      </label>
          </div>
        </div>
      </div>
    </div>
  </div>
        <div class="row">
          <div class="input-field col s12">
          <i class="material-icons prefix">face</i>
            <input type="text" v-model="ct_name" class="validate" required>
          </div>
        </div>
  <!-- House - House Manager -->
  <div class="row">
    <div class="col s12">
      <div class="row">
        <div class="input-field col s6">
        <i class="material-icons prefix">home</i>
      <input type="text" v-model="house" required>
    </div>
  <div class="row">
    <div class="input-field col s6">
    <i class="material-icons prefix">assignment_ind</i>
      <input type="text" v-model="house_mgr" required>
          </div>
        </div>
      </div>
    </div>
  </div>
<!-- Perscription # - Generic Med Name -->
       <div class="row">
          <div class="col s12">
            <div class="row">
          <div class="input-field col s6">
          <i class="material-icons prefix">chrome_reader_mode</i>
            <input type="text" v-model="script_num" required>
          </div>
        <div class="row">
          <div class="input-field col s6">
          <i class="material-icons prefix">copyright</i>
            <input type="text" v-model="med_gen_name" required>
                </div>
              </div>
            </div>
          </div>
        </div>
<!-- Dosage - Total Max units in 24 hrs -->
          <div class="row">
            <div class="col s12">
              <div class="row">
                <div class="input-field col s6">
                <i class="material-icons prefix">colorize</i>
                  <input type="text" v-model="dosage" required>
                </div>
                <div class="row">
                  <div class="input-field col s6">
                <i class="material-icons prefix">update</i>
                  <input type="text" v-model="total_daily_pills" required>
                </div>
              </div>
            </div>
          </div>
        </div>
<!-- Directions -->        
                <div class="row">
          <div class="input-field col s12">
          <i class="material-icons prefix">format_list_numbered</i>
            <input type="text" v-model="directions" required>
            </div>
          </div>
<!-- Fill date - Expiry Date -->          
        <div class="row">
          <div class="col s12">
            <div class="row">
              <div class="input-field col s6">
              <i class="material-icons prefix">event</i>
                <input type="date" v-model="fill_date" required>
              </div>
              <div class="row">
                <div class="input-field col s6">
                <i class="material-icons prefix">event_busy</i>
                  <input type="date" v-model="expiry_date" required>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
          <i class="material-icons prefix">local_hospital</i>
            <input type="text" v-model="doc" required>
          </div>
        </div>
<!-- Pharm and Pharm Phone --> 
        <div class="row">
          <div class="col s12">
            <div class="row">
              <div class="input-field col s6">
          <i class="material-icons prefix">local_pharmacy</i>
            <input type="text" v-model="pharm" required>
          </div>
        <div class="row">
          <div class="input-field col s6">
          <i class="material-icons prefix">local_phone</i>
            <input type="tel" v-model="pharm_ph">
                </div>
              </div>
            </div>
          </div>
        </div>
<!-- amt on bottle and count initial -->         
        <div class="row">
          <div class="col s12">
            <div class="row">
              <div class="input-field col s6">
          <i class="material-icons prefix">vertical_split</i>
            <input type="number" v-model="amt_on_bottle" min="1" max="300" required>
          </div>
        <div class="row">
          <div class="input-field col s6">
          <i class="material-icons prefix">restore_from_trash</i>
            <input type="number" v-model="refills" min="0" max="20" required>
                </div>
              </div>
            </div>
          </div>
        </div>
<!-- add Notes  -->        
        <div class="row">
          <div class="col s12">
            <div class="row">
              <div class="input-field col s6">
        <i class="material-icons prefix">monetization_on</i>
            <input type="text" v-model="price">
          </div>
        <div class="row">
          <div class="input-field col s6">
          <i class="material-icons prefix">money</i>
            <input type="number" v-model="count_initial" min="1" max="300" required>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">note_add</i>
            <input type="text" v-model="notes">
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>


<script>
  import db from './firebaseInit'
  export default {
    name: 'edit-med',
    data () {
      return {
        med_id: null,
        ct_name: null,
        script_num: null,
        med_gen_name: null,
        med_brand_name: null,
        count_initial: null,
        count_timestamp: null,
        amt_on_bottle: null,
        dosage: null,
        fill_date: null,
        expiry_date: null,
        directions: null,
        house: null,
        house_mgr: null,
        dc: null,
        hold: null,
        pharm: null,
        pharm_ph: null,
        doc: null,
        price: null,
        notes: null,
        refills: null,
        total_daily_pills: null
        
      }
    },

    
    beforeRouteEnter (to, from, next) {
      db.collection('meds')
        .where('med_id', '==',to.params.med_id).get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              next(vm => {
                vm.med_id = doc.data().med_id
                vm.ct_name = doc.data().ct_name
                vm.script_num = doc.data().script_num
                vm.med_gen_name = doc.data().med_gen_name
                vm.med_brand_name = doc.data().med_brand_name
                vm.count_initial = doc.data().count_initial
                vm.count_timestamp = doc.data().count_timestamp
                vm.amt_on_bottle = doc.data().amt_on_bottle
                vm.dosage = doc.data().dosage
                vm.fill_date = doc.data().fill_date
                vm.expiry_date = doc.data().expiry_date
                vm.directions = doc.data().directions
                vm.house = doc.data().house
                vm.house_mgr = doc.data().house_mgr
                vm.dc = doc.data().dc
                vm.hold = doc.data().hold
                vm.pharm = doc.data().pharm
                vm.pharm_ph = doc.data().pharm_ph
                vm.doc = doc.data().doc
                vm.price = doc.data().price
                vm.notes = doc.data().notes
                vm.refills = doc.data().refills
                vm.total_daily_pills = doc.data().total_daily_pills
              })
            })  
          })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        db.collection('meds').where('med_id', '==', this.$route.params.med_id).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.med_id = doc.data().med_id
            this.ct_name = doc.data().ct_name
            this.script_num = doc.data().script_num
            this.med_gen_name = doc.data().med_gen_name
            this.med_brand_name = doc.data().med_brand_name
            this.count_initial = doc.data().count_initial
            this.count_timestamp = doc.data().count_timestamp
            this.amt_on_bottle = doc.data().amt_on_bottle
            this.dosage = doc.data().dosage
            this.fill_date = doc.data().fill_date
            this.expiry_date = doc.data().expiry_date
            this.directions = doc.data().directions
            this.house = doc.data().house
            this.house_mgr = doc.data().house_mgr
            this.dc = doc.data().dc
            this.hold = doc.data().hold
            this.pharm = doc.data().pharm
            this.pharm_ph = doc.data().pharm_ph
            this.doc = doc.data().doc
            this.price = doc.data().price
            this.notes = doc.data().notes
            this.refills = doc.data().refills
            this.total_daily_pills = doc.data().total_daily_pills
          }) 
        })
      },
      updateMed () {
        db.collection('meds').where('med_id', '==', this.$route.params.med_id).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.update({
              med_id: this.med_id,
              ct_name: this.ct_name,
              script_num: this.script_num,
              med_gen_name: this.med_gen_name,
              med_brand_name: this.med_brand_name,
              count_initial: this.count_initial,
              count_timestamp: this.count_timestamp,
              amt_on_bottle: this.amt_on_bottle,
              dosage: this.dosage,
              fill_date: this.fill_date,
              expiry_date: this.expiry_date,
              directions: this.directions,
              house: this.house,
              house_mgr: this.house_mgr,
              dc: this.dc,
              hold: this.hold,
              pharm: this.pharm,
              pharm_ph: this.pharm_ph,
              doc: this.doc,
              price: this.price,
              notes: this.notes,
              refills: this.refills,
              total_daily_pills: this.total_daily_pills
            })
            .then(() => {
              this.$router.push({name: 'view-med', params: {med_id: this.med_id}})
              })
            })
          }) 
        }
      }
    }
  
</script>