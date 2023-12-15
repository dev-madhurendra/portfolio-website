package com.devmadhurendra.authapi.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "project")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String technologies;
    private String link;
    private String projectImage;

}
