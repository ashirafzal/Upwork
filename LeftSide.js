$.ajax({
  type: "GET",
  url: "left_side.php",
  dataType: "html",
  success: function (data) {
    $("#left").html(data);
  },
});
