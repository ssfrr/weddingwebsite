$(document).ready(function () {
  rsvpForm();
  loadImages();

  $.cookie.json = true;

  rsvpStatus = $.cookie("rsvpStatus") || {submitted: false};
  if (rsvpStatus.submitted) {
    showRsvpStatus();
  }
});

var rsvpStatus;

var map = '<iframe width="640" height="480" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps/ms?msa=0&amp;msid=201398888939559602086.0004d3ba372798380cf15&amp;ie=UTF8&amp;t=m&amp;ll=45.540143,-122.66201&amp;spn=0.057712,0.109863&amp;z=13&amp;output=embed"></iframe><br /><small>View <a href="https://maps.google.com/maps/ms?msa=0&amp;msid=201398888939559602086.0004d3ba372798380cf15&amp;ie=UTF8&amp;t=m&amp;ll=45.540143,-122.66201&amp;spn=0.057712,0.109863&amp;z=13&amp;source=embed" style="text-align:left">Kate and Spencers Wedding Map</a> in a larger map</small>';

var loadImages = function () {
  var headerCB = function () {
    $("body").prepend("<header class='hidden' />");
    $("header").fadeIn("slow", function () {
      loadInitials();
    });
  }

  loadImage("images/header.png", headerCB);
};

loadInitials = function () {
  var initialsImage = "images/initials-banner.png"
  initialsCB = function () {
    $("header").append("<img src='"+initialsImage+"'>");
    $("header img").animate({top: 8, opacity: 1}, 800, function () {
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
};

var rsvpForm = function () {
  $("#rsvp-form").tinyValidation({validateOnKeyUp: true, immediateValidation: true}).submit(function () {
    rsvpStatus.name1 = $("#entry_0").val();
    rsvpStatus.name2 = $("#entry_1").val();
    rsvpStatus.attending = $("input[name='entry.2.group']:checked").val() == "Yes";
    rsvpStatus.submitted = true;
  });
  $("input.error").removeClass("error"); // Hacky fix for not initially showing error

  // TODO: Make DRY
  $("#has-plus-one").click(function () {
    $("#additional-guest").toggle($(this).is(":checked"));
  });
  $("#wants-to-help").click(function () {
    $("#help-options").toggle($(this).is(":checked"));
  });

  $("#hidden-iframe").load(function () {
    if (rsvpStatus.submitted) {
      $.cookie("rsvpStatus", rsvpStatus);
      showRsvpStatus();
    }
  });

  $("#clear-rsvp").click(function () {
    $.removeCookie("rsvpStatus");
  });
};

var showRsvpStatus = function () {
  $("#rsvp-form").hide();
  $("#thank-you").show();

  var statusText = rsvpStatus.name1;
  if (rsvpStatus.name2) {
    statusText += " and " + rsvpStatus.name2 + " are ";
  } else {
    statusText += " is ";
  }
  if (rsvpStatus.attending) {
    statusText += "attending.";
  } else {
    statusText += "not attending.";
  }

  $("#rsvp-status").html(statusText);
};

