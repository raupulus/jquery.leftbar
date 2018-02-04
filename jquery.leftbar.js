/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2017 Raúl Caro Pastorino
 * @license https://wwww.gnu.org/licenses/gpl.txt
**/

(function($) {
    /**
     * Recibe un objeto con la configuración para personalizar el plugin y
     * un array con la información de cada menú que contendrá la barra lateral.
     * @param  {Objetct} options  Objeto de configuración
     * @param  {Array}   entradas Array que contiene un array por cada entrada
     *                   [0] → Nombre del menú
     *                   [1] → Imagen de miniatura 120x80px
     *                   [3] → Enlace hacia donde llevará
     */
    $.leftbar = function(options, entradas) {
        var conf = {
            background1: '',
            background2: '',
            color: '',
            border: '',
        };

        $.extend(conf, options);
        $('body').append('<div id="cajaDesplegableIzq"></div>');

        // Por cada entrada añade un elemento al menú
        $(entradas).each(function() {
            var agregar = '' +
                '<div id="???">' +
                    '<img src="' + $(this)[1] + '" />' +
                    '<div id="???">' + $(this)[0] + '</div>' +
                '</div>'

            $('#cajaDesplegableIzq').append(agregar);
        });
    };
})(jQuery);
