import { onload } from './onload.js';
import { makeRequest } from './makeRequest.js';
// import { makeRequest2 } from './makeRequest2.js';
//import { drawTable } from './drawTable.js';
import { graph } from './graph.js';
import { formatData } from './formatData.js';
import { formatData2 } from './formatData2.js';

const readData = async () => {
  try {
    const bankList = await onload();

    //const button = document.getElementById('btnGeneralYear');
    //button.addEventListener('click', handleRequest)
  } catch (error) {
    // Manejar el error
  }
};
document.addEventListener('DOMContentLoaded', readData);
// import { graphPie } from './graphPie.js';
//const input = document.getElementById('indicador'); divClick
const bank = document.getElementById('divClick');
const button = document.getElementById('consultar');
const select = document.getElementById('year');

const handleRequestGeneral = async () => {
  console.log('holi');
  handleRequest1();
  handleRequest2();
};
const handleRequest1 = async () => {
  //console.log('hola');
  //console.log(year.value);
  //const indicador = input.value;
  try {
    // const respuesta = await axios.get(
    //   'https://api.cmfchile.cl/api-sbifv3/recursos_api/balances/2009/cuentas/1100000/instituciones/001?apikey=5598691df818f21be6278618948092222c0ff50f&formato=json'
    // );
    // const datos = respuesta.data;
    let cuenta = '1100000';
    let idBanco = document.getElementById('idBank').value;

    //console.log(cuenta);
    const datos = await makeRequest(idBanco, cuenta, year.value);
    console.log(datos);

    //!esto es para ejecutar la funcion drawTable en el contenedor
    // const container = document.getElementById('resultados');
    // drawTable(datos.CodigosBalances, container);
    //!fin
    const canva = document.getElementById('grafico');
    const datosFormateados = formatData(datos);
    // console.log(datosFormateados);
    // Destroy existing chart

    let existingChart = Chart.getChart(canva);

    if (existingChart) {
      existingChart.destroy();
    }
    graph(datosFormateados, canva, 'bar');

    // PRUEBAS
    // console.log(datos);
    // console.log(datos.CodigosBalances[0]);
    // console.log(datos.CodigosBalances[0].MonedaTotal);

    // console.log(typeof datos);
    // datos.CodigosBalances.forEach((element) => {
    //   console.log(element.DescripcionCuenta);
    // });

    // console.log('ayuda');

    // datos.CodigosBalances.forEach((elemento) => {
    //   console.log('prueba');
    //   container.innerHTML += `
    //     <div>
    //     <p>Anho: ${elemento.Anho}</p>
    //     <p>codigo cuenta: ${elemento.CodigoCuenta}</p>
    //     <p>CodigoInstitucion: ${elemento.CodigoInstitucion}</p>
    //     <p>DescripcionCuenta: ${elemento.DescripcionCuenta}</p>
    //     <p>Mes: ${elemento.Mes}</p>
    //     <p>MonedaChilenaNoReajustable: ${elemento.MonedaChilenaNoReajustable}</p>
    //     <p>MonedaExtranjera: ${elemento.MonedaExtranjera}</p>
    //     <p>MonedaReajustablePorIPC: ${elemento.MonedaReajustablePorIPC}</p>
    //     <p>MonedaReajustablePorTipoDeCambio: ${elemento.MonedaReajustablePorTipoDeCambio}</p>
    //     <p>MonedaTotal: ${elemento.MonedaTotal}</p>
    //     <p>NombreInstitucion: ${elemento.NombreInstitucion}</p>
    //     </div>
    //     `;
    // });

    // console.log(datos.CodigosBalances);
  } catch (error) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'error',
      title: 'Ha ocurrido un problema',
    });
  }
};

const handleRequest2 = async () => {
  console.log('holaa');
  //const indicador = input.value;
  try {
    let cuenta = '1000000';
    let idBanco = document.getElementById('idBank').value;
    //console.log(cuenta);
    console.log();
    const datos = await makeRequest(idBanco, cuenta, select.value);
    // const datos = await makeRequest(indicador, cuenta, year.value);
    //const datos = await makeRequest2(indicador);
    console.log(datos);
    console.log('datos2222222');
    const canva = document.getElementById('grafico2');
    const datosFormateados = formatData2(datos);
    // console.log(datosFormateados);
    let existingChart = Chart.getChart(canva);

    if (existingChart) {
      existingChart.destroy();
    }
    graph(datosFormateados, canva, 'line');
  } catch (error) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'error',
      title: 'Ha ocurrido un problema',
    });
  }
};

button.addEventListener('click', handleRequestGeneral);

function clickedBank(divClick, event) {
  // Compare the id of the selected div with the id of the bank listing
  //console.log('obtener todos los divd');
  const links = divClick.querySelectorAll('div');
  //console.log(links);

  //search id from list of bank
  links.forEach((link) => {
    //console.log(link.id);
    //console.log('evento del id:');
    //console.log(event.target.id);
    if (event.target.id === link.id) {
      //console.log('banco encontrado');
      document.getElementById('idBank').value = event.target.id;
      //console.log('siiiii');
      handleRequestGeneral();
    }
  });
}
//[3.1] Use when clicked the bank of the list
const divClick = document.getElementById('banks');

const selectedBank = async (event) => {
  //console.log('en selectedBank');
  await clickedBank(divClick, event);
};
divClick.addEventListener('click', selectedBank);
