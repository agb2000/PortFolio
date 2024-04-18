/**
 * 
 * @param {*} tipo 
 * @param {*} texto 
 * @param {*} atributos 
 * @returns 
 */
function crear_nodo (tipo, texto, atributos) {
    // Creamos elemento HTML
    let elemento = document.createElement(tipo);

    // Creamos el texto
    if (texto !== null){
        let contenido = document.createTextNode(texto);
        elemento.appendChild(contenido);
    } // End if

    // Asignamos el array de atributos valor
    if (Object.entries(atributos).length !== 0){
        for(let [key, value] of Object.entries(atributos)){
            elemento.setAttribute(key, value);
        } // End for
    } // End if

    return elemento;
}

export { crear_nodo }