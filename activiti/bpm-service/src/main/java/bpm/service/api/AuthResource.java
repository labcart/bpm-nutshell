package bpm.service.api;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/activiti-app/app")
public class AuthResource {

    @PostMapping("/authentication")
    public String authentication() {
        return "";
    }

}
