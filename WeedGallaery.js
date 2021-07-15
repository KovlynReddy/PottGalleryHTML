var mastercaroursellayout = `    <div class="container" id="GalleryConrainer">
        

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" >

    <div class="carousel-indicators" id="GalleryMenu">

      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>

    </div>


    <div class="carousel-inner" id="GalleryContent">
      <!-- <div class="carousel-item active">
        <img src="Images/IMG-20210705-WA0071.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div> -->

    </div>


    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

  </div>

</div>
`;

var edibles = ['IMG_20210709_171339.jpg', 'IMG_20210709_173202.jpg', 'IMG_20210709_191403.jpg', 'IMG_20210711_003910.jpg', 'IMG_20210711_143829.jpg', 'IMG_20210711_154348.jpg', 'IMG_20210711_164623.jpg', 'IMG_20210711_164632.jpg', 'IMG_20210711_164657.jpg'];
var plants = ['IMG_20210711_140717.jpg', 'IMG_20210711_140722.jpg', 'IMG_20210711_140724_1.jpg', 'IMG_20210711_140728.jpg', 'IMG_20210711_140731.jpg', 'IMG_20210711_140734_1.jpg', 'IMG_20210711_140740.jpg', 'IMG_20210711_140852.jpg', 'IMG_20210711_140855_1.jpg', 'IMG_20210711_140858_1.jpg', 'IMG_20210711_140904_1.jpg', 'IMG_20210711_140908.jpg', 'IMG_20210711_140923.jpg', 'IMG_20210711_140926_1.jpg', 'IMG_20210711_140934_1.jpg', 'IMG_20210711_141002_1.jpg', 'IMG_20210711_141334_1.jpg', 'IMG_20210711_141338_1.jpg', 'IMG_20210711_141341_1.jpg'];
var pots = ['IMG-20210705-WA0070.jpg', 'IMG_20210709_164151_1.jpg', 'IMG_20210709_164152_1.jpg', 'IMG_20210709_164221.jpg', 'IMG_20210709_164221_2.jpg', 'IMG_20210709_165712_1.jpg', 'IMG_20210709_165807.jpg', 'IMG_20210709_165902.jpg', 'IMG_20210709_165935_1.jpg', 'IMG_20210709_170035_1.jpg', 'IMG_20210709_170100.jpg', 'IMG_20210709_170713_1.jpg', 'IMG_20210709_170723_1.jpg', 'IMG_20210709_170748.jpg', 'IMG_20210709_170810_1.jpg', 'IMG_20210709_170838_1.jpg', 'IMG_20210709_170844_1.jpg', 'IMG_20210709_170846.jpg', 'IMG_20210709_171043_1.jpg', 'IMG_20210709_171124_1.jpg', 'IMG_20210709_171137_1.jpg', 'IMG_20210711_141224.jpg', 'IMG_20210711_141226_1.jpg', 'IMG_20210711_141233_1.jpg', 'IMG_20210711_141235_1.jpg', 'IMG_20210711_141237_1.jpg', 'IMG_20210711_141240.jpg', 'IMG_20210711_141311.jpg', 'IMG_20210711_141314.jpg', 'IMG_20210711_141317_1.jpg', 'IMG_20210711_141321_1.jpg', 'IMG_20210711_141323.jpg', 'IMG_20210711_141326.jpg', 'IMG_20210711_141422.jpg', 'IMG_20210713_103605_1.jpg', 'IMG_20210713_103620.jpg', 'IMG_20210713_103630.jpg']; 

