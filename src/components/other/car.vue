	<template>
	<main>
		<!--固定的头-->
		<section class="fixed-head">
			<router-link to='/'>
				<img class="logo" src="../../assets/images/logo2.png"/>
			</router-link>
			</router-link>
			<router-link to='/login' class='to-login'>未登录</router-link>
		</section>
		<!--真正的头-->
		<h1><em @click='back()'></em></li>购物车<span @click='clear()'>清空</span></h1>
		<p class="welcome">欢迎来到中国移动商城<router-link to="/login">去登录 ></router-link></p>
		<section class="cont">
			<img src="../../assets/images/mycar.png"/>
			<p>购物车空空的哦~</p>
			<p>去看看心仪的商品吧！<router-link to="/shop">去购物></router-link></p>
		</section>
		<p class="mg"></p>
		<section class="guess">
			<p class="more">
				我的足迹<span>查看更多 >></span>
			</p>
			<ul class="foot">
				<li>
					<img src="../../assets/images/car-guessyoulike.jpg"/>
					<p class="price">￥7399</p>
					<p class="des">【赠好礼】iPhone XS Max 移动4G+版 智能手机</p>
				</li>
			</ul>
		</section>
		<section class="popup" v-show='pop'>
			<ul>
				<li>购物车空空的，快去购物吧！</li>
				<li @click='sure()'>确定</li>
			</ul>
		</section>
	</main>
	</template>
	<script>
		export default{
			data(){
				return{
					pop:false
				}
			},
			methods:{
				back(){
                    this.$router.go(-1)
               },
               clear(){
               	this.pop=true
               },
               sure(){
               	this.pop=false
               }
			},
			mounted(){
				document.documentElement.scrollTop=0
				document.onscroll = function(){
						let head = document.getElementsByClassName('fixed-head')[0]
						if(document.documentElement.scrollTop>0){
							head.style.display = 'block';
						}else{
							head.style.display = 'none';
						}
						
				}
			},
			destroyed(){
				document.onscroll=null
			}
		}
	</script>
	<style scoped="">
		/*固定的头部*/
		.fixed-head{
			display: none;
			position: fixed;
			top: 0px;
			width: 100%;
			z-index: 5;
			padding: 0 2%;
			height: 14.62vw;
			max-height: 110px;
			max-width: 750px;
			background-image: url(../../assets/images/headbg.png);
			background-repeat-y: no-repeat;
			background-position: left top;
			background-size: auto 100%;
			background-color: rgba(0,0,0,0);
		}
		.fixed-head .logo{
			width: 12vw;
			height: 8vw;
			max-width: 90px;
			max-height: 60px;
			margin-top: 2.1%;
			float: left;
		}
		
		.to-login{
			font-size: 12px;
		    float: right;
		    padding-top: 5%;
		    padding-right: 29px;
		    color: #fff;
		}
		
		.none{
			display: none;
		}
		/*真正的头*/
		h1{
			width: 100%;
			background: #efefef;
			font-size: 14px;
			font-weight: 500;
			padding: 10px 0;
			position: relative;
			border-bottom: 1px solid #dfdfdf;
		}
		h1 em{
			display: block;
			width: 23px;
			height: 23px;
			float: left;
			background-image: url(../../assets/images/back.png);
			background-size: 23px;
			position: absolute;
			left: 10px;
			top: 50%;
    		transform: translateY(-50%);
		}
		h1 span{
			position: absolute;
			right: 15px;
			color: #999;
			font-size: 13px;
		}
		.welcome{
			width: 100%;
			line-height: 35px;
			font-size: 12px;
			text-align: left;
			text-indent: 15px;
		}
		.welcome a{
			margin-left: 12px;
			font-size: 12px;
			color: #0085d0;
		}
		.cont{
			padding: 200px 0;
		}
		.cont img{
			width: 90px;
		}
		.cont p{
			color: #979797;
			font-size: 13px;
			line-height: 25px;
		}
		.cont p a{
			color: #0085d0;
		}
		.mg{
			height: 10px;
			background: #e9e9e9;
		}
		.guess{
			text-align: left;
			padding: 15px;
		}
		.guess .more{
			font-size: 12px;
			color: #333;
		}
		.guess span{
			color: #999;
			float: right;
		}
		.foot li{
			width: 33.3%;
			padding: 20px 0;
		}
		.foot li img{
			width: 80px;
			height: 80px;
			margin-left: 50%;
    		transform: translateX(-50%);
		}
		.foot .price{
			color: #e40177;
			text-align: center;
		}
		.foot .des{
			color: #333;
			font-size: 13.5px;
		}
		.popup{
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 5;
			background: rgba(0,0,0,0.5);
		}
		.popup ul{
			width: 82%;
			background: #fff;
			border-radius: 8px;
			position: absolute;
		    top: 50%;
		    transform: translate(-50%,-50%);
    		left: 50%;
		}
		.popup ul li{
			width: 100%;
			padding: 22px 0 15px;
			color: #4d4d4d;
    		font-size: 14px;
		}
		.popup ul li:nth-of-type(2){
			color: #0085d0;
			padding: 15px 0;
			border-top: 1px solid #E9E9E9;
		}
	</style>