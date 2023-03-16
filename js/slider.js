$("document").ready(function () {
  const leftMargin = $("#wrapper").offset().left;
  $(".carousel-row").css("margin-left", `-${leftMargin}px`);

  const leftArrow = $(".arrow-buttons .left");
  const rightArrow = $(".arrow-buttons .right");

  leftArrow.on("click", function () {
    moveImg(-1);
  });

  rightArrow.on("click", function () {
    moveImg(1);
  });

  function moveImg(direction) {
    if (direction === 1) {
      $(".carousel-row.top img:first").before($(".carousel-row.top img:last"));
      $(".carousel-row.bottom img:first").before(
        $(".carousel-row.bottom img:last")
      );
    } else if (direction === -1) {
      $(".carousel-row.top img:last").after($(".carousel-row.top img:first"));
      $(".carousel-row.bottom img:first").before(
        $(".carousel-row.bottom img:last")
      );
    }
  }

  function whenLast() {

  }

  function animate() {
    // pomice carousel
  }
});
