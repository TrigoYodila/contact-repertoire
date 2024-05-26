/* === Traitement upload image */
const inputImage = document.querySelector('.inputImage')
const imageProfil = document.querySelector('.previewImage')

const inputsText = document.querySelectorAll('input')
const genre = document.querySelector('select')
const bio = document.querySelector('textarea')

const btnCreer = document.querySelector('.creer')

const contactList = document.querySelector('.content-list')
contactList.classList.add('content-list')

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
    const divBtnCroix = document.createElement('div')
    divBtnCroix.classList.add('btnCroix')
    const imgCroix = document.createElement('img')
    imgCroix.classList.add('image-croix')
    imgCroix.src='./images/croix.png'

    divBtnCroix.appendChild(imgCroix)

    const labelPrenom = document.createElement('label')
    const labelNom = document.createElement('label')
    labelNom.classList.add('textLabel')
    labelPrenom.classList.add('textLabel')

    labelPrenom.textContent = prenom
    labelNom.textContent = nom

    const paragSexe = document.createElement('p')
    paragSexe.classList.add('textLabel')
    paragSexe.textContent = sexeValue

    const paragBio = document.createElement('p')
    paragBio.textContent = bioText

    divRightContact.appendChild(divBtnCroix)
    divRightContact.appendChild(labelPrenom)
    divRightContact.appendChild(labelNom)
    divRightContact.appendChild(paragSexe)
    divRightContact.appendChild(paragBio)

    divContact.classList.add('contact')
    divContact.appendChild(divLeftContact)
    divContact.appendChild(divRightContact)

    contactList.appendChild(divContact)
 
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