var test = {
  category: "clothes",
  subcategory: "shirt",
  name: "Waves Shirt",
  image: "url",
  description: "Best Product ever",
  price: "34",
  minunits: "10",
  packs: "Piece",
  brand: "Apple"
};

function noEditNegotiation(bool) {
  $("#quantityOfProduct")
    .prop("readonly", bool)
    .css("background-color", bool ? "lightgrey" : "white");
  $("#extraOfProduct")
    .prop("readonly", bool)
    .css("background-color", bool ? "lightgrey" : "white");
  $("#unitPriceOfProduct")
    .prop("readonly", bool)
    .css("background-color", bool ? "lightgrey" : "white");
  $("#negotiation-status")
    .html(
      bool ? "Waiting for Seller's response" : "Waiting to Send Negotiation"
    )
    .css("color", bool ? "yellow" : "#32ad6c ");
  $("#send-negotiation")
    .prop("disabled", bool)
    .css("background-color", bool ? "lightgrey" : "#32ad6c");
}
function updateValues(productObj) {
  $("#step1 > h1").css("color", "#32ad6c");
  $("#step1 > p").css("color", "#32ad6c");
  $("#nameOfProduct").html(productObj.name);
  $("#descriptionOfProduct").html(productObj.description);
  $("#quantityOfProduct").val(productObj.minunits);
  $("#unitOfProduct").html(productObj.packs);
  $("#moqOfProduct").html(productObj.minunits);
  $("#unitPriceOfProduct").val(productObj.price);

  $("#fobOfProduct").html("EUR 470");
}
function goToStep2() {
  $("#step1 > h1").css("color", "black");
  $("#step1 > p").css("color", "black");
  $("#step2 > h1").css("color", "#32ad6c");
  $("#step2 > p").css("color", "#32ad6c");
}
$(document).ready(function() {
  switch ($("#check-page").text()) {
    case "step1":
      updateValues(test);

      $("#send-negotiation").click(function() {
        noEditNegotiation(true);
        setTimeout(function() {
          noEditNegotiation(false);

          $("#unitPriceOfProduct")
            .val(30)
            .css("border-color", "red");
          $("#accept-negotiation").css("display", "block");
          $("#send-negotiation").css("background-color", "#f7b84b");

          $("#accept-negotiation").click(function() {
            window.location.replace("negotiation2.html");
          });
        }, 5000);
      });
      break;
    case "step2":
      console.log("efe");

      $("#succes-negotiation").click(function() {
        window.location.replace("negotiation3.html");
      });
      $("#goback-negotiation").click(function() {
        window.location.replace("negotiation1.html");
      });
      break;
    case "step3":
      $("#close-negotiation").click(function() {
        window.location.replace("/");
      });
      $("#view-profile").click(function() {
        window.location.replace("seller-details.html");
      });
      break;
    default:
      break;
  }
});
