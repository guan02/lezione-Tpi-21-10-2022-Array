import './style.css'

const cosedafare= document.getElementById("cosadafare")
const txtNota= document.getElementById("txtNota")
const addNotaBtn= document.getElementById("addNotaBtn")

const pulisciCoseDaFare=() =>
cosedafare.innerText ="" //pulire stringa

pulisciCoseDaFare()

class Nota {

  constructor(title){
    this.title=title
  }
}
let a =[]
let note = [] //lista vuota
const noteSalvate=localStorage.getItem("note")


if(noteSalvate){
  

    note=JSON.parse(noteSalvate)
  }

note.push(new Nota ("prova"))// aggiunge oggetto in array

/* aggiornamento lista da fare 

1. cancello lista delle cose da fare
2. cicli sulle note :
  a.creo tag li 
  b. aggiungo il titolo della nota come testo nel tag
  c3 aggiungiamo il tag della lista cose da fare (appendChild)

*/
const AggiornaCoseDaFare=()=>{
  //1
  pulisciCoseDaFare()
  //2
  //for(let i =0; i<note.length;i++){}
  for (let nota of note ){
    //2.a
  const li = document.createElement("li")
    //2.b
  li.innerText =nota.title
    //2.c 
    cosedafare.appendChild(li)
    
  }
}
AggiornaCoseDaFare()

/* aggiunta nota da UI
1. leggo testo della nota da Input
2.creare una istanza della classe Nota
3.push nella lista delle note 
4. pulisco Input 
5. aggiorna lista

*/
const AddNota =()=>{

  //1
  const titoloNota =txtNota.value + latlng
  //2 
  const nota =new Nota(titoloNota)
  
  //3
  note.push(nota)
  //4
  txtNota.value=""
  //5
  AggiornaCoseDaFare()
  //aggiorno localStorage
  localStorage.setItem("note",JSON.stringify(note))

  
}

addNotaBtn.onclick = AddNota
/*
addNotaBtn.onclick =()=>{
AddNota()

}
*/
let a1
const s=[]
const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
const markerSalvate=localStorage.getItem("marker")
if (markerSalvate){
  a=JSON.parse(markerSalvate)
  console.log(a[0])
  for(let i=0;i<a.length;i++){
    L.marker(JSON.parse(a[i])).addTo(map).bindPopup(a[i])  
     
  }
    
      
}
const marker = L.marker([51.5, -0.09]).addTo(map);
marker.bindPopup("ciao")


map.on ("click", (evt)=>{  
  
  console.log(evt.latlng)
  marker.setLatLng(evt.latlng)
  latlng=JSON.stringify(evt.latlng)
  L.marker(evt.latlng).addTo(map).bindPopup(latlng)
  
  console.log(latlng)
   a.push(latlng)
  console.log(a)
   localStorage.setItem("marker",JSON.stringify(a))
}) 
let latlng = JSON.stringify(marker.getLatLng())




