// Datos de ejemplo
const preguntas = {
    "2413": { pregunta: "¿En qué termotipo encontramos un cornical?", respuesta: "Inframediterráneo", codigoAlfanumerico: "58 CIE cie" },
    "3210": { pregunta: "¿En qué sustrato encontramos un encinar en el termotipo Montano?", respuesta: "Calcícola", codigoAlfanumerico: "58 ECO eco" },
    "2960": { pregunta: "¿En qué sustrato encontramos un robledal en el termotipo Montano?", respuesta: "Silicícola", codigoAlfanumerico: "58 BAR her" },
    "1664": { pregunta: "¿En qué termotipo encontramos pastizales en la región medioeuropea?", respuesta: "Alpino", codigoAlfanumerico: "58 PER org" },
    "1825": { pregunta: "¿En qué provincia encontramos laurisilva en España?", respuesta: "Canaria", codigoAlfanumerico: "591 WIL soc" },
    "3330": { pregunta: "¿Qué termotipo tiene la zona más alta del Teide?", respuesta: "Oromediterráneo", codigoAlfanumerico: "591 ZAH gui" },
    "3418": { pregunta: "¿De qué termotipo es bioindicator el azofaifo?", respuesta: "Termomediterráneo", codigoAlfanumerico: "591 CAS gui" },
    "2669": { pregunta: "¿De qué termotipo es bioindicator el palmito?", respuesta: "Termomediterráneo", codigoAlfanumerico: "551 HEN int" },
    "5682": { pregunta: "¿Qué termotipo encontramos en la zona más alta de Sierra Nevada?", respuesta: "Crioromediterráneo", codigoAlfanumerico: "551 GUI gui" },
    "4274": { pregunta: "¿Qué vegetación típica podemos encontrar ne la Sierra de Grazalema?", respuesta: "Pinsapares", codigoAlfanumerico: "54 YEH opt" },
    "4353": { pregunta: "¿En qué termotipo encontramos Pinus uncinata?", respuesta: "Subalpino", codigoAlfanumerico: "535 WIL fou" },
    "1561": { pregunta: "¿Qué vegetación encontramos en el termotipo subalpino de la Cordillera Cantábrica?", respuesta: "Pastizales", codigoAlfanumerico: "535 WEI dyn" },
    "2128": { pregunta: "¿Qué especie encontramos en los encinares de Extremadura del termomediterráneo seco?", respuesta: "Mirto", codigoAlfanumerico: "519.8 BEL ope" },
    "1246": { pregunta: "¿En qué ombrotipo aparecen alcornocales en Extremadura?", respuesta: "Subhúmedo", codigoAlfanumerico: "519.8 KOC int" },
    "6257": { pregunta: "¿Qué especie encontramos en el supramediterráneo subhúmedo de Aragón?", respuesta: "Quejigo", codigoAlfanumerico: "519.8 ZHA mul" },
    "6186": { pregunta: "¿Qué vegetación encontramos en el termomediterráneo árido en Almería?", respuesta: "Espartales", codigoAlfanumerico: "528 DOM top" },
    "6186": { pregunta: "¿Qué vegetación encontramos en el mesomediterráneo árido en Almería?", respuesta: "Espartales", codigoAlfanumerico: "528 CLA rem" }
};

document.getElementById("validarCodigo").addEventListener("click", () => {
    const codigo = document.getElementById("codigo").value;
    const preguntaData = preguntas[codigo];

    if (preguntaData) {
        document.getElementById("pregunta").innerText = preguntaData.pregunta;
        document.getElementById("preguntaContainer").classList.remove("hidden");
    } else {
        alert("Código inválido");
        document.getElementById("preguntaContainer").classList.add("hidden");
    }
});

document.getElementById("validarRespuesta").addEventListener("click", () => {
    const codigo = document.getElementById("codigo").value;
    const respuesta = document.getElementById("respuesta").value;
    const preguntaData = preguntas[codigo];

    if (respuesta.toLowerCase() === preguntaData.respuesta.toLowerCase()) {
        document.getElementById("resultado").innerText = `Código biblioteca: ${preguntaData.codigoAlfanumerico}`;
    } else {
        alert("Respuesta incorrecta");
    }
});
