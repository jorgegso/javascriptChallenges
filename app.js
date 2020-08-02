var contenido = document.querySelector('#contenido')

function came() {
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
      console.log(data.results['0'].email)
      contenido.innerHTML = `
      <div class="flex-container ">
        <img src="${data.results['0'].picture.large}" width="200px">
        <p>Nombre: ${data.results['0'].name.last} </p>
      </div>`
    })
}





