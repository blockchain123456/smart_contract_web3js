abi =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "candidate",
				"type": "string"
			}
		],
		"name": "voteForCandidate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "candidateNames",
				"type": "string[]"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidateList",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "candidate",
				"type": "string"
			}
		],
		"name": "totalVotesFor",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "candidate",
				"type": "string"
			}
		],
		"name": "validCandidate",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "candidate",
				"type": "string"
			}
		],
		"name": "votesReceived",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
VotingContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
contractInstance = VotingContract.at('0xa64b2a1ceC8Ff479F4A54a3248Ed3EDE639EE614');
candidates = {'youtube': 'candidate-1', 'instagram': 'candidate-2', 'facebook': 'candidate-3'}

function voteForCandidate() {
  candidateName = $('#candidate').val();
  contractInstance.voteForCandidate(candidateName, {from: web3.eth.accounts[0]}, 
    function() {

    });
}
loop=()=>{
  let candidateNames = Object.keys(candidates);
  for (let name of candidateNames) {
    let val = contractInstance.totalVotesFor.call(name,(e,result)=>{
      $(`#${candidates[name]}` ).html(result.c[0].toString());
    })
  }
  setTimeout(loop,1000);

}
loop()
