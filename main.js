$(document).ready(function() {
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('#telefone').mask('(00)0000-0000');
    $('form').validate({
        rules: {
            nomecompleto: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            enderecocompleto: {
                required: true
            },
            cep: {
                required: true
            }
        }
    });
});