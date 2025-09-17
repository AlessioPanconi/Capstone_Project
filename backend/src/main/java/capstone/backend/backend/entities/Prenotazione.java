package capstone.backend.backend.entities;

import jakarta.persistence.*;
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

    private String nome;
    private String email;
    private String servizio;

    private LocalDate data;
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