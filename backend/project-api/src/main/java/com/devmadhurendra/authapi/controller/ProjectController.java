package com.devmadhurendra.authapi.controller;

import com.devmadhurendra.authapi.dto.ProjectDTO;
import com.devmadhurendra.authapi.exception.ProjectNotFoundException;
import com.devmadhurendra.authapi.service.FileService;
import com.devmadhurendra.authapi.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/projects")
public class ProjectController {

    private final ProjectService projectService;
    private final FileService fileService;

    @Value("${project.image}")
    private String path;

    @Autowired
    public ProjectController(ProjectService projectService, FileService fileService) {
        this.projectService = projectService;
        this.fileService = fileService;
    }
    @PostMapping
    public ResponseEntity<ProjectDTO> addProject(
            @ModelAttribute ProjectDTO projectDTO,
            @RequestParam("image") MultipartFile image) {
        try {
            ProjectDTO createdProject = projectService.addProject(projectDTO, image, path);
            return new ResponseEntity<>(createdProject, HttpStatus.CREATED);
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProjectDTO> getProject(@PathVariable Long id) {
        ProjectDTO project = projectService.getProject(id);
        return ResponseEntity.ok(project);
    }

    @GetMapping
    public ResponseEntity<List<ProjectDTO>> getAllProjects() {
        List<ProjectDTO> projects = projectService.getAllProject();
        return ResponseEntity.ok(projects);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProject(@PathVariable Long id) {
        projectService.deleteProject(id);
        return new ResponseEntity<>("Project " + id + " deleted successfully !",HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProjectDTO> updateProject(
            @PathVariable Long id,
            @ModelAttribute ProjectDTO projectDTO,
            @RequestParam(required = false) MultipartFile image) {
        try {
            ProjectDTO updatedProject = projectService.updateProject(id, projectDTO, image, path);
            return new ResponseEntity<>(updatedProject, HttpStatus.OK);
        } catch (ProjectNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
