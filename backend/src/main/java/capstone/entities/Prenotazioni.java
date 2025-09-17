package java.capstone.entities;

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
@AllArgsConstructor
public class Prenotazione {

    @Id
    @GeneratedValue
    @Setter(AccessLevel.NONE)
    @Column(name = "id_prenotazione")
    private UUID idPrenotazione;

    private String nome;

    private String email;

    private String servizio;

    private LocalDate data;

    private LocalTime orario;

    @Column(length = 1000)
    private String messaggio;
}
