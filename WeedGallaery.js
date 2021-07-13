

// var fs = require('fs');
// var files = fs.readdirSync('/downloads');

var images = ['IMG_20210709_164151_1.jpg', 'IMG_20210709_164152_1.jpg', 'IMG_20210709_164221.jpg', 'IMG_20210709_164221_2.jpg', 'IMG_20210709_164229_1.jpg', 'IMG_20210709_164249.jpg', 'IMG_20210709_164637.jpg', 'IMG_20210709_164854.jpg', 'IMG_20210709_164939.jpg', 'IMG_20210709_165002.jpg', 'IMG_20210709_165044.jpg', 'IMG_20210709_165401.jpg', 'IMG_20210709_165440_1.jpg', 'IMG_20210709_165600.jpg', 'IMG_20210709_165706_1.jpg', 'IMG_20210709_165708_1.jpg', 'IMG_20210709_165712_1.jpg', 'IMG_20210709_165807.jpg', 'IMG_20210709_165900.jpg', 'IMG_20210709_165902.jpg', 'IMG_20210709_165904_1.jpg', 'IMG_20210709_165906_1.jpg', 'IMG_20210709_165930_1.jpg', 'IMG_20210709_165935_1.jpg', 'IMG_20210709_165938_1.jpg', 'IMG_20210709_170035_1.jpg', 'IMG_20210709_170038_1.jpg', 'IMG_20210709_170051_1.jpg', 'IMG_20210709_170055_1.jpg', 'IMG_20210709_170100.jpg', 'IMG_20210709_170110.jpg', 'IMG_20210709_170325.jpg', 'IMG_20210709_170713_1.jpg', 'IMG_20210709_170720.jpg', 'IMG_20210709_170723_1.jpg', 'IMG_20210709_170748.jpg', 'IMG_20210709_170810_1.jpg', 'IMG_20210709_170838_1.jpg', 'IMG_20210709_170844_1.jpg', 'IMG_20210709_170846.jpg', 'IMG_20210709_171025.jpg', 'IMG_20210709_171029_1.jpg', 'IMG_20210709_171034_1.jpg', 'IMG_20210709_171039_1.jpg', 'IMG_20210709_171043_1.jpg', 'IMG_20210709_171053_1.jpg', 'IMG_20210709_171124_1.jpg', 'IMG_20210709_171126_1.jpg', 'IMG_20210709_171129_1.jpg', 'IMG_20210709_171135.jpg', 'IMG_20210709_171137_1.jpg', 'IMG_20210709_171141_1.jpg', 'IMG_20210709_171144_1.jpg', 'IMG_20210709_171337.jpg', 'IMG_20210709_171339.jpg'];

function CarouselItem(image,index){
    if(index == 1 )
    {return `<div class="carousel-item active">
    <img src="Images/${image}" class="d-block h-1 mx-auto d-block  rounded img-thumbnail" alt="...">
    <div class="carousel-caption d-none d-md-block">
      <h5>Weed</h5>
      <p>Home Grown</p>
    </div>
  </div>`;}
    var item = `<div class="carousel-item">
    <img src="Images/${image}" class="d-block h-1 mx-auto d-block rounded img-thumbnail" alt="...">
    <div class="carousel-caption d-none d-md-block">
      <h5>Weed</h5>
      <p>Home Grown</p>
    </div>
  </div>`;

  return item;
}

function CarouselLabel(index){

    if(index == 1 )
    {return ` <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${index}"  class="active" aria-label="Slide ${index}"></button>`; }
    var option = ` <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${index}" aria-label="Slide ${index}"></button>`;

    return option;
}

function PopulateGallery(){

    var htmlContent =  "" ;
    var htmlMenu = "";

    for (let index = 0; index < images.length; index++) {
        const image = images[index];

        htmlContent += CarouselItem(image,index);
        htmlMenu += CarouselLabel(index);
    }
    console.log(htmlContent , htmlMenu);
    document.getElementById("GalleryContent").innerHTML = htmlContent;

    document.getElementById("GalleryMenu").innerHTML = htmlMenu;
}

PopulateGallery();