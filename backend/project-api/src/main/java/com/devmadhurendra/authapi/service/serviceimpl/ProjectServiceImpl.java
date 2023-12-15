package com.devmadhurendra.authapi.service.serviceimpl;

import com.devmadhurendra.authapi.dto.ProjectDTO;
import com.devmadhurendra.authapi.entity.Project;
import com.devmadhurendra.authapi.exception.ProjectNotFoundException;
import com.devmadhurendra.authapi.repository.ProjectRepository;
import com.devmadhurendra.authapi.service.FileService;
import com.devmadhurendra.authapi.service.ProjectService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;
    private final ModelMapper modelMapper;
    private final FileService fileService;

    @Autowired
    public ProjectServiceImpl(ProjectRepository projectRepository, ModelMapper modelMapper,FileService fileService) {
        this.projectRepository = projectRepository;
        this.modelMapper = modelMapper;
        this.fileService = fileService;
    }


    @Override
    public ProjectDTO addProject(ProjectDTO projectDTO, MultipartFile image, String path) throws IOException {
        String fileName = fileService.uploadImage(path, image);

        Project project = new Project();
        project.setTitle(projectDTO.getTitle());
        project.setDescription(projectDTO.getDescription());
        project.setTechnologies(projectDTO.getTechnologies());
        project.setLink(projectDTO.getLink());
        project.setProjectImage(fileName);

        Project savedProject = projectRepository.save(project);

        return modelMapper.map(savedProject, ProjectDTO.class);
    }

    @Override
    public ProjectDTO getProject(Long id) {
        Project project = projectRepository.findById(id).orElseThrow(() -> new ProjectNotFoundException("Project " + id + " not found !"));
        return modelMapper.map(project, ProjectDTO.class);
    }

    @Override
    public List<ProjectDTO> getAllProject() {
        List<Project> projects = projectRepository.findAll();
        return projects.stream()
                .map(project ->
                    modelMapper.map(project, ProjectDTO.class)
                ).collect(Collectors.toList());
    }

    @Override
    public void deleteProject(Long id) {
        Project project = projectRepository.findById(id).orElseThrow(() -> new ProjectNotFoundException("Project " + id + " not found !"));
        projectRepository.delete(project);
    }

    @Override
    public ProjectDTO updateProject(Long id, ProjectDTO projectDTO, MultipartFile image, String path) throws IOException {
        Project project = projectRepository.findById(id).orElseThrow(() -> new ProjectNotFoundException("Project " + id + " not found !"));

        project.setTitle(projectDTO.getTitle());
        project.setLink(projectDTO.getLink());
        project.setDescription(projectDTO.getDescription());
        project.setTechnologies(projectDTO.getTechnologies());

        if (image != null) {
            String fileName = fileService.uploadImage(path, image);
            project.setProjectImage(fileName);
        }

        Project updated = projectRepository.save(project);

        return modelMapper.map(updated, ProjectDTO.class);
    }

}
