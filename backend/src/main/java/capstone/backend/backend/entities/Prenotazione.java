package capstone.backend.backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

@Entity
@Table(name = "prenotazioni")
@Getter
@Setter
@NoArgsConstructor
public class Prenotazione {

    @Id
    @GeneratedValue
    @Setter(AccessLevel.NONE)
    private UUID id;

    @NotBlank(message = "Il nome è obbligatorio")
    private String nome;

    @Email(message = "Email non valida")
    @NotBlank(message = "L'email è obbligatoria")
    private String email;

    @NotBlank(message = "Il servizio è obbligatorio")
    private String servizio;

    @NotNull(message = "La data è obbligatoria")
    private LocalDate data;

    @NotNull(message = "L'orario è obbligatorio")
    private LocalTime ora;

    private String messaggio;

    public Prenotazione(String nome, String email, String servizio, LocalTime ora, LocalDate data, String messaggio) {
        this.nome = nome;
        this.email = email;
        this.servizio = servizio;
        this.ora = ora;
        this.data = data;
        this.messaggio = messaggio;
    }
}