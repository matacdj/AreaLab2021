

/* Dizionario Applicazione ad evnti in Javascript */
var APP={
    /*Event CALLBACK/LISTENER + Bind  con Button */
    callBack_nuovoGioco : function (event )
    {
       // preleviamo il contenuto della textedit
       var contenutoTextEdit1 = $('#OP1').val();
       var contenutoTextEdit2 = $('#OP2').val();
       
       contenutoTextEdit1 = parseInt(contenutoTextEdit1) + parseInt(contenutoTextEdit2);

       $('#Ris1').html( 'Somma =' + contenutoTextEdit1 );
   
    },
   
/*__________________________________________________________________*/
   
    // Bind di callBack_Sqrt con click su button #Sqrt
    
    init_callBack_sum_Click : function(){
        $("#sum").on('click', APP.callBack_sum);
    },

    
/*___________________________________________________________________*/
    
    /* Richiama tutte le funzioni di Bind delle callback */
    init_AllCallback :  function (){
        //APP.init_callBack_sum_Click() ;
    }
    
};
/*____________________main()__________________________________________*/
$(document).ready( function(){
    // esegue il bind di tutte le callBack
    APP.init_AllCallback();
    // main si ferma in attesa di evento
});
