!function () {
  /*//初始化
  var APP_ID = 'zkO9zYC2JtF0AWMgMKYMb77d-gzGzoHsz';
  var APP_KEY = '8kvm3GxYmqts8DSHnd0Fpgtu';
  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  });
  //创建表
  var TestObject = AV.Object.extend('fuck');
  var testObject = new TestObject();
  testObject.save({
    words: 'Hello World!'
  }).then(function (object) {
    //alert('LeanCloud Rocks!');
    //console.log(object)
  })
  //查询表中数据
  var query = new AV.Query('fuck');
  query.find().then((x) => console.log(x))
  var li = document.createElement('li')
  li.textContent = 'ha'
  var ol = document.querySelector('#messages_ol')
  ol.appendChild(li)*/
  var model = {
  	init:function(){
  		var APP_ID = 'zkO9zYC2JtF0AWMgMKYMb77d-gzGzoHsz'
  		var APP_KEY = '8kvm3GxYmqts8DSHnd0Fpgtu'
  		AV.init({ appId: APP_ID, appKey: APP_KEY })
  	},
  	creatAndSave:function(name,content){
  		var Message = AV.Object.extend('Message')
  		var message = new Message()
  		return message.save({
  			'name': name,
  			'content': content
  		})
  	},
  	fetch:function(){
  		var query = new AV.Query('Message')
  		return query.find()
  	}
  }
  var view = document.querySelector('#messages')
  console.log(view)
  var controller = {
  	model:null,
  	view:null,
  	init:function(view,model){
  		this.model =model
  		this.view = view
  		this.form = view.querySelector('form')
  		this.model.init()
  		this.bindEvent()
  		this.readMessage()
  	},
  	bindEvent:function(){
  		this.form.addEventListener('submit', (f) => {
  			f.preventDefault()
  			console.log('1')
  			var content = this.form.querySelector('input[name=content]').value
  			var name = this.form.querySelector('input[name=name]').value
  			if(name && content){
         this.model.creatAndSave(name,content).then((m)=>{  //把刷新要做的直接做了
         	var li = document.createElement('li')
         	li.textContent = `${m.attributes.name}:${m.attributes.content}`
         	var ol = document.querySelector('#messages_ol')
         	ol.appendChild(li)
         	this.form.querySelector('input[name=content]').value=''
         })
     }
 })
  	},
  	readMessage:function(){
  		this.model.fetch().then((x) => {
  			x.forEach(element => {
  				let name = element.attributes.name
  				let content = element.attributes.content
  				var li = document.createElement('li')
  				li.textContent = `${name}:${content}`
  				var ol = document.querySelector('#messages_ol')
  				ol.appendChild(li)
  			});
  		})
  	}
  }
  controller.init(view,model)
  console.log('2')
}.call()