var littleImages = document.querySelectorAll('.littleImage');
var littleImages = document.querySelectorAll('.littleImage');
var fullscreenContainer = document.getElementById('fullscreenContainer');
var fullscreenImg = document.getElementById('fullscreenImg');
var closeBtn = document.getElementById('closeBtn');
var leftArrow = document.getElementById('leftArrow');
var rightArrow = document.getElementById('rightArrow');
var currentIndex = 0; // 当前显示的图片索引
// 点击每个小图片时，显示全屏图片
littleImages.forEach(function(image, index) {
	image.addEventListener('click', function() {
		currentIndex = index;
		showFullscreenImage(currentIndex);
	});
});

// 点击关闭按钮时，隐藏全屏图片
closeBtn.addEventListener('click', function() {
	fullscreenContainer.style.display = 'none'; // 隐藏全屏容器
});

// 点击左箭头时，显示前一张图片
leftArrow.addEventListener('click', function() {
	currentIndex = (currentIndex - 1 + littleImages.length) % littleImages.length;
	showFullscreenImage(currentIndex);
});

// 点击右箭头时，显示后一张图片
rightArrow.addEventListener('click', function() {
	currentIndex = (currentIndex + 1) % littleImages.length;
	showFullscreenImage(currentIndex);
});

// 显示全屏图片
function showFullscreenImage(index) {
	fullscreenImg.src = littleImages[index].src; // 设置全屏图片的源为指定索引的小图片的源
	fullscreenContainer.style.display = 'flex'; // 显示全屏容器
}

// 点击全屏图片时，点击关闭按钮时，都会隐藏全屏图片
fullscreenContainer.addEventListener('click', function(event) {
	if (event.target === this) {
		fullscreenContainer.style.display = 'none';
	}
});


// 函数库
//删除一类元素
function RemoveElememts(selecterName) {
	let elements = document.querySelectorAll(selecterName);
	elements.forEach(item => {
		let parent = item.parentNode;
		parent.removeChild(item);
	})
}

//开关一个元素的样式类
function ToggleClassName(element, className) {
	if (typeof(element) == String) {
		let element1 = document.getElementById(element);
		element1.classList.toggle(className);
	} else {
		element.classList.toggle(className);
	}
}
//增加一个元素的样式类
function AddClassName(element, className) {
	if (typeof(element) == String) {
		let element1 = document.getElementById(element);
		element1.classList.add(className);
	} else {
		element.classList.add(className);
	}
}
//删除一个元素的类
function RemoveClassName(element, className) {
	if (typeof(element) == String) {
		let element1 = document.getElementById(element);
		element1.classList.remove(className);
	} else {
		element.classList.remove(className);
	}
}
