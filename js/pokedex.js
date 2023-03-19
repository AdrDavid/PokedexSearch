const pokemonName = document.querySelector('.name')
//const pokemonNumber = document.querySelector('.number')
const pokemonImage = document.querySelector('.image')
const hab = document.querySelector('.hab')
const type = document.querySelector('.type')
pokemonImage.src = "images/poke.png";
const form = document.querySelector('.form')
const input = document.querySelector('.input__searsh')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

        

const galeria = async (p) =>{
    await fetch(`https://pokeapi.co/api/v2/pokemon/${p}`)
    .then(response => response.json())
    .then(async allpokemon => {
        console.log(allpokemon)
        //pokemonNumber.innerHTML = 'id-#'+allpokemon.id;
        pokemonName.innerHTML ="<i>Name:</i>"+allpokemon.name+`<br>`;
        hab.innerHTML = "<i>Hab:</i>"+allpokemon['abilities']['0']['ability']['name']+`;<br>`
        type.innerHTML ="<i>Type:</i>"+allpokemon['types']['0']['type']['name']+`;<br>`
        pokemonImage.src = allpokemon.sprites.front_default;
                    //pokemonImage.src = allpokemon['abilities']['1']['ability']['name']
                    if(allpokemon.status == 200){

                        if(allpokemon['types']['1']['type']['name']){
                            type.innerHTML ="<i>Type:</i>"+allpokemon['types']['0']['type']['name']+`;<br>`+allpokemon['types']['1']['type']['name']
                        }
                    }else{
                            type.innerHTML +="<i>Type:</i>"+allpokemon['types']['1']['type']['name']+`;<br>`
                        }
                    if(allpokemon.status == 200){

                        if(allpokemon['types']['1']['type']['name']){
                            hab.innerHTML = "<i>Hab:</i>"+allpokemon['abilities']['0']['ability']['name']+`;<br>`+allpokemon['abilities']['1']['ability']['name']+`;<br>`
                        }
                    }else{
                        hab.innerHTML = "<i>Hab:</i>"+allpokemon['abilities']['0']['ability']['name']+`;<br>`
                        }
                    
                       allpokemon
                       
    })
    
    .catch(erro => {
        
    })
    
    

}
const pokemons = async ()=>{

    await fetch(`https://pokeapi.co/api/v2/pokemon?limit=28`)
        .then(response => response.json())
        .then(allpokemon => {
        
        var pokemonImg = []
            allpokemon.results.map( async function(val){
                await fetch(val.url)
                .then(response => response.json())
                .then(chamarPokemon  => {
                    
                    // console.log(chamarPokemon['abilities']['1']['ability']['name'])
                    // console.log(chamarPokemon)
                    //console.log(chamarPokemon)
                    
                        pokemonImg.push({nome:val.name,imagem:chamarPokemon.sprites.front_default})
                        
                        var boxPokemon = document.querySelector('.boxPokemon')
                        boxPokemon.innerHTML = ""
                        pokemonImg.map(function(val){
                        boxPokemon.innerHTML += `

                        <div class="teste">
                            <img src="`+val.imagem+`">
                            <p>`+val.nome+`</p>
                            
                            
                        </div>  
                        
                        `
                    })
                    
                })


            })
        
        })
}
pokemons()




form.addEventListener('submit',function(event){
        

    event.preventDefault()
    galeria(input.value.toLowerCase())
    input.value = ""
    
    //console.log(input.value)
    
})

function backTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}




