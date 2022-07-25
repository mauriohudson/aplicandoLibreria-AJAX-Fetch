const nombre = document.getElementById("name")
const email = document.getElementById("email")
const direccion = document.getElementById("di")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
      warnings += `El nombre no es valido <br>`
      entrar = true
    }
    if(!regexEmail.test(email.value)){
      warnings += `El email no es valido <br>`
      entrar = true
    }
    if(direccion.value.length < 5){
      warnings += `La direccion es incorrecta`
      entrar = true
    }

    if(entrar){
      parrafo.innerHTML = warnings
    }else{
      parrafo.innerHTML = "Enviado"
    }
})






document.getElementById('payButton').addEventListener('click', function(){
  Swal.fire({
    title: 'Gracias',
    text: 'Pronto le enviamos el pedido a su mesa',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
})