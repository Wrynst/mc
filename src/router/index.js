/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewMed from '@/components/NewMed'
import ViewMed from '@/components/ViewMed'
import EditMed from '@/components/EditMed'
import DrugSearch from '@/components/DrugSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashoard',
      component: Dashboard
    },    {
      path: '/new',
      name: 'new-med',
      component: NewMed
    },    {
      path: '/edit/:med_id',
      name: 'edit-med',
      component: EditMed
    },    {
      path: '/:med_id',
      name: 'view-med',
      component: ViewMed
    },    {
      path: '/drug-search',
      name: 'drug-search',
      component: DrugSearch
    }
    
    
  ]
})
