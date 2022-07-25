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