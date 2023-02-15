package com.finalyear.bitproject.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "employee")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "registration_number")
    private String registration_number;

@Column(name = "dob")
    private LocalDate dob;
}
