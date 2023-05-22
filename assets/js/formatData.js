export const formatData = (datos) => {
  const fechas = datos.CodigosBalances.map((elemento) => elemento.Mes);

  const values = datos.CodigosBalances.map((elemento) => elemento.MonedaTotal);

  //   console.log(fechas);
  //   console.log(values);
  return {
    labels: values,
    data: fechas,
  };
};
