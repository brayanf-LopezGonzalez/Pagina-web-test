/*function getPokeData() {

	fetch('https://pokeapi.co/api/v2/pokemon/ditto')
	  .then(
	  	response => response.json()
	  )
	  .then(

	  	data => {

	  		document.getElementById('poke_data').innerHTML="<img src='"+data.sprites.front_default+"'>"
	  		document.getElementById('poke_name').innerHTML=data.name
	  		

	  		console.log(data)

	  	}

	  );

}*/

function getPokeData() {
            
    const pokemonName = document.getElementById('input_poke_name').value.toLowerCase();
    const nameDisplay = document.getElementById('display_poke_name');
    const pokeData = document.getElementById('poke_data');

    nameDisplay.innerHTML = '';
    pokeData.innerHTML = '';
    
    if (!pokemonName) {
        nameDisplay.innerHTML = 'Pokemon no encontrado';
        return;
    }
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokemon no encontrado');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('poke_data').innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}">`;
            document.getElementById('display_poke_name').innerHTML = data.name;
        })
        .catch(error => {
            nameDisplay.innerHTML = error.message;
            console.error(error);
    	});
}