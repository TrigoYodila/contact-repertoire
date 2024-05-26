/* === Traitement upload image */
const inputImage = document.querySelector('.inputImage')
const imageProfil = document.querySelector('.previewImage')

const inputsText = document.querySelectorAll('input')
const genre = document.querySelector('select')
const bio = document.querySelector('textarea')

const btnCreer = document.querySelector('.creer')

const form = document.querySelector("form")

let imgUrl


inputImage.addEventListener('change', (e) => {

    const file = e.target.files[0]

    if(file){
        // créer l'url de l'image
        imgUrl = URL.createObjectURL(file)

        // attribue l'url à notre image
        imageProfil.style.display = 'inline'
        imageProfil.src = imgUrl
    }
})


// == selection des valeurs 


btnCreer.addEventListener('click', (e) => {

    e.preventDefault()

    //recuperation des infos
    const prenom = inputsText[0].value
    const nom = inputsText[1].value
    const bioText = bio.value
    const sexeValue = genre[genre.selectedIndex].value

    // créations des éléments
    const divContact = document.createElement('div')


    //left
    const divLeftContact = document.createElement('div')
    const imgLeft = document.createElement('img')
    imgLeft.classList.add('image-left')
    imgLeft.src = imgUrl
    divLeftContact.appendChild(imgLeft)

    // right
    const divRightContact = document.createElement('div')

    
})













// Get the file input element and the upload button
/*const imageInput = document.querySelector('.inputImage');
const uploadButton = document.querySelector('.btn-image');
const previewImage = document.querySelector('.previewImage');

// ajout de event listener sur le fichier input
imageInput.addEventListener('change', (event) => {

    event.preventDefault()
  // recuperer le fichier selectionné
  const file = event.target.files[0];

  console.log("files ", file)

  // test si le fichier existe
  if (file) {
    // créer un url pour le fichier
    const imageUrl = URL.createObjectURL(file);

    // affichage de l'image
    previewImage.style.display = 'inline'
    previewImage.src = imageUrl
    
  }
}); */