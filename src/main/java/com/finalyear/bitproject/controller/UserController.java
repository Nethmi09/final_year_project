package com.finalyear.bitproject.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

public class UserController {

    //Request Mapping for User UI
    @GetMapping(value = "/user")
    public ModelAndView userUi(){
        ModelAndView userUI = new ModelAndView();
        userUI.setViewName("user.html");
        return userUI;
    }
}
