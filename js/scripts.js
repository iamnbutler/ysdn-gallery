// Load scripts after page loads
$(window).load(function(){
	$(".image").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',
    	maxWidth    : '70%',
    	padding     : 10,

    	helpers : {
    		title : {
    			type : 'inside'
    		},
    	}
    });	
});