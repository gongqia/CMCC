	<template>
	<div>
		
		<router-view></router-view>
		<footer>
			<ul>
				<li>
					<router-link to='/index'><div class="nav-logo nav-logo1"></div>首页</router-link>
				</li>
				<li>
					<router-link to='/shop'><div class="nav-logo nav-logo2"></div>商城</router-link>
				</li>
				<li>
					<router-link to='/benifit'><div class="nav-logo nav-logo3"></div>优惠</router-link>
				</li>
				<li>
					<!--<img src="../../assets/images/mine.png"/>-->
					<router-link to='/my'><div class="nav-logo nav-logo4"></div>个人中心</router-link>
				</li>
			</ul>
		</footer>
	</div>
	
	</template>

	<style>
		
		/*公告*/
		.announcement{
			float: left;
			width: 100%;
			height: 27px;
			background: #999;
			text-align: left;
			line-height: 25px;
			padding-left: 9px;
			padding-right: 23px;
			overflow: hidden;
			position: relative;
		}
		.announcement img{
			width: 14px;
			height: 20px;
			float: left;
			margin-top: 4px;
		}
		.announcement span{
			color: #fff;
			font-size: 10.78px;
			float: left;
			line-height: 28px;
		}
		.news{
			float: left;
			position: absolute;
			width: 84%;
			padding-left: 13%;
		}
		.news ul {
			overflow: hidden;
		}
		.news a{
			display: inline-block;
			font-size: 10.78px;
			color: #fff;
			white-space: nowrap;
		}
		/*轮播*/
		.carousel{
			position: relative;
			width: 100%;
			overflow: hidden;
		}
		.carousel img{
			width: 100%;
			height: 100%;
		}
		.carousel .mint-swipe-indicator{
			height: 12px;
			width: 12px;
			background: #fff;
			opacity: 0.7;
		}
		.carousel01 .mint-swipe-indicator{
			height: 5px;
			width: 5px;
			margin: 0 2px;
		}
		.carousel02 .mint-swipe-indicator{
			background: #4699ff;
		}
		.mint-swipe-indicator.is-active{
			opacity: 1;
		}
		.carousel .mint-swipe-items-wrap{
			padding-bottom: 37.47%;
		}
		.carousel01 .mint-swipe-items-wrap{
			padding-bottom: 40%;
		}
		.carousel02 .mint-swipe-items-wrap{
			padding-bottom: 18%;
		}
		.carousel02 .mint-swipe-indicators{
			bottom: 1px;
		}
		/*头部可关闭app*/
		.top-app{
			height: 12vw;
			max-height: 90px;
			background: #4c4c4c;
			width: 100%;
		}
		.top-app span{
			display: inline-block;
			float: left;
		}
		.top-close{
			width: 3.2vw;
			height: 3.2vw;
			max-width: 24px;
			max-height: 24px;
			background-image: url(../../assets/images/close.png);
			background-size: 100%;
			margin: 4% 0 0 2.6%;
		}
		.top-app img{
			width:8vw;
			height: 8vw;
			max-width: 60px;
			max-height: 60px;
			float: left;
			margin: 2% 0 0 3.69%;
		}
		.text{
			margin: 2.23% 0 0 2.62%;
			float: left;
			text-align: left;
		}
		.text p{
			color: #fff;
			font-size: 12px;
		}
		.text .small{
			font-size: 12px;
			line-height: 12px;
		}
		.open{
			float: right;
			width: 24.45vw;
			max-height: 60px;
			max-width: 183px;
			background: #33acfb;
			font-size: 14px;
			border-radius: 5px;
			margin: 2% 4% 0 0;
			padding:1.5% 0;
		}
		.top-app a{
			color: #fff;
		}
		/*头部*/
		header{
			padding:0 6px;
			height:12vw;
			max-height: 90px;
			background:#f2f2f2;
			position:relative;
		}
		header .logo{
			height: 5.6vw;
			max-height: 42px;
			float: left;
			margin-top: 3%;
			margin-left: 2.6%;
			position: absolute;
			left: 0;
		}
		header .loc{
			position: absolute;
			right: 42.13%;
			top: 30%;
		}
		.loc .add{
			font-size: 12px;
			color: #000;
		}
		.loc img{
			width: 9px;
			height: 11px;
		}
		.search{
			width: 4.5vw;
		    height: 4.5vw;
		    max-height: 34px;
		    max-width: 34px;
		    background-image: url(../../assets/images/icon-search.png);
		    position: absolute;
		    right: 11.2%;
		    top: 30%;
		    background-size: 100%;
		}
		.dropdown{
			position: absolute;
			right: 4%;
			max-width: 34px;
			max-height: 28px;
			width: 4.5vw;
			height: 3.73vw;
			top: 30%;
		}
		.dropdown ul{
			width: 100px;
			height: 113px;
			position: absolute;
			z-index: 5;
			top: 21px;
			right: -15px;
			background: #fff;
			padding: 6px 0;
			box-shadow: 0 6px 12px rgba(0,0,0,.175);
		}
		.dropdown ul li{
			width: 100%;
		    height: 24.85px;
		    box-sizing: border-box;
		    text-align: left;
		}
		.dropdown ul li a{
			font-size: 10px;
			position: relative;
			line-height: 24.9px;
			padding-left: 24.9px;
			color: #333;
		}
		.dropdown span{
			width: 12.9px;
			height: 11.5px;
			display: inline-block;
			position: absolute;
			left: 9.3px;
			top: 0px;
			background-size: 100%;
		}
		.small-icon1{
			background-image: url(../../assets/images/icon_1.png);
			
		}
		.small-icon2{
			background-image: url(../../assets/images/icon_2.png);
		}
		.small-icon3{
			background-image: url(../../assets/images/icon_3.png);
		}
		.small-icon4{
			background-image: url(../../assets/images/icon_4.png);
		}
		.more{
			display: block;
		}
		.more img{
			max-width: 100%;
			display: block;
		}
		/*欢迎登录*/
		.welcome{
			height: 9.36vw;
			max-height: 70px;
			font-size: 12px;
			background: #fff;
			padding-left: 14px;
			line-height: 35.1px;
			text-align: left;
		}
		.welcome a{
			padding-left: 5px;
			font-size: 10px;
			color: #0085d0;
		}
		/*底部导航*/
		footer{
			border-top: 1px solid #e2e2e2;
			height: 47.5px;
			background-color: #fff;
			position:fixed;
			bottom:0px;
			width:100%;
			left:0;
			right:0;
			max-width: 750px;
    		margin: 0 auto;
		}
		footer ul{
			overflow: hidden;
		}
		footer ul li{
			width:25%;
			margin:0px;
			float:left;
			text-align:center;
			padding-bottom: 4.5px;
		}
		footer ul li a{
			color:#666;
			font-size:12px;
			font-family: microsoft yahei;
		}
		.router-link-active{
			color:#0085d0;
		}
		.nav-logo{
			width: 25px;
			height: 25px;
			/*background: red;*/
			margin: 3.28px auto 0;
			background-image: url(../../assets/images/home.png);
			background-size: cover;
		}
		.nav-logo2{
			background-image: url(../../assets/images/car.png);
		}
		.nav-logo3{
			background-image: url(../../assets/images/benifit.png);
		}
		.nav-logo4{
			background-image: url(../../assets/images/mine.png);
		}
		.router-link-active .nav-logo1{
			background-image: url(../../assets/images/home-active.png);
		}
		.router-link-active .nav-logo2{
			background-image: url(../../assets/images/car-active.png);
		}
		.router-link-active .nav-logo3{
			background-image: url(../../assets/images/benifit-active.png);
		}
		.router-link-active .nav-logo4{
			background-image: url(../../assets/images/mine-active.png);
		}
		
		/*底部*/
		.tips{
			width: 100%;
			margin-bottom: 13%;
			background: #f7f7f7;
			padding:3.2%;
			float: left;
		}
		.tips p{
			font-size: 12px;
			padding-bottom: 3.2%;
		}
	</style>
	
	<script>
		
	</script>