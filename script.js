/* === Traitement upload image */
const inputImage = document.querySelector('.inputImage')
const imageProfil = document.querySelector('.previewImage')

inputImage.addEventListener('change', (e) => {

    const file = e.target.files[0]

    if(file){
        // créer l'url de l'image
        const imgUrl = URL.createObjectURL(file)

        // attribue l'url à notre image
        imageProfil.style.display = 'inline'
        imageProfil.src = imgUrl
    }
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