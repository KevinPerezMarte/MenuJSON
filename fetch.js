const tabla = document.querySelector('#Menu tbody');

function cargarUsuarios(){
    fetch('datos.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(datos => {
            datos.forEach(datos => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${datos.id}</td>
                    <td>${datos.dato1}</td>
                    <td>${datos.dato2}</td>
                    <td>${datos.dato3}</td>
                    <td>${datos.dato4}</td>
                `;
                tabla.appendChild(row);                
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarUsuarios();