$(document).ready(function () {
  rsvpForm();
  loadImages();
});

var map = '<iframe width="640" height="480" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps/ms?msa=0&amp;msid=201398888939559602086.0004d3ba372798380cf15&amp;ie=UTF8&amp;t=m&amp;ll=45.540143,-122.66201&amp;spn=0.057712,0.109863&amp;z=13&amp;output=embed"></iframe><br /><small>View <a href="https://maps.google.com/maps/ms?msa=0&amp;msid=201398888939559602086.0004d3ba372798380cf15&amp;ie=UTF8&amp;t=m&amp;ll=45.540143,-122.66201&amp;spn=0.057712,0.109863&amp;z=13&amp;source=embed" style="text-align:left">Kate and Spencers Wedding Map</a> in a larger map</small>';

var loadImages = function () {
  var headerCB = function () {
    $("body").prepend("<header class='hidden' />");
    $("header").fadeIn("slow", function () {
      loadInitials();
    });
  }

  loadImage("images/header.png", headerCB);
}

loadInitials = function () {
  var initialsImage = "images/initials-banner.png"
  initialsCB = function () {
    $("header").append("<img src='"+initialsImage+"'>");
    $("header img").animate({top: 8, opacity: 1}, 500, function () {
      $(".column").fadeIn(function () {
        $("#map").append(map);
        $("body").append('<div class="footer" />');
      });
    });
  }

  loadImage(initialsImage, initialsCB);
}

var loadImage = function (src, cb) {
  $("<img>").load(cb).attr("src", src);
}

rsvpForm = function () {
  // TODO: Make DRY
  $("#has-plus-one").click(function () {
    $("#additional-guest").toggle($(this).is(":checked"));
  });
  $("#wants-to-help").click(function () {
    $("#help-options").toggle($(this).is(":checked"));
  });
}
