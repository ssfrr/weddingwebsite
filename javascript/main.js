$(document).ready(function () {
  // TODO: Make DRY
  $("#has-plus-one").click(function () {
    $("#additional-guest").toggle($(this).is(":checked"));
  });
  $("#wants-to-help").click(function () {
    $("#help-options").toggle($(this).is(":checked"));
  });
});
