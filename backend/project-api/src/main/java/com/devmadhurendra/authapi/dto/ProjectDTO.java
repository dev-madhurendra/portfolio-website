package com.devmadhurendra.authapi.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class ProjectDTO {
    private String title;
    private String description;
    private String technologies;
    private String link;
    private String projectImage = "default.png";
}
