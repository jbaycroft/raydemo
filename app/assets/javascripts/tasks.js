$(document).ready(function(){
	var value = $('li#yes_no > #value, li#yes_no > #comma').text();
	var value = value.split(",");
	var index = $('li#yes_no > #index, li#yes_no > #comma').text();
	var index = index.split(",");
	var result = new Array ();
	for (i = 0; i < index.length; i++) {
		var x = parseInt(index[i]);
		var y = parseInt(value[i]);
		result[i] = x * y;
	}
	for (var i = 0; i < result.length; i++) {
		var t = result[i];
		if (t == 1) {
			$('tr.one').removeClass('hidden');
		}
		if (t == 2) {
			$('tr.two').removeClass('hidden');
		}
		if (t == 3) {
			$('tr.three').removeClass('hidden');
		}
		if (t == 4) {
			$('tr.four').removeClass('hidden');
		}
	}
});