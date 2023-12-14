package com.devmadhurendra.authapi.exception;

import lombok.extern.slf4j.Slf4j;
import org.hibernate.MappingException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String,String >> methodArgsNotValidException(MethodArgumentNotValidException ex) {
        Map<String,String> resp = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String message = error.getDefaultMessage();
            resp.put(fieldName,message);
        });
        resp.put("errors", Arrays.toString(ex.getStackTrace()));
        return new ResponseEntity<>(resp, HttpStatus.BAD_REQUEST);
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(ProjectNotFoundException.class)
    public Map<String,String > projectNotFoundExceptionHandler(ProjectNotFoundException ex) {
        Map<String ,String> errorMap = new HashMap<>();
        errorMap.put("error", Arrays.toString(ex.getStackTrace()));
        return errorMap;
    }

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(MappingException.class)
    public Map<String,String> handleMappingException(MappingException ex) {
        Map<String ,String> errorMap = new HashMap<>();
        errorMap.put("Mapping error ", ex.getMessage());
        return errorMap;
    }
}
