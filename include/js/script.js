var $menu = $('.nav ul');

$menu.menuAim({
	activate: activateSubmenu,
	deactivate: deactivateSubmenu
});

function activateSubmenu(row) {
	var $row = $(row),
      $submenu = $row.children('ul');

	$row.children('a').addClass('hover');
	$submenu.css({display: 'block'});
}

function deactivateSubmenu(row) {
	var $row = $(row),
		$submenu = $row.children('ul');

	$row.find('a').removeClass('hover');
	$submenu.css('display', 'none');
}

$(document).click(function() {
	$('a.hover').removeClass('hover');
	$('.popover').css('display', 'none');
});