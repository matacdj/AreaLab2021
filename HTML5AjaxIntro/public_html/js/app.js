/* Dizionario Applicazione ad evnti in Javascript */
var APP={
    
    /* Variabili globali */
    
    
    /*Event CALLBACK/LISTENER + Bind  con Button */

    placeholder : function(event) {
 
        //placeholder
    },

    
/*___________________________________________________________________*/
    
    /* Richiama tutte le funzioni di Bind delle callback */
    init_AllCallback :  function (){

        //$('#newGame').on( 'click', APP.callBack_nuovoGioco);

    }
    
};
/*____________________main()__________________________________________*/
$(document).ready( function(){
    // esegue il bind di tutte le callBack
    APP.init_AllCallback();
    // main si ferma in attesa di evento
});
