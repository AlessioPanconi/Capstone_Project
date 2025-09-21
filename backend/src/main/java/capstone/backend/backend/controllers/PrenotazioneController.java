package capstone.backend.backend.controllers;

import capstone.backend.backend.entities.Prenotazione;
import capstone.backend.backend.repositories.PrenotazioneRepository;
import capstone.backend.backend.service.EmailService;
import jakarta.validation.Valid;
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

    @Autowired
    private EmailService emailService;
    @PostMapping
    public ResponseEntity<?> createPrenotazione(@RequestBody @Valid Prenotazione prenotazione) {
        boolean esiste = prenotazioneRepository.existsByDataAndOra(prenotazione.getData(), prenotazione.getOra());
        if (esiste) {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body("L'orario selezionato non è disponibile. Scegli un altro slot.");
        }

        Prenotazione saved = prenotazioneRepository.save(prenotazione);

//        String adminMessage = String.format(
//                "Hai una nuova prenotazione:\n\nNome: %s\nEmail: %s\nServizio: %s\nData: %s\nOra: %s\nMessaggio: %s",
//                saved.getNome(), saved.getEmail(), saved.getServizio(), saved.getData(), saved.getOra(), saved.getMessaggio()
//        );
//
//        String userMessage = String.format(
//                "Ciao %s,\n\nla tua prenotazione è stata confermata!\n\nDettagli:\nServizio: %s\nData: %s\nOra: %s\n\nGrazie per averci scelto!",
//                saved.getNome(), saved.getServizio(), saved.getData(), saved.getOra()
//        );
//
//        emailService.sendEmail("giuliapanconipsicologa@gmail.com", "Nuova prenotazione ricevuta", adminMessage);
//        emailService.sendEmail(saved.getEmail(), "Conferma prenotazione", userMessage);

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
