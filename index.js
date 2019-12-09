const Discord = require('discord.js');
const client = new Discord.Client(); // Procedure of creation of a new Discord Client from Discord class / Client class

var answer = ['A','B']; // Answers List for the game


client.on("message", function(message) {
    if(message.content === "ping") {
        message.channel.send("pong");

    }
});
// basic function if message is ping then bot send message pong


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// sleep function permits to wait an amount of ms times before doing something else


function jeu(x){
  var res = Math.round(10000000*((36/Math.log(x))-0.001*x));
  return res;
  }

// function jeu is set for the OPM's( name of the guild in the game )event but it can be change for every other game like this

function trans(x){
var tabChiffres = [":zero:",":one:",":two:",":three:",":four:",":five:",":six:",":seven:",":eight:",":nine:"];
var reverse = [];
var kamas = jeu(x);
var codeChiffre = "";
while (kamas > 0){
    var chiffre = kamas % 10;
    kamas = Math.floor(kamas / 10);
    reverse.push(tabChiffres[chiffre]);
}

for (var i=reverse.length-1;i>=0;i--){
  codeChiffre+=" "+reverse[i];
}
return codeChiffre;
}

// function trans permits to get the actual game result for x and to translate it to a String of discord number emojis.
// First step is to store each number of the result and searching on tabChiffres  it equivalence in term of emoji by the index
// and reverse it

function find(x){
      console.log(x);
      if (answer[0]==x){
        answer.splice(0, 1);
        return true;
      }
  }

// find function is made to return true if and only if that's the correct answer of the question , if that's correct remove the answer

client.on("message", function(message) {
    if(message.content === "jeu" && message.member.roles.find(r => r.name === "Vip")) {
        message.channel.send("Le jeu commence").then(async function(msg){
          var i = 36;
          while(i!=1000 && answer[0]!==undefined){
          await sleep(5000);
          msg.edit(trans(i));
          i+=1;

        }});    
    }
});

// the major part of the bot is HERE.
// on message launch function only if content equal to jeu. then send a String and then launch an asynch function with msg parameter
//  initialise our first value for the game and begin a loop uniquely if we've not reach the final value i and if players do not have answers at all the questions.
// Each loop runs wait ms time and edit the message for refresh by the actual game result, increment i

client.on("message", function(message) {
  if(message.content.startsWith("answer")){
    var editedmessage = message.content.slice(7);
    if(find(editedmessage)){
      message.channel.send("C'est la Bonne réponse");
    };


  }
})

// on message lauch funtion if message starts with answer, then cut the message and only take the part after 'answer_'
// if after answer we have the good answer then find(x) is true and a message is send.


client.login('NTg3NjgxNTk2MzY3MzA2Nzgy.XeP-Ig.h9q1ZfKKa_6NQJ0e1YHProxGjBU');
// log the bot
