const avatar = document.querySelector('.avatar')
const dropdown = document.querySelector('.nav-user ul')
const addPet = document.getElementById('add-pet')
const popup = document.querySelector('.popup')
const closeBtn = document.querySelector('.close-btn')

// partials/header.ejs
avatar.addEventListener('click', () => {
	dropdown.classList.toggle('hidden')
})

// users/show.ejs - Popup
addPet.addEventListener('click', () => {
	popup.classList.remove('hidden')
})
closeBtn.addEventListener('click', () => {
	popup.classList.add('hidden')
})

// users/signup.ejs
function toggleSpecializationField() {
	const userType = document.querySelector('#userType').value
	const specField = document.querySelector('.specialization-field')
	if (userType === 'Veterinarian') {
		specField.style.display = 'flex'
	} else {
		specField.style.display = 'none'
	}
}
