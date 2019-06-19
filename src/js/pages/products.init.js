console.log("LOADED");

var products = [
  {
    category: "technology",
    subcategory: "mobile",
    name: "iphone",
    image:
      "https://cdn.eglobalcentraluk.com/images/magictoolbox_cache/8c95d73fec130487c102a73bf1ab42ce/2/2/22464/thumb360x360/985291045/apple-iphone-x-64gb-silver.jpg",
    description:
      "Best Product ever Best Product ever Best Product ever Best Product ever Best Product ever ",
    price: "800",
    minunits: "10",
    packs: "pc",
    brand: "Apple"
  },
  {
    category: "technology",
    subcategory: "pc",
    name: "hp cool pc",
    image:
      "https://product-images.www8-hp.com/digmedialib/prodimg/lowres/c05861013.png",
    description:
      "Best PC ever Best PC everBest PC everBest PC everBest PC everBest PC everBest PC everBest PC ever",
    price: "500",
    minunits: "15",
    packs: "pc",
    brand: "HP"
  }
];
$(document).ready(function() {
  console.log(products);
  for (var i = 0; i < products.length; i++) {
    console.log(products[i].name);
    var card = $(
      '<div class="col-md-6 col-xl-3"> <div class="card-box product-box"> <div> <img src=' +
        products[i].image +
        ' alt="product-pic" class="img-fluid" /> </div> <div class="product-info"> <div class="row align-items-center"> <div class="col"> <h5 class="font-16 mt-0 sp-line-1"> <a href="product-detail.html" class="text-dark" >' +
        products[i].name +
        '</a > </h5> <div class="text-warning mb-2 font-13"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half"></i> </div> <h5 class="m-0"> <span class="text-muted"> Minumum : ' +
        products[i].minunits +
        " " +
        products[i].packs +
        '</span> </div> <div class="col-auto"> <div class="product-price-tag"> $' +
        products[i].price +
        ' </div> </div> </div> <div class="row align-items-center justify-content-start"> </h5> <h5 class="m-0" style="margin-top: 10px !important"> <span class="text-muted">' +
        products[i].description +
        '</span> </h5> <h5 style="margin-bottom: 0">' +
        products[i].brand +
        "</h5> </div> </div>  </div> </div>"
    );
    $("#product-list").prepend(card);
  }
});
