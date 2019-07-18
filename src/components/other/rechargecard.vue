	<template>
	<main>
		<h1>充值交费
			<span @click="back()"></span>
			<em @click='morebtn()'></em>
			<transition enter-active-class='enter' leave-active-class='leave'>
				<ul class="morebtn" v-show='btn'>
					<li><i></i><router-link to='/index'>首页</router-link></li>
					<li><i></i><router-link to='/my'>个人中心</router-link></li>
					<li><i></i><router-link to='/benifit'>优惠专区</router-link></li>
				</ul>
			</transition>
		</h1>
		<img class="fee" src="../../assets/images/fee2.jpg"/>
		<ul class="choose">
			<li><router-link to='/rechargecredit'>在线充值</router-link></li>
			<li><router-link to='/rechargecard'>充值卡充值</router-link></li>
		</ul>
		<h2 class="input-text">
			<input @keyup='ku1()' @blur='bl1()' v-model='telephone' type="phone" placeholder="请输入11位移动手机号码" maxlength="11"/>
			<span class="check" v-show='check'>请仔细核对充值号码，充错号将无法退款</span>
			<em @click='tips()'></em>
			<span>号码簿</span>
			<p class="tip" v-show='checknum'>{{telephone}}<span>请仔细核对</span></p>
		</h2>
		<ul class="activity">
			<li><input @blur='bl2' id="pass" type="password" placeholder="请输入充值卡密码"/></li>
			<li><input @blur='bl3' id="txt" type="text" placeholder="请输入验证码"/><i v-show='icon'></i>
				<img src="https://shop.10086.cn/i/authImg?&t=0.41493755891025264"/>
			</li>
			
		</ul>
		<section class="btn">
			<p class='pay'>立即充值</p>
			<p class="hidden"></p>
			<p class="pay-next">
				<router-link to=''>充值订单</router-link>
			</p>
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
		
		<section class="popup" v-show='pop'>
			<ul>
				<li>提示信息<em @click='cancel()'></em></li>
				<li>登录后才可以使用号码簿，您确认要登录么？</li>
				<li @click='sure()'><router-link to='/login'>确定</router-link><span @click='cancel()'>取消</span></li>
			</ul>
		</section>
	</main>
	</template>
	<script>
		export default{
			data(){
				return{
					btn:false,
					icon:false,
					telephone:'',
					check:false,
					checknum:false,
					pop:false
				}
			},
			methods:{
				morebtn(){
					this.btn=!this.btn
				},
				back(){
					 this.$router.go(-1)
				},
				ku1(){
					this.checknum=true
					if(this.telephone==''){
//						console.log(this.telephone)
						this.check=false
						this.checknum=false
//						a.style.background="gray"
					}
				},
				bl1(){
					var TEL_REGEXP = /^1(3[4-9]|4[7]|5[0-27-9]|7[8]|8[2-478])\d{8}$/;
					var a = document.getElementsByClassName('pay')[0];
//					console.log(this.telephone)
					this.checknum=false
					if(this.telephone.length>0&&this.telephone.length <= 10){
						this.check=true
						console.log('nonono')
						this.$toast('请输入正确的手机号码')
						a.style.background="gray"
					}
					if(TEL_REGEXP.test(this.telephone)){
//				        console.log('aaa')
				        if(pass.value==''){
				        	this.$toast('请输入充值卡密码')
				        }
			        }
					if(this.telephone.length == 11&&!TEL_REGEXP.test(this.telephone)){
						this.$toast('非移动手机号码')
					}
				},
				bl2(){
					if(pass.value==''){
			        	this.$toast('请输入充值卡密码')
			        }
				},
				bl3(){
					if(txt.value==''){
						this.icon=true
						this.$toast('请输入验证码')
					}else{
						this.icon=false
					}
				},
				tips(){
					this.pop=true
				},
				cancel(){
					this.pop=false
				}
			}
		}
	</script>
	<style scoped="">
		/*提示框*/
		.mint-toast{
			background-color: rgba(0,0,0,0.3);
		}
		ul,ul li{
			background-color: #fff;
		}
		input:focus::placeholder {
			color: transparent;
		}
		h1{
			font-size: 15px;
			padding:3% 0;
			color: #333;
			background-color: #efefef;
			border-bottom: 1px solid #dfdfdf;
			position: relative;
		}
		h1 span,h1 em{
			display: block;
			position: absolute;
			width: 25px;
			height: 25px;
			top: 50%;
    		transform: translateY(-50%);
    		background-image: url(../../assets/images/back1.png);
    		background-size: 25px;
		}
		/*下拉框*/
		h1 em{
			right: 10px;
			width: 28px;
			height: 28px;
			background-size: 30px;
			background-image: url(../../assets/images/icon-menu.png);
		}
		.morebtn{
			border-left: 1px solid #ccc;
			border-right: 1px solid #ccc;
			position: absolute;
			right: 0px;
			background: #f9f9f9;
			z-index: 1;
			top: 100%;
			box-shadow: 1px 1px 3px 1px #ccc;
			overflow: hidden;
		}
		.morebtn li{
			display: block;
			text-align: left;
			text-indent: 15px;
			line-height: 40px;
			padding-left: 10px;
			padding-right: 20px;
			border-bottom: 1px solid #ccc;
		}
		.morebtn i{
			width: 20px;
			height: 25px;
			display: inline-block;
			background-size: 20px;
			background-position: 0 0;
			vertical-align: middle;
			margin-right: 15px;
			background-image: url(../../assets/images/icon-personage3.png);
		}
		.morebtn li:nth-of-type(2) i{
			background-position: 0 -37px;
		}
		.morebtn li:nth-of-type(3) i{
			background-position: 0 -112px;
		}
		.morebtn a{
			display: inline-block;
			font-size: 12px;
			color: #333;
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
		.fee{
			width: 100%;
		}
		.choose{
			width: 100%;
			overflow: hidden;
		} 
		.choose li{
			width: 50%;
			font-size: 16px;
			padding: 3% 0;
			border-bottom:1px solid #e3e3e3;
			float: left;
		}
		.choose li a{
			color: #666;
		}
		.choose li:nth-of-type(2){
			border-bottom: 2px solid #0185cf;
		}
		.choose li:nth-of-type(2) a{
			color: #0185cf;
		}
		.input-text{
			padding: 10px 0;
    		margin: 8.8px 4% 10px 1%;
			position: relative;
			border-bottom: 1px solid #dfdfdf;
			text-align: right;
		}
		.input-text input{
			width: 100%;
			border: 0px;
			background-color: #fff;
			height: 35px;
			font-size: 22.5px;
			padding-left: 15px;
		}
		.input-text em{
			width: 40px;
			height: 40px;
			display: inline-block;
			position: absolute;
			right: -3px;
			top: 12px;
			background-image: url(../../assets/images/icon-sperson-1.png);
			background-size: 25px;
    		background-repeat: no-repeat;
    		background-position: center 3px;
		}
		.input-text span{
			display: inline-block;
			color: #A4A4A4;
			font-size: 12px;
			position: relative;
   			top: -7px;
		}
		.input-text .tip{
			position: absolute;
			border: 1px solid #dadada;
			width: 100%;
			z-index: 5;
			background: #fff;
			left: -10px;
    		margin: 0 3%;
    		line-height: 45px;
    		font-size: 20px;
    		color: #FD7112;
    		text-align: left;
    		padding-left: 10px;
    		top: 41px;
		}
		.tip span{
			display: inline-block;
			float: right;
			color: #333;
			font-size: 14px;
			width: 40%;
			line-height: 45px;
			text-align: left;
			top: 0px;
		}
		.input-text .check{
			padding-left: 10px;
			text-indent: 10px;
			right: 22%;
		}
		.value{
			width: 100%;
			padding: 1px 0 0 1%;
			margin-bottom: 10px;
			font-size: 16px;
			overflow: hidden;
		}
		.value li{
			width: 28.5%;
			float: left;
			border: 1px solid #0085d0;
			margin: 0 6.4px 10px 6.4px;
			border-radius: 4px;
			height: 40px;
			line-height: 40px;
			color: #0085D0;
		}
		.value input{
			width: 98%;
			height: 30px;
			line-height: 30px;
			border: 0;
			font-size: 12px;
			/*color: #B3B3B3;*/
			text-align: center;
		}
		.bgcolor{
			background:#0085D0;
			color:#fff!important;
		}
		.money{
			width: 100%;
			overflow: hidden;
		}
		.money li{
			width: 50%;
			float: left;
			padding: 0 7px;
			text-align: left;
		}
		.money .real{
			text-align: right;
		}
		.money span{
			font-size: 12px;
		}
		.real span,.real b{
			color: #ED2688;
		}
		.activity{
			width: 100%;
		}
		.activity li{
			width: 100%;
			height: 50px;
			line-height: 40px;
			padding: 5px 15px;
			font-size: 14px;
			color: #ccc;
			text-align: left;
			border-bottom: 1px solid #e3e3e3;
		}
		.activity li input{
			height: 35px;
		    width: 100%;
		    border: 0;
		    padding-left: 10px;
		    font-size: 16.25px;
		}
		.activity li:nth-of-type(2){
			padding: 0px 15px;
			position: relative;
		}
		.activity li:nth-of-type(2) input{
			width: 60%;
			float: left;
			margin: 5px 0;
		}
		.activity li i{
			display: block;
			width: 16px;
			height: 16px;
			position: absolute;
		    right: 40%;
		    margin: 15px 7px;
		    background-image: url(../../assets/images/icon-16.gif);
		    background-position: -40px -320px;
		}
		.activity li img{
			width: 40%;
			float: left;
			height: 100%;
		}
		.btn{
			padding: 10px;
			width: 100%;
			overflow: hidden;
		}
		.btn .pay{
			margin-top: 5px;
			background: gray;
			height: 42px;
			line-height: 42px;
			font-size: 18px;
			border-radius: 3px;
			color: #fff;
		}
		.hidden{
			margin-top: 15px;
		}
		.pay-next a{
			display: inline-block;
			float: right;
		    color: #0085D0;
		    font-size: 14px;
		}
		/*底部*/
		.foot{
			width: 100%;
			float: left;
			overflow: hidden;
			/*background: #f2f6f9;*/
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
			padding-bottom: 13%;
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
		/*弹出框*/
		.popup{
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 5;
			background: rgba(0,0,0,0.4);
		}
		.popup ul{
			width: 82%;
			background: #fff;
			position: absolute;
		    top: 50%;
		    transform: translate(-50%,-50%);
    		left: 50%;
		}
		.popup ul li{
			width: 100%;
			padding: 10px;
			color: #4d4d4d;
			text-align: left;
		}
		.popup ul li:nth-of-type(1){
			font-size: 18px;
    		background: #f5f5f5;
    		font-weight: 400;
		}
		.popup em{
			display: inline-block;
			width: 17px;
			height: 15px;
			float: right;
			background-image: url(../../assets/images/jf_close.png);
			margin-top: 2px;
    		margin-right: 5px;
		}
		.popup ul li:nth-of-type(2){
			font-size: 14px;
			color: #333;
			padding-top: 15px;
		}
		.popup ul li:nth-of-type(3) span{
			width: 49.5%;
			display: inline-block;
			text-align: center;
			line-height: 35px;
			border-radius: 4px;
			border: 1px solid #dcdcdc;
			color: #666;
			background: #fff;
		}
		.popup ul li:nth-of-type(3) a{
			background: #0085d0;
			color: #fff;
			margin-right: 1%;
			width: 49.5%;
			display: inline-block;
			text-align: center;
			line-height: 35px;
			border-radius: 4px;
		}
	</style>