$(document).ready(function () {
  rsvpForm();
  loadImages();
});

var map = '<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=525+SE+PINE+STREET+PORTLAND,+ORE+97214&amp;aq=&amp;sll=45.54958,-122.85882&amp;sspn=0.034441,0.084543&amp;g=union%2Fpine+portland,+OR&amp;ie=UTF8&amp;hq=&amp;hnear=525+SE+Pine+St,+Portland,+Multnomah,+Oregon+97214&amp;ll=45.520868,-122.66019&amp;spn=0.017229,0.042272&amp;t=m&amp;z=14&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=525+SE+PINE+STREET+PORTLAND,+ORE+97214&amp;aq=&amp;sll=45.54958,-122.85882&amp;sspn=0.034441,0.084543&amp;g=union%2Fpine+portland,+OR&amp;ie=UTF8&amp;hq=&amp;hnear=525+SE+Pine+St,+Portland,+Multnomah,+Oregon+97214&amp;ll=45.520868,-122.66019&amp;spn=0.017229,0.042272&amp;t=m&amp;z=14" style="color:#0000FF;text-align:left">View Larger Map</a></small>';

loadImages = function () {
  headerCB = function () {
    $("body").prepend("<header class='hidden' />");
    $("header").fadeIn("slow", function () {
      //$("#map").append(map);
      loadInitials();
    });
  }

  loadImage("images/header.png", headerCB);
}

loadInitials = function () {
  var initialsImage = "images/initials-banner.png"
  initialsCB = function () {
    $("header").append("<img src='"+initialsImage+"'>");
    $("header img").animate({top: 10, opacity: 1}, 500);
  }

  loadImage(initialsImage, initialsCB);
}

loadImage = function (src, cb) {
  img = $("<img>");
  img.load(function() {
    cb();
  }).attr("src", src);
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
