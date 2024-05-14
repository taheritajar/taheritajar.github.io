var showBox = $(".i-recommend-box");
var menuLi = $('.i-re-menu li');
menuLi.on("click",function()
{
  $(this).addClass('on').siblings('li').removeClass('on'); 
  var liData = $(this).attr("data");
  for (var i = 0; i < showBox.length; i++) 
  {
    var showBoxData = $(showBox[i]).attr("data");
    if (liData == showBoxData) 
    {
      $(showBox[i]).show().siblings(".i-recommend-box").hide();
    }
  }
})