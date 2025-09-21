package capstone.backend.backend.entities;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import java.util.UUID;

@Entity
@Table(name = "contatti")
@Getter
@Setter
@NoArgsConstructor

public class EmailContatto {


    @Id
    @GeneratedValue
    @Setter(AccessLevel.NONE)
    private UUID id;

    @NotBlank(message = "Il nome è obbligatorio")
    private String nome;

    @Email(message = "Email non valida")
    @NotBlank(message = "L'email è obbligatoria")
    private String email;

    @NotBlank(message = "Il messaggio è obbligatorio")
    private String messaggio;

    public EmailContatto(String nome, String email, String messaggio) {
        this.nome = nome;
        this.email = email;
        this.messaggio = messaggio;
    }
}
