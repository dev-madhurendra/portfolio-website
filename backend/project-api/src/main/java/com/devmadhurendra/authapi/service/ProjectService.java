package com.devmadhurendra.authapi.service;

import com.devmadhurendra.authapi.dto.ProjectDTO;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ProjectService {

    ProjectDTO addProject(ProjectDTO projectDTO, MultipartFile image, String path) throws IOException;
    ProjectDTO getProject(Long id);
    List<ProjectDTO> getAllProject();
    void deleteProject(Long id);
    ProjectDTO updateProject(Long id,ProjectDTO projectDTO,MultipartFile image, String path) throws IOException ;
}
