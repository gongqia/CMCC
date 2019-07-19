	<template>
	<section>
		<div class="flower">
			<img id="img1" src="../../assets/images/value1.png" />
			<img id="img2" src="../../assets/images/value2.png" />
			<h5><router-link to=''><img src="../../assets/images/value-check.png"/></router-link></h5>
			<p><router-link to=''><img src="../../assets/images/value-free.png"/></router-link></p>
			<span id="next"><img src="../../assets/images/value-next.png"/></span>
			
		</div>
		<img src="../../assets/images/value3.png"/>
		<img src="../../assets/images/value5.png"/>
		<img src="../../assets/images/value6.png"/>
	</section>
	</template>
	<script>
		export default{
			data(){
				return{
					show:false
				}
			},
			mounted(){
				document.onscroll=null
				document.documentElement.scrollTop=window.pageYOffse=document.body.scrollTop=0
				var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
				document.onscroll = function(){
					if(scrollTop>0){
						next.style.display='none';
						img1.style.display='none';
						img2.style.display='block';
					}else{
						next.style.display='block';
						img1.style.display='block';
						img2.style.display='none';
					}
				}
			}
		}
	</script>
	<style scoped="scoped">
		section{
			width: 100%;
			overflow: hidden;
			padding-bottom: 70px;
		}
		section img{
			width: 100%;
			display: block;
		}
		.flower{
			width: 100%;
			overflow: hidden;
			position: relative;
		}
		.flower img:nth-of-type(2){
			display: none;
		}
		.flower h5{
			display: inline-block;
			position: fixed;
			top: 1%;
			right: 2%;
			width: 20vw;
			max-width: 125px;
		}
		.flower p{
			display: inline-block;
			position: fixed;
			left: 50%;
    		transform: translateX(-50%);
			width: 82.66vw;
			max-width: 616px;
			bottom: 35px;
		}
		.flower span{
			position: fixed;
			bottom: 14px;
			width:11.06vw ;
			max-width: 83px;
			left: 50%;
    		transform: translateX(-50%);
		}
	</style>