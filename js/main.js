$(document).ready(() => {
  const TaxiSound = document.getElementById(
    `taxi-${Math.floor(Math.random() * 3) + 1}`
  );
  if ($(".tp-Preloader").length) {
    setTimeout(() => {
      $("main").css("visibility", "visible");
      $(".loader").css("display", "none");
      $(".TapToGo").css("display", "block");
      setTimeout(() => {
        $(".tp-Preloader").addClass("active");
        $(".TapToGo").css("display", "none");
        setTimeout(() => {
          $(".tp-Preloader").css("display", "none");
        }, 500);
      }, 5000);
      $(".tp-Preloader").click(() => {
        $(".tp-Preloader").addClass("active");
        $(".loader").css("display", "none");
        $(".TapToGo").css("display", "none");
        TaxiSound.play();
        setTimeout(() => {
          $(".tp-Preloader").css("display", "none");
        }, 500);
      });
    }, 2000);
  }
  if ($(".menu-btn").length) {
    let flagOpen = false;
    $(".menu-btn").click(() => {
      if (!flagOpen) {
        flagOpen = true;
        $(".menu-btn").addClass("active");
        $("header").addClass("active");
        $(".small-view-menu").removeClass("animate__rollOut");
        $(".small-view-menu").addClass("animate__rollIn");
      } else {
        flagOpen = false;
        $(".small-view-menu").removeClass("animate__rollIn");
        $(".small-view-menu").addClass("animate__rollOut");
        $(".menu-btn").removeClass("active");
        setTimeout(() => {
          $("header").removeClass("active");
        }, 500);
      }
    });
  }
  if ($("#boogh").length) {
    const Boogh = document.getElementById("boogh");
    let isBooghFinished = true;
    if (isBooghFinished) {
      $("#logo").click(() => {
        isBooghFinished = false;
        Boogh.play();
      });
      Boogh.onended = () => {
        isBooghFinished = true;
      };
    }
  }
});
