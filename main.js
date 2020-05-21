// Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
// Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo; se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde.
// In entrambi i casi, andiamo ad inserire nel quadrato il numero restituito dall'api.
//

$(document).ready(function(){

    $('.quadrato').click(function(){
        //quando clicco fa partire una domanda ajax
        $.ajax({
            'url': 'https://flynn.boolean.careers/exercises/api/random/int',
            'method': 'GET',
            'context': this ,
            'success': function(data){
                //dalla domanda faccio apparire il numero random sulla console
                var numero = data.response
                console.log('numero random dalle API: ' + numero)
                if (numero <= 5) {
                    $(this).addClass('giallo');
                    $(this).text(numero);
                } else {
                    $(this).addClass('verde');
                    $(this).text(numero);
                }
            },
            'error': function(){
                alert('errore')
            }
        })
    });
});
