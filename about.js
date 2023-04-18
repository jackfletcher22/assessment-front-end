//console.log("hello world");
const image= document.querySelector('img')
let form = document.querySelector('#contact');



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted successfully!')
}

form.addEventListener('submit', handleSubmit);

image.addEventListener ('mouseover', function() {
	alert("You are a coding machine!")
})