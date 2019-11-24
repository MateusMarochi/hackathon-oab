const readline = require('readline-sync')
const separador = require('sbd')

function chat() {
    function recebeMensagem() {
        return readline.question('@Eu: ')
    }
    function enviaMensagem(msg) {
        console.log('@Watson: ' + msg)
    }
    enviaMensagem(recebeMensagem())
}

function sendRequest()
{
	chat.recebeMensagem()
}

chat()
