const readline = require('readline-sync')

function robot() {
    function recebeMensagem() {
        return readline.question('@Eu: ')
    }
    function enviaMensagem(msg) {
        console.log('@Watson: ' + msg)
    }
    enviaMensagem(recebeMensagem())
}

robot()