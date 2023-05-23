export const formatData = (datos) => {
  const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const fechas = datos.CodigosBalances.map(
    (elemento) => meses[elemento.Mes - 1]
  );

  const values = datos.CodigosBalances.map((elemento) =>
    parseInt(elemento.MonedaTotal)
  );

  //   console.log(fechas);
  //   console.log(values);
  return {
    labels: fechas,
    data: values,
  };
};
