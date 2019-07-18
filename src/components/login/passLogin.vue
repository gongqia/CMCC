<template>
	<main>
		<p class="tip" v-show='tp'>{{tips}}</p>
		<ul class="list">
			<li><i></i><input type="text" placeholder="手机号码" @blur='bl1()' v-bind:class='in1'/></li>
			<li><i></i><input type="password" placeholder="请您使用客服密码，购买、办理更方便" @blur='bl2()' v-bind:class='in2'/></li>
		</ul>
	</main>
</template>
<script>
	export default{
		data(){
			return{
				tp:false,
				tips:'',
				in1:'',
				in2:''
			}
		},
		methods:{
			bl1(){
				console.log('111')
				var i1 = document.getElementsByTagName('input')[0]
				if(i1.value==''){
					this.tips='请输入手机号码'
					this.tp=true
					this.in1='in'
				}else{
					this.tp=false
					this.in1=''
				}
			},
			bl2(){
				var i2 = document.getElementsByTagName('input')[1]
				if(i2.value==''){
					this.in2='in'
					this.tips='请输入短信随机码'
				}else{
					this.tips=''
					this.in2=''
				}
			}
		}
	}
</script>
<style scoped="scoped">
	.tip{
		color: #eb573d;
		padding: 10px 20px 0 0;
		background: #fff;
		text-align: left;
		font-size: 14px;
	}
	.list{
		width: 100%;
		padding:20px 0px;
		padding-bottom: 0px;
		
	}
	.list li{
		width: 100%;
		color: #333;
	}
	.list li:nth-of-type(1){
		margin-bottom: 20px;
	}
	.list li input{
		height: 46px;
		width: 100%;
		font-size: 14px;
		padding: 10px 20px 10px 35px;
		border: 1px solid #dfdfdf;
	}
	.in{
		border: 1px solid #eb573d!important;
	}
	.list li i{
		width: 35px;
		height: 42px;
		display: block;
		position: absolute;
		background-image: url(../../assets/images/phone_icon.png);
		background-size: 13px;
	    background-repeat: no-repeat;
	    background-position: center;
	}
	.list li:nth-of-type(2) i{
		background-image: url(../../assets/images/psw_icon.png);
		background-size: 15px;
	}
</style>