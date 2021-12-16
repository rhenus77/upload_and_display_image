const container = document.querySelector('.container');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');


// on hover
container.addEventListener('mouseenter', function(){
	uploadBtn.style.display = "block"
});
// hover out 
container.addEventListener('mouseleave', function(){
	uploadBtn.style.display = "none";
});

// upload functionality
file.addEventListener('change', function(){
	const choosedFile = this.files[0];

	if (choosedFile) {
		const reader = new FileReader();

		reader.addEventListener('load', function(){
			img.setAttribute('src', reader.result);
		});

		reader.readAsDataURL(choosedFile);
	}
});







