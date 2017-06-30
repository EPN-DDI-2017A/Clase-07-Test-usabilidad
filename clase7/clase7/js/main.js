/**
 * Created by chalosalvador on 30/6/17.
 */


$(document).ready(function () {

    $('#guardar').on('click', function (event) {
        event.preventDefault();

        var nombre = $('#nombre').val();
        var apellido = $('#apellido').val();

        var nuevaFila =
            '<li class="list-group-item">'
            + nombre + ' ' + apellido
            + '</li>';

        $('#lista-usuarios').append(nuevaFila);

        $('#myModal').modal('hide');
    })

});
