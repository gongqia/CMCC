	<template>
	<main>
		<h1><router-link to="/"></router-link></li>优惠</h1>
		<p class="welcome">欢迎来到中国移动掌上营业厅<router-link to="/login">去登录 ></router-link></p>
		<ul class="benefit">
			<li v-for='(item,index) in benefits'><router-link to="/">
				<img :src="item.img"/>
				<p>{{item.des}}</p>
			</router-link></li>
		</ul>
		<section class="tips">
			<p>京ICP备05002571号   证照信息</p>
			<p>Copyright©1999-2019  中国移动  版权所有</p>
			<p>本网站支持IPv6访问</p>
		</section>
	</main>
	</template>
	<script>
		export default{
			data(){
				return{
					msg:'vedio',
					benefits:[]
				}
			},
			methods:{
				back(){
                    this.$router.go(-1)
                }
			},
			mounted(){
				document.documentElement.scrollTop=0
				window.pageYOffset=0
				document.body.scrollTop=0
				document.onscroll=null
				this.$http.get('./data/data.json')
				.then((res)=>{
					this.benefits=res.data.benefit
				})
				.catch(()=>{
					
				})
				.finally((f)=>{
					
				})
			}
		}
	</script>
	<style scoped="">
		h1{
			width: 100%;
			background: rgb(247,247,247);
			font-size: 18px;
			font-weight: 500;
			padding: 10px 0;
			position: relative;
		}
		h1 a{
			content: "";
			display: block;
			width: 23px;
			height: 23px;
			float: left;
			background-image: url(../../assets/images/back1.png);
			background-size: 23px;
			position: absolute;
			left: 3px;
		}
		.welcome{
			width: 100%;
			text-align: left;
		}
		.welcome a{
			margin-left: 5px;
		}
		.benefit{
			width: 100%;
			float: left;
			position: relative;
			padding: 10px;
		}
		.benefit li{
			width: 100%;
		 }
		.benefit img{
			width: 100%;
		}
		.benefit p{
			text-align: left;
			color: #344051;
			font-size: 15px;
    		padding-top: 2px;
    		padding-bottom: 8px;
		}
		
	</style>