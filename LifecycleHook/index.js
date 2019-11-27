var data = {a:1}

var vm = new Vue({
	el:'#app',
	data:data,
	created:function(){
		console.log(this.a)
	}
})


// vm.a == data.a