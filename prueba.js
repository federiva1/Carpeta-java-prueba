let productosAuto;

let primeraprueba= document.getElementById("fede")


fetch("/Productos/ProductosAuto.json")
      .then(response => response.json())
      .then(data => {
        productosAuto = data;
  

        for (const producto of productosAuto) {
          if (producto.Antiguedad <= 1905) {
            fede.innerHTML = "<h1>Funcionó</h1>";
          } else {
            console.log("no aplica");
          }
        }
    
    });