/**
 * Created by chalosalvador on 30/6/17.
 */


$(document).ready(function () {

    $('#guardar').on('click', function (event) {
        event.preventDefault();

        var nombre = $('#nombre').val();
        var apellido = $('#apellido').val();

        $.each($('#preferencias input[type="checkbox"]'),
            function (index, elemento) {
                if ($(elemento).is(':checked')) {
                    alert($(elemento).val());
                }
        });




        var nuevaFila =
            '<li class="list-group-item">'
            + nombre + ' ' + apellido
            + '</li>';


        // $('#lista-usuarios').append(nuevaFila);

        // $('#myModal').modal('hide');
    })

});
