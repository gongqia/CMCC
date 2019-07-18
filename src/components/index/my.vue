	<template>
	<main>
		<section class="header">
			<h1>我的
				<span class="back"><router-link to='/shop'></router-link></span>
				<span class="ms"><router-link to='/'></router-link></span>
				<em @click='morebtn()'></em><i class="triangle" v-show='btn'></i>
				<transition enter-active-class='enter' leave-active-class='leave'>
					<ul class="morebtn" v-show='btn'>
						<li><i></i><router-link to='/index'>首页</router-link></li>
						<li><i></i><router-link to='/my'>个人中心</router-link></li>
						<li><i></i><router-link to='/benifit'>优惠专区</router-link></li>
					</ul>
				</transition>
			</h1>
			<div class="wave"></div>
			<nav>
				<span class="logo">
					<router-link to='/'><img src="../../assets/images/icon-user.jpg"/></router-link>
				</span>
				<p class="lg">
					<router-link to='/login'>登录</router-link>
					<span>登录后可查看更多信息哦~</span>
				</p>
			</nav>
			<ul class="message">
				<li>
					<p><span>-- </span><span class="des">元</span></p>
					<p>我的余额</p>
				</li>
				<li>
					<p><span>-- </span><span class="des"></span></p>
					<p>通用流量剩余</p>
				</li>
				<li>
					<p><span>-- </span><span class="des">分钟</span></p>
					<p>语言剩余</p>
				</li>
				<li>
					<p><span>-- </span><span class="des"></span></p>
					<p>可用积分</p>
				</li>
			</ul>
		</section>
		<article>
			<p class="push">
				<router-link to='/rechargecredit'>充话费</router-link>
				<router-link to='/login'>冲流量</router-link>
			</p>
			<div class="service">
				<p>我的服务<router-link to=''>查看更多> </router-link></p>
				<ul>
					<li><router-link to=''>
						<em></em>
						<span>套餐余量</span>
					</router-link></li>
					<li><router-link to=''>
						<em></em>
						<span>账单查询</span>
					</router-link></li>
					<li><router-link to=''>
						<em></em>
						<span>已订业务</span>
					</router-link></li>
					<li><router-link to=''>
						<em></em>
						<span>充值订单</span>
					</router-link></li>
					
				</ul>
			</div>
		</article>
		<section class="track carousel02">
			<mt-swipe :auto="4000">
			  <mt-swipe-item><img src="../../assets/images/my1.png"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/my2.png"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/my3.png"/></mt-swipe-item>
			</mt-swipe>
		</section>
		<section class="foot">
			<p class="bottom">
				<router-link to='/login'>登录</router-link><span>|</span><router-link to=''>帮助</router-link><router-link to=''>回顶部</router-link>
			</p>
			<p class="client">
				<router-link to=''>触屏版</router-link><router-link to=''>电脑版</router-link><router-link to=''>客户端</router-link>
				<span>Copyright©1999-2019 中国移动 版权所有</span>
			</p>
		</section>
	</main>
	</template>
	<script>
		export default{
			data(){
				return{
					btn:false,
					msg:'my'
				}
			},
			methods:{
				morebtn(){
					this.btn=!this.btn
				}
			},
			mounted(){
				document.onscroll=null
			}
		}
	</script>
	<style scoped="">
		html{
			background: #f2f2f2;
		}
		.header{
			padding-bottom:6px;
			width: 100%;
			overflow: hidden;
			position: relative;
		    background: linear-gradient(to right,#416fdf,#4ca1fd);
		}
		.header h1{
			width: 100%;
			height: 40px;
			font-size: 17px;
			line-height: 40px;
			padding: 0 6px;
			color: #fff;
			float: left;
			position: relative;
		}
		.header a{
			display: block;
		}
		.back a,.ms a{
			position: absolute;
			width: 30px;
			height: 30px;
			top: 6px;
			left: 6px;
			background-image: url(../../assets/images/tubiao.svg);
			background-position: -66px 0;
		}
		.ms a{
			/*position: absolute;*/
			top: 8px;
			left: 100%;
			background-image: url(../../assets/images/tubiao.svg);
			background-position: 0 -121px;
			transform: translateX(-74px);
		}
		.header em{
			display: block;
			width: 30px;
			height: 30px;
			position: absolute;
			top: 7px;
			right: 6px;
			background-image: url(../../assets/images/tubiao.svg);
			background-position: 0 -60px;
		}
		.morebtn{
			position: absolute;
			right: 8px;
			background: #fff;
			z-index: 1;
			top: 89%;
			overflow: hidden;
			border-radius: 3px;
		}
		.triangle{
			position: absolute;
			top: 75%;
			right: 16px;
			border-width: 0 7px 7px 7px;
			border-style: solid;
			border-color: transparent transparent #fff transparent;
		}
		.morebtn li{
			display: block;
			text-align: left;
			text-indent: 15px;
			line-height: 44px;
			height: 44px;
			padding-left: 10px;
			padding-right: 20px;
			border-bottom: 1px solid #ededed;
		}
		.morebtn i{
			width: 31.5px;
			height: 31.5px;
			display: inline-block;
			background-position: -120px -60px;
			vertical-align: middle;
			position: relative;
    		left: -8px;
			background-image: url(../../assets/images/tubiao.svg);
		}
		.morebtn li:nth-of-type(2) i{
			background-position: -120px 0;
		}
		.morebtn li:nth-of-type(3) i{
			background-position: -60px -120px;
		}
		.morebtn a{
			display: inline-block;
			font-size: 14px;
			color: #333;
			text-indent: 0px;
    		width: 90px;
		}
		.enter{
    		animation: enter 0.4s;
    	}
		@keyframes enter{
			from{
				height:0;
			}
			to{
				height:125.4px;
			}
		}
    	.leave{
    		animation: leave 0.4s;
    	}
		@keyframes leave{
			from{
				height:125.4px;
			}
			to{
				height:0;
			}
		}
		
		nav{
			position: relative;
			padding: 0 6px;
			width: 100%;
			float: left;
			overflow: hidden;
		}
		.logo{
		    display: inline-block;
			float: left;
		}
		.logo a{
			width: 95px;
			height: 95px;
			display: block;
			float: left;
			border-radius: 50%;
			position: relative;
			border: 1px solid #5584e7;
		}
		.logo a:after{
			content: "";
			width: 77px;
			height: 77px;
			display: block;
			position: absolute;
			top: 8px;
			left: 7px;
			border-radius: 50%;
			border: 1px solid #6691e9;
		}
		.logo a:before{
			content: "";
			width:71px;
			height: 71px;
			display: block;
			position: absolute;
			top: 11px;
			left: 10px;
			border-radius: 50%;
			border: 1px solid #8babee;
		}
		.logo a img{
			width: 55px;
			height: 55px;
			border-radius: 50%;
			margin: 20px auto;
		}
		nav p{
			display: inline-block;
			float: left;
			margin-top: 24px;
			margin-left: 8px;
			text-align: left;
		}
		.lg a{
			display: inline-block;
			width: 88px;
			height: 29px;
			color: #fff;
			line-height: 29px;
			border-radius: 3px;
			text-align: center;
			border: 1px solid #fff;
		}
		.lg span{
			color: #fff;
			font-size: 12px;
			line-height: 28px;
			display: block;
		}
		.wave{
			position: absolute;
			width: 100%;
			height: 91.5px;
			background-image: url(../../assets/images/wave-2.png);
			background-repeat: no-repeat;
			background-size: cover;
			bottom: 0;
		}
		.message{
			position: relative;
			width: 100%;
			overflow: hidden;
			float: left;
			margin-top: 7px;
		}
		.message li{
			width: 25%;
			color: #fff;
			float: left;
			font-size: 12px;
		}
		.message p{
			margin-bottom: 2px;
		}
		.message span{
			font-size: 14px;
		}
		.message li .des{
			/*display: inline-block;*/
			font-size: 9.6px;
		}
		article{
			width: 100%;
			padding: 10px 8px;
			background: #f2f2f2;
			border-radius: 6px;
		}
		article .push{
			padding: 0 8px;
			width: 100%;
			padding: 14px 19px;
			background: #fff;
			overflow: hidden;
		}
		.push a{
			font-size: 14px;
			color: #fff;
			width: 148px;
			height: 45px;
			line-height: 45px;
			padding-left: 60px;
			font-size: 14px;
			text-align: left;
			display: block;
			float: left;
			border-radius: 6px;
			background: linear-gradient(to right,#ffa359,#fe6076);
			box-shadow: 0 6px 21px 1px #ffc9c7;
			position: relative;
		}
		.push a:after{
			content: "";
			width: 28px;
		    height: 45px;
		    position: absolute;
		    top: 1px;
		    background: url(../../assets/images/recharge.svg);
		    background-size: 28px 40px;
		    background-repeat: no-repeat;
		    left: 35px;
		}
		.push a:nth-of-type(2){
			float: right;
			background: url(../../assets/images/rechargeflow.svg);
			background: linear-gradient(to right,#4ea4ff,#8d7aff);
			box-shadow: 0 6px 21px 1px #cdcdff;
		}
		.service{
			width: 100%;
			padding-bottom: 10px;
			background: #fff;
			margin-top: 10px;
			border-radius: 6px;
		}
		.service p{
			padding: 10px 17px;
			text-align: left;
			font-size: 13px;
			font-weight: 700;
			padding-bottom: 10px;
			color: #333;
			border-bottom: 1px solid #f8f8f8;
		}
		.service p a{
			float: right;
			display: inline-block;
			color: #a4a4a4;
			font-size: 12px;
		}
		.service ul{
			width: 100%;
			margin-top: 17.5px;
			overflow: hidden;
		}
		.service ul li{
			width: 25px;
			float: left;
		}
		.service ul li{
			width: 25%;
			float: left;
		}
		.service ul li a{
			display: inline-block;
			width: 75%;
			height: 95%;
		}
		.service ul li em{
			width: 32px;
			height: 32px;
			display: block;
			margin: 0 auto;
			margin-bottom: 5px;
			background-image: url(../../assets/images/menu.svg);
			background-position: -120px -60px;
		}
		.service ul li:nth-child(2) em{
			background-position: -60px -60px;
		}
		.service ul li:nth-child(3) em{
			background-position: -178px -60px;
		}
		.service ul li:nth-child(4) em{
			background-position: -120px -120px;
		}
		.service span{
			font-size: 12px;
			color: #333;
		}
		.track{
			width: 100%;
			padding: 0px 8px 30px 8px;
			float: left;
			overflow: hidden;
			background: #f2f2f2;
		}
		.track img{
			width: 100%;
			border-radius: 5px;
		}
		.foot{
			width: 100%;
			float: left;
			overflow: hidden;
			background: #f2f2f2;
		}
		.bottom{
			width: 100%;
			padding: 0 10px;
			height: 28px;
			line-height: 28px;
		}
		.bottom a,.bottom span{
			display: inline-block;
			float: left;
			font-size: 12px;
			color: #333;
			margin-right: 8px;
		}
		.bottom a:nth-of-type(3){
			float: right;
		}
		.client{
			width: 100%;
			border-top: 1px solid #ccc;
			padding: 15px 0;
			margin-top: 8px;
		}
		.client a{
			display: inline-block;
			width: 33.3%;
			font-size: 12px;
			color: #333;
		}
		.client a:nth-of-type(1){
			color: #0185cf;
		}
		.client span{
			font-size: 12px;
			color: #333;
			line-height: 22px;
		}
	</style>