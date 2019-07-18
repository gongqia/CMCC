	<template>
	<main>
		<h1><em @click='back()'></em></li>城市选择</h1>
		<section>
			<p>A-G</p>
			<ul>
				<li v-for='(item,index) in list1' @click='change1(index)'>
					<router-link to=''>{{item}}</router-link>
				</li>
				<ul class="capital">
					<li v-for='(item,i) in anhui' v-show='n2==inow1' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
					<li v-for='(item,i) in fujian' v-show='n4==inow1' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
				</ul>
				<li v-for='(item,index) in list2' @click='change2(index)'>
					<router-link to=''>{{item}}</router-link>
				</li>
				<ul class="capital">
					<li v-for='(item,i) in guangdong' v-show='n1==inow2' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
					<li v-for='(item,i) in guangxi' v-show='n2==inow2' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
					<li v-for='(item,i) in gansu' v-show='n3==inow2' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
					<li v-for='(item,i) in guizhou' v-show='n4==inow2' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
				</ul>
			</ul>
		</section>
		<section>
			<p>H-J</p>
			<ul>
				<li v-for='(item,index) in list3' @click='change3(index)'>
					<router-link to=''>{{item}}</router-link>
				</li>
				<ul class="capital">
					<li v-for='(item,i) in hebei' v-show='n1==inow3' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
					<li v-for='(item,i) in henan' v-show='n2==inow3' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
					<li v-for='(item,i) in hainan' v-show='n3==inow3' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
					<li v-for='(item,i) in hubei' v-show='n4==inow3' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
				</ul>
				<li v-for='(item,index) in list4' @click='change4(index)'>
					<router-link to=''>{{item}}</router-link>
				</li>
				<ul class="capital">
					<li v-for='(item,i) in hunan' v-show='n1==inow4' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
					<li v-for='(item,i) in heilongjiang' v-show='n2==inow4' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
					<li v-for='(item,i) in jilin' v-show='n3==inow4' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
					<li v-for='(item,i) in jiangsu' v-show='n4==inow4' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
				</ul>
				<li v-for='(item,index) in list5' @click='change5(index)'>
					<router-link to=''>{{item}}</router-link>
				</li>
				<ul class="capital">
					<li v-for='(item,i) in jiangxi' v-show='n1==inow5' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
				</ul>
			</ul>
		</section>
		<section>
			<p>L-S</p>
			<ul>
				<li v-for='(item,index) in list6' @click='change6(index)'>
					<router-link to=''>{{item}}</router-link>
				</li>
				<ul class="capital">
					<li v-for='(item,i) in liaoning' v-show='n1==inow6' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
					<li v-for='(item,i) in neimenggu' v-show='n2==inow6' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
					<li v-for='(item,i) in ningxia' v-show='n3==inow6' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
					<li v-for='(item,i) in qinghai' v-show='n4==inow6' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
				</ul>
				<li v-for='(item,index) in list7' @click='change7(index)'>
					<router-link to=''>{{item}}</router-link>
				</li>
				<ul class="capital">
					<li v-for='(item,i) in loc0' v-show='n1==inow7'>
						<router-link to=''>{{item}}</router-link>
					</li>
					<li v-for='(item,i) in sichuan' v-show='n2==inow7' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
					<li v-for='(item,i) in shandong' v-show='n3==inow7' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
					<li v-for='(item,i) in shanxi' v-show='n4==inow7' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
				</ul>
				<li v-for='(item,index) in list8' @click='change8(index)'>
					<router-link to=''>{{item}}</router-link>
				</li>
				<ul class="capital">
					<li v-for='(item,i) in shanxi1' v-show='n1==inow8' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
				</ul>
			</ul>
		</section>
		<section>
			<p>T-Z</p>
			<ul>
				<li v-for='(item,index) in list9' @click='change9(index)'>
					<router-link to=''>{{item}}</router-link>
				</li>
				<ul class="capital">
					<li v-for='(item,i) in loc0' v-show='n1==inow9' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
					<li v-for='(item,i) in xinjiang' v-show='n2==inow9' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
					<li v-for='(item,i) in xizang' v-show='n3==inow9' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
					<li v-for='(item,i) in yunnan' v-show='n4==inow9' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
				</ul>
				<li v-for='(item,index) in list10' @click='change10(index)'>
					<router-link to=''>{{item}}</router-link>
				</li>
				<ul class="capital">
					<li v-for='(item,i) in zhejiang' v-show='n1==inow10' @click='add(item)'>
						<router-link to=''>{{item}}</router-link>
					</li>
				</ul>
			</ul>
		</section>
	</main>
	</template>
	<script>
		export default{
			data(){
				return{
					inow1:-1,inow2:-1,inow3:-1,inow4:-1,inow5:-1,inow6:-1,inow7:-1,inow8:-1,inow9:-1,inow10:-1,
					num1:1,num2:3,
					n1:0,n2:1,n3:2,n4:3,
					list1:['北京','安徽','重庆','福建'],
					list2:['广东','广西','甘肃','贵州'],
					list3:['河北','河南','海南','湖北'],
					list4:['湖南','黑龙江','吉林','江苏'],
					list5:['江西'],
					list6:['辽宁','内蒙古','宁夏','青海'],
					list7:['上海','四川','山东','山西'],
					list8:['陕西'],
					list9:['天津','新疆','西藏','云南'],
					list10:['浙江'],
					loc0:[],
					anhui:['合肥','芜湖','蚌埠','淮南','马鞍山','淮北','铜陵','安庆','黄山','滁州','阜阳','宿州','六安','亳州','池州','宣城'],
					fujian:['福州','厦门','宁德','莆田','泉州','漳州','龙岩','三明','南平'],
					guangdong:['广州','韶关','深圳','珠海','汕头','佛山','江门','湛江','茂名','肇庆','惠州','梅州','汕尾','河源','阳江','清远','东莞','中山','潮州','揭阳','云浮'],
					guangxi:['南宁','柳州','桂林','梧州','北海','防城港','钦州','贵港','玉林','百色','贺州','河池','来兵','崇左'],
					gansu:['兰州','嘉峪关','金昌','白银','天水','武威','张掖','平凉','酒泉','庆阳','定西','陇南','临夏','甘南'],
					guizhou:['贵阳','六盘水','遵义','安顺','铜仁','黔西南','毕节','黔东南','黔南州','贵安'],
					hebei:['石家庄','唐山','秦皇岛','邯郸','邢台','保定','张家口','承德','沧州','廊坊','衡水','雄安新区'],
					henan:['郑州','开封','洛阳','平顶山','安阳','鹤壁','新乡','焦作','濮阳','许昌','漯河','三门峡','南阳','商丘','信阳','周口','驻马店','济源市'],
					hainan:['海口','三亚','万宁市','乐东县','屯昌县','文昌市','昌江县','澄迈县','琼中县','琼海市','陵水县','白沙县','临高县'],
					hubei:['武汉','黄石','十堰','宜昌','襄阳','鄂州','荆门','孝感','荆州','黄冈','咸宁','随州','恩施','仙桃','潜江','天门'],
					hunan:['长沙','株洲','湘潭','衡阳','邵阳','岳阳','常德','张家界','益阳','郴州','永州','怀化','娄底','湘西自治州'],
					heilongjiang:['哈尔滨','齐齐哈尔','鸡西','鹤岗','双鸭山','大庆','伊春','佳木斯','七台河','牡丹江','黑河','绥化','大兴安岭'],
					jilin:['长春','吉林','四平','辽源','通化','白山','松原','白城','延边自治州'],
					jiangsu:['南京','无锡','徐州','常州','苏州','南通','连云港','淮安','盐城','扬州','镇江','泰州','宿迁'],
					jiangxi:['南昌','景德镇','萍乡','九江','新余','鹰潭','赣州','吉安','宜春','抚州','上饶'],
					liaoning:['沈阳','大连','鞍山','抚顺','本溪','丹东','锦州','营口','阜新','辽阳','盘锦','铁岭','朝阳','葫芦岛'],
					neimenggu:['呼和浩特','包头','乌海','赤峰','通辽','鄂尔多斯','呼伦贝尔','巴彦淖尔','乌兰察布','兴安盟','锡林郭勒盟','阿拉善盟'],
					ningxia:['银川','石嘴山','吴忠','固原','中卫'],
					qinghai:['西宁','海东','海北','黄南','海南','果洛','玉树','海西','格尔木市'],
					sichuan:['成都','自贡','攀枝花','泸州','德阳','绵阳','广元','遂宁','内江','乐山','南充','眉山','宜宾','广安','达州','雅安','巴中','资阳','阿坝','甘孜','凉山'],
					shandong:['济南','青岛','淄博','枣庄','东营','烟台','潍坊','济宁','泰安','威海','日照','莱芜','临沂','德州','聊城','滨州','菏泽'],
					shanxi:['太原','大同','阳泉','长治','晋城','朔州','晋中','运城','忻州','临汾','吕梁'],
					shanxi1:['西安','铜川','宝鸡','咸阳','渭南','延安','汉中','榆林','安康','商洛'],
					xinjiang:['乌鲁木齐','克拉玛依','吐鲁番','哈密','昌吉','博州','巴州','阿克苏','克州','喀什','哈密','昌吉','博州','巴州','阿克苏','克州','喀什','和田','伊犁','塔城','阿勒泰','省直辖单位','奎屯','石河子'],
					xizang:['拉萨','日喀则','山南','林芝','昌都','那曲','阿里'],
					yunnan:['昆明','曲靖','玉溪','保山','丽江','普洱','临沧','楚雄','红河州','文山','西双版纳','大理','德宏','怒江','迪庆'],
					zhejiang:['杭州','宁波','温州','嘉兴','湖州','绍兴','金华','衢州','舟山','台州','丽水']
					
				}
			},
			methods:{
				back(){
                    this.$router.go(-1)
               },
				change1(i){
//					console.log(i)
//					console.log(this.list1[i])
					var lc = this.list1[i]
					if(i==0||i==2){
						this.$store.commit('changeloc',lc)
						this.$router.push({
							name: 'Shop'
						})
					}
					this.inow2=-1,
					this.inow3=-1,
					this.inow4=-1,
					this.inow5=-1,
					this.inow6=-1,
					this.inow7=-1,
					this.inow8=-1,
					this.inow9=-1,
					this.inow10=-1,
					this.inow1=i
					
				},
				add(i){
					this.$store.commit('changeloc',i)
					this.$router.push({
						name: 'Shop'
					})
				},
				change2(i){
					this.inow1=-1,
					this.inow3=-1,
					this.inow4=-1,
					this.inow5=-1,
					this.inow6=-1,
					this.inow7=-1,
					this.inow8=-1,
					this.inow9=-1,
					this.inow10=-1,
					this.inow2=i
				},
				change3(i){
					this.inow1=-1,
					this.inow2=-1,
					this.inow4=-1,
					this.inow5=-1,
					this.inow6=-1,
					this.inow7=-1,
					this.inow8=-1,
					this.inow9=-1,
					this.inow10=-1,
					this.inow3=i
					
				},
				change4(i){
					this.inow1=-1,
					this.inow2=-1,
					this.inow3=-1,
					this.inow5=-1,
					this.inow6=-1,
					this.inow7=-1,
					this.inow8=-1,
					this.inow9=-1,
					this.inow10=-1,
					this.inow4=i
				},
				change5(i){
					this.inow1=-1,
					this.inow2=-1,
					this.inow3=-1,
					this.inow4=-1,
					this.inow6=-1,
					this.inow7=-1,
					this.inow8=-1,
					this.inow9=-1,
					this.inow10=-1,
					this.inow5=i
				},
				change6(i){
					this.inow1=-1,
					this.inow2=-1,
					this.inow3=-1,
					this.inow4=-1,
					this.inow5=-1,
					this.inow7=-1,
					this.inow8=-1,
					this.inow9=-1,
					this.inow10=-1,
					this.inow6=i
				},
				change7(i){
					var lc = this.list7[i]
					if(i==0){
						this.$store.commit('changeloc',lc)
						this.$router.push({
							name: 'Shop'
						})
					}
					this.inow1=-1,
					this.inow2=-1,
					this.inow3=-1,
					this.inow4=-1,
					this.inow5=-1,
					this.inow6=-1,
					this.inow8=-1,
					this.inow9=-1,
					this.inow10=-1,
					this.inow7=i
				},
				change8(i){
					this.inow1=-1,
					this.inow2=-1,
					this.inow3=-1,
					this.inow4=-1,
					this.inow5=-1,
					this.inow6=-1,
					this.inow7=-1,
					this.inow9=-1,
					this.inow10=-1,
					this.inow8=i
				},
				change9(i){
					var lc = this.list9[i]
					if(i==0){
						this.$store.commit('changeloc',lc)
						this.$router.push({
							name: 'Shop'
						})
					}
					this.inow1=-1,
					this.inow2=-1,
					this.inow3=-1,
					this.inow4=-1,
					this.inow5=-1,
					this.inow6=-1,
					this.inow7=-1,
					this.inow8=-1,
					this.inow10=-1,
					this.inow9=i
				},
				change10(i){
					this.inow1=-1,
					this.inow2=-1,
					this.inow3=-1,
					this.inow4=-1,
					this.inow5=-1,
					this.inow6=-1,
					this.inow7=-1,
					this.inow8=-1,
					this.inow9=-1,
					this.inow10=i
				}
//				
			},
			mounted(){
				document.onscroll=null
			}
		}
	</script>
	<style scoped="">
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
		section{
			width: 100%;
			float: left;
			border-top: 1px solid #dfdfdf;
		}
		section p{
			font-size: 14px;
			text-align: left;
			background-color: #f2f5f8;
			padding: 11px 20px;
			border-bottom: 1px solid #dfdfdf;
    		position: relative;
		}
		section p:after{
			content: '';
			background: #e40177;
			width: 5.5px;
			height: 15px;
			position: absolute;
			left: 9px;
			top: 50%;
			transform: translateY(-50%);
		}
		section ul{
			padding: 0px;
			margin: 0px;
			/*border-bottom: 1px dashed #dfdfdf;*/
			float: left;
			width: 100%;
		}
		.capital{
			background-color: #eee;
			border-bottom: 0px;
		}
		section ul li{
			color: #666;
			font-size:14px;
			width: 25%;
			padding: 10px 0;
			margin: 0px;
			position: relative;
			float: left;
			border-bottom: 1px dashed #dfdfdf;
		}
		section ul:nth-last-child{
			/*border-bottom-width: 0px;*/
		}
		section ul li:after{
			content: "";
			height: 15px;
			width: 1px;
			position: absolute;
			top: 30%;
    		right: 0;
    		background: #dfdfdf;
		}
		section ul li a{
			color: #666;
			font-size:14px;
		}
	</style>