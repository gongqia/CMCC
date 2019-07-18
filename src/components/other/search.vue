	<template>
	<main>
		<section class="head">
			<span @click='back()'></span>
			<p><em></em><input type="text" placeholder="话费充值"/><i></i></p>
		</section>
		<section class="hot">
			<p>热门搜索</p>
			<ul>
				<li v-for='(item,index) in arr1'><router-link to='/search'>{{item}}</router-link></li>
			</ul>
		</section>
		<section class="hot guessyoulike">
			<p><em></em>猜你喜欢</p>
			<ul>
				<li v-for='(item,index) in arr2'><router-link to='/search'>
					<img :src="item.src"/>
					<dl>
						<dt><p>{{item.pro}}</p><p>{{item.des}}</p></dt>
						<dd><span>{{item.price}}</span></dd>
					</dl>
				</router-link></li>
			</ul>
		</section>
	</main>
	</template>
	<script>
		export default{
			data(){
				return{
					arr1:[],
					arr2:[]
				}
			},
			methods:{
				back(){
                    this.$router.go(-1)
                }
			},
			mounted(){
				document.onscroll=null
				this.$http.get('./data/search.json')
				.then((res)=>{
					this.arr1=res.data.arr1
					this.arr2=res.data.arr2
				})
				.catch(()=>{
					
				})
				.finally((f)=>{
					
				})
			}
		}
	</script>
	<style scoped="">
		section{
			width: 100%;
			padding: 10px 3%;
			float: left;
		}
		.head span{
			display: inline-block;
			width: 25px;
			height: 25px;
			background-image: url(../../assets/images/back.png);
			background-size: 25px;
			float: left;
			margin-top: 10px;
		}
		.head p{
			float: right;
			background: #f9f9f9;
			border-radius: 5px;
			width: 92%;
			padding: 4px 2%;
			border: 1px solid #dadada;
		}
		.head em{
			display: inline-block;
			width: 25px;
			height: 25px;
			/*background: red;*/
			float: left;
			background-image: url(../../assets/images/search.png);
			background-size: 25px;
			margin-top: 5px;
		}
		.head input{
			height: 35px;
			width: 71%;
			background: #f9f9f9;
			border: none;
			color: #a4a4a4;
			padding-left: 8px;
			float: left;
			font-size: 16px;
		}
		.head i{
			height: 29px;
			width: 29px;
			display: inline-block;
			float: right;
			margin-top: 3px;
			background-image: url(../../assets/images/close-1.png);
		}
		.hot{
			padding: 25px 0;
		}
		.hot p{
			height: 25px;
			padding: 0 3%;
			margin-bottom: 10px;
			color: #666;
			text-align: left;
			font-weight: 600;
    		font-family: "SimHei";
		}
		.hot ul li{
			width: 29%;
			margin: 5px 6px;
			color: #a4a4a4;
			border-radius: 5px;
			background: #f4f4f4;
		}
		.hot ul li a{
			height: 35px;
			font-size: 14px;
			display: block;
			line-height: 35px;
			color: #666;
		}
		.guessyoulike{
			padding: 0;
		}
		.guessyoulike ul{
			overflow: hidden;
		}
		.guessyoulike p{
			height: 45px;
			margin: 0;
			line-height: 45px;
			border-bottom: 1px solid #eee;
		}
		.guessyoulike em{
			display: inline-block;
			width: 17px;
			height: 20px;
			background-image: url(../../assets/images/heart.png);
			background-size: 100%;
			background-repeat: no-repeat;
			margin-right: 9px;
			position: relative;
    		top: 4px;
		}
		.guessyoulike ul li{
			width: 100%;
			background: #fff;
			border-bottom: 1px solid #eee;
			padding: 20px 0;
		}
		.guessyoulike img{
			margin-right: 5px;
			float: left;
		}
		.guessyoulike dl{
			width: 71%;
			float: left;
		}
		.guessyoulike dt p{
			padding: 0;
			font-weight: 500;
			width: 100%;
			height: 20px;
			line-height: 20px;
			font-size: 15px;
			overflow: hidden;
			word-wrap: break-word;
			border-width: 0;
		}
		.guessyoulike dd{
			margin-top: 10px;
		}
		.guessyoulike dd span{
			font-size: 14px;
			color: #E40077;
			float: left;
		}
	</style>