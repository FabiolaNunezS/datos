import { makeRequest } from './makeRequest.js';
import { drawTable } from './drawTable.js';
import { graph } from './graph.js';
import { formatData } from './formatData.js';

const input = document.getElementById('indicador');
const button = document.getElementById('consultar');

const handleRequest = async () => {
  const indicador = input.value;
  try {
    // const respuesta = await axios.get(
    //   'https://api.cmfchile.cl/api-sbifv3/recursos_api/balances/2009/cuentas/1100000/instituciones/001?apikey=5598691df818f21be6278618948092222c0ff50f&formato=json'
    // );
    // const datos = respuesta.data;
    const datos = await makeRequest(indicador);
    console.log(datos);

    //!esto es para ejecutar la funcion drawTable en el contenedor
    // const container = document.getElementById('resultados');
    // drawTable(datos.CodigosBalances, container);
    //!fin
    const canva = document.getElementById('grafico');

    //*esta parte al descomentarlo me salta a un error
    // const datosFormateados = formatData(datos);
    // graph(datosFormateados, canva);

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

button.addEventListener('click', handleRequest);
