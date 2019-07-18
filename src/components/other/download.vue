	<template>
	<main>
		<img src="../../assets/images/download.jpg" class="bigpic"/>
		<div class="bottom">
			<img src="../../assets/images/download-pic.jpg"/>
			<span>中国移动客户端</span>
			<router-link to='/download'>打开/下载</router-link>
		</div>
	</main>
	</template>
	<script>
		
	</script>
	<style scoped="scoped">
		.bigpic{
			width: 100%;
			height: auto;
			display: block;
		}
		.bottom{
			box-sizing: border-box;
			background: #333;
			position: fixed;
			padding: 0 15px;
			height: 84px;
			bottom: 0;
		    left: 0;
		    right: 0;
		    max-width: 750px;
   			margin: 0 auto;
		}
		.bottom img{
			display: block;
			float: left;
			width: 53.5px;
			height: 53.5px;
			margin-top: 14.5px;
		}
		.bottom span{
			display: block;
			float: left;
			padding-left: 7.5px;
			color: #fff;
			font-size: 17.5px;
			line-height: 84px;
		}
		.bottom a{
			display: block;
			font-size: 17.5px;
			color: #fff;
			width: 97px;
			height: 46px;
			line-height: 46px;
			background: linear-gradient(to right,#00a1ff 0%,#01d2fe 100%);
			border-radius: 5px;
			margin-top: 18.5px;
			float: right;
		}
	</style>