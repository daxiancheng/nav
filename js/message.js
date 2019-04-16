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
  var view = document.querySelector('#messages')
  var form = view.querySelector('form')
  var APP_ID = 'zkO9zYC2JtF0AWMgMKYMb77d-gzGzoHsz'
  var APP_KEY = '8kvm3GxYmqts8DSHnd0Fpgtu'
  AV.init({ appId: APP_ID, appKey: APP_KEY })
  form.addEventListener('submit', (f) => {
    //f.preventDefault()
    var content = form.querySelector('input[name=content]').value
    var name = form.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message')
    var message = new Message()
    if (content && name) {
      message.save({
        'name': name,
        'content': content
      }).then(function (object) {
        window.location.reload()
        alert('成功')
      })
    } else {
      alert('姓名和留言不能为空')
    }
  })
  var query = new AV.Query('Message')
  query.find().then((x) => {
    console.log(x)
    x.forEach(element => {
      let name = element.attributes.name
      let content = element.attributes.content
      var li = document.createElement('li')
      li.textContent = `${name}:${content}`
      var ol = document.querySelector('#messages_ol')
      ol.appendChild(li)
    });
  })

}.call()