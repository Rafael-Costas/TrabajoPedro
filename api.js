/*fetch('https://mhw-db.com/weapons/1')
    .then(response => response.json())
    .then(weapon => {
        // your code here
        console.log(weapon)
        const imageURL = weapon.assets.image;
        return imageURL
    });
  */  
    for ( let i = 0, a=1; i < 11; i+=1, a+=100) {
      const url='https://mhw-db.com/weapons/'+a
      fetch(url)
      .then(response => response.json())
      .then(response => {
          // your code here
          
          const imageURL = response.assets.image;
                  // Estableciendo la URL de la imagen en el atributo src de la etiqueta img
                  document.getElementById('weapon'+i).src = imageURL;
                 posicion(i,response.type)
                });
      }
      
 /*
    fetch('https://mhw-db.com/weapons/100')
    .then(response => response.json())
    .then(response => {
        // your code here
        
        const imageURL = response.assets.image;
                // Estableciendo la URL de la imagen en el atributo src de la etiqueta img
                document.getElementById('weapon1').src = imageURL;
                posicion(0,response.type)
              });

    fetch('https://mhw-db.com/weapons/1')
    .then(response => response.json())
    .then(response => {
        // your code here
        const imageURL = response.assets.image;
                // Estableciendo la URL de la imagen en el atributo src de la etiqueta img
                document.getElementById('weapon2').src = imageURL;

        posicion(1,response.type)
    });
    
    fetch('https://mhw-db.com/weapons/200')
    .then(response => response.json())
    .then(response => {
        // your code here
        const imageURL = response.assets.image;
                // Estableciendo la URL de la imagen en el atributo src de la etiqueta img
                document.getElementById('weapon3').src = imageURL;
                posicion(2,response.type)
    });
    
    fetch('https://mhw-db.com/weapons/300')
    .then(response => response.json())
    .then(response => {
        // your code here
        const imageURL = response.assets.image;
                // Estableciendo la URL de la imagen en el atributo src de la etiqueta img
                document.getElementById('weapon4').src = imageURL;
                posicion(3,response.type)
    });
    
    fetch('https://mhw-db.com/weapons/400')
    .then(response => response.json())
    .then(response => {
        // your code here
        const imageURL = response.assets.image;
                // Estableciendo la URL de la imagen en el atributo src de la etiqueta img
                document.getElementById('weapon5').src = imageURL;
                posicion(4,response.type)
    });
    
    fetch('https://mhw-db.com/weapons/500')
    .then(response => response.json())
    .then(response => {
        // your code here
        const imageURL = response.assets.image;
                // Estableciendo la URL de la imagen en el atributo src de la etiqueta img
                document.getElementById('weapon6').src = imageURL;
                posicion(5,response.type)
    });
    
    fetch('https://mhw-db.com/weapons/600')
    .then(response => response.json())
    .then(response => {
        // your code here
        const imageURL = response.assets.image;
                // Estableciendo la URL de la imagen en el atributo src de la etiqueta img
                document.getElementById('weapon7').src = imageURL;
                posicion(6,response.type)
    });
    
    fetch('https://mhw-db.com/weapons/700')
    .then(response => response.json())
    .then(response => {
        // your code here
        const imageURL = response.assets.image;
                // Estableciendo la URL de la imagen en el atributo src de la etiqueta img
                document.getElementById('weapon8').src = imageURL;
                posicion(7,response.type)
    });
    fetch('https://mhw-db.com/weapons/800')
    .then(response => response.json())
    .then(response => {
        // your code here
        const imageURL = response.assets.image;
                // Estableciendo la URL de la imagen en el atributo src de la etiqueta img
                document.getElementById('weapon9').src = imageURL;
                posicion(8,response.type)
    });

    fetch('https://mhw-db.com/weapons/900')
    .then(response => response.json())
    .then(response => {
        // your code here
        const imageURL = response.assets.image;
                // Estableciendo la URL de la imagen en el atributo src de la etiqueta img
                document.getElementById('weapon10').src = imageURL;
                posicion(9,response.type)
    });

    fetch('https://mhw-db.com/weapons/1000')
    .then(response => response.json())
    .then(response => {
        // your code here
        const imageURL = response.assets.image;
                // Estableciendo la URL de la imagen en el atributo src de la etiqueta img
                document.getElementById('weapon11').src = imageURL;
                posicion(10,response.type)
    });

    fetch('https://mhw-db.com/weapons/1100')
    .then(response => response.json())
    .then(response => {
        // your code here
        const imageURL = response.assets.image;
                // Estableciendo la URL de la imagen en el atributo src de la etiqueta img
                document.getElementById('weapon12').src = imageURL;
                posicion(11,response.type)
    });

   */
async function posicion(num,coso){
  const select = document.querySelector('select');
  // Accede a todas las opciones dentro del select
  const opciones = select.options[num];
  opciones.textContent=coso;
}