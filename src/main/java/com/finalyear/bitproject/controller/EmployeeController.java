package com.finalyear.bitproject.controller;

import com.finalyear.bitproject.repository.EmployeeRepository;
import com.finalyear.bitproject.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeDao;

    //Request Mapping for get employee ui
    @GetMapping(value = "/employee")
    public ModelAndView employee(){
        ModelAndView employeeUI = new ModelAndView();
        employeeUI.setViewName("employee.html");
        return employeeUI;
    }

    //Request mapping for get all employee details
    @GetMapping(value = "/emploee/all" , produces = "application/json" )
    public List<Employee> employeeAll(){
        return employeeDao.findAll();
    }

    //Add Service [/employee]
    @PostMapping

    //Update Service [/employee]
    @PutMapping


    //Delete Service [/employee]
@DeleteMapping (value = "/employee/delete")
     public String employeeDelete(@RequestBody  Employee employee){
        try{
            employeeDao.delete(employee);
            return "0";
        }catch (Exception ex){
            return "Delete Not Complete : " + ex.getMessage();
        }
}

}
