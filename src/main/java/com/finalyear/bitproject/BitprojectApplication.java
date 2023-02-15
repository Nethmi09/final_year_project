package com.finalyear.bitproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@SpringBootApplication
@RestController
public class BitprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(BitprojectApplication.class, args);
		//System.out.println("Hellow World");
	}

	@RequestMapping(value = "/" , method = RequestMethod.GET)
	public String welcome(){
		return "Welcome";
	}

	//Service mapping for index page

	@GetMapping(value = "/index")
	public ModelAndView indexUi(){
		ModelAndView indexUI = new ModelAndView();
		indexUI.setViewName("index.html");
		return indexUI;
	}

	//Request Mapping for login page
	@GetMapping (value = "/login")
	public ModelAndView loginUi(){
		ModelAndView loginUI = new ModelAndView();
		loginUI.setViewName("login.html");
		return loginUI;
	}

}
