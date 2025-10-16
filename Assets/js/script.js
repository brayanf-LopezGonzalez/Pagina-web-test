function onlyLetters(event){
	const pressedKey = event.key;
	const letters = ["a", "á", "A", "Á", "e","É",];

	if(!letters.includes(pressedKey)) {
		return false
	}
}

function onlyNumbers(event){
	const pressedKey = event.key;
	const numbers = ["1", "2", "3", "4", "5",];

	if(!numbers.includes(pressedKey)){
		return false;
	}
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!regex.test(email)) {
        return false;
    }
    
    return true;
}
