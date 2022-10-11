console.log("working");
//grab elements
// const follow = document.querySelector("#follow");

// jq
$(document).bind("mousemove", (e) => {
  $("#follow").css({
    left: e.pageX + 5,
    top: e.pageY - 20,
  });
});

//listeners
// follow.addEventListener('mousemove', ()=> {

// })
