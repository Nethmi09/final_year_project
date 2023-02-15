package com.finalyear.bitproject.repository;

import com.finalyear.bitproject.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
}
