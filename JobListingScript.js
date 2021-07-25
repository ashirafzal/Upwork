/* Main Search Btn */
$(document).ready(function () {
  $("#MainSearchBtn").on("click", function () {
    Query();
  });
});
/* One Freelacer */
$(document).on("change", "#OneFreelacer", function () {
  Query();
});
/* Two to Five Freelacer */
$(document).on("change", "#TwotoFiveFreelacer", function () {
  Query();
});
/* More Than Five Freelacer */
$(document).on("change", "#MoreThanFiveFreelacer", function () {
  Query();
});
/* Entry Level */
$(document).on("change", "#EntryLevel", function () {
  Query();
});
/* Intermediate Level */
$(document).on("change", "#Intermediate", function () {
  Query();
});
/* Expert Level */
$(document).on("change", "#Expert", function () {
  Query();
});
/* Hourly */
$(document).on("change", "#Hourly", function () {
  Query();
});

/* Fixed Price */
$(document).on("change", "#FixedPrice", function () {
  Query();
});
/* Less Than 100 */
$(document).on("change", "#LessThan100", function () {
  Query();
});
/* Hundered To Five Hundered */
$(document).on("change", "#HunderedToFiveHundered", function () {
  Query();
});
/* Five Hundered To One Thousand */
$(document).on("change", "#FiveHunderedToOneThousand", function () {
  Query();
});
/* One Thousand To Five Thousand */
$(document).on("change", "#OneThousandToFiveThousand", function () {
  Query();
});
/* More Than Five Thousand */
$(document).on("change", "#MoreThanFiveThousand", function () {
  Query();
});

/* Previous Client */
$(document).on("change", "#PreviousClient", function () {
  alert("This option is not available because this is just an example.");
});
/* Payment Verified */
$(document).on("change", "#PaymentVerified", function () {
  Query();
});
/* Hire Zero Client */
$(document).on("change", "#HireZeroClient", function () {
  Query();
});
/* Hire One To Nine Client */
$(document).on("change", "#HireOneToNineClient", function () {
  Query();
});
/* Hire More Than Ten Client */
$(document).on("change", "#HireMoreThanTenClient", function () {
  Query();
});

function FreelanceNeedChecker() {
  if (
    $("input#OneFreelacer").is(":checked") &&
    $("input#TwotoFiveFreelacer").is(":checked") &&
    $("input#MoreThanFiveFreelacer").is(":checked")
  ) {
    var Freelance = "freelancer_needed >= 1";
  } else if (
    $("input#OneFreelacer").is(":checked") &&
    !$("input#TwotoFiveFreelacer").is(":checked") &&
    $("input#MoreThanFiveFreelacer").is(":checked")
  ) {
    var Freelance = "freelancer_needed > 2 and freelancer_needed >=5 ";
  } else if (
    !$("input#OneFreelacer").is(":checked") &&
    $("input#TwotoFiveFreelacer").is(":checked") &&
    $("input#MoreThanFiveFreelacer").is(":checked")
  ) {
    var Freelance = "freelancer_needed > 2";
  } else if (
    $("input#OneFreelacer").is(":checked") &&
    $("input#TwotoFiveFreelacer").is(":checked") &&
    !$("input#MoreThanFiveFreelacer").is(":checked")
  ) {
    var Freelance = "freelancer_needed >= 1 and freelancer_needed <= 5";
  } else if (
    $("input#OneFreelacer").is(":checked") &&
    !$("input#TwotoFiveFreelacer").is(":checked") &&
    !$("input#MoreThanFiveFreelacer").is(":checked")
  ) {
    var Freelance = "freelancer_needed < 2";
  } else if (
    !$("input#OneFreelacer").is(":checked") &&
    $("input#TwotoFiveFreelacer").is(":checked") &&
    !$("input#MoreThanFiveFreelacer").is(":checked")
  ) {
    var Freelance = "freelancer_needed >= 2 and freelancer_needed <= 5";
  } else if (
    !$("input#OneFreelacer").is(":checked") &&
    !$("input#TwotoFiveFreelacer").is(":checked") &&
    $("input#MoreThanFiveFreelacer").is(":checked")
  ) {
    var Freelance = "freelancer_needed >= 5";
  } else {
    var Freelance = "freelancer_needed != NULL";
  }
}

