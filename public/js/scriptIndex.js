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
let tablaPdf = document.getElementById('tablaPdf');

//Inicializar la tabla que no se vea
tablaVisibleBtnVisible.style.display = "none";
tablaPdf.style.display = "none";

//Mostrar datos de la Del personal y turnos según  servicios solicitados
btnHorarios.addEventListener('click', ()=>{
  if(especialidadSolicitada.value=='Pediatría')
  {
    tablaVisibleBtnVisible.style.display = "block";
    tablaPdf.style.display = "block";
    traerDatosTabla();
  }
  if(especialidadSolicitada.value=='Psiquiatría')
  {
    tablaVisibleBtnVisible.style.display = "block";
    tablaPdf.style.display = "block";
    traerDatosTabla();
  }
  if(especialidadSolicitada.value=='Enfermería')
  {
    tablaVisibleBtnVisible.style.display = "block";
    tablaPdf.style.display = "block";
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

pdf();


// html2pdf()
//         .set({
//             pagebreak: ['css', 'legacy'],
//             margin: 1.5,
//             filename: 'Horarios.pdf',
//             image: {
//                 type: 'string',
//                 quality: 0.98
//             },
//             html2canvas: {
//                 scale: 3, // A mayor escala, mejores gráficos, pero más peso
//                 letterRendering: true,
//             },
//             jsPDF: {
//                 unit: "in",
//                 format: "a3",
//                 orientation: 'portrait' // landscape o portrait
//             }
//         }) 
//         .from(tablaPdf)
//         .save()
//         .catch(err => console.log(err));
});

//Función para descargar pdf (no funcionó)
function downloadPdf() {
  let pdf = new jsPDF('l', 'pt', 'a3');
  pdf.html(tablaPdf, {
      callback: function (pdf) {
          pdf.save('Horarios.pdf');
      }
  });
};

//No funcionó
function pruebaDivPdf() {
  var pdf = new jsPDF('p', 'pt', 'letter');
  source = tablaPdf;

  specialElementHandlers = {
      source: function (element, renderer) {
          return true
      }
  };
  margins = {
      top: 40,
      bottom: 40,
      left: 40,
      width: 522
  };

  pdf.fromHTML(
    source, 
    margins.left, // x coord 
    margins.top, { // y coord
          'width': margins.width, 
          'elementHandlers': specialElementHandlers
      },

      function (dispose) {
          pdf.save('Prueba.pdf');
      }, margins
  );
}

//No funcionó
function ConvertPdf() 
{
  const doc = new jsPDF({
  orientation: "landscape",
  unit: "in",
  format: [4, 2]
});
source = tablaPdf;
specialElementHandlers = {
  source: function (element, renderer) {
      return true
  }
};
doc.setFontSize(40)
doc.text(35, 25, 'Paranyan loves jsPDF')
doc.fromHTML(
  source, 
  15, 
  40,{
  'width': 180,'elementHandlers': specialElementHandlers
  }
)
doc.save("a4.pdf");
}

//La que más funcionó pero se ve fea
function pdf() {
const pdf = new jsPDF('p','pt','a4');
let pdfConf = {
pagesplit: true, //Adding page breaks manually using pdf.addPage();
background: '#fff' //White Background.
};
pdf.fromHTML(tablaPdf,20,20,{
width:700
})

pdf.save("Horarios.pdf");
}
