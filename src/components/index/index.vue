	<template>
	<main>
		<!--可关闭头部-->
		<section class="top-app" v-show="app">
			<span class="top-close" @click='close()'></span>
			<img src="../../assets/images/top-img.png"/>
			<div class="text">
				<p>中国移动APP</p>
				<p class="small">随时随地 随心随行</p>
			</div>
			<router-link to='/download' class='open'>立即打开</router-link>
		</section>
		<!--正式的头-->
		<header>
			<img class="logo" src="../../assets/images/logo1.png"/>
			<div class="loc">
				<router-link to='/loc'>   
					<span class="add">{{count}}</span>
					<img src="../../assets/images/down.png"/>
				</router-link>
			</div>
			<router-link to='/search' class='search'></router-link>
			<div class="dropdown" @click='toggle()'>
				<em to='/index' class='more'>
					<img src="../../assets/images/more.png" />
				</em>  
				<ul v-show="menu">
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
		<!--固定的头部-->
		<section class="fixed-head">
			<router-link to='/'>
				<img class="logo" src="../../assets/images/logo3.png"/>
			</router-link>
			<div class="loc">
				<router-link to='/loc'>   
					<span class="add">{{count}}</span>
					<img src="../../assets/images/down2.png"/>
				</router-link>
			</div>
			<router-link to='/search' class='search-to'>
				<input type="text" class='search02' value="搜索"/>
			</router-link>
			<router-link to='/login' class='to-login'>未登录</router-link><!--要改-->
		</section>
		<!--公告-->
		<div class="welcome">欢迎来到中国移动掌上营业厅
			<router-link to='/login'>去登录 ></router-link>
		</div>
		<section class="announcement">
			<img src="../../assets/images/voice.png"/><span>&nbsp;公告：</span>
			<div class="news">
				<ul>
					<li><router-link to='/index'>中央第六巡视组巡视中国移动通信集团有限公司党组工作动员会召开</router-link></li>
				</ul>
			</div>
		</section>
		<!--轮播-->
		<div class="carousel">
			<mt-swipe :auto="4000">
			  <mt-swipe-item><router-link to='/flower'><img src="../../assets/images/carousel1.jpg"/></router-link></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/carousel2.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/carousel3.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/carousel4.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/carousel5.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/carousel6.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/carousel7.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/carousel8.jpg"/></mt-swipe-item>
			</mt-swipe>
		</div>
		<!--快捷菜单-->
		<section class="quick-menu">
			<ul>
				<li v-for="(item,index) in list00"><router-link :to="item.to">
					<img :src="item.img"/><span>{{item.name}}</span>
				</router-link></li>
			</ul>
		</section>
		<!--广告-->
		<section class="ad" v-for="(item,index) in ad1">
			<router-link :to="item.to">
				<img :src="item.src"/>
			</router-link>
		</section>
		<!--商品-->
		<section class="recommend">
			<h2><em></em>终端推荐</h2>
			<ul>
				<li v-for="(item,index) in list01">
					<img :src="item.img"/>
					<p class="price">{{item.price}}</p>
					<p class="name">{{item.pro}}</p>
				</li>
			</ul>
		</section>
		<section class="recommend business">
			<h2><em></em>业务推荐</h2>
			<ul>
				<li>
					<router-link to='/index'>
						<div class="left">
							<h3>畅想套餐</h3>
							<p>流量放心用</p>
						</div>
						<img src="../../assets/images/business1.png"/>
					</router-link>
				</li>
				<li>
					<router-link to='/index'>
						<div class="left">
							<h3>大流量套餐</h3>
							<p>有流量放心用</p>
						</div>
						<img src="../../assets/images/business2.png"/>
					</router-link>
				</li>
				<p class="more-business">更多业务 ></p>
			</ul>
		</section>
		<section class="ad" v-for="(item,index) in ad2">
			<router-link :to="item.to">
				<img :src="item.src"/>
			</router-link>
		</section>
		<section class="recommend card">
			<h2><em></em>号卡推荐</h2>
			<div class="card-left">
				<router-link to='/index'>
					<img src="../../assets/images/card1.png"/>
					<h3>精选靓号</h3>
					<p>资费最优惠，靓号任意选</p>
				</router-link>
			</div>
			<div class="card-right">
				<ul>
					<li>
						<router-link to='/index'>
							<div class="lf">
								<h3>移动王卡</h3>
								<p>支持腾讯视频、抖音</p>
							</div>
							<img src="../../assets/images/card2.png"/>
						</router-link>
					</li>
					<li>
						<router-link to='/index'>
							<div class="lf">
								<h3>万能副卡</h3>
								<p>激活可获赠10G</p>
							</div>
							<img src="../../assets/images/card3.png"/>
						</router-link>
					</li>
				</ul>
			</div>
		</section>
		<section class="recommend business special">
			<h2><em></em>特色专区</h2>
			<ul>
				<li v-for="(item,index) in list02">
					<router-link to='/index'>
						<div class="left">
							<h3>{{item.name}}</h3>
							<p>{{item.des}}</p>
						</div>
						<img :src="item.img"/>
					</router-link>
				</li>
			</ul>
		</section>
		<section class="recommend guess">
			<h2><em></em>猜你喜欢</h2>
			<ul>
				<li v-for="(item,index) in list03">
					<router-link to='/index'>
						<img :src="item.src"/>
						<h3>{{item.name}}</h3>
						<p>{{item.des}}</p>
					</router-link>
				</li>
			</ul>
		</section>
		<section class="tips">
			<p>京ICP备05002571号   证照信息{{count}}</p>
			<p>Copyright©1999-2019  中国移动  版权所有</p>
			<p>本网站支持IPv6访问</p>
		</section>
	</main>
	</template>
	<script>
		export default{
			data(){
				return{
					app:true,
					menu:false,
					add:'广州',
					ad1:[],
					ad2:[],
					list01:[],
					list02:[],
					list03:[],
					list00:[{
						to:'/rechargecredit',
						img:require('../../assets/images/quick1.png'),
						name:'话费充值'
					},
					{
						to:'',
						img:require('../../assets/images/quick2.png'),
						name:'流量充值'
					},
					{
						to:'',
						img:require('../../assets/images/quick3.png'),
						name:'账单查询'
					},
					{
						to:'',
						img:require('../../assets/images/quick4.png'),
						name:'套餐余量'
					},
					{
						to:'',
						img:require('../../assets/images/quick5.png'),
						name:'已订业务'
					},
					{
						to:'',
						img:require('../../assets/images/quick6.png'),
						name:'国漫专区'
					},
					{
						to:'',
						img:require('../../assets/images/quick7.png'),
						name:'4G专区'
					},
					{
						to:'',
						img:require('../../assets/images/quick8.png'),
						name:'买手机'
					},
					{
						to:'',
						img:require('../../assets/images/quick9.png'),
						name:'办业务'
					},
					{
						to:'',
						img:require('../../assets/images/quick10.png'),
						name:'办号卡'
					}]
				}
			},
			methods:{
				close(){
					this.app=!this.app
				},
				toggle(){
					this.menu=!this.menu
				}
			},
			mounted(){
				//传值
//				this.add = this.$route.params.id
//				console.log(this.add)
//				if(this.add==undefined){
//					this.add='广州'
//				}
				var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
				document.documentElement.scrollTop=0
				window.pageYOffset=0
				document.body.scrollTop=0
				document.onscroll = function(){
					var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
					let fix = document.getElementsByClassName('fixed-head')[0]
					if(scrollTop>79){
						fix.style.display = 'block'
					}else{
						fix.style.display = 'none'
					}
				}
				//json
				this.$http.get('./data/index.json')
				.then((res)=>{
					this.ad1=res.data.ad1
					this.ad2=res.data.ad2
					this.list01=res.data.list01
					this.list02=res.data.list02
					this.list03=res.data.list03
				})
				.catch(()=>{
					
				})
				.finally((f)=>{
					
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
			width: 28.13vw;
			max-width: 211px;
			margin-top: 2.1%;
			float: left;
			position: relative;
			top: 5px;
		}
		.fixed-head .loc{
			float: left;
			padding: 3% 2.8% 0 4%;
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
		    padding-top: 4%;
		    padding-right: 5px;
		    color: #fff;
		}
		/*快捷菜单*/
		.quick-menu{
			width: 100%;
			height: 162.5px;
			position: relative;
			overflow: hidden;
		}
		.quick-menu ul{
			width: 100%;
			overflow: hidden;
			padding-bottom: 19.92px;
		}
		.quick-menu ul li{
			width: 20%;
			padding-top: 15px;
			float: left;
			text-align: center;
		}
		.quick-menu ul li a{
			display: block;
		}
		.quick-menu img{
			display: block;
			width: 39.837px;
			height: 39.837px;
			margin: 0 auto;
		}
		.quick-menu span{
			display: block;
			padding-top: 3px;
			color: #666;
			font-size: 10.78px;
		}
		.ad{
			width: 100%;
			margin-top: 4px;
		}
		.ad img{
			width: 100%;
			float: left;
		}
		.recommend{
			width: 100%;
			float: left;
		}
		.recommend h2{
			height: 45px;
			background: #F2F2F2;
			font-size: 16.875px;
			line-height: 45px;
			color: #ff4a7f;
		}
		.recommend em{
			width: 16.8px;
			height: 16.8px;
			display: inline-block;
			margin-right: 3px;
			background-image: url(../../assets/images/icon1.png);
			background-size: 100%;
			transform: translateY(1px);
		}
		.recommend ul{
			width: 100%;
			overflow: hidden;
		}
		.recommend ul li{
			width: 50%;
			float: left;
			padding: 12.422px;
			border-right: 1px solid #eee;
			border-bottom: 1px solid #eee;
		}
		.recommend img{
			width: 140px;
			height: 115px;
			margin: 0 auto;
		}
		.price{
			padding-top: 10.5px;
			font-size: 15px;
    		color: #e40077;
		}
		.name{
			font-size: 12px;
			color: #333;
			padding-top: 3px;
		}
		.business h2{
			color: #9832ff;;
		}
		.business em{
			background-image: url(../../assets/images/icon2.png);
		}
		.business ul{
			width: 100%;
			background: #fff;
			overflow: hidden;
		}
		.business ul li{
			width: 50%;
			float: left;
			padding: 0px;
			border-right: 1px solid #eeeeee;
    		border-bottom: 1px solid #eeeeee;
		}
		.left{
			float: left;
			width: 115px;
			padding-left: 9.85px;
			text-align: left;
		}
		.left h3{
			font-size: 15px;
			font-weight: 500;
			color: #333;
			padding-top: 20.5px;
		}
		.left p{
			font-size: 12px;
			color:#999;
			padding: 8px 0 26.48px 0;
			line-height: 12px;
		}
		.business img{
			width: 45px;
			height: 45px;
			float: right;
			margin: 19.92px 12.42px 0 0;
		}
		.more-business{
			width: 100%;
			line-height: 44.8px;
			display: inline-block;
    		font-size: 16.875px;
		}
		.card em{
			background-image: url(../../assets/images/icon3.png);
		}
		.card,.guess{
			background-color: #f7f7f7;
		}
		.card h2{
			color: #23b3e9;
		}
		.card-left{
			width: 50%;
			float: left;
			border-right: 1px solid #eee;
		}
		.card-left img{
			width: 90px;
			height: 90px;
			margin: 15px auto 0;
		}
		.card-left h3{
			font-size: 15px;
			font-weight: 500;
			color: #333;
			margin-top: 8px;
		}
		.card-left p{
			font-size: 12px;
			color: #999;
			padding: 4px 15px 15px;
		}
		.card-right{
			float: left;
			width: 50%;
		}
		.card-right ul li{
			width: 100%;
			float: left;
			padding: 0px;
			border-bottom: 1px solid #eee;
		}
		.lf{
			width: 120px;
			float: left;
			text-align: left;
		}
		.lf h3{
			padding: 22.4px 0 0 9.85px;
			font-size: 15px;
			color: #333;
			font-weight: 500;
		}
		.lf p{
			padding: 3px 0 26.484px 9.844px;
			font-size: 12px;
			color: #999;
		}
		.card-right img{
			float: right;
			width: 45px;
			height: 45px;
			margin: 15px 12.5px 0 0;
		}
		.special em{
			background-image: url(../../assets/images/icon4.png);
		}
		.special h2{
			color: #117dea;
		}
		.guess em{
			background-image: url(../../assets/images/icon5.png);
		}
		.guess h2{
			color: #e40077;
		}
		.guess ul{
			width: 100%;
			padding: 0;
			margin: 9.85px 0;
			background: #FFFFFF;
			overflow: hidden;
			border-top: 1px solid #eee;
		}
		.guess ul li{
			width: 33.3%;
			padding: 0px;
		}
		.guess ul img{
			display: block;
			width: 90px;
			height: 90px;
			margin: 12.42px auto 0;
		}
		.guess ul h3{
			padding: 6.8px 9.85px 0;
			color: #333333;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-size: 13.83px;
			font-weight: 500;
		    line-height: 13.83px;
		    /*margin-bottom: 26.34px;*/
		}
		.guess p{
			height: 26.34px;
			color: #b2b2b2;
			padding: 4.5px 9.85px 9.85px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-size: 12px;
			line-height: 12px;
		}
		
	</style>