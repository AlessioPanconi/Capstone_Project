package capstone.backend.backend.entities;
import jakarta.persistence.*;
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

    private String nome;
    private String email;
    private String messaggio;

    public EmailContatto(String nome, String email, String messaggio) {
        this.nome = nome;
        this.email = email;
        this.messaggio = messaggio;
    }
}
