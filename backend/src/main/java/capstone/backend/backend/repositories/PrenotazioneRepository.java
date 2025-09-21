package capstone.backend.backend.repositories;

import capstone.backend.backend.entities.Prenotazione;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.UUID;

@Repository
public interface PrenotazioneRepository extends JpaRepository<Prenotazione, UUID> {
    boolean existsByDataAndOra(LocalDate data, LocalTime ora);
    List<Prenotazione> findByData(LocalDate data);
}
