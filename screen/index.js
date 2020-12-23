//返回文档中匹配指定 CSS 选择器的所有元素
// var preImg = document.getElementById("pre");
// var nextImg = document.getElementById("next");
var imgs = document.querySelectorAll("#contentList li");
var rount = document.querySelectorAll("#contentRount li");

//给rount标签挂载一个下标
for(var i = 0; i < rount.length; i++) {
	rount[i].setAttribute("data-index", i);
}

//当前显示第几张图片
var currentIndex = 0;

//让第一张图片和圆点统一
showImg()

//将点击上一张提取出来
function goPre() {
	currentIndex--;
	if(currentIndex == -1) {
		currentIndex = imgs.length - 1;
	}
	showImg();
}

//将点击下一张提取出来
function goNext() {
	currentIndex++;
	if(currentIndex == imgs.length) {
		currentIndex = 0;
	}
	showImg();
}

//遍历循环
for(var i = 0; i < rount.length; i++) {
	rount[i].addEventListener('click', function(event) {
		currentIndex = Number(event.target.getAttribute('data-index'));
		showImg()
	});
}
//根据图片的下标显示图片
function showImg() {
	//图片
	for(i = 0; i < imgs.length; i++) {
		//三个等于号既要比较数据的值,还要比较数据的类型/ 而两个等于只比较数据的值
		if(i === currentIndex) {
			//setAttribute创建或改变某个新属性。
			imgs[i].setAttribute('class', 'active')
		} else {
			imgs[i].removeAttribute('class')
		}
	}
	
	//圆点
	for(i = 0; i < rount.length; i++) {
		//三个等于号既要比较数据的值,还要比较数据的类型/ 而两个等于只比较数据的值
		if(i === currentIndex) {
			//setAttribute创建或改变某个新属性。
			rount[i].setAttribute('class', 'activer1')
		} else {
			rount[i].removeAttribute('class')
		}
	}
}

//指定周期
setInterval(function() {
	goNext()
}, 8000)
