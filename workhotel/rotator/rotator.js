// JavaScript Document
<!-- Автор Dylan Wagstaff, http://www.alohatechsupport.net -->
function theRotator() {
	// Устанавливаем прозрачность всех картинок в 0
	$('.showb ul li').css({opacity: 0.0});
	// Берем первую картинку и показываем ее (по пути включаем полную видимость)
	$('.showb ul li:first').css({opacity: 1.0});
 	// Вызываем функцию rotate для запуска слайдшоу, 2000 = смена картинок происходит раз в 2 секунд
	setInterval('rotate()', 2000);
}
function rotate() {	
	// Берем первую картинку
	var current = ($('.showb ul li.show')?  $('.showb ul li.show') : $('.showb ul li:first'));
	// Берем следующую картинку, когда дойдем до последней начинаем с начала
	var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('.showb ul li:first') :current.next()) : $('.showb ul li:first'));	
	// Расскомментируйте, чтобы показвать картинки в случайном порядке
	// var sibs = current.siblings();
	// var rndNum = Math.floor(Math.random() * sibs.length );
	// var next = $( sibs[ rndNum ] );
	// Подключаем эффект растворения/затухания для показа картинок, css-класс show имеет больший z-index
	next.css({opacity: 0.0})
	.addClass('show')
	.animate({opacity: 1.0}, 1000);
	// Прячем текущую картинку
	current.animate({opacity: 0.0}, 1000)
	.removeClass('show');
};
$(document).ready(function() {		
	// Запускаем слайдшоу
	theRotator();
});