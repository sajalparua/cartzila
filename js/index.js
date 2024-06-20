//show and hide menu by clicking menu button
var menuBtn = false;
function showMenu(menuBox) {
  menuBtn = !menuBtn;
  console.log(menuBtn);
  if (menuBtn == true) {
    menuBox.style.display = "block";
  } else {
    menuBox.style.display = "none";
  }
}
//scrollelble poster by click right and left arrow
const bannerCount = 3;
mainPosition = 0;
currentBannerIndex = 0;
function posterBackword(posterList) {
  if (currentBannerIndex === bannerCount - 1) {
    return;
  }
  console.log("backword");
  currentBannerIndex = currentBannerIndex + 1;
  mainPosition = mainPosition - 100;
  posterList.style.left = mainPosition + "%";
}

function posterForword(posterList) {
  if (currentBannerIndex === 0) {
    console.log(bannerCount);
    return;
  }
  currentBannerIndex = currentBannerIndex - 1;
  mainPosition = mainPosition + 100;
  posterList.style.left = mainPosition + "%";
}
// the poster also scrolleble by swiping the poster
posterBox = document.getElementById("posterBox");
posterBox.addEventListener("touchstart", (event) => {
  tuchStart = event.touches[0].clientX;
});
posterBox.addEventListener("touchend", (event) => {
  touchEnd = event.changedTouches[0].clientX;
  console.log(tuchStart);
  console.log(touchEnd);
  if (tuchStart > touchEnd) {
    console.log("left swipe detected");
    posterBackword(posterList);
  } else if (tuchStart < touchEnd) {
    console.log("right swipe detected");
    posterForword(posterList);
  }
});

////// get tranding itms from api and show  it in tranding item  page
fakeurl = "https://fakestoreapi.com/products";
let trandingproductRoot = document.getElementById("trandingRow");
fetch(fakeurl)
  .then((data) => data.json())
  .then((trandingProducts) => {
    // console.log(trandingProducts);
    let products = "";
    for (i = 10; i <= 18 - 1; i++) {
      // console.log( i  ,trandingProducts[i].image);
      products =
        products +
        ` <div class="  col-sm-6 col-lg-3 p-4">
        <div id="${trandingProducts.id}" class="product rounded h-100 p-3 ">
            <i class="bi bi-heart mb-1 d-block ms-auto" ></i>
            <img  src=${trandingProducts[i].image} alt="">
            <p>${trandingProducts[i].category}</p>

                <h3>${trandingProducts[i].title}</h3>
                <section class="d-flex"><h5>$${trandingProducts[i].price}</h5><span class="ms-auto">rating:${trandingProducts[i].rating.rate}/5</span></section>
                <button class=" py-1 w-100  ms-auto me-auto mt-2">add to cart</button>

        </div>
    </div>`;
    }

    trandingproductRoot.innerHTML = products;
  });
//get for you product  from api and add it in inner html page

let url = "https://dummyjson.com/products/";
fetch(url)
  .then((newData) => newData.json())
  .then((product) => {
    let productHtml = "";
    forYouproduct = product.products;
    forYouproduct.forEach((Element) => {
      productHtml =
        productHtml +
        ` <div class="  col-sm-6 col-lg-3 p-4">
    <div class="product rounded h-100 p-3  ">
        <i class="bi bi-heart mb-1 d-block ms-auto" ></i>
        <img  src=${Element.images[0]} alt="">
        <p>${Element.category}</p>

            <h3>${Element.title}</h3>
            <section class="d-flex"><h5>$${Element.price}</h5><span class="ms-auto">rating:${Element.rating}/5</span></section>
            <button class=" py-1 w-100  ms-auto me-auto mt-2">add to cart</button>

    </div>
</div>`;
    });
    document.getElementById("forYouProduct").innerHTML = productHtml;
  });
