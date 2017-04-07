$(document).ready(function(){
	$('.burger').click(function(){
		if($(this).hasClass('active')){
			$('.burger, nav ul').removeClass('active');
		}
		else{
			$('.burger, nav ul').addClass('active');
		}
	});
	$('.item_slider li').click(function(){
		if(!$(this).hasClass('active')){
			$('.item_slider li').each(function(){
				$(this).removeClass('active');
			});
			$(this).addClass('active');
			$('.big_img img').attr('src', $(this).find('img').attr('src'));
		}
	});
	
	var limitSlider = document.getElementById('slider-limit');
	noUiSlider.create(limitSlider, {
		start: [ 1000, 2000 ],
		behaviour: 'drag',
		connect: true,
		range: {
			'min': 0,
			'max': 10000
		}
	});
	
	
	var limitFieldMin = document.getElementById('slider-limit-value-min');
	var limitFieldMax = document.getElementById('slider-limit-value-max');

	var inputNumber = document.getElementById('input-number');

	limitSlider.noUiSlider.on('update', function( values, handle ) {

		var value = values[handle];

		if ( handle ) {
			limitFieldMax.value = Math.round(value);
		} else {
			limitFieldMin.value = Math.round(value);
		}
	});

	limitFieldMax.addEventListener('change', function(){
		limitSlider.noUiSlider.set([null, this.value]);
	});
	limitFieldMin.addEventListener('change', function(){
		limitSlider.noUiSlider.set([null, this.value]);
	});
})