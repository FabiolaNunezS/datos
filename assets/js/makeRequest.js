export const makeRequest = async () => {
  try {
    const respuesta = await axios.get(
      'https://api.cmfchile.cl/api-sbifv3/recursos_api/balances/2009/cuentas/1100000/instituciones/001?apikey=5598691df818f21be6278618948092222c0ff50f&formato=json'
    );

    if (respuesta.status === 200) {
      const datos = respuesta.data;
      return datos;
    }
  } catch (error) {
    throw new Error();
  }
};

//!para segundo grafico

// export const makeRequest = async () => {
//     try {
//       const respuesta = await axios.get(
//         'https://api.cmfchile.cl/api-sbifv3/recursos_api/balances/2009/cuentas/1100000/instituciones/001?apikey=5598691df818f21be6278618948092222c0ff50f&formato=json'
//       );

//       if (respuesta.status === 200) {
//         const datos = respuesta.data;
//         return datos;
//       }
//     } catch (error) {
//       throw new Error();
//     }
//   };

// `https://api.cmfchile.cl/api-sbifv3/recursos_api/balances/${year}/cuentas/${codigoCuentas}/instituciones/${codigoInstitucion}?apikey=5598691df818f21be6278618948092222c0ff50f&formato=json`
