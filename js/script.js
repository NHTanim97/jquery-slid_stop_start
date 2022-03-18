$(document).ready(function(){
$('#slid').click(function(){
 $("#box").slideToggle(2000);
});


$('#stop').click(function(){
    $('#box').stop();
})
});