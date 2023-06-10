var titulo = document.getElementById("autoescrito");
var textoOriginal = titulo.innerHTML;
var duracionAnimacion = 4;

function borrarYReescribirTitulo() {
  titulo.innerHTML = "";

  for (var i = 0; i < textoOriginal.length; i++) {
    setTimeout(function (index) {
      titulo.innerHTML += textoOriginal[index];
    }, i * (duracionAnimacion * 1000 / textoOriginal.length), i);
  }
}

borrarYReescribirTitulo();
setInterval(borrarYReescribirTitulo, duracionAnimacion * 1000 * 2);
