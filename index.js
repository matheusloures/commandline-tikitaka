
var goals = 0;
function pass(){
    var countPasses = 0;
    var interval = setInterval(function(){
        var r = Math.round(Math.random()*100);
        if(r<50){
            countPasses--;
            console.log('passe errado');
            clearInterval(interval);
            startMatch();
        }else{
            countPasses++
            console.log('passe certo', countPasses);
        }

        if(countPasses===5){
            kick();
        }
        
    }, 3000)
}

function kick(){

        var r = Math.round(Math.random()*100);

        if(r>=90){
            console.log('goooooool');
            goals++;
        }else{
            console.log('chute pra fora');
        }
}

function startMatch(){
    console.log('ataque novamente')
    pass();
}

startMatch();
