import VueRouter from 'vue-router'

import first from '../components/index/first.vue'
import index from '../components/index/index.vue'
import shop from '../components/index/shop.vue'
import benifit from '../components/index/benifit.vue'
import my from '../components/index/my.vue'
import download from '../components/other/download.vue'
import loc from '../components/other/location.vue'
import chooseCity from '../components/other/chooseCity.vue'
import search from '../components/other/search.vue'
import login from '../components/other/login.vue'
import flower from '../components/index/flower-card.vue'
import rechargecredit from '../components/other/rechargecredit.vue'
import rechargecard from '../components/other/rechargecard.vue'
import car from '../components/other/car.vue'

export default new VueRouter({
	routes:[
		{
			path:'/',component:first,
			redirect:'/index',
			children:[
				{
					path:'/index',name:'Index',component:index
				},
				{
					path:'/shop',name:'Shop',component:shop
				},
				{
					path:'/benifit',component:benifit
				},
				{
					path:'/my',component:my
				}
			]
		},
		{
			path:'/download',component:download
		},
		{
			path:'/loc',component:loc
		},
		{
			path:'/chooseCity',component:chooseCity
		},
		{
			path:'/search',component:search
		},
		{
			path:'/login',component:login
		},
		{
			path:'/flower',component:flower
		},
		{
			path:'/rechargecredit',component:rechargecredit
		},
		{
			path:'/rechargecard',component:rechargecard
		},
		{
			path:'/car',component:car
		}
		
	]
})