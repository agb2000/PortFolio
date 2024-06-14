import { crear_nodo } from "./module.js";

document.getElementById("descargar").onclick = function () {
    window.open("https://drive.google.com/file/d/1cC5NCosIbfyxS-sWiVFKw-nUA40ej11L/view?usp=drive_link", "_blank");
} // End del evento onclick

conexion_ajax_datos();

function conexion_ajax_datos() {
    fetch('/js/datos.json')
        .then(function (response) {
            if (response.ok){
                response.json()
                .then(function(data){
                    for (let valores of data["datos"]) {
                        // Creamos los card para el pryecto seleccionado
                        let card = crear_nodo("div", null, {class : "card"});
                        let img = crear_nodo("img", null, {src : valores["imagen_proyecto"], class : "card-img-top", alt : valores["titulo_proyecto"]});
                        let card_cuerpo = crear_nodo("div", null, {class : "card-body"});
                        let titulo = crear_nodo("h5", valores["titulo_proyecto"], {class : "card-tittle"});
                        let descripcion = crear_nodo("p", valores["descripcion_proyecto"], {class : "card-text"});
                        let titulo_tecno = crear_nodo("h5", valores["titulo_tecnologias"], {class : "card-tittle"});
                        let enlace = crear_nodo("a", "Github", {class : "btn btn-outline-primary", href : valores["github_proyecto"], target : "_blank"});
                        let tecno = crear_nodo("div", null, {class : "tecno"});

                        if (Object.keys(valores["Tecnologias_Usadas"]).length !== 0){
                            tecno.appendChild(titulo_tecno);
                            for (let valor in valores["Tecnologias_Usadas"]) {
                                let img = crear_nodo("img", null, {src : valores["Tecnologias_Usadas"][valor], title : valor})
                                tecno.appendChild(img);
                            }
                        } // End if

                        // Añadimos al card_cuerpo sus elementos
                        card_cuerpo.appendChild(titulo);
                        card_cuerpo.appendChild(descripcion);
                        card_cuerpo.appendChild(tecno);
                        card_cuerpo.appendChild(enlace);

                        // Añadimos el card_cuerpo y la imagen al card_principal
                        card.appendChild(img);
                        card.appendChild(card_cuerpo);

                        // Añadimos el card_principal al contenedor correspondiente
                        document.getElementById("muestra_proyectos").appendChild(card);
                    }
                })
                .catch (function(err){
                    console.error(err);
                })
            }
        })
        .catch(function (err) {
            console.error(err);
        });
} // End de la funcion conexion_ajax_datos