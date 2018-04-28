var fontColor = '#ffffff';
        
$("#pub").hide();
$("#act").hide();
$("#contact").hide();
$("#aboutButton").click(function() {
    $("#pub").hide("slow");
    $("#act").hide("slow");
    $("#contact").hide("slow");
    $("#about").show("slow");
});
$("#pubButton").click(function() {
    $("#about").hide("slow");
    $("#act").hide("slow");
    $("#contact").hide("slow");
    $("#pub").show("slow");
});
$("#actButton").click(function() {
    $("#pub").hide("slow");
    $("#about").hide("slow");
    $("#contact").hide("slow");
    $("#act").show("slow");
});
$("#contactButton").click(function() {
    $("#pub").hide("slow");
    $("#act").hide("slow");
    $("#about").hide("slow");
    $("#contact").show("slow");
});
$("div#menu > ul li").mouseover(function() {
    $(this).animate({
        color: fontColor,
        margin: '0 0 0 20px'
     }, 200)
}).mouseout(function() {
    $(this).animate({
        color: '#999',
        margin: '0'
     }, 200)
});
$("h1").mouseover(function() {
    $(this).animate({
        color: '#1C8FE1'
     }, 200)
}).mouseout(function() {
    $(this).animate({
        color: fontColor
     }, 200)
});