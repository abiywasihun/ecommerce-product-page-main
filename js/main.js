let cart
var slideIndex=0;
const checkCheckout=()=>{
	if (cart) {
     var images= cart.image.split('/') 
     var price=parseInt(cart.price.substring(1))
     var subTotal=price*cart.quantity
     var image='./'+images[images.length-2]+'/'+images[images.length-1]
    var cartData=`<div class='product__Checkout'>
                  <img class='checkout__img' src=${image} alt=''/>
                  <div class='product__desc'>
                  <span>${cart.title}</>
                  <p>${cart.price+' x '+cart.quantity} <b class='bold_total'> ${'$'+subTotal}</b></p>
                  </div>
                  <div onclick=moveToTrash() class='product__trash'>
                  <i class="fa-solid fa-trash-can"></i></div>
                  </div>
                  <button class='checkout__button'>Checkout</button>`
	}else{
		var cartData=`<span class="cart_body">Your cart is empty</span> `
	}
	document.getElementById('show__cart').innerHTML=cartData
}
checkCheckout()
const opensidebarMenu=()=>{
document.getElementById('itemLeft').style.display='block'
}
const closesidebarMenu=()=>{
document.getElementById('itemLeft').style.display='none'
}
var cartIcon = document.getElementById("cart__icon");
cartIcon.addEventListener('mouseover',function(){
   document.getElementById("show_cart").style.display  = "block";
})
cartIcon.addEventListener('mouseleave',function(){
  document.getElementById("show_cart").style.display  = "none";
})
const disableButton=()=>{
	document.getElementById('minusButton').setAttribute('disabled','')
}
const removedisableButton=()=>{
	document.getElementById('minusButton').removeAttribute('disabled','')
}

var inputVal = document.getElementById("quantity").value;
if(inputVal<=1){
disableButton()
}
function productIncrement() {
	var inputVal = document.getElementById("quantity").value;
	if(inputVal>=1){removedisableButton()}
	document.getElementById('quantity').value=parseInt(inputVal)+1
}
const productDecrement=()=>{
	var inputVal = document.getElementById("quantity").value;
	if(inputVal<=1){
		disableButton()
	}else{

	document.getElementById('quantity').value=parseInt(inputVal)-1
}
}


const openModal=()=>{
document.getElementById('modal_images').style.display='block'

}
const currentSlide=(i)=>{
	console.log('modal__image_'+i)
	slideIndex=i;
document.getElementById('modal__image_'+i).style.display='block'
}
const closeModal=()=>{
document.getElementById('modal_images').style.display='none'
for (var i = 1; i <= 4; i++) {
	document.getElementById('modal__image_'+i).style.display='none'
}
}
const closeSlides=()=>{
	for (var i = 1; i <= 4; i++) {
	document.getElementById('modal__image_'+i).style.display='none'
}
}
const moveSlides=(n)=>{
var slides=document.getElementsByClassName('modal__image');
if(n<1){slideIndex=slides.length}
if(n>slides.length){slideIndex=1}
closeSlides()
currentSlide(slideIndex)
}
const minusSlides=()=>{
	slideIndex=slideIndex-1;
moveSlides(slideIndex);
}
const plusSlides=()=>{
slideIndex=slideIndex+1;
moveSlides(slideIndex);
}
const addToCart=()=>{
cart={
	title:document.getElementById('content__title').innerHTML,
	image:document.querySelector('.product__image').src,
	price:document.getElementById('company__price').innerHTML,
	quantity:document.getElementById('quantity').value,
}
checkCheckout()
console.log(cart.image.split('/'))
}
const moveToTrash=()=>{
	cart=null
	checkCheckout()
}