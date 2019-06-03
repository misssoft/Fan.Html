//$(document).on('click', ':not(form)[data-confirm]', function(e){

$(document).on('click', '#delete_link', function(e){
    if(!confirm($(this).data('confirm'))){
      e.stopImmediatePropagation();
      e.preventDefault();
		}
});

$(document).on('click', '#delete_button', function(e){
    if(!confirm($(this).data('confirm'))){
    	e.stopImmediatePropagation();
      e.preventDefault();
	}
});

$(document).on('submit', 'form', function(e){
    if(!confirm($(this).data('confirm'))){
    	e.stopImmediatePropagation();
      e.preventDefault();
	}
});


$(document).on('input', 'select', function(e){
    var msg = $(this).children('option:selected').data('confirm');
    if(msg != undefined && !confirm(msg)){
        $(this)[0].selectedIndex = 0;
    }
});

