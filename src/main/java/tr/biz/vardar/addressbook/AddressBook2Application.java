package tr.biz.vardar.addressbook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class AddressBook2Application {

	public static void main(String[] args) {
		SpringApplication.run(AddressBook2Application.class, args);
	}
}
