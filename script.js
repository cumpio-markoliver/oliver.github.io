
let list = document.querySelector('.slider .list');
let art = document.querySelectorAll('.slider .list .art');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthArt = art.length - 1;

next.onclick = function(){
	if(active + 1 > lengthArt){
		active = 0;
	} else {
		active = active + 1;
	}
	reloadSlider();
}

prev.onclick = function() {
	if(active - 1 < 0){
		active = lengthArt;
	} else {
		active = active - 1;
	}
	reloadSlider();
}

let refreshSlider = setInterval(()=>{next.click()}, 3000);

function reloadSlider(){
	let checkLeft = art[active].offsetLeft;
	list.style.left = -checkLeft + 'px';
	
	let lastActiveDot = document.querySelector('.slider .dots li.active');
	lastActiveDot.classList.remove('active');
	dots[active].classList.add('active');
	clearInterval(refreshSlider);
	refreshSlider = setInterval(()=>{next.click()}, 3000);
}

dots.forEach((li, key)=>{
	li.addEventListener('click', function(){
		active = key;
		reloadSlider();
	})
})


	
	