function FreelacerTypeChecker() {
  if (
    $("input#EntryLevel").is(":checked") &&
    $("input#Intermediate").is(":checked") &&
    $("input#Expert").is(":checked")
  ) {
    var FreelanceType = "experience_type != NULL";
  } else if (
    $("input#EntryLevel").is(":checked") &&
    !$("input#Intermediate").is(":checked") &&
    $("input#Expert").is(":checked")
  ) {
    var FreelanceType = "experience_type != Intermediate";
  } else if (
    !$("input#EntryLevel").is(":checked") &&
    $("input#Intermediate").is(":checked") &&
    $("input#Expert").is(":checked")
  ) {
    var FreelanceType = "experience_type != Entry";
  } else if (
    $("input#EntryLevel").is(":checked") &&
    $("input#Intermediate").is(":checked") &&
    !$("input#Expert").is(":checked")
  ) {
    var FreelanceType = "experience_type != Expert";
  } else if (
    $("input#EntryLevel").is(":checked") &&
    !$("input#Intermediate").is(":checked") &&
    !$("input#Expert").is(":checked")
  ) {
    var FreelanceType = "experience_type = Entry";
  } else if (
    !$("input#EntryLevel").is(":checked") &&
    $("input#Intermediate").is(":checked") &&
    !$("input#Expert").is(":checked")
  ) {
    var FreelanceType = "experience_type = Intermediate";
  } else if (
    !$("input#EntryLevel").is(":checked") &&
    !$("input#Intermediate").is(":checked") &&
    $("input#Expert").is(":checked")
  ) {
    var FreelanceType = "experience_type = Expert";
  } else {
    var FreelanceType = "experience_type != NULL";
  }
}

function ClientHire() {
  if (
    $("input#HireZeroClient").is(":checked") &&
    $("input#HireOneToNineClient").is(":checked") &&
    $("input#HireMoreThanTenClient").is(":checked")
  ) {
    var HireType = "client_hires != NULL";
  } else if (
    $("input#HireZeroClient").is(":checked") &&
    !$("input#HireOneToNineClient").is(":checked") &&
    $("input#HireMoreThanTenClient").is(":checked")
  ) {
    var HireType = "client_hires < 1 and client_hires >= 10";
  } else if (
    !$("input#HireZeroClient").is(":checked") &&
    $("input#HireOneToNineClient").is(":checked") &&
    $("input#HireMoreThanTenClient").is(":checked")
  ) {
    var HireType = "client_hires >= 1";
  } else if (
    $("input#HireZeroClient").is(":checked") &&
    $("input#HireOneToNineClient").is(":checked") &&
    !$("input#HireMoreThanTenClient").is(":checked")
  ) {
    var HireType = "client_hires <= 10";
  } else if (
    $("input#HireZeroClient").is(":checked") &&
    !$("input#HireOneToNineClient").is(":checked") &&
    !$("input#HireMoreThanTenClient").is(":checked")
  ) {
    var HireType = "client_hires < 1";
  } else if (
    !$("input#HireZeroClient").is(":checked") &&
    $("input#HireOneToNineClient").is(":checked") &&
    !$("input#HireMoreThanTenClient").is(":checked")
  ) {
    var HireType = "client_hires > 1 and client_hires < 10";
  } else if (
    !$("input#HireZeroClient").is(":checked") &&
    !$("input#HireOneToNineClient").is(":checked") &&
    $("input#HireMoreThanTenClient").is(":checked")
  ) {
    var HireType = "client_hires >= 10";
  } else {
    var HireType = "client_hires != NULL";
  }
}

