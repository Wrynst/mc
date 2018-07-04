/* eslint-disable */
<template>
  <div id="new-med">
    <h3>New Med</h3>
     <div class="row">
       <form @submit.prevent="saveMed" class="col s12">
    <div class="col s12">
    <div class="row">
      
        <div class="row">
          <div class="input-field col s12">
          <i class="material-icons prefix">face</i>
            <input type="text" v-model="ct_name" id="autocomplete-input" class="autocomplete" required>
            <label for="autocomplete-input">CT Name</label>
          </div>
        </div>
     </div>
  </div>
  <!-- House - House Manager -->
  <div class="row">
    <div class="col s12">
      <div class="row">
        <div class="input-field col s6">
        <i class="material-icons prefix">home</i>
      <input type="text" v-model="house" required>
      <label>House</label>
    </div>
  <div class="row">
    <div class="input-field col s6">
    <i class="material-icons prefix">assignment_ind</i>
      <input type="text" v-model="house_mgr" required>
      <label>House manager</label>
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
            <label>Prescription #</label>
          </div>
     
        <div class="row">
          <div class="input-field col s6">
          <i class="material-icons prefix">copyright</i>
            <input type="text" v-model="med_gen_name" required>
            <label>Medication Name</label>
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
                  <label>Dosage</label>
                </div>
                <div class="row">
                  <div class="input-field col s6">
                <i class="material-icons prefix">update</i>
                  <input type="text" v-model="total_daily_pills" required>
                  <label>Total (max) pills/units in 24hrs</label>
                  <span class="helper-text">Based on the dosing directions</span>
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
            <label>Directions</label>
            </div>
          </div>
<!-- Fill date - Expiry Date -->          
        <div class="row">
          <div class="col s12">
            <div class="row">
              <div class="input-field col s6">
              <i class="material-icons prefix">event</i>
                <input type="date" v-model="fill_date" required>
                <label>Date filled</label>
              </div>
              <div class="row">
                <div class="input-field col s6">
                <i class="material-icons prefix">event_busy</i>
                  <input type="date" v-model="expiry_date" required>
                  <label>Date prescription expires</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
          <i class="material-icons prefix">local_hospital</i>
            <input type="text" v-model="doc" required>
            <label>Prescribing doctor</label>
          </div>
        </div>
<!-- Pharm and Pharm Phone --> 
        <div class="row">
          <div class="col s12">
            <div class="row">
              <div class="input-field col s6">
          <i class="material-icons prefix">local_pharmacy</i>
            <input type="text" v-model="pharm" required>
            <label>Pharmacy</label>
          </div>
        <div class="row">
          <div class="input-field col s6">
          <i class="material-icons prefix">local_phone</i>
            <input type="tel" v-model="pharm_ph">
            <label>Pharmacy phone#</label>
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
            <label>Amount per bottle</label>
            <span class="helper-text">How many were originally in the bottle?</span>
          </div>
        <div class="row">
          <div class="input-field col s6">
          <i class="material-icons prefix">restore_from_trash</i>
            <input type="number" v-model="refills" min="0" max="20" required>
            <label>Refills left</label>
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
            <label>Price</label>
          </div>
        <div class="row">
          <div class="input-field col s6">
          <i class="material-icons prefix">money</i>
            <input type="number" v-model="count_initial" min="1" max="300" required>
            <label>First count</label>
            <span class="helper-text">4.5 pills round down to whole units 4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">note_add</i>
            <input type="text" v-model="notes">
            <label>Additional Notes</label>
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
    name: 'new-med',
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
    methods: {
      saveMed () {
        db.collection('meds').add({
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
        .then(docRef => this.$router.push('/'))
        .catch(error => console.log(err))
        }
      }
  }
  $(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250'
      },
    });
  });

</script>