package controller;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RestController;
/**
 *
 * @author ptom
 */
@RestController
public class ControllerMultiMap {

    //private HelloService helloService;
    // fine Dependency Injection
    // Un controller può avere più metodi di risposta a varie request
    //@ResponseBody
    //@RequestMapping(value = "/nomeservizio.htm", method = RequestMethod.GET)
    //@Autowired
    //public String msg00(HttpServletRequest request ) {
    //        String valore = request.getParameter("parametro");    
    //        return ( "mesg" + "stringaMessaggio OK " +  valore ); 
    //    } 
    @RequestMapping(value = "/salvaPartita.htm", method = RequestMethod.GET,
            produces = "application/json;charset=UTF-8")
    @ResponseBody
    public String msg00(HttpServletRequest request) {

        return "ciao";
    }
    
    
}
