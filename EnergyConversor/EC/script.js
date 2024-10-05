function convertir() {
    const valor = parseFloat(document.getElementById("valor").value);
    const unidadOrigen = document.getElementById("unidad-origen").value;
    const unidadDestino = document.getElementById("unidad-destino").value;

    if (isNaN(valor)) {
        document.getElementById("resultado").textContent = "Por favor, introduce un valor válido.";
        return;
    }

    let resultado;

    // Factores de conversión a Julios (J)
    const conversionesAJulios = {
        "julios": 1,
        "kwh": 3600000,
        "calorias": 4.184,
        "btu": 1055.06
    };

    // Conversión de Julios a la unidad de destino
    const conversionesDesdeJulios = {
        "julios": 1,
        "kwh": 1 / 3600000,
        "calorias": 1 / 4.184,
        "btu": 1 / 1055.06
    };

    // Convertimos de la unidad origen a Julios, luego de Julios a la unidad destino
    resultado = valor * conversionesAJulios[unidadOrigen] * conversionesDesdeJulios[unidadDestino];

    document.getElementById("resultado").textContent = `Resultado: ${resultado.toFixed(6)} ${unidadDestino.toUpperCase()}`;
}
