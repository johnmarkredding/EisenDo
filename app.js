/*jslint browser: true*/
/*global $, jQuery, alert, console*/
var opt1 = '#NUrg', opt2 = '#Urg',
	opt3 = '#Imp', opt4 = '#Unimp';

function tog(opt1, opt2) {
	'use strict';
	if ($(opt1).hasClass('hidden')) {
		$(opt1).removeClass('hidden');
		$(opt2).addClass('hidden');
	} else if ($(opt2).hasClass('hidden')) {
		$(opt2).removeClass('hidden');
		$(opt1).addClass('hidden');
	}
}

function submit() {
	'use strict';
	var targetID, buffer = $('#TodoInput').val(), newLI = "<li>" + buffer + "</li>";
	
	if (($(opt2).hasClass('hidden') === false) && ($(opt3).hasClass('hidden') === false)) {
		targetID = '#Do';
	} else if (($(opt2).hasClass('hidden') === false) && ($(opt4).hasClass('hidden') === false)) {
		targetID = '#Delegate';
	} else if (($(opt1).hasClass('hidden') === false) && ($(opt3).hasClass('hidden') === false)) {
		targetID = '#Decide';
	} else if (($(opt1).hasClass('hidden') === false) && ($(opt4).hasClass('hidden') === false)) {
		targetID = '#Delete';
	}
	if (buffer !== '') {
		$(targetID).append(newLI);
	}
	$('#TodoInput').val('');
	targetID = '';
	buffer = '';
	newLI = '';
}
function enableSort() {
	'use strict';
	$("#Delete, #Delegate, #Decide, #Do").sortable({
		connectWith: ".connectedSortable"
	});
}

$(document).ready(function () {
	'use strict';
	
	$(opt1).click(function () {
		tog(opt1, opt2);
	});
	$(opt3).click(function () {
		tog(opt3, opt4);
	});
	$(opt2).click(function () {
		tog(opt1, opt2);
	});
	$(opt4).click(function () {
		tog(opt3, opt4);
	});
	$('#Add').click(function () {
		submit();
	});
	enableSort();
});