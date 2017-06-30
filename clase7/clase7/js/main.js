/**
 * Created by chalosalvador on 30/6/17.
 */


$(document).ready(function () {

    $('#guardar').on('click', function (event) {
        event.preventDefault();

        var nombre = $('#nombre').val();
        var apellido = $('#apellido').val();

        var numItems = $('#accordion .card').length;

        var nuevaFila = '<div class="card">';
        nuevaFila += '<div class="card-header" role="tab" id="heading'+ numItems+1 +'">';
        nuevaFila += '<h5 class="mb-0">';
        nuevaFila += '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ numItems+1 +'" aria-expanded="false" aria-controls="collapse'+ numItems+1 +'">';
        nuevaFila += nombre + ' ' + apellido;
        nuevaFila += '</a>';
        nuevaFila += '</h5>';
        nuevaFila += '</div>';
        nuevaFila += '<div id="collapse'+ numItems+1 +'" class="collapse" role="tabpanel" aria-labelledby="heading'+ numItems+1 +'">';
        nuevaFila += '<div class="card-block">';
        nuevaFila += '<ul class="list-group">';

        $.each($('#preferencias input[type="checkbox"]'),
            function (index, elemento) {
                if ($(elemento).is(':checked')) {
                    nuevaFila += '<li class="list-group-item">' + $(elemento).val() + '</li>';
                }
            });

        nuevaFila += '</ul>';
        nuevaFila += '</div>';
        nuevaFila += '</div>';
        nuevaFila += '</div>';


        $('#accordion').append(nuevaFila);

        $('#myModal').modal('hide');
    })

});
