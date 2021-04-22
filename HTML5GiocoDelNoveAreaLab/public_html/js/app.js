/* Dizionario Applicazione ad evnti in Javascript */
var APP={
    
    /* Variabili globali */
    
    listaGioco : ['A','B','C','D','E','F','G','H',' '],
    listaVittoria : ['A','B','C','D','E','F','G','H',' '],
    dizPosizioniVicine : {0:[1,3], 
                          1:[0,2,4],
                          2:[1,5], 
                          3:[0,4,6], 
                          4:[1,3,5,7], 
                          5:[2,4,8], 
                          6:[3,7], 
                          7:[4,6,8], 
                          8:[5,7]},
    
    /*Event CALLBACK/LISTENER + Bind  con Button */

    mescola : function(array) {
 
        //Ci prendiamo la lunghezza dell'array e partiamo dal fondo!
        var currentIndex = array.length, temporaryValue, randomIndex;
       
        // Finché ci sono elementi da mescolare, iteriamo l'array
        while (0 !== currentIndex) {
       
          //Prendiamo un indice a caso dell'array, purché sia compreso tra 0 e la lunghezza dell'array
          randomIndex = Math.floor(Math.random() * currentIndex);
       
          //Riduciamo di un'unità l'indice corrente
          currentIndex -= 1;
       
          // Una volta che abbiamo preso l'indice casuale, invertiamo l'elemento che stiamo analizzando alla posizione corrente (currentIndex) con quello alla posizione presa casualmente (randomIndex)
       
          //Variabile temporanea
          temporaryValue = array[currentIndex];
          //Eseguiamo lo scambio
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        //Torniamo l'array mescolato a fine ciclo
        return array;
    },

    callBack_nuovoGioco : function (event)
    {
        event.preventDefault();
        APP.mescola(APP.listaGioco);
        APP.riempiBottoni();
        $('#stato').html('...');
        se
    },

    mossa : function(idButton){
        var mossaPossibile = false;
        var listIDMossePossibili = APP.dizPosizioniVicine[idButton];
        var listValMossePossibili = [];
        for(var i = 0; i<listIDMossePossibili.length; i++){
            listValMossePossibili[i]=APP.listaGioco[listIDMossePossibili[i]];
        }
        for(var i = 0; i<listValMossePossibili.length; i++){
            if(listValMossePossibili[i]===' '){
                mossaPossibile = true;
                APP.listaGioco[listIDMossePossibili[i]]=APP.listaGioco[idButton];
                APP.listaGioco[idButton]=' ';
            }
        }
        console.log(APP.listaGioco);
        if(mossaPossibile){
            APP.riempiBottoni();
            $('#stato').html('...');
        }else{
            $('#stato').html('MOSSA IMPOSSIBILE');
        }
        if(APP.vittoria()){
            $('#stato').html('HAI VINTO!');
        }
    },

    vittoria : function(){
        /*
        if(APP.listaVittoria === APP.listaGioco){
            return true;
        }
        return false;
        
        for (var i = 0; i < APP.listaGioco.length; ++i) {
            if (APP.listaVittoria[i] !== APP.listaGioco[i]){
                return false;
            }
            return true;
        }
        */
        var isVittoria = true;
        var i = 0;
        while(i<9 && isVittoria){
            if(APP.listaVittoria[i] !== APP.listaGioco[i]){
                isVittoria = false;
            }
            i++;
        }
        return isVittoria;
    },

    riempiBottoni : function(){
        for(var i = 0; i<9; i++){
            $('#but'+i).html(APP.listaGioco[i]);
        }
    },

    
/*___________________________________________________________________*/
    
    /* Richiama tutte le funzioni di Bind delle callback */
    init_AllCallback :  function (){
        $('#but0').on('click', function (event){
            event.preventDefault();
            APP.mossa(0);
        }) ;
        
        $('#but1').on('click', function (event){
            event.preventDefault();
            APP.mossa(1);
        }) ;

        $('#but2').on('click', function (event){
            event.preventDefault();
            APP.mossa(2);
        }) ;

        $('#but3').on('click', function (event){
            event.preventDefault();
            APP.mossa(3);
        }) ;

        $('#but4').on('click', function (event){
            event.preventDefault();
            APP.mossa(4);
        }) ;

        $('#but5').on('click', function (event){
            event.preventDefault();
            APP.mossa(5);
        }) ;
        
        $('#but6').on('click', function (event){
            event.preventDefault();
            APP.mossa(6);
        }) ;

        $('#but7').on('click', function (event){
            event.preventDefault();
            APP.mossa(7);
        }) ;

        $('#but8').on('click', function (event){
            event.preventDefault();
            APP.mossa(8);
        }) ;

        $('#newGame').on( 'click', APP.callBack_nuovoGioco);

    }
    
};
/*____________________main()__________________________________________*/
$(document).ready( function(){
    // esegue il bind di tutte le callBack
    APP.init_AllCallback();
    // main si ferma in attesa di evento
});
