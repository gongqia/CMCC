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
		<p class="close" v-show='open'><span @click="close()"></span>
			<router-link to='/download'><img src="../../assets/images/download.png"/></router-link>
		</p>
		<img class="fee" src="../../assets/images/fee1.jpg"/>
		<ul class="choose">
			<li><router-link to='/rechargecredit'>在线充值</router-link></li>
			<li><router-link to='/rechargecard'>充值卡充值</router-link></li>
		</ul>
		<section class="box">
			<h2 class="input-text">
				<input @keyup='ku0()' @blur='bl0()' v-model='telephone' type="phone" placeholder="请输入11位移动手机号码" maxlength="11"/>
				<span class="check" v-show='check'>请仔细核对充值号码，充错号将无法退款</span>
				<span>号码簿</span>
				<p class="tip" v-show='checknum'>{{telephone}}<span>请仔细核对</span></p>
			</h2>
			<ul class="value">
				<li v-bind:class='{bgcolor:inow==num}' v-for='(item,inow) in list' @click="change(inow)">{{item}}</li>
				<li @click='inp()'><input id="inp1" @blur='bl()' @keyup='ku()' v-model='txt' type="text" name="" placeholder="10-500整数" value="" /></li>
			</ul>
			<ul class="money">
				<li>实际到账：<span>￥</span><b id="actualmoney">{{money}}.00</b></li>
				<li class="real">支付金额：<span>￥</span><b id="realmoney">{{money}}.00</b></li>
			</ul>
		</section>
		<ul class="activity">
			<li>
				<i></i>优惠活动
				<span>输入号码查看可用优惠券<img src="../../assets/images/icon-right.png" alt="" /></span>
			</li>
			<li>
				<i></i>优惠券
				<span><router-link to='/login'>登录</router-link>后查看可用优惠券<img src="../../assets/images/icon-right.png" alt="" /></span>
			</li>
		</ul>
		<section class="btn">
			<span>每月每登录账号话费充值笔数限10笔以内</span>
			<p class='pay'>立即充值</p>
			<p class="hidden"></p>
			<p class="pay-next">
				<span>温馨提示</span>
				<router-link to=''>充值订单</router-link>
			</p>
		</section>
		<section class="foot">
			<p class="bottom">
				<router-link to='/login'>登录</router-link><span>|</span><router-link to=''>帮助</router-link><span @click='top()'>回顶部</span>
			</p>
			<p class="client">
				<router-link to=''>触屏版</router-link><router-link to=''>电脑版</router-link><router-link to=''>客户端</router-link>
				<span>Copyright©1999-2019 中国移动 版权所有</span>
			</p>
		</section>
		<!--固定侧边栏-->
		<span class="share" @click='more1()' v-show='show1'></span>
		<ul class="fixed-nav" v-show='show2'>
			<li @click='more2()'><router-link to=''></router-link></li>
			<li><router-link to=''></router-link></li>
			<li><router-link to=''></router-link></li>
			<li><router-link to=''></router-link></li>
			<li><router-link to=''></router-link></li>
		</ul>
	</main>
	</template>
	<script>
		export default{
			data(){
				return{
					open:true,
					show1:true,
					show2:false,
					telephone:'',
					btn:false,
					num:-1,
					txt:'',
					check:false,
					checknum:false,
					money:'0',
					list:['10元','30元','50元','100元','200元','300元','400元','500元']
				}
			},
			methods:{
				back(){
					 this.$router.go(-1)
				},
				close(){
					this.open=!this.open
				},
				morebtn(){
					this.btn=!this.btn
				},
				change(i){
					this.num=i;
					var val = parseFloat(this.list[i]);
//					console.log(val)
					this.money=val;
				},
				inp(){
					this.num=-1;
					inp1.style.fontSize='16px'
				},
				bl0(){
					var a = document.getElementsByClassName('pay')[0];
//					console.log(this.telephone)
					this.checknum=false
					if(this.telephone.length>0&&this.telephone.length <= 10){
						this.check=true
//						console.log('nonono')
						this.$toast('请输入正确的手机号码')
						a.style.background="gray"
					}
				},
				bl(){
					if(this.txt==0){
//						console.log('0')
						this.num=3;
						this.money=100;
						inp1.style.fontSize='12px';
						var a = document.getElementsByClassName('pay')[0];
						a.style.background="#0084cc"
					}
					if(this.txt>0&&this.txt<10){
						this.$toast({
						  message: '请输入10-5000的整数',
						  position: 'middle',
						  duration: 1000
						})
					}
				},
				ku0(){
					var TEL_REGEXP = /^1(3[4-9]|4[7]|5[0-27-9]|7[8]|8[2-478])\d{8}$/;
					var a = document.getElementsByClassName('pay')[0];
					this.checknum=true
					if(this.telephone==''){
//						console.log(this.telephone)
						this.check=false
						this.checknum=false
						a.style.background="gray"
					}
					if(this.telephone.length == 11&&!TEL_REGEXP.test(this.telephone)){
						this.$toast('非移动手机号码')
						this.num=3;
						this.checknum=false;
						this.check=true
						this.money=100;
					}
					if(TEL_REGEXP.test(this.telephone)){
//				        console.log('aaa')
				        this.checknum=false
				        this.check=true
				        this.num=3;
				        this.money=100;
						a.style.background="#0084cc"
			        }else{
			      		a.style.background="gray"
			        }
				},
				ku(){
					var a = document.getElementsByClassName('pay')[0]
					this.txt=this.txt.replace(/[^\d]/g,'');
					this.money=parseInt(this.txt);
//					console.log(this.txt)
//					console.log(inp1.value)
					if(this.txt==""){
//						console.log('null')
						this.money=0;
					}
					if(this.txt=='0'){
						console.log('0')
						inp1.blur()
						this.txt=""
					}
					if(this.money<10){
						console.log('<10')
						a.style.background="gray"
					}else{
						a.style.background="#0084cc"
					}
				},
				more1(){
					this.show2=true;
					this.show1=false
				},
				more2(){
					this.show1=true;
					this.show2=false
				},
				top(){
					document.documentElement.scrollTop=0;
					window.pageYOffset=0;
					document.body.scrollTop=0;
				}
			},
			mounted(){
				document.onscroll=null
			}
		}
	</script>
	<style scoped="">
		/*提示框*/
		.mint-toast{
			background-color: rgba(0,0,0,0.3);
		}
		/*input时将placeholder隐藏*/
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
		
		.close{
			width: 100%;
			position: relative;
		}
		.close span{
			position: absolute;
			display: inline-block;
			width: 30px;
			height: 40px;
			left: 0px;
			background-image: url(../../assets/images/ad_close.svg);
			/*top: 50%;*/
			/*transform: translateY(-50%);*/
			/*left: 9.8px;*/
			background-size: 12px;
			background-repeat: no-repeat;
			background-position: center;
			z-index: 2;
		}
		.close a{
			display: block;
			font-size: 0px;
		}
		.close img{
			width: 100%;
		}
		.fee{
			width: 100%;
		}
		.choose{
			width: 100%;
			overflow: hidden;
		} 
		ul{
			background-color: #fff;
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
		.choose li:first-of-type{
			border-bottom: 2px solid #0185cf;
		}
		.choose li:first-of-type a{
			color: #0185cf;
		}
		.box{
			width: 100%;
			padding: 10px;
			border-bottom: 1px solid #e3e3e3;
		}
		.input-text{
			padding: 10px 0;
    		margin: 8.8px 2% 10px 1%;
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
			padding-left: 10px;
		}
		.input-text:before{
			content: "";
			width: 40px;
			height: 40px;
			display: inline-block;
			position: absolute;
			right: -3px;
			background-image: url(../../assets/images/icon-sperson-1.png);
			background-size: 25px;
    		background-repeat: no-repeat;
    		background-position: center 3px;
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
		.input-text span{
			display: inline-block;
			color: #A4A4A4;
			font-size: 12px;
			position: relative;
   			top: -7px;
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
		.activity li i{
			width: 30px;
			height: 25px;
			display: inline-block;
			background-image: url(../../assets/images/icon-radio2.png);
			background-size: 22px;
			position: relative;
		    top: 50%;
		    transform: translateY(-50%);
		    background-repeat: no-repeat;
		}
		.activity span{
			float: right;
		}
		.activity img{
			height:19px;
			position: relative;
    		top: 3px;
		}
		.activity a{
			color: #0085D0;
		}
		.btn{
			padding: 10px;
			width: 100%;
			overflow: hidden;
		}
		.btn span{
			display: inline-block;
			color: red;
			font-size: 12px;
			margin-left: 11px;
			text-align: left;
			width: 100%;
		}
		.btn .pay{
			margin-top: 15px;
			background: #0084cc;
			height: 42px;
			line-height: 42px;
			font-size: 18px;
			border-radius: 3px;
			color: #fff;
		}
		.hidden{
			margin-top: 15px;
		}
		.pay-next{
			margin-left: 11px;
			margin-right: 13px;
			position: relative;
		}
		.pay-next span{
			font-size: 14px;
			color: #ccc;
			text-indent: 16px;
			background-size: 4%;
			background-image: url(../../assets/images/heart-3.png);
			background-repeat: no-repeat;
			background-position: left;
			margin: 0px;
		}
		.pay-next a{
			position: absolute;
		    top: 0px;
		    right: 0px;
		    color: #0085D0;
		    font-size: 14px;
		}
		/*底部*/
		.foot{
			width: 100%;
			float: left;
			overflow: hidden;
			background: #f2f6f9;
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
		.bottom span:nth-of-type(2){
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
		/*固定侧边栏*/
		.share{
			display: inline-block;
			background-image: url(../../assets/images/fx-share.png);
			position: fixed;
			top: 140px;
			right: 2px;
			z-index: 2;
			width: 38px;
			height: 38px;
			background-size: 100%;
		}
		.fixed-nav{
			position: fixed;
			top: 140px;
			right: 2px;
			z-index: 2;
			width: 40px;
			margin: 5px auto;
			background: #fff;
			border-radius: 35px;
		}
		.fixed-nav li a{
			width: 38px;
			height: 38px;
			display: block;
			background-image: url(../../assets/images/fx-arrowhead.png);
			background-size: 100%;
		}
		.fixed-nav li:nth-of-type(2) a{
			background-image: url(../../assets/images/fx-qq.png);
			background-size: 100%;
		}
		.fixed-nav li:nth-of-type(3) a{
			background-image: url(../../assets/images/fx-wb.png);
			background-size: 100%;
		}
		.fixed-nav li:nth-of-type(4) a{
			background-image: url(../../assets/images/fx-db.png);
			background-size: 100%;
		}
		.fixed-nav li:nth-of-type(5) a{
			padding-bottom: 10px;
			background-image: url(../../assets/images/fx-bd.png);
			background-size: 100%;
		}
	</style>