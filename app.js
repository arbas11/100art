
function detail(no, str) {
  let artist = document.querySelector(`#artistName${no}`);
  let title = document.querySelector(`#itemTitle${no}`);
  let image = document.querySelector(`#itemImg${no}`);
  let price = document.querySelector(`#itemPrice${no}`);
  let mdlDetail = document.querySelector('#mdl-detail');
  let mdlTitle = document.querySelector('#mdl-title');
  let mdlImage = document.querySelector('#mdl-img');
  let mdlPrice = document.querySelector('#mdl-price');
  mdlTitle.innerHTML = `${title.innerHTML} by ${artist.innerHTML}`
  mdlImage.innerHTML = image.innerHTML;
  mdlDetail.innerHTML = str;
  mdlPrice.innerHTML = price.innerHTML;
  console.log(image.innerHTML)
}