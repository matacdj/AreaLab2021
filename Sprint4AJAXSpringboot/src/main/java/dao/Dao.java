/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.util.HashMap;
import org.springframework.stereotype.Service;

/**
 *
 * @author Pingu
 */
@Service
public class Dao {
    
    HashMap hashtest = new HashMap();
    
    public void salvaPartita(String nome, int punteggio){
        hashtest.put(nome,punteggio);
    }
    
    public HashMap caricaClassifica(){
        return hashtest;
    }
    
}
