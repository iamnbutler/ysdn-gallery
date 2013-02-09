// Load scripts after page loads
$(document).ready(function(){
	$('.entry a.image').imgPreview({
		imgCSS: { maxWidth: 600 }
	});
});