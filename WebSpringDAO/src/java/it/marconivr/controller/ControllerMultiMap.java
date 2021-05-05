package it.marconivr.controller;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import com.google.gson.Gson;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.beans.factory.annotation.Autowired;

import daos.*;
import entity.*;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Tuple;
import org.springframework.beans.factory.annotation.Qualifier;
/**
 *
 * @author ptom
 */
@Controller
public class ControllerMultiMap {

    //private HelloService helloService;
    @Autowired
    @Qualifier("daoManager")
    private PersonaDaoImpl daoManager;
    // fine Dependency Injection
    // Un controller può avere più metodi di risposta a varie request
    //@ResponseBody
//    @RequestMapping(value = "/nomeservizio.htm", method = RequestMethod.GET)
//    //@Autowired
//    public String msg00(HttpServletRequest request ) {
//
//        
//
//        String valore = request.getParameter("parametro");
//        
//        return ( "mesg" + "stringaMessaggio OK " +  valore );
//      
//    } 
    @RequestMapping(value = "/echo.htm", method = RequestMethod.GET,
            produces = "application/json;charset=UTF-8")
    @ResponseBody
    public String msg00(HttpServletRequest request) {

        String valore = request.getParameter("parametro");
        String returnJson = "{\"valore\":\"" + valore + "\"}";
        return (returnJson);
    }
    
    @RequestMapping(value = "/findBySurname.htm", method = RequestMethod.GET,
            produces = "application/json;charset=UTF-8")
    @ResponseBody
    public String msg01(HttpServletRequest request) {
        String valore = request.getParameter("parametro");
        
        List<Persona> lPersone;
        if (valore.equals(""))
            lPersone = daoManager.findAll();
        else
            lPersone = daoManager.findByCognome(valore);
        Gson g = new Gson();
        //Persona person = g.fromJson("{\"nome\":" + valore + "}", Persona.class);
        String s = g.toJson(lPersone);
        return (s);
    }
    
    @RequestMapping(value = "/findRequestPerson.htm", method = RequestMethod.GET,
            produces = "application/json;charset=UTF-8")
    @ResponseBody
    public String msg02(HttpServletRequest request) {
        String valore = request.getParameter("parametro");
        
        List<Tuple> lPersonePrest = null;
        if (!valore.equals(""))
            lPersonePrest = daoManager.findRicevuteByCognome(valore);
        Gson g = new Gson();
        //Persona person = g.fromJson("{\"nome\":" + valore + "}", Persona.class);
        String s = g.toJson(lPersonePrest);
        return (s);
    }
    
    @RequestMapping(value = "/insertPersona.htm", method = RequestMethod.GET,
            produces = "application/json;charset=UTF-8")
    @ResponseBody
    public void msg03(HttpServletRequest request) {
        String valore = request.getParameter("parametro");
        String[] splitted = valore.split(" ");
        String cognome = splitted[0];
        String nome = splitted[1];
        Persona p = new Persona();
        p.setCognome(cognome);
        p.setNome(nome);
        daoManager.insertPersona(p);
    }
    
    @RequestMapping(value = "/deletePersona.htm", method = RequestMethod.GET,
            produces = "application/json;charset=UTF-8")
    @ResponseBody
    public void msg04(HttpServletRequest request) {
        String valore = request.getParameter("parametro");
        String[] splitted = valore.split(" ");
        String cognome = splitted[0];
        String nome = splitted[1];
        List<Persona> listPersona = daoManager.findAll();
        for(int i=0; i<listPersona.size(); i++){
            Persona personaTemp = listPersona.get(i);
            if(personaTemp.getNome().equals(nome)){
                if(personaTemp.getCognome().equals(cognome)){
                    Persona personaDel = new Persona();
                    personaDel.setCognome(cognome);
                    personaDel.setNome(nome);
                    personaDel.setId(Long.valueOf(i));
                    daoManager.deletePersona(personaTemp);
                }
            }
        }
    }
}
