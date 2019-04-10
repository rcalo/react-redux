import { createStore } from 'redux';


const $form = document.getElementById("form")
$form.addEventListener('submit', handleSubmit)

function handleSubmit (event){

    event.preventDefault()

    const data = new FormData($form)
    const title = data.get('title')
    
    //agrego un action 
    store.dispatch({
        type: 'ADD_SONG',
        payload: {
            title: title,
        }
    })

}

const initial = [
    {
        "title": "Despacito",
    },
    {
        "title": "one more time",
    },
    {
        "title": "cyber punk",
    }

]

//creo una constante reducer, se hará un caso por cada action definida, si llega algo que no está contemplado retorna el mismo estado
const reducer = function(state, action){
    switch(action.type){
        case "ADD_SONG":
            if (action.payload.title !== ''){
                return [...state, action.payload]
            }
        default:
            return state
    }

}

//creo el store, debe existir uno solo por componente
const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


//se crea una funcion render para llamarla desde el manejador de cambios, este será suscripto en el store
function render(){
    //Obtengo el elemento que está en redux.html
    const $container = document.getElementById("playlist")
    
    //cargo el estado
    const playlist = store.getState()
    
    //limpio el elemento html, sino se deuplicaría el contenido
    $container.innerHTML = ''

    //recorro los elementos de la playlist y los aagrego al elemento html $container
    playlist.forEach(element => {
        const template = document.createElement('p')
        template.textContent = element.title
        $container.appendChild(template)
    })
}

//primer llamado
render()

//manejador de cambios, estará suscripto al store
function handleChange(){
    render()
}

//para renderizar de nuevo la pantalla cuando existan cambios
store.subscribe(handleChange)