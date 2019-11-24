const readline = require('readline-sync')

const watsonApiKey = require("./watson/watson.json").apikey
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js')

var nlu = new NaturalLanguageUnderstandingV1({
	iam_apikey: watsonApiKey,
	version: '2019-07-12',
	url: 'https://gateway.watsonplatform.net/natural-language-understanding/api'
})


function chat() {
    function recebeMensagem() {
        return readline.question('@Eu: ')
    }
    function enviaMensagem(msg) {
        console.log('@Watson: ' + msg)
    }
    enviaMensagem(recebeMensagem())
}

async function keyworder()
{
	return new Promise((resolve, reject) => {
		nlu.analyze({
			text:chat.recebeMensagem(),
				features: {
					keywords: {
						"limit": 4
					}
				},
				"language": "pt"
			}, (error, response) => {
				if(error){
					throw error
				}
				console.log(JSON.stringify(response, null, 4))
				const keywords = response.keywords.map((keyword) => {
				return keyword.text
			})
			resolve(keywords)
		})
	})
}
