	<template>
	<main>
		<!--头部下载广告-->
		<section class="top-app" v-show="app">
			<span class="top-close" @click='close()'></span>
				<img src="../../assets/images/top-img.png"/>
			<div class="text">
				<p>中国移动APP</p>
				<p class="small">随时随地 随心随行</p>
			</div>
			<router-link to='/download' class='open'>立即打开</router-link>
		</section>
		<!--固定的头-->
		<section class="fixed-head">
			<router-link to='/'>
				<img class="logo" src="../../assets/images/logo2.png"/>
			</router-link>
			<div class="loc">
				<router-link to='/chooseCity'>   
					<span class="add">{{count}}</span>
					<img src="../../assets/images/down2.png"/>
				</router-link>
			</div>
			<router-link to='/search' class='search-to'>
				<input type="text" class='search02' value="搜索"/>
			</router-link>
			<router-link to='/login' class='to-login'>未登录</router-link>
		</section>
		<!--真正的头-->
		<header>
			<img class="logo" src="../../assets/images/logo1.png"/>
			<div class="loc">
				<router-link to='/chooseCity'>
					<span class="add">{{count}}</span>
					<img src="../../assets/images/down.png"/>
				</router-link>
			</div>
			<router-link to='/search' class='search'></router-link>
			<div class="dropdown" @click='toggle()'>
				<em to='/index' class="more">
					<img src="../../assets/images/more.png" />
				</em>  
				<ul v-bind:class='none'>
					<li>
						<router-link to='/index'>
							<span class="small-icon1"></span>首页
						</router-link>
					</li>
					<li>
						<router-link to='/index'>
							<span class="small-icon2"></span>消息
						</router-link>
					</li>
					<li>
						<router-link to='/index'>
							<span class="small-icon3"></span>帮助
						</router-link>
					</li>
					<li>
						<router-link to='/index'>
							<span class="small-icon4"></span>意见反馈
						</router-link>
					</li>
				</ul>
			</div>
		</header>
		
		<!--公告-->
		<div class="welcome">欢迎来到中国移动商城
			<router-link to='/login'>去登录 ></router-link>
		</div>
		<section class="announcement" v-show='annunce'>
			<img src="../../assets/images/icon-notice.png"/>
			<div class="news">
				<ul id="ad">
					<li>
						<router-link to='/index'>关于中国移动官方服务热线号码的公告</router-link>
					</li>
					<li>
						<router-link to='/index'>关于中国移动取消流量“漫游”费的公告</router-link>
					</li>
				</ul>
			</div>
			<em @click="annunceClose()"></em>
		</section>
		<!--轮播-->
		<div class="carousel carousel01">
			<mt-swipe :auto="4000">
			  <mt-swipe-item><img src="../../assets/images/shop1.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/shop2.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/shop3.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/shop4.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/shop5.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/shop6.jpg"/></mt-swipe-item>
			</mt-swipe>
		</div>
		<nav>
			<ul>
				<li><router-link to='/rechargecredit'>
					<img src="../../assets/images/nav1.png"/>
					<span>充值交费</span>
				</router-link></li>
				<li><router-link to='/'>
					<img src="../../assets/images/nav2.png"/>
					<span>我的账单</span>
				</router-link></li>
				<li><router-link to='/'>
					<img src="../../assets/images/nav3.png"/>
					<span>套餐余量</span>
				</router-link></li>
				<li><router-link to='/'>
					<img src="../../assets/images/nav4.png"/>
					<span>已订业务</span>
				</router-link></li>
				<li><router-link to='/'>
					<img src="../../assets/images/nav5.png"/>
					<span>冲流量</span>
				</router-link></li>
				<li><router-link to='/'>
					<img src="../../assets/images/nav6.png"/>
					<span>办业务</span>
				</router-link></li>
				<li><router-link to='/'>
					<img src="../../assets/images/nav7.png"/>
					<span>个人中心</span>
				</router-link></li>
				<li><router-link to='/'>
					<img src="../../assets/images/nav8.png"/>
					<span>优惠专区</span>
				</router-link></li>
			</ul>
		</nav>
		<!--<section class="ad">
			<img src="../../assets/images/shop-nav.jpg"/>
		</section>-->
		<section class="ad" v-for="(item,index) in ad">
			<router-link :to="item.to">
				<img :src="item.src"/>
			</router-link>
		</section>
		<section class="hot">
			<h2 class="ti"><em>.</em>热门推荐</h2>
			<router-link to='/'>
				<img src="../../assets/images/shop-hot1.jpg"/>
			</router-link>
			<router-link to='/'>
				<img src="../../assets/images/shop-hot2.jpg"/>
			</router-link>
			<router-link to='/'>
				<img src="../../assets/images/shop-hot3.jpg"/>
			</router-link>
		</section>
		<section class="work">
			<h2 class="ti"><em>.</em>办套餐</h2>
			<ul>
				<li v-for="(item,index) in work1"><router-link to='/'>
					<h5>{{item.name}}</h5>
					<p>{{item.des}}</p>
					<img :src="item.img"/>
				</router-link></li>
			</ul>
		</section>
		<section class="buy">
			<h2 class="ti"><em>.</em>买手机</h2>
			<ul>
				<li v-for="(item,index) in work2"><router-link to='/'>
					<article>
						<h5>{{item.name}}</h5>
						<p>{{item.des}}</p>
						<span>{{item.price}}</span>
					</article>
					<img :src="item.img"/>
				</router-link></li>
			</ul>
		</section>
		<section class="buy mission">
			<h2 class="ti"><em>.</em>办业务</h2>
			<ul>
				<li v-for="(item,index) in work3"><router-link to='/'>
					<article>
						<h5>{{item.name}}</h5>
						<p>{{item.des}}</p>
					</article>
					<img :src="item.img"/>
				</router-link></li>
			</ul>
		</section>
		<section class="buy number">
			<h2 class="ti"><em>.</em>选号码</h2>
			<ul>
				<li><router-link to='/'>
					<img src="../../assets/images/shop-hot5.jpg"/>
				</router-link></li>
				<li><router-link to='/'>
					<img src="../../assets/images/shop-hot6.jpg"/>
				</router-link></li>
			</ul>
		</section>
		<section class="work choose">
			<h2 class="ti"><em>.</em>挑配件</h2>
			<ul>
				<li v-for="(item,index) in work4"><router-link to='/'>
					<h5>{{item.name}}</h5>
					<p>{{item.des}}</p>
					<span>{{item.price}}</span>
					<img :src="item.img"/>
				</router-link></li>
			</ul>
		</section>
		<section class="tips address">
			<p>京ICP备05002571号    证照信息</p>
			<p>Copyright©1999-2019 中国移动 版权所有</p>
			<p>本网站支持IPv6访问</p>
		</section>
		<!--固定的购物车和回到顶部-->
		<div class="fixed">
			<router-link to='/car'></router-link>
			<span class="top" @click='totop()'></span>
		</div>
	</main>
	</template>
	<script>
		export default{
			data(){
				return{
					add:'广州',
					menu:false,
					app:true,
					none:'none',
					ad:[],
					work1:[],
					work2:[],
					work3:[],
					work4:[],
					annunce:true
				}
			},
			methods:{
				close(){
					this.app=!this.app
				},
				toggle(){
					if(this.none==""){
						this.none='none'
					}else{
						this.none=""
					}
				},
				annunceClose(){
					this.annunce=!this.annunce
				},
				totop(){
//					console.log('click')
					document.documentElement.scrollTop=0;
					window.pageYOffset=0;
					document.body.scrollTop=0;
				}
			},
			mounted(){
				document.documentElement.scrollTop=0;
				window.pageYOffset=0;
				document.body.scrollTop=0;
				let inow = 0;
				this.it = setInterval(()=>{
					inow=inow+0.18;
					let i = 325-inow
					ad.style.left=i+'px'
					if(i<-ad.offsetWidth){
						inow=0;
					}
				},10)
				
				
				this.$http.get('./data/shop.json')
				.then((res)=>{
					this.ad=res.data.ad
					this.work1=res.data.work1
					this.work2=res.data.work2
					this.work3=res.data.work3
					this.work4=res.data.work4
				})
				.catch(()=>{
					
				})
				.finally((f)=>{
					document.onscroll = function(){
						var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
						let top = document.getElementsByClassName('top')[0]
						let head = document.getElementsByClassName('fixed-head')[0]
						if(scrollTop>100){
							head.style.display = 'block';
						}else{
							head.style.display = 'none';
						}
						if(scrollTop>400){
							top.style.display = 'block';
						}else{
							top.style.display = 'none'
						}
					}
				})
			},
			computed:{
			    count(){
			    	if(this.$store.state.count==''){
			    		return this.add
			    	}else{
			    		return this.$store.state.count;
			    	}
			    }
			},
			destroyed(){
				window.clearInterval(this.it)
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
		.fixed-head .loc{
			float: left;
			padding: 4% 2.6% 0 6%;
		}
		.fixed-head .add{
			color: #fff;
			font-size: 12px;
		}
		.search-to{
			display: inline-block;
			float: left;
			position: relative;
			display: none;
		}
		.search02{
			float: left;
			width: 62.5vw;
			max-width: 500px;
			max-height: 55px;
			height: 7.3vw;
			padding-left: 12%;
			margin-top: 3.1%;
			background: rgba(219,219,219,0.4);
			border-width: 0px;
			border-radius: 4px;
			color: #fff;
			font-size: 12px;
		}
		.search-to:after{
			content: '';
			width: 6.4vw;
			height: 8vw;
			max-width: 50px;
			max-height: 50px;
			background-image: url(../../assets/images/search2.png);
			background-size: 100%;
			position: absolute;
			top: 20%;
			left: 0px;
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
		/*公告*/
		.announcement{
			line-height: 30px;
			height: 30px;
			background: #fe1600;
		}
		.announcement em{
			position: absolute;
			top: 1px;
			right: 0px;
			width: 25px;
			height: 25px;
			background: red;
			display: block;
			background-image: url(../../assets/images/icon-close.png);
			background-size: 14px;
		    background-repeat: no-repeat;
		    background-position: center;
		    z-index: 2;
		}
		.announcement img{
			width: 16px;
			height: 16px;
			float: left;
			margin-top: 6px;
		}
		.announcement span{
			color: #fff;
			font-size: 11.5px;
			float: left;
		}
		.news{
			position: relative;
			margin-left: 2%;
			width: 93%;
			height: 100%;
			padding: 0px;
			overflow: hidden;
		}
		.news ul{
			display: inline-block;
			white-space: nowrap;
			position: absolute;
			left: 100%;
		}
		.news li{
			display: inline-block;
			margin-right: 50px;
			padding: 0px;
		}
		.news a{
			font-size: 12px;
			color: #fff;
		}
		nav{
			width: 100%;
			padding: 2% 1%;
			background-color: #fff;
		}
		nav ul{
			overflow: hidden;
		}
		nav ul li{
			width: 25%;
			float: left;
			padding-top: 2%;
			padding-bottom: 2%;
		}
		nav ul li img{
			width: 11.2vw;
			height: 11.2vw;
			max-width: 137px;
			max-height: 137px;
		}
		nav span{
			display: block;
			color: #000;
			font-size: 12px;
		}
		.ad img{
			width: 100%;
		}
		.hot,.work,.buy{
			width: 100%;
			overflow: hidden;
			padding: 2% 0;
		}
		.ti{
			font-size: 16px;
			text-align: left;
			padding: 0 3.5%;
    		border-top: 1px solid #e7e7e7;
    		border-bottom: 1px solid #e7e7e7;
		}
		.ti em{
			display: inline-block;
			width: 5px;
			padding: 3.5% 0;
			font-size: 16px;
			background: #ff04bd;
			color: #ff04bd;
		    position: relative;
		    left: -3.7%;
		}
		.hot img{
			width: 100%;
			height: 100%;
		}
		.hot a{
			border-right: 1px solid #e7e7e7;
    		border-bottom: 1px solid #e7e7e7;
			display: block;
			width: 50%;
			float: left;
			font-size: 0px;
		}
		.work h2 em{
			background: #feeb01;
			color:#feeb01;
		}
		.work a{
			width: 100%;
			display: inline-block;
		}
		.work ul li,.buy ul li{
			width: 50%;
			float: left;
			padding-top: 2%;
			border-left: 1px solid #e7e7e7;
			border-bottom: 1px solid #e7e7e7;
			padding-bottom: 0px;
		}
		.work h5,.work p{
			width: 100%;
			display: block;
			float: left;
			color: #333;
			font-size: 14px;
			font-weight: 500;
			text-align: left;
			padding-left: 3%;
		}
		.work p{
			margin-top: 1px;
			color: #999;
			font-size: 11px;
		}
		.work ul li img{
			display: block;
			width: 43%;
		    float: right;
		}
		.buy ul{
			overflow: hidden;
		}
		.buy ul li{
			padding-bottom: 1%;
		}
		.buy em{
			background: #46c900;
			color: #46c900;
		}
		.buy a{
			display: block;
			color: #333;
			text-align: left;
		}
		.buy article{
			width: 51%;
			float: left;
			padding-left: 2%;
			padding-top: 2%;
		}
		.buy h5{
			font-weight: 400;
			font-size: 14px;
		}
		.buy p{
			color: #999;
			font-size: 11px;
			white-space: nowrap;
		    text-overflow: ellipsis;
		    width: 100%;
		    overflow: hidden;
		}
		.buy span,.choose span{
			text-align: left;
			display: inline-block;
			color: #E40077;
			font-size: 14px;
		}
		.buy img{
			width: 43%;
			float: right;
		}
		.mission h2 em{
			color: #0167c9;
			background: #0167c9;
		}
		.mission h5{
			white-space: nowrap;
		    text-overflow: ellipsis;
		    width: 100%;
		    overflow: hidden;
		}
		/*0167c9 9e00b9  ff9e02*/
		.number em{
			color: #9e00b9;
			background: #9e00b9;
		}
		.number img{
			width: 100%;
		}
		.choose{
			margin-bottom: 9px;
		}
		.choose h2 em{
			color: #ff9e02;
			background: #ff9e02;
		} 
		.choose span{
			float: left;
			padding-left: 3%;
		}
		.choose ul li img{
			width: 68%;
		}
		.address{
			border-top: 1px solid #e7e7e7;
		}
		.fixed{
			width: 30px;
			position: fixed;
			bottom: 8%;
			right: 10px;
		}
		.fixed a,.fixed span{
			display: block;
			width: 30px;
			height: 30px;
			border-radius: 50%;
			background-image: url(../../assets/images/car2.png);
			background-color: rgba(0,0,0,0.5);
			background-size: 18px;
		    background-repeat: no-repeat;
		    background-position: center;
		    position: fixed;
		}
		.fixed a{
			bottom: 98px;
		}
		.fixed span{
			background-image:url(../../assets/images/totop.png);
			background-size: 27px;
    		background-position: top;
    		position: fixed;
    		bottom: 55px;
    		display: none;
		}
	</style>