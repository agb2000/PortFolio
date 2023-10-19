<?php

// Vamos a realizar la descargar del CV
$ruta_pdf = "CV.pdf";
$nombreSalida="CV Alberto Godoy Borrego.pdf";

// Definimos las cabecera para descargar en pdf
header("Content-type: application/pdf");
header('Content-Disposition:attachment;filename="'.$nombreSalida.'"');
readfile($ruta_pdf);
