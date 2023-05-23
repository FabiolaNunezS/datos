export const graph = (datos, contenedor) => {
  console.log(datos);
  //   console.log(contenedor);

  new Chart(contenedor, {
    type: 'bar',
    data: {
      labels: datos.labels,
      datasets: [
        {
          label: 'Moneda Total',
          data: datos.data,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};
