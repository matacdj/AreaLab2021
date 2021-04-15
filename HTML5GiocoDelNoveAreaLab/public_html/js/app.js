/* 
 * App che simula una calcolatrice
 * 
 */
/* Dizionario Applicazione ad evnti in Javascript */
var APP={
    /*Event CALLBACK/LISTENER + Bind  con Button */
    callBack_sum : function (event )
    {
       // preleviamo il contenuto della textedit
       var contenutoTextEdit1 = $('#OP1').val();
       var contenutoTextEdit2 = $('#OP2').val();
       
       contenutoTextEdit1 = parseInt(contenutoTextEdit1) + parseInt(contenutoTextEdit2);

       $('#Ris1').html( 'Somma =' + contenutoTextEdit1 );
   
    },
/*__________________________________________________________________*/
     
     callBack_minus : function (event )
    {
       
       // preleviamo il contenuto della textedit
       var contenutoTextEdit1 = $('#OP1').val();
       var contenutoTextEdit2 = $('#OP2').val();
       
       $('#Ris1').html( 'Differenza =' + (contenutoTextEdit1-contenutoTextEdit2) );

   },
   
/*__________________________________________________________________*/

    callBack_plus : function (event )
    {
       
       // preleviamo il contenuto della textedit
       var contenutoTextEdit1 = $('#OP1').val();
       var contenutoTextEdit2 = $('#OP2').val();
       
       $('#Ris1').html( ' Prodotto = ' + (contenutoTextEdit1*contenutoTextEdit2) );
   },
   
/*__________________________________________________________________*/

    callBack_div : function (event )
    {
       
       // preleviamo il contenuto della textedit
       var contenutoTextEdit1 = $('#OP1').val();
       var contenutoTextEdit2 = $('#OP2').val();
      
       $('#Ris1').html( ' Quoziente = ' + (contenutoTextEdit1/contenutoTextEdit2) );
   },
   
/*__________________________________________________________________*/

    callBack_pot : function (event )
    {
       
       // preleviamo il contenuto della textedit
       var contenutoTextEdit1 = $('#OP1').val();
       var contenutoTextEdit2 = $('#OP2').val();
      
       $('#Ris1').html( ' Potenza = ' + (contenutoTextEdit1**contenutoTextEdit2) );
   },
   
/*__________________________________________________________________*/
   
    // Bind di callBack_Sqrt con click su button #Sqrt
    
    init_callBack_sum_Click : function(){
        $("#sum").on('click', APP.callBack_sum);
    },
    
    init_callBack_minus_Click : function(){
        $("#minus").on('click', APP.callBack_minus);
    },
    
    init_callBack_plus_Click : function(){
        $("#plus").on('click', APP.callBack_plus);
    },
    
    init_callBack_div_Click : function(){
        $("#div").on('click', APP.callBack_div);
    },
    
    init_callBack_pot_Click : function(){
        $("#pot").on('click', APP.callBack_pot);
    },
    
/*___________________________________________________________________*/
    
    /* Richiama tutte le funzioni di Bind delle callback */
    init_AllCallback :  function (){
        APP.init_callBack_sum_Click() ;
        APP.init_callBack_minus_Click() ;
        APP.init_callBack_plus_Click() ;
        APP.init_callBack_div_Click() ;
        APP.init_callBack_pot_Click() ;
    }
    
};
/*____________________main()__________________________________________*/
$(document).ready( function(){
    // esegue il bind di tutte le callBack
    APP.init_AllCallback();
    // main si ferma in attesa di evento
});