var images = ['IMG_20210709_164151_1.jpg', 'IMG_20210709_164152_1.jpg', 'IMG_20210709_164221.jpg', 'IMG_20210709_164221_2.jpg', 'IMG_20210709_164229_1.jpg', 'IMG_20210709_164249.jpg', 'IMG_20210709_164637.jpg', 'IMG_20210709_164854.jpg', 'IMG_20210709_164939.jpg', 'IMG_20210709_165002.jpg', 'IMG_20210709_165044.jpg', 'IMG_20210709_165401.jpg', 'IMG_20210709_165440_1.jpg', 'IMG_20210709_165600.jpg', 'IMG_20210709_165706_1.jpg', 'IMG_20210709_165708_1.jpg', 'IMG_20210709_165712_1.jpg', 'IMG_20210709_165807.jpg', 'IMG_20210709_165900.jpg', 'IMG_20210709_165902.jpg', 'IMG_20210709_165904_1.jpg', 'IMG_20210709_165906_1.jpg', 'IMG_20210709_165930_1.jpg', 'IMG_20210709_165935_1.jpg', 'IMG_20210709_165938_1.jpg', 'IMG_20210709_170035_1.jpg', 'IMG_20210709_170038_1.jpg', 'IMG_20210709_170051_1.jpg', 'IMG_20210709_170055_1.jpg', 'IMG_20210709_170100.jpg', 'IMG_20210709_170110.jpg', 'IMG_20210709_170325.jpg', 'IMG_20210709_170713_1.jpg', 'IMG_20210709_170720.jpg', 'IMG_20210709_170723_1.jpg', 'IMG_20210709_170748.jpg', 'IMG_20210709_170810_1.jpg', 'IMG_20210709_170838_1.jpg', 'IMG_20210709_170844_1.jpg', 'IMG_20210709_170846.jpg', 'IMG_20210709_171025.jpg', 'IMG_20210709_171029_1.jpg', 'IMG_20210709_171034_1.jpg', 'IMG_20210709_171039_1.jpg', 'IMG_20210709_171043_1.jpg', 'IMG_20210709_171053_1.jpg', 'IMG_20210709_171124_1.jpg', 'IMG_20210709_171126_1.jpg', 'IMG_20210709_171129_1.jpg', 'IMG_20210709_171135.jpg', 'IMG_20210709_171137_1.jpg', 'IMG_20210709_171141_1.jpg', 'IMG_20210709_171144_1.jpg', 'IMG_20210709_171337.jpg', 'IMG_20210709_171339.jpg'];
var updatedImages = ['IMG-20210705-WA0070.jpg', 'IMG_20210709_173136.jpg', 'IMG_20210709_173153.jpg', 'IMG_20210709_173159.jpg', 'IMG_20210709_173202.jpg', 'IMG_20210709_191403.jpg', 'IMG_20210709_191407.jpg', 'IMG_20210709_191412.jpg', 'IMG_20210711_003906.jpg', 'IMG_20210711_003910.jpg', 'IMG_20210711_114343.jpg', 'IMG_20210711_140717.jpg', 'IMG_20210711_140722.jpg', 'IMG_20210711_140724_1.jpg', 'IMG_20210711_140728.jpg', 'IMG_20210711_140731.jpg', 'IMG_20210711_140734_1.jpg', 'IMG_20210711_140740.jpg', 'IMG_20210711_140743.jpg', 'IMG_20210711_140800.jpg', 'IMG_20210711_140804.jpg', 'IMG_20210711_140811.jpg', 'IMG_20210711_140814_1.jpg', 'IMG_20210711_140822_1.jpg', 'IMG_20210711_140825_1.jpg', 'IMG_20210711_140833_1.jpg', 'IMG_20210711_140840_1.jpg', 'IMG_20210711_140846.jpg', 'IMG_20210711_140852.jpg', 'IMG_20210711_140855_1.jpg', 'IMG_20210711_140858_1.jpg', 'IMG_20210711_140904_1.jpg', 'IMG_20210711_140908.jpg', 'IMG_20210711_140923.jpg', 'IMG_20210711_140926_1.jpg', 'IMG_20210711_140934_1.jpg', 'IMG_20210711_140945.jpg', 'IMG_20210711_140953_1.jpg', 'IMG_20210711_140959_1.jpg', 'IMG_20210711_141002_1.jpg', 'IMG_20210711_141011_1.jpg', 'IMG_20210711_141017_1.jpg', 'IMG_20210711_141024_1.jpg', 'IMG_20210711_141042_1.jpg', 'IMG_20210711_141102_1.jpg', 'IMG_20210711_141106_1.jpg', 'IMG_20210711_141115_1.jpg', 'IMG_20210711_141118_1.jpg', 'IMG_20210711_141124.jpg', 'IMG_20210711_141126.jpg', 'IMG_20210711_141224.jpg', 'IMG_20210711_141226_1.jpg', 'IMG_20210711_141233_1.jpg', 'IMG_20210711_141235_1.jpg', 'IMG_20210711_141237_1.jpg', 'IMG_20210711_141240.jpg', 'IMG_20210711_141242_1.jpg', 'IMG_20210711_141248.jpg', 'IMG_20210711_141251_1.jpg', 'IMG_20210711_141253_1.jpg', 'IMG_20210711_141311.jpg', 'IMG_20210711_141314.jpg', 'IMG_20210711_141317_1.jpg', 'IMG_20210711_141321_1.jpg', 'IMG_20210711_141323.jpg', 'IMG_20210711_141326.jpg', 'IMG_20210711_141331.jpg', 'IMG_20210711_141334_1.jpg', 'IMG_20210711_141338_1.jpg', 'IMG_20210711_141341_1.jpg', 'IMG_20210711_141345_1.jpg', 'IMG_20210711_141348_1.jpg', 'IMG_20210711_141351_1.jpg', 'IMG_20210711_141358_1.jpg', 'IMG_20210711_141407_1.jpg', 'IMG_20210711_141411.jpg', 'IMG_20210711_141414_1.jpg', 'IMG_20210711_141418_1.jpg', 'IMG_20210711_141422.jpg', 'IMG_20210711_143827.jpg', 'IMG_20210711_143829.jpg', 'IMG_20210711_154348.jpg', 'IMG_20210711_154354.jpg', 'IMG_20210711_154359.jpg', 'IMG_20210711_163309.jpg', 'IMG_20210711_163311.jpg', 'IMG_20210711_164550.jpg', 'IMG_20210711_164623.jpg', 'IMG_20210711_164632.jpg', 'IMG_20210711_164657.jpg', 'IMG_20210713_103605_1.jpg', 'IMG_20210713_103620.jpg', 'IMG_20210713_103630.jpg'];

