export const makeRequest = async (codigoBanco, codigoCuentas, year) => {
  console.log(codigoCuentas);
  console.log(codigoBanco);

  try {
    console.log(codigoCuentas);
    let respuesta = await axios.get(
      // `https://api.cmfchile.cl/api-sbifv3/recursos_api/balances/${year}/cuentas/${codigoCuentas}/instituciones/${codigoInstitucion}?apikey=5598691df818f21be6278618948092222c0ff50f&formato=json`

      `https://api.cmfchile.cl/api-sbifv3/recursos_api/balances/${year}/cuentas/${codigoCuentas}/instituciones/${codigoBanco}?apikey=5598691df818f21be6278618948092222c0ff50f&formato=json`
    );

    console.log(respuesta);

    if (respuesta.status === 200) {
      const datos = respuesta.data;
      return datos;
    }
  } catch (error) {
    throw new Error();
  }
};

//!para despues
// `https://api.cmfchile.cl/api-sbifv3/recursos_api/balances/${year}/cuentas/${codigoCuentas}/instituciones/${codigoInstitucion}?apikey=5598691df818f21be6278618948092222c0ff50f&formato=json`

// 'https://api.cmfchile.cl/api-sbifv3/recursos_api/balances/2009/cuentas/1100000/instituciones/001?apikey=5598691df818f21be6278618948092222c0ff50f&formato=json'
