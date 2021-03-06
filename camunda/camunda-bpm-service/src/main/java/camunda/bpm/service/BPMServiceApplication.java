package camunda.bpm.service;

import camunda.bpm.Application;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackageClasses = Application.class)
public class BPMServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(BPMServiceApplication.class, args);
    }

}
