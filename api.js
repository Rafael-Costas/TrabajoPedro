/*fetch('https://mhw-db.com/weapons/1')
    .then(response => response.json())
    .then(weapon => {
        // your code here
        console.log(weapon)
        const imageURL = weapon.assets.image;
        return imageURL
    });
  */  
    for ( let i = 0, a=1; i < 13; i+=1, a+=90) {
      const url='https://mhw-db.com/weapons/'+a
      fetch(url)
      .then(response => response.json())
      .then(response => {
          // your code here
          try{
          const imageURL = response.assets.image;
                  // Estableciendo la URL de la imagen en el atributo src de la etiqueta img
                  document.getElementById('weapon'+i).src = imageURL;
                 posicion(i,response.type)
                }catch(error){
                    console.log("Hubo un problema técnico")
                }
                });
      }
      
 
async function posicion(num,coso){
  const select = document.querySelector('select');
  // Accede a todas las opciones dentro del select
  const opciones = select.options[num];
  opciones.textContent=coso;
}