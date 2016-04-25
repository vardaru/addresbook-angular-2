package tr.biz.vardar.addressbook;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
//@EnableOAuth2Sso
@EnableSwagger2
//@RestController
public class AddressBook2Application {
    Logger logger = LoggerFactory.getLogger("AddressBook2Aplication");

    public static void main(String[] args){
        SpringApplication.run(AddressBook2Application.class, args);
    }
}
