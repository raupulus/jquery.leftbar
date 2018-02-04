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
     *                   [2] → Enlace hacia donde llevará
     */
    $.leftbar = function(options, entradas) {
        var conf = {
            background1: '',
            background2: '',
            color: '',
            border: '',
        };

        $.extend(conf, options);
        $('body').append('<div id="des_caja"></div>');

        // Por cada entrada añade un elemento al menú
        $(entradas).each(function() {
            var agregar = '' +
                '<div class="des_all">' +
                    '<img src="' + $(this)[1] +
                        '" data-link="' + $(this)[2] + '"/>' +
                    '<div class="des_letras">' + $(this)[0] + '</div>' +
                '</div>'

            $('#des_caja').append(agregar);
        });

        // Oculta todos los títulos de menú para que se muestren luego
        $('#des_caja .des_all .des_letras').hide();

        // Evento al pasar sobre un elemento del menú
        $('#des_caja .des_all > img').hover(
            function() {
                $(this).siblings('.des_letras').show();
            },
            function() {
                $(this).siblings('.des_letras').hide();
            },
        );

        // Evento al hacer click sobre un elemento/imagen del menú
        $('#des_caja .des_all > img').on('click', function() {
            location.href = $(this).data('link');  // Extrae link de la imagen
        });
    };
})(jQuery);
