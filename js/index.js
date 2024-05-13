
var hema = document.getElementById('hema')
var moha = document.getElementById('moha')
var quote=[
    ['"1You miss 100% of the shots you dont take."',"--Wayne Gretzy"],
    ['"2Do not take life too seriously. You will not get out alive."','--Elbert Hubbard'],
    ['"3Resentment is like drinking poison and waiting for your enemies to die."','--Nelson Mandela'],
    ['"4The best revenge is massive success."','--Frank Sinatra'],
    ['"5Its not what happens to you, but how you react to it that matters."','--Epictetus'],
    ['“Be yourself; everyone else is already taken.”',' ― Oscar Wilde'],
    ['“So many books, so little time.”','― Frank Zappa'],
    ['“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”','― Albert Einstein'],
    ['“A room without books is like a body without a soul.”','― Marcus Tullius Cicero'],
    ['“Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.”',' ― Bernard M. Baruch'],
]
function NewQuote(){
    var random= Math.round( Math.random()*quote.length)
    hema.innerHTML=quote[random][0]
    moha.innerHTML=quote[random][1]
    
}
 


 


 