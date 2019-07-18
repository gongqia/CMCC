	<template>
		<div class="bgcolor">
			<h1><em @click='back()'></em>登录<router-link to="/"></router-link></h1>
			<section>
				<ul class="login">
					<li @click="msg='messageLogin'" :class="{active:msg=='messageLogin'}">短信随机码登录</li>
					<li @click="msg='passLogin'" :class="{active:msg=='passLogin'}">客服密码登录</li>
				</ul>
				<component :is='msg'></component>
			</section>
			<ul class="btn">
				<li><em @click='bgimg()' v-bind:class='em'></em><span>记住账户</span></li>
				<li><router-link to="">互联网用户登录</router-link></li>
			</ul>
			<p class="in"><button>立即登录</button></p>
			<ul class="des">
				<li><router-link to="">登录</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;<router-link to="">帮助</router-link></li>
				<li><router-link to="">回到顶部</router-link></li>
			</ul>
			<section class="bottom-a">
				<p><router-link to="">触屏版</router-link><router-link to="">电脑版</router-link><router-link to="">客户端</router-link></p>
				<p>中国移动  | 京ICP备05002571</p>
			</section>
		</div>
	</template>
	<script>
		import messageLogin from '../login/messageLogin.vue'
		import passLogin from '../login/passLogin.vue'
		export default{
			data(){
				return{
					msg:'messageLogin',
					em:''
				}
			},
			methods:{
				back(){
					this.$router.go(-1)
				},
				bgimg(){
					if(this.em==''){
						this.em='em'
					}else{
						this.em=''
					}
					
				}
			},
			components:{
				'messageLogin':messageLogin,
				'passLogin':passLogin
			}
		}
	</script>
	<style scoped="">
		.bgcolor{
			overflow: hidden;
			background-color: #fafafa;
		}
		h1{
			width: 100%;
			background: rgb(247,247,247);
			font-size: 16px;
			font-weight: 500;
			padding: 12px 0;
			position: relative;
			float: left;
			border-bottom: 1px solid #dfdfdf;
		}
		h1 em,h1 a{
			display: block;
			width: 24px;
			height: 24px;
			float: left;
			background-image: url(../../assets/images/back.png);
			background-size: 23px;
			position: absolute;
			left: 3px;
		}
		h1 a{
			position: absolute;
			background-image:url(../../assets/images/home_btn.png);
			top: 0px;
		    left: 88%;
		    width: 45px;
		    height: 45px;
		    background-size: 45px;
		}
		ul li{
			margin: 0px;
		}
		section{
			float: left;
			width: 100%;
			padding: 0 20px;
			background: #fff;
		}
		.login{
			width: 100%;
			border: 1px solid #0085d0;
			margin-top: 10px;
			overflow: hidden;
			border-radius: 21px;
			background: #fff;
		}
		.login li{
			float: left;
			width: 50%;
			height: 42px;
			color: #666;
			line-height: 42px;
    		border-radius: 19px;
    		font-size: 14px;
		}
		.login .active{
			background: #0085d0;
			color: #fff;
		}
		.btn{
			padding: 20px;
			text-align: left;
			font-size: 14px;
			color: #666;
			overflow: hidden;
			background: #fff;
			border-bottom: 1px solid #dfdfdf;
		}
		.btn li{
			width: 50%;
		}
		.btn em{
			display: inline-block;
			width: 20px;
			height: 20px;
			border-radius: 50%;
			border: 1px solid #dfdfdf;
			margin-right: 10px;
			float: left;
		}
		.btn .em{
			background-image: url(../../assets/images/check.png);
			background-size: contain;
   		 	border: 0;
		}
		.btn span{
			line-height: 20px;
			float: left;
		}
		.btn li:nth-of-type(2){
			float: right;
			text-align: right;
		}
		.btn a{
			color: #666;
		}
		.in{
			width: 100%;
			background: #fafafa;
			padding: 10px 20px 20px 20px;
			border-bottom: 1px solid #dfdfdf;
		}
		.in button{
			width: 100%;
			height: 45px;
			text-align: center;
			color: #fff;
			background: #0085d0;
			border-radius: 4px;
			border: 0;
			font-size: 15.75px;
		}
		.des{
			width: 100%;
			padding:15px 20px;
			text-align: left;
			background: #fafafa;
			overflow: hidden;
			border-bottom: 1px solid #dfdfdf;
		}
		.des a{
			color: #666;
			font-size: 14px;
		}
		.des li:nth-of-type(2){
			float: right;
		}
		.bottom-a{
			padding: 15px 20px;
			font-size: 14px;
			color: #999;
			background: #fafafa;
		}
		.bottom-a a{
			margin: 0 5%;
			color: #666;
		}
		.bottom-a a:nth-of-type(1){
			color: #0085d0;
		}
		.bottom-a p{
			margin-bottom: 15px;
		}
	</style>