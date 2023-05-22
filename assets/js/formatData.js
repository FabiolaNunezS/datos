export const formatData = (datos) => {
  const labels = datos.map(
    (elemento) => elemento.data.CodigosBalances[0].MonedaTotal
  );
  console.log(labels);
  const values = datos.CodigosBalances.map((elemento) => elemento.valor);
  console.log(values);
};

// export const formatData = (datos) => {
//   var codigos = datos.CodigosBalances.MonedaTotal.map(function (fecha) {
//     return fecha.CodigosBalances.MonedaTotal;
//   });
// };

// console.log(codigos);

// var datos = [];
// for (var i = 0; i < CodigosBalances.length; i++) {
//   datos.push(CodigosBalances[i].MonedaTotal);
// }
// console.log(datos);
