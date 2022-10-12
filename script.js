console.log("working");
//grab elements
// const follow = document.querySelector("#follow");

// jq
$(document).bind("mousemove", (e) => {
  $("#follow").css({
    left: e.pageX + 15,
    top: e.pageY + 1,
  });

  $("#follow").click(function () {
    $("span").stop();
  });
});

//listeners
// follow.addEventListener('mousemove', ()=> {

// })
