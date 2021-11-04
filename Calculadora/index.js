  const div = document.querySelector("#nombre");
  const divv = document.querySelector("#litros");
  const h1 = document.querySelector("h1");
  let Kml = 1;
  
  // cont cantKilometros = 250;
  const typeGas = {
      Gasoil: 51.77,
      Nafta: 48.35,
      NaftaPremium: 63.15,
    }
  let precioNafta;

  const calculo = () => { 
    const cantKilometros = document.querySelector("#kilometros").value;
    const combustible = document.getElementById('Combustible').value;
    const rendimiento = document.getElementById('rinde').value;
    console.log(combustible)
    if (combustible == "Nafta") {
        precioNafta = typeGas.Nafta;
    } else if (combustible == "Nafta-Premium") {
        precioNafta = typeGas.NaftaPremium;
    } else if (combustible == "Gasoil") {
        precioNafta = typeGas.Gasoil; 
    }
    const litros = cantKilometros / rendimiento;
    const precioNaftaTotal = cantKilometros * precioNafta / rendimiento;
    console.log(precioNaftaTotal, cantKilometros, precioNafta)
    document.getElementById('nombre').innerHTML = `Costo del viaje $${precioNaftaTotal.toFixed(2)}`;
    document.getElementById(
      "litros"
    ).innerHTML = `La cantidad de litros que consume es ${litros.toFixed(2)} litros`;
  };