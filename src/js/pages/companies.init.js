console.log("LOADED");
var companies = [
  {
    logo: "assets/images/companies/amazon.png",
    city: "Seattle",
    name: "Amazon Inc.",
    country: "USA",
    type: "E-Commerce Company",
    description:
      "Amazon.com, Inc., doing business as Amazon, is an American electronic commerce and cloud computing company based in Seattle."
  },
  {
    logo: "assets/images/companies/apple.png",
    city: "Cupertino",
    name: "Apple Inc.",
    country: "USA",
    type: "Technology Company",
    description:
      "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells."
  }
];
function goToDetails() {
  window.location.replace("/seller-details.html");
}
$(document).ready(function() {
  for (var i = 0; i < companies.length; i++) {
    var card = $(
      '<div class="col-lg-4"> <div class="card-box bg-pattern"> <div class="text-center"> <img src=' +
        companies[i].logo +
        ' alt="logo" class="avatar-xl rounded-circle mb-3" /> <h4 class="mb-1 font-20" onclick="goToDetails()"> ' +
        companies[i].name +
        ' </h4> <p class="text-muted font-14">' +
        companies[i].city +
        ", " +
        companies[i].country +
        '</p> <p class="text-muted font-14">' +
        companies[i].type +
        '</p> </div> <p class="font-14 text-center text-muted">' +
        companies[i].description +
        '</p> <div class="row mt-4 text-center"> <button type="button" class="btn btn-outline-warning" style="width: 100%; border-radius: 20px; margin-bottom: 0.4rem" > SAVE SHORTLIST </button> <button type="button" class="btn btn-outline-warning" style="width: 100%; border-radius: 20px" > VIEW PRODUCTS </button> </div> </div> </div>'
    );
    $("#companies-list").append(card);
  }
});
