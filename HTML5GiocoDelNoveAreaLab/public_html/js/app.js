/* Dizionario Applicazione ad evnti in Javascript */
var APP={
    
    /* Variabili globali */
    
    listaGioco : [],
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
    callBack_nuovoGioco : function (event )
    {
       // preleviamo il contenuto della textedit
       var contenutoTextEdit1 = $('#OP1').val();
       var contenutoTextEdit2 = $('#OP2').val();
       
       contenutoTextEdit1 = parseInt(contenutoTextEdit1) + parseInt(contenutoTextEdit2);

       $('#Ris1').html( 'Somma =' + contenutoTextEdit1 );
   
    },

    
/*___________________________________________________________________*/
    
    /* Richiama tutte le funzioni di Bind delle callback */
    init_AllCallback :  function (){
        $('#but0').on('click', function (event){
            event.preventDefault();
            APP.mossa(0);
        }) ;
    }
    
};
/*____________________main()__________________________________________*/
$(document).ready( function(){
    // esegue il bind di tutte le callBack
    APP.init_AllCallback();
    // main si ferma in attesa di evento
});
