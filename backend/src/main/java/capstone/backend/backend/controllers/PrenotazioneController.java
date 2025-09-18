package capstone.backend.backend.controllers;

import capstone.backend.backend.entities.Prenotazione;
import capstone.backend.backend.repositories.PrenotazioneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/prenotazioni")
public class PrenotazioneController {

    @Autowired
    private PrenotazioneRepository prenotazioneRepository;

    @PostMapping
    public ResponseEntity<?> createPrenotazione(@RequestBody Prenotazione prenotazione) {
        boolean esiste = prenotazioneRepository.existsByDataAndOra(prenotazione.getData(), prenotazione.getOra());
        if (esiste) {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body("L'orario selezionato non è disponibile. Scegli un altro slot.");
        }

        Prenotazione saved = prenotazioneRepository.save(prenotazione);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }
    @GetMapping
    public List<Prenotazione> getAllPrenotazioni() {
        return prenotazioneRepository.findAll();
    }
    @GetMapping("/giorno/{data}")
    public List<Prenotazione> getPrenotazioniByData(@PathVariable LocalDate data) {
        return prenotazioneRepository.findByData(data);
    }
}
