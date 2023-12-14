package com.devmadhurendra.authapi.service.serviceimpl;

import com.devmadhurendra.authapi.service.FileService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@Service
public class FileServiceImpl implements FileService {


    @Override
    public String uploadImage(String path, MultipartFile file) throws IOException {
        // file name
        String name = file.getOriginalFilename();
        System.out.println("Name : " + name);
        // full path
        String filePath = path + File.separator + name;
        System.out.println("File Path : " + filePath);

        // create folder if does not exist
        File file1 = new File(path);
        System.out.println("File1 : " + file1);

        if (!file1.exists()) {
            System.out.println("Creating folder....");
            file1.mkdir();
            System.out.println("Created folder....");
        }

        Files.copy(file.getInputStream(), Paths.get(filePath));


        return name;
    }
}
