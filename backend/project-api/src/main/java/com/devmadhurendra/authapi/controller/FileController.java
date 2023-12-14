package com.devmadhurendra.authapi.controller;

import com.devmadhurendra.authapi.Payload.FileResponse;
import com.devmadhurendra.authapi.dto.ProjectDTO;
import com.devmadhurendra.authapi.service.FileService;
import com.devmadhurendra.authapi.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/projects")
public class FileController {

    private final FileService fileService;
    private final ProjectService projectService;

    @Autowired
    FileController(FileService fileService,
                   ProjectService projectService) {
        this.fileService = fileService;
        this.projectService = projectService;
    }

    @Value("${project.image}")
    private String path;

    @PostMapping("/images/{projectId}/upload")
    public ResponseEntity<FileResponse> fileUpload(
            @RequestParam("image")MultipartFile image,
            @PathVariable Long projectId
    ) throws IOException {
        String fileName = null;
        ProjectDTO projectDTO = projectService.getProject(projectId);
        try {
            fileName = this.fileService.uploadImage(path,image);
            projectDTO.setProjectImage(fileName);
            projectService.updateProject(projectId,projectDTO);
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(new FileResponse(fileName, "Error while uploading error"), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(new FileResponse(fileName, "Image is successfully uploaded !"), HttpStatus.CREATED);
    }
}
