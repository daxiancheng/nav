window.onscroll = function(){  /*窗口滚动时*/
    if(window.scrollY>0){  /*滚动距离大于0时*/
        nav_box.classList.add('sticky')
    }else{
        nav_box.classList.remove('sticky')
    }
}
/*let aTags = document.getElementsByClassName('submeun_box') 获取类名正确的标签
for(let i=0;i<aTags.length;i++){  遍历，因为对每个a的逻辑都是一样的
    aTags[i].onmouseenter = function(c){
        let a = c.currentTarget
        let brother = a.nextSibling
        while(brother.nodeType === 3){  brother的节点值为3是回车文本,存在的bug是可能会找到其他的标签
            while(brother.tagName !== 'UL'){ tagName 返回的是大写的标签名字
            brother = brother.nextSibling
        }
        brother.classList.add('active')
    }
    aTags[i].onmouseleave = function(h){
        let a = h.currentTarget
        let brother = a.nextSibling
        while(brother.nodeType === 3){
            brother = brother.nextSibling
        }
        brother.classList.remove('active')
    }
    存在的bug是只要移出a的范围submeun就会消失
}*/
/* let liTags = document.getElementsByClassName('submeun_box')   存在bug*/
let liTags = document.querySelectorAll('nav.meun>ul>li') /*标签选择器*/
for(let i=0;i<liTags.length;i++){  
    liTags[i].onmouseenter = function(c){
        c.currentTarget.classList.add('active')
        /*let sun = li.getElementsByTagName('ul')[0]   找到ul，因为只有一个所以是0,存在bug
        sun.classList.add('active')*/
    }
    liTags[i].onmouseleave = function(h){
        h.currentTarget.classList.remove('active')
    }
}
let aTags = document.querySelectorAll('nav.meun>ul>li>a')
for(let i=0; i<aTags.length;i++){
    aTags[i].onclick = function(x){
        x.preventDefault()
        let a = x.currentTarget
        let href = a.getAttribute('href') //#siteabout
        let element = document.querySelector(href)
        let top = element.offsetTop
        window.scrollTo(0, top - 80)
    }
}