function FixedPriceCheck() {
  if (
    $("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price != NULL";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price >= 100";
  } else if (
    $("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 100 and fixed_price >=500";
  } else if (
    $("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 500 and fixed_price >= 1000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 1000 and fixed_price >= 5000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 5000";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price >= 500";
  } else if (
    $("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 100 and fixed_price >= 1000";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck =
      "fixed_price >= 100 and fixed_price <= 500 and fixed_price >= 1000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 500 and fixed_price >= 5000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 1000";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 100 and fixed_price >= 1000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 500 and fixed_price >= 5000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 500";
  } else if (
    $("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck =
      "fixed_price <= 100 and fixed_price >= 500 and fixed_price <= 1000";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck =
      "fixed_price <= 100 and fixed_price >= 500 and fixed_price <= 1000 and fixed_price > 5000";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price >= 500 and fixed_price <= 5000";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck =
      "fixed_price >= 100 and fixed_price <= 500 and fixed_price >= 1000";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price >= 100 and fixed_price <= 1000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 100 and fixed_price >= 1000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 100 ";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price >= 100 and fixed_price >= 500 ";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price >= 500 and fixed_price <= 1000 ";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price >= 1000 and fixed_price <= 5000 ";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price >= 5000 ";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck =
      "fixed_price >= 100 and fixed_price <= 500 and fixed_price >= 5000";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck =
      "fixed_price >= 100 and fixed_price <= 1000 and fixed_price >= 5000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck =
      "fixed_price <= 100 and fixed_price >= 500 and fixed_price <= 1000 and fixed_price >= 5000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck =
      "fixed_price <= 100 and fixed_price >= 500 and fixed_price <= 1000 and fixed_price >= 5000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck =
      "fixed_price <= 500 and fixed_price >= 1000 and fixed_price <= 5000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck =
      "fixed_price <= 100 and fixed_price >= 500 and fixed_price <= 5000";
  } else {
    var PriceCheck = "fixed_price != NULL";
  }
}

/* Query */
function Query() {
  var Freelance;
  var FreelanceType;
  var HireType;
  var PriceCheck;

  var MainSearch = $("#MainSearch").val();
  /* Hourly Related */
  var Hourly = $("#Hourly").val();
  var HourlyMinRate = $("#HourlyMinRate").val();
  var HourlyMaxRate = $("#HourlyMaxRate").val();
  /* Hourly Related */
  /* Fixed Price Related */
  var FixedPrice = $("#FixedPrice").val();
  /* Fixed Price Related */
  var PaymentVerified = $("#PaymentVerified").val();

  /*Payment Verified check*/

  if ($("input#PaymentVerified").is(":checked")) {
    PaymentVerified = "payment = 'verified' ";
  } else {
    PaymentVerified = "payment is not null";
  }

  /**/

  /* Freelance Need Checker */

  if (
    $("input#OneFreelacer").is(":checked") &&
    $("input#TwotoFiveFreelacer").is(":checked") &&
    $("input#MoreThanFiveFreelacer").is(":checked")
  ) {
    var Freelance = "freelancer_needed >= 1";
  } else if (
    $("input#OneFreelacer").is(":checked") &&
    !$("input#TwotoFiveFreelacer").is(":checked") &&
    $("input#MoreThanFiveFreelacer").is(":checked")
  ) {
    var Freelance = "freelancer_needed > 2 and freelancer_needed >=5 ";
  } else if (
    !$("input#OneFreelacer").is(":checked") &&
    $("input#TwotoFiveFreelacer").is(":checked") &&
    $("input#MoreThanFiveFreelacer").is(":checked")
  ) {
    var Freelance = "freelancer_needed >= 2";
  } else if (
    $("input#OneFreelacer").is(":checked") &&
    $("input#TwotoFiveFreelacer").is(":checked") &&
    !$("input#MoreThanFiveFreelacer").is(":checked")
  ) {
    var Freelance = "freelancer_needed >= 1 and freelancer_needed <= 5";
  } else if (
    $("input#OneFreelacer").is(":checked") &&
    !$("input#TwotoFiveFreelacer").is(":checked") &&
    !$("input#MoreThanFiveFreelacer").is(":checked")
  ) {
    var Freelance = "freelancer_needed < 2";
  } else if (
    !$("input#OneFreelacer").is(":checked") &&
    $("input#TwotoFiveFreelacer").is(":checked") &&
    !$("input#MoreThanFiveFreelacer").is(":checked")
  ) {
    var Freelance = "freelancer_needed >= 2 and freelancer_needed <= 5";
  } else if (
    !$("input#OneFreelacer").is(":checked") &&
    !$("input#TwotoFiveFreelacer").is(":checked") &&
    $("input#MoreThanFiveFreelacer").is(":checked")
  ) {
    var Freelance = "freelancer_needed >= 5";
  } else {
    var Freelance = "freelancer_needed is not null";
  }

  /* Freelance Need Checker Ends */

  /* Freelacer Type Checker */

  if (
    $("input#EntryLevel").is(":checked") &&
    $("input#Intermediate").is(":checked") &&
    $("input#Expert").is(":checked")
  ) {
    var FreelanceType = "experience_level is not null";
  } else if (
    $("input#EntryLevel").is(":checked") &&
    !$("input#Intermediate").is(":checked") &&
    $("input#Expert").is(":checked")
  ) {
    var FreelanceType = "experience_level != 'Intermediate' ";
  } else if (
    !$("input#EntryLevel").is(":checked") &&
    $("input#Intermediate").is(":checked") &&
    $("input#Expert").is(":checked")
  ) {
    var FreelanceType = "experience_level != 'Entry' ";
  } else if (
    $("input#EntryLevel").is(":checked") &&
    $("input#Intermediate").is(":checked") &&
    !$("input#Expert").is(":checked")
  ) {
    var FreelanceType = "experience_level != 'Expert' ";
  } else if (
    $("input#EntryLevel").is(":checked") &&
    !$("input#Intermediate").is(":checked") &&
    !$("input#Expert").is(":checked")
  ) {
    var FreelanceType = "experience_level = 'Entry' ";
  } else if (
    !$("input#EntryLevel").is(":checked") &&
    $("input#Intermediate").is(":checked") &&
    !$("input#Expert").is(":checked")
  ) {
    var FreelanceType = "experience_level = 'Intermediate' ";
  } else if (
    !$("input#EntryLevel").is(":checked") &&
    !$("input#Intermediate").is(":checked") &&
    $("input#Expert").is(":checked")
  ) {
    var FreelanceType = "experience_level = 'Expert' ";
  } else {
    var FreelanceType = "experience_level is not null";
  }

  /* Freelacer Type Checker Ends */

  /* Client Hire */

  if (
    $("input#HireZeroClient").is(":checked") &&
    $("input#HireOneToNineClient").is(":checked") &&
    $("input#HireMoreThanTenClient").is(":checked")
  ) {
    var HireType = "client_hires is not null";
  } else if (
    $("input#HireZeroClient").is(":checked") &&
    !$("input#HireOneToNineClient").is(":checked") &&
    $("input#HireMoreThanTenClient").is(":checked")
  ) {
    var HireType = "client_hires < 1 and client_hires >= 10";
  } else if (
    !$("input#HireZeroClient").is(":checked") &&
    $("input#HireOneToNineClient").is(":checked") &&
    $("input#HireMoreThanTenClient").is(":checked")
  ) {
    var HireType = "client_hires >= 1";
  } else if (
    $("input#HireZeroClient").is(":checked") &&
    $("input#HireOneToNineClient").is(":checked") &&
    !$("input#HireMoreThanTenClient").is(":checked")
  ) {
    var HireType = "client_hires <= 10";
  } else if (
    $("input#HireZeroClient").is(":checked") &&
    !$("input#HireOneToNineClient").is(":checked") &&
    !$("input#HireMoreThanTenClient").is(":checked")
  ) {
    var HireType = "client_hires < 1";
  } else if (
    !$("input#HireZeroClient").is(":checked") &&
    $("input#HireOneToNineClient").is(":checked") &&
    !$("input#HireMoreThanTenClient").is(":checked")
  ) {
    var HireType = "client_hires > 1 and client_hires < 10";
  } else if (
    !$("input#HireZeroClient").is(":checked") &&
    !$("input#HireOneToNineClient").is(":checked") &&
    $("input#HireMoreThanTenClient").is(":checked")
  ) {
    var HireType = "client_hires >= 10";
  } else {
    var HireType = "client_hires is not null";
  }

  /* Client Hire Ends */

  /* Fixed Price Check */

  if (
    $("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price is not null";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price >= 100";
  } else if (
    $("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 100 and fixed_price >=500";
  } else if (
    $("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 500 and fixed_price >= 1000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 1000 and fixed_price >= 5000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 5000";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price >= 500";
  } else if (
    $("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 100 and fixed_price >= 1000";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck =
      "fixed_price >= 100 and fixed_price <= 500 and fixed_price >= 1000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 500 and fixed_price >= 5000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 1000";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 100 and fixed_price >= 1000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 500 and fixed_price >= 5000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 500";
  } else if (
    $("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck =
      "fixed_price <= 100 and fixed_price >= 500 and fixed_price <= 1000";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck =
      "fixed_price <= 100 and fixed_price >= 500 and fixed_price <= 1000 and fixed_price > 5000";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price >= 500 and fixed_price <= 5000";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck =
      "fixed_price >= 100 and fixed_price <= 500 and fixed_price >= 1000";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price >= 100 and fixed_price <= 1000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 100 and fixed_price >= 1000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price <= 100 ";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price >= 100 and fixed_price >= 500 ";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price >= 500 and fixed_price <= 1000 ";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price >= 1000 and fixed_price <= 5000 ";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck = "fixed_price >= 5000 ";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck =
      "fixed_price >= 100 and fixed_price <= 500 and fixed_price >= 5000";
  } else if (
    !$("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck =
      "fixed_price >= 100 and fixed_price <= 1000 and fixed_price >= 5000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck =
      "fixed_price <= 100 and fixed_price >= 500 and fixed_price <= 1000 and fixed_price >= 5000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    !$("input#OneThousandToFiveThousand").is(":checked") &&
    $("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck =
      "fixed_price <= 100 and fixed_price >= 500 and fixed_price <= 1000 and fixed_price >= 5000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    $("input#HunderedToFiveHundered").is(":checked") &&
    !$("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck =
      "fixed_price <= 500 and fixed_price >= 1000 and fixed_price <= 5000";
  } else if (
    $("input#LessThan100").is(":checked") &&
    !$("input#HunderedToFiveHundered").is(":checked") &&
    $("input#FiveHunderedToOneThousand").is(":checked") &&
    $("input#OneThousandToFiveThousand").is(":checked") &&
    !$("input#MoreThanFiveThousand").is(":checked")
  ) {
    var PriceCheck =
      "fixed_price <= 100 and fixed_price >= 500 and fixed_price <= 5000";
  } else {
    var PriceCheck = "fixed_price is not null";
  }

  /* Fixed Price Check Ends */

  if (MainSearch === "") {
    if ($("input#Hourly").is(":checked")) {
      $.ajax({
        url: "JobQuery.php",
        type: "POST",
        data: {
          Freelance: Freelance,
          FreelanceType: FreelanceType,
          HireType: HireType,
          PriceCheck: PriceCheck,
          HourlyMinRate: HourlyMinRate,
          HourlyMaxRate: HourlyMaxRate,
          PaymentVerified: PaymentVerified,
        },
        cache: false,
        success: function (dataResult) {
          $("#job").html(dataResult);
        },
      });
    } else if($("input#FixedPrice").is(":checked")){
        $.ajax({
            url: "JobQuery3.php",
            type: "POST",
            data: {
              Freelance: Freelance,
              FreelanceType: FreelanceType,
              HireType: HireType,
              PriceCheck: PriceCheck,
              PaymentVerified: PaymentVerified,
            },
            cache: false,
            success: function (dataResult) {
              $("#job").html(dataResult);
            },
          });
    }else {
        $.ajax({
            url: "JobQuery.php",
            type: "POST",
            data: {
              Freelance: Freelance,
              FreelanceType: FreelanceType,
              HireType: HireType,
              PriceCheck: PriceCheck,
              HourlyMinRate: HourlyMinRate,
              HourlyMaxRate: HourlyMaxRate,
              PaymentVerified: PaymentVerified,
            },
            cache: false,
            success: function (dataResult) {
              $("#job").html(dataResult);
            },
          });
    }
  } else {
    if ($("input#Hourly").is(":checked")) {
      $.ajax({
        url: "JobQuery2.php",
        type: "POST",
        data: {
          MainSearch: MainSearch,
          Freelance: Freelance,
          FreelanceType: FreelanceType,
          HireType: HireType,
          PriceCheck: PriceCheck,
          HourlyMinRate: HourlyMinRate,
          HourlyMaxRate: HourlyMaxRate,
          PaymentVerified: PaymentVerified,
        },
        cache: false,
        success: function (dataResult) {
          $("#job").html(dataResult);
        },
      });
    } else if($("input#FixedPrice").is(":checked")){
        $.ajax({
            url: "JobQuery3.php",
            type: "POST",
            data: {
              Freelance: Freelance,
              FreelanceType: FreelanceType,
              HireType: HireType,
              PriceCheck: PriceCheck,
              PaymentVerified: PaymentVerified,
            },
            cache: false,
            success: function (dataResult) {
              $("#job").html(dataResult);
            },
          });
    } else {
        $.ajax({
            url: "JobQuery2.php",
            type: "POST",
            data: {
              MainSearch: MainSearch,
              Freelance: Freelance,
              FreelanceType: FreelanceType,
              HireType: HireType,
              PriceCheck: PriceCheck,
              HourlyMinRate: HourlyMinRate,
              HourlyMaxRate: HourlyMaxRate,
              PaymentVerified: PaymentVerified,
            },
            cache: false,
            success: function (dataResult) {
              $("#job").html(dataResult);
            },
          });
    }
  }
}