images = images.concat(updatedImages);

function CarouselItem(image,index){
    if(index == 1 )
    {return `<div class="carousel-item active">
    <img src="${image}" class="d-block h-2 mx-auto d-block  rounded img-thumbnail" alt="...">
    <div class="carousel-caption d-none d-md-block">
      <h5>Weed</h5>
      <p>Home Grown</p>
    </div>
  </div>`;}
    var item = `<div class="carousel-item">
    <img src="${image}" class="d-block h-2 mx-auto d-block rounded img-thumbnail" alt="...">
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

function InitiateMasterPage(template){

  document.getElementById("MasterPageLayout").innerHTML = template;

}

function PopulateGallery(thispageimages){

  InitiateMasterPage(mastercaroursellayout);
    images = thispageimages;
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

function ChangePath(images , folder ){
  var updatedpaths = [""];
  images = images.forEach(image => {

    updatedpaths.push(folder + "/" + image);

    
  });

  return updatedpaths;

}

function ShowContent(content)
{

  document.getElementById("MasterPageLayout").innerHTML = content;

}

function ChangePage (caller){

  let caption = caller ;
  let pagehtmlstring = "";

  console.log(caption);
  if (!( typeof caller == 'string' )){
  caption = caller.text;
  }

  switch (caption) {

      case "Pots" : 

      pots = ChangePath(pots,"Images/Selected/Potted");

      pagehtmlstring += PopulateGallery(pots);
      console.log("Case Pots");
      break;

      case "Plants" : 

      plants = ChangePath(plants,"Images/Selected/Ground/Females");
      pagehtmlstring += PopulateGallery(plants);

      console.log("Case Plants");
      break;

      case "Edibles" : 

      edibles = ChangePath(edibles,"Images/Selected/Baked");

      pagehtmlstring += PopulateGallery(edibles);

      console.log("Case Edibles");
      break;

      case "Sativa" : 

      plants = ChangePath(plants,"Images/Selected/Ground/Females");
      pagehtmlstring += PopulateGallery(plants);

      console.log("Case Plants");
      break;

      case "Indica" : 


      plants = ChangePath(plants,"Images/Selected/Ground/Females");
      pagehtmlstring += PopulateGallery(plants);

      console.log("Case Plants");
      break;

      case "Hybrid" : 


      plants = ChangePath(plants,"Images/Selected/Ground/Females");
      pagehtmlstring += PopulateGallery(plants);

      console.log("Case Plants");

      break;

      case "Links" : 

      pagehtmlstring += ShowContent(`<a href="https://wonderful-dune-0bd001310.azurestaticapps.net/" class="btn btn-success"> Directory </a>`);
      console.log("Case Links");
      break;

      case "Gallery" : 

      plants = ChangePath(plants,"Images/Selected/Ground/Females");
      pagehtmlstring += PopulateGallery(plants);

      console.log("Case Plants");

      break;

      case "Home" : 

      pagehtmlstring += ShowContent(`<h1>Welcome To Pott.com</h1>`);
      console.log("Case Frameworks");
      break;

      case "Contact Us" : 

      pagehtmlstring += ShowContent(`Welcome To pott.com </br> Contact us on </br><strong>Facebook :</strong> <strong></br>Whatsapp :</strong> </br><strong>IG :</strong> `);
      console.log("Case Contact Us");
      break;

      case "About Us" : 
      pagehtmlstring += ShowContent(`We are producing high quality hemp products sold around the Phoenix Area`);
      console.log("Case About Us");
      break;

      case "Links" : 

      pagehtmlstring += "Pots";
      console.log("Case Frameworks");
      break;

      default :
      pagehtmlstring += "No Case";
      console.log("Case Default");
      
      break;

  }


// pagehtmlstring = ;
    console.log(pagehtmlstring);

return pagehtmlstring;
}