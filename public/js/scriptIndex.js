//url 
const url = 'http://localhost:3000/';

//Boton Horarios en el home
let btnHorarios = document.getElementById('btnHorarios');

//Textbox para mostrar la tabla
let especialidadSolicitada = document.getElementById('especialidadSolicitada');

//tabla
let tablaDatos = document.getElementById('tablaDatos');

//Div que no se muestra que tiene el titulo, la tabla y el boton imprimir
let tablaVisibleBtnVisible = document.getElementById('tablaVisibleBtnVisible');

//Inicializar la tabla que no se vea
tablaVisibleBtnVisible.style.display = "none";
tablaDatos.style.display = "none";

//Mostrar datos de la Del personal y turnos según  servicios solicitados
btnHorarios.addEventListener('click', ()=>{
  if(especialidadSolicitada.value=='Pediatría')
  {
    tablaVisibleBtnVisible.style.display = "block";
    tablaDatos.style.display = "block";
    traerDatosTabla();
  }
  if(especialidadSolicitada.value=='Psiquiatría')
  {
    tablaVisibleBtnVisible.style.display = "block";
    tablaDatos.style.display = "block";
    traerDatosTabla();
  }
  if(especialidadSolicitada.value=='Enfermería')
  {
    tablaVisibleBtnVisible.style.display = "block";
    tablaDatos.style.display = "block";
    traerDatosTabla();
  }
  if(especialidadSolicitada.value=='Selecciona una especialidad:')
  {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No has seleccionado nada!'
    })
  }
  
})

//Función para traer los datos de la tabla según el personal solicitado 
function traerDatosTabla(nombreEspecialidad) 
{
  fetch(url + especialidadSolicitada.value)
      .then(response => response.json())
      .catch(error => console.log(error))
      .then(datos => {
        tablaDatos.innerHTML = `
        <thead>
          <tr>
            <th scope="col">Cedula</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Especialidad</th>
            <th scope="col">Fecha inicio</th>
            <th scope="col">Fecha fin</th>
            <th scope="col">Turno</th>
          </tr>
        </thead>`;
        tablaDatos.style.display = "block";
        for (let i = 0; i < datos.length; i++) {
          tablaDatos.innerHTML += ` 
        <tr>
          <td>${datos[i].cedula}</td>
          <td>${datos[i].nombre}</td>
          <td>${datos[i].apellidos}</td>
          <td>${datos[i].especialidad}</td>
          <td>${datos[i].fecha_inicio}</td> 
          <td>${datos[i].fecha_fin}</td> 
          <td>${datos[i].turno}</td>     
        </tr>
        `
        }
      }
      );
};


// Escuchamos el click del botón e imprimimos
let btnImprimir = document.getElementById("btnImprimir");
btnImprimir.addEventListener("click", () => {
  //const elementoParaConvertir = document.getElementById("tablaPdf"); // Aquí puedes elegir cualquier elemento del DOM

// import { jsPDF } from "jspdf";
// const doc = new jsPDF({
//   orientation: "landscape",
//   unit: "in",
//   format: [4, 2]
// });
// doc.setFontSize(40)
// doc.text(35, 25, 'Paranyan loves jsPDF')
// doc.html(elementoParaConvertir, 'table', 15, 40, 180, 160)
// doc.save("a4.pdf");
html2pdf()
        .set({
            pagebreak: ['css', 'legacy'],
            margin: 1.5,
            filename: 'Horarios.pdf',
            image: {
                type: 'string',
                quality: 0.98
            },
            html2canvas: {
                scale: 3, // A mayor escala, mejores gráficos, pero más peso
                letterRendering: true,
            },
            jsPDF: {
                unit: "in",
                format: "a3",
                orientation: 'portrait' // landscape o portrait
            }
        }) 
        .from(tablaVisibleBtnVisible)
        .save()
        .catch(err => console.log(err));
});


