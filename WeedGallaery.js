

// var fs = require('fs');
// var files = fs.readdirSync('/downloads');

var images = ['Images/IMG-20210705-WA0043.jpg',
            'Images/IMG-20210705-WA0044.jpg',
            'Images/IMG-20210705-WA0045.jpg',
            'Images/IMG-20210705-WA0048.jpg',
            'Images/IMG-20210705-WA0050.jpg',
            'Images/IMG-20210705-WA0051.jpg',
            'Images/IMG-20210705-WA0054.jpg',
            'Images/IMG-20210705-WA0056.jpg',
            'Images/IMG-20210705-WA0060.jpg',
            'Images/IMG-20210705-WA0061.jpg',
            'Images/IMG-20210705-WA0064.jpg',
            'Images/IMG-20210705-WA0066.jpg',
            'Images/IMG-20210705-WA0067.jpg',
            'Images/IMG-20210705-WA0068.jpg',
            'Images/IMG-20210705-WA0069.jpg',
            'Images/IMG-20210705-WA0070.jpg',
            'Images/IMG-20210705-WA0071.jpg',
            'Images/IMG-20210705-WA0072.jpg',
            'Images/IMG-20210705-WA0073.jpg',
            'Images/IMG-20210705-WA0074.jpg',
            'Images/IMG-20210705-WA0076.jpg',
            'Images/IMG-20210705-WA0079.jpg',
            'Images/IMG-20210705-WA0080.jpg',
            'Images/IMG-20210705-WA0082.jpg',
            'Images/IMG-20210705-WA0083.jpg',
            'Images/IMG-20210705-WA0084.jpg',
            'Images/IMG-20210705-WA0085.jpg',
            'Images/IMG-20210705-WA0087.jpg',
            'Images/IMG-20210705-WA0089.jpg',
            'Images/IMG-20210705-WA0090.jpg',
            'Images/IMG-20210705-WA0093.jpg',
            'Images/IMG-20210705-WA0094.jpg',
            'Images/IMG-20210705-WA0096.jpg',
            'Images/IMG-20210705-WA0097.jpg',
            'Images/IMG-20210705-WA0098.jpg',
            'Images/IMG-20210705-WA0099.jpg',
            'Images/IMG-20210705-WA0101.jpg',
            'Images/IMG-20210705-WA0102.jpg',
            'Images/IMG-20210705-WA0103.jpg',
            'Images/IMG-20210705-WA0104.jpg'];

function CarouselItem(image,index){
    if(index == 1 )
    {return `<div class="carousel-item active">
    <img src="${image}" class="d-block h-50 mx-auto d-block image-fluid rounded" alt="...">
    <div class="carousel-caption d-none d-md-block">
      <h5>Weed</h5>
      <p>Home Grown</p>
    </div>
  </div>`;}
    var item = `<div class="carousel-item">
    <img src="${image}" class="d-block h-50  mx-auto d-block image-fluid rounded" alt="...">
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