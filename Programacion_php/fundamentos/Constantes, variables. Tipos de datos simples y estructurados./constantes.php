<?php

// Definición de constantes correctas
define("FOO", "something");
define("FOO2", "something else");
define("FOO_BAR", "something more");

// Definición de una constante con nombre incorrecto
define("ZFOO", "something");

// Definición de una constante válida pero no recomendada
define("__FOO__", "something");

// Imprimir las constantes por pantalla
echo FOO . "\n";        // Imprime: something
echo FOO2 . "\n";       // Imprime: something else
echo FOO_BAR . "\n";    // Imprime: something more
echo ZFOO . "\n";       // Imprime: something
echo __FOO__ . "\n";    // Imprime: something


/*

Explicación:
Definición de constantes correctas:

define("FOO", "something");: Define una constante llamada FOO con el valor "something".

define("FOO2", "something else");: Define una constante llamada FOO2 con el valor "something else".

define("FOO_BAR", "something more");: Define una constante llamada FOO_BAR con el valor "something more".

Estas constantes siguen las mejores prácticas de nomenclatura en PHP, utilizando nombres en mayúsculas y guiones bajos para separar palabras.

Definición de una constante con nombre incorrecto:

define("ZFOO", "something");: Define una constante llamada ZFOO. Aunque es válido, no sigue las mejores prácticas de nomenclatura. Los nombres de constantes suelen comenzar con una letra y no con un número o un carácter especial.

Definición de una constante válida pero no recomendada:

define("__FOO__", "something");: Define una constante llamada __FOO__. Aunque es válido, se recomienda evitar el uso de nombres que comiencen y terminen con doble guion bajo (__), ya que estos nombres están reservados para constantes mágicas en PHP. Si PHP introduce una constante mágica con el mismo nombre en el futuro, podría causar conflictos en tu script.

En resumen, al definir constantes en PHP, es importante seguir las mejores prácticas de nomenclatura para evitar posibles conflictos y mejorar la legibilidad del código.


*/