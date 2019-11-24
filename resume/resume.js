var Algorithmia = require("algorithmia");

function resume(content)
{
	Algorithmia.client("simkuBJvmmp9jSojH6aCTKgyN+O1")
	.algo("nlp/Summarizer/0.1.8")
	.pipe(content)
	.then(
		function(response)
		{
			console.log(response.get());
		}
	);
}
