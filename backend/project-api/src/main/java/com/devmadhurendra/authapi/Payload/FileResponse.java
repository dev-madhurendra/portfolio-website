package com.devmadhurendra.authapi.Payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class FileResponse {
    String fileName;
    String message;

}
