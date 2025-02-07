$(document).ready(function(){
    // console.log(document.querySelector('header button'));  --- seleciona um elemento do DOM
    // console.log($('#botao-cancelar'));  --- seleciona um elemento do DOM

    // document.querySelector('header button').addEventListener('click', function(e) {
    // é o mesma coisa de: $('header button').click(function() {})
    // })

    $('header button').click(function() { // adiciona um função a um evento (clique nesse exemplo)
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    })
})

