// import axios from 'axios'

// Vue.prototype.$axios = axios   //把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求
// Vue.prototype.HOME = '/api'    //重要在于这里，Vue.prototype.HOME = '/api'是一个定值，默认指向localhost，所有修改指向路径为'/api'，配置文件index.js定义的可跨域路径

new Vue({
	el: '#app',
	data() {
		return {
			info: null
		}
	},
	mounted() {
		axios
			.get('http://localhost:1221/allAffairs')
			.then(response => (this.info = response))
			.catch(function(error) { // 请求失败处理
				console.log(error);
			})
	},
	methods:{
		print:function() {
			alert(this.info);
		}
	}
})
