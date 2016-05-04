$(document).ready(function(){
  var divs = $(".shots li");
  for(var i = 0; i < divs.length; i+=3) {
    divs.slice(i, i+3).wrapAll("<div class='wrap'></div>");
  };

  $(".wrap").each(function(){
    var wrapHeight = $(this).innerHeight();

    $(this).css({
      "height" : wrapHeight
    });
  });
});
