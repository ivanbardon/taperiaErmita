console.log('funciono');

$ = jQuery;

$('#btn-map').click(function(){
	window.location.assign('comgooglemaps://?saddr=Current%20Location&daddr=40.5105277,0.42574020000006385')
});


var links = document.getElementsByTagName("a");
for(var i=0;i<links.length;i++)
{
    links[i].onclick=function()
    {
        window.location=this.getAttribute("href");
        console.log('apretado')
        return false
    }
}

$('.tarjetas').click(function(e){
  $(this).find('div.oculto').fadeToggle()
})

var $info = $('#nav_info_sec');

if (window.location.pathname === '/nuestra-carta/') {

	if (window.screen.width<=330){
		$(window).scroll(function(){
			if (window.scrollY<250) {
				$info.html('')
			}
			if (window.scrollY>310) {
				$info.html('<p>Ensaladas</p>')
			}
			if (window.scrollY>1043) {
				$info.html('<p>Torradas</p>')
			}
			if (window.scrollY>2488) {
				$info.html('<p>Bocadillos</p>')
			}
			if (window.scrollY>5111) {
				$info.html('<p>Carnes</p>')
			}
			if (window.scrollY>7191) {
				$info.html('<p>Pescados</p>')
			}
			if (window.scrollY>8049) {
				$info.html('<p>Arroces</p>')
			}
		})
	}
	if (window.screen.width>=370) {
		$(window).scroll(function(){
			if (window.scrollY<250) {
				$info.html('')
			}
			if (window.scrollY>325) {
				$info.html('<p>Ensaladas</p>')
			}
			if (window.scrollY>989) {
				$info.html('<p>Torradas</p>')
			}
			if (window.scrollY>2264) {
				$info.html('<p>Bocadillos</p>')
			}
			if (window.scrollY>4684) {
				$info.html('<p>Carnes</p>')
			}
			if (window.scrollY>6708) {
				$info.html('<p>Pescados</p>')
			}
			if (window.scrollY>7564) {
				$info.html('<p>Arroces</p>')
			}
		})
	}
}

if (window.location.pathname === '/los-menus/') {
	if (window.screen.width<330){
		$(window).scroll(function(){
			if (window.scrollY > 280) {
				$info.html('<p>MENÚS</p>')
			}else {
				$info.html('')
			}
		})
	}
	if (window.screen.width>331){
		$(window).scroll(function(){
			if (window.scrollY > 328) {
				$info.html('<p>MENÚS</p>')
			}else {
				$info.html('')
			}
		})
	}
}

if (window.location.pathname === '/las-tapas/') {
	if (window.screen.width<330){
		$(window).scroll(function(){
			if (window.scrollY > 280) {
				$info.html('<p>Las Tapas</p>')
			}else {
				$info.html('')
			}
		})
	}
	if (window.screen.width>330){
		$(window).scroll(function(){
			if (window.scrollY > 328) {
				$info.html('<p>Las Tapas</p>')
			}else {
				$info.html('')
			}
		})
	}
}

if (window.location.pathname === '/reservas/') {
	if (window.screen.width<330){
		$(window).scroll(function(){
			if (window.scrollY > 250) {
				$info.html('<p>Reservas</p>')
			}else {
				$info.html('')
			}
		})
	}
	if (window.screen.width>330){
		$(window).scroll(function(){
			if (window.scrollY > 284) {
				$info.html('<p>Reservas</p>')
			}else {
				$info.html('')
			}
		})
	}
}


var path = window.location.pathname;

if (path.length>2) {
	if (window.screen.width<330){
		window.scrollTo(0, 243)
	}
	if (window.screen.width>330){
		window.scrollTo(0, 274)
	}
}

var sheets = document.querySelectorAll('.Sheet');
var triggers = [document.querySelector('.Twitter'), document.querySelector('.Facebook')];
// Shows sheets after they have loaded.
setTimeout(function(){
	// Iterate through the NodeList.
	for (var i = 0; i < sheets.length; ++i) {
		sheets[i].classList.add('loaded');
	}
});
// Handles opening the sheets.
function toggleSheet(sheetID) {
	sheet = document.querySelector(sheetID);
	
	if ( sheet.classList.contains('selected') ) {
		sheet.classList.remove('selected');
		sheet.classList.add('unselected');
		sheet.blur();
		
		offDarkLayer();
	}
	else {
		sheet.classList.add('selected');
		sheet.classList.remove('unselected');
		sheet.focus();
		
		onDarkLayer();
	}
}
// Handles adding `<div class="darklayer"></div>` to DOM.
function addDarklayer() {
	var element = document.createElement("div");
	element.setAttribute('class', 'darklayer off');
	document.body.appendChild(element);
}
function onDarkLayer() {
	var darkLayer = document.querySelector('.darklayer');
	darkLayer.classList.add('loaded');
	darkLayer.classList.remove('off');
	darkLayer.classList.add('on');
}
function offDarkLayer() {
	darkLayer = document.querySelector('.darklayer');
	darkLayer.classList.remove('on');
	darkLayer.classList.add('off');
}
// Close selected sheet and turn darklayer off.
function offSelectedSheet() {
	selectedSheet = document.querySelector('.Sheet.selected');
	selectedSheet.blur();
	selectedSheet.classList.remove('selected');
	selectedSheet.classList.add('unselected');
	
	offDarkLayer();
}
// Add dark layer to DOM.
addDarklayer();
// Link triggers to sheets.
document.querySelector('.Twitter').addEventListener('click', function() {
	toggleSheet('#Twitter');
});

// Handles all cancel button behviours.
cancelBtns = document.querySelectorAll('.cancel');
for (var i = 0; i < cancelBtns.length; ++i) { // Iterate through the NodeList.
	var element = cancelBtns[i];
	element.addEventListener('touchstart', function(element) {
		element.classList.add('touched');
	});
	
	element.addEventListener('touchend', function(element) { 
		element.classList.remove('touched');
	});
	
	element.addEventListener('click', function() {
		offSelectedSheet();
	});
}
// Handles clicking the darklayer to dismiss sheets.
document.querySelector('.darklayer').addEventListener('click', function() {
	offSelectedSheet();
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-88901277-1', 'auto');
ga('send', 'pageview');