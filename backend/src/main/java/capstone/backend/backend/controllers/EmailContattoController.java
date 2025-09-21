package capstone.backend.backend.controllers;

import capstone.backend.backend.entities.EmailContatto;
import capstone.backend.backend.repositories.EmailContattoRepository;
import capstone.backend.backend.service.EmailService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contatti")
public class EmailContattoController {

    @Autowired
    private EmailContattoRepository contattoRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<?> inviaMessaggio(@RequestBody @Valid EmailContatto contatto) {

        EmailContatto saved = contattoRepository.save(contatto);

        emailService.sendEmail(
                "giuliapanconipsicologa@gmail.com",
                "Nuovo contatto dal sito",
                "Hai ricevuto un nuovo messaggio:\n\n" +
                        "Nome: " + contatto.getNome() + "\n" +
                        "Email: " + contatto.getEmail() + "\n" +
                        "Messaggio: " + contatto.getMessaggio()
        );

        emailService.sendEmail(
                contatto.getEmail(),
                "Grazie per averci contattato",
                "Ciao " + contatto.getNome() + ",\n\n" +
                        "Abbiamo ricevuto il tuo messaggio e ti risponderemo al più presto.\n\n" +
                        "Il tuo messaggio: \n" + contatto.getMessaggio()
        );

        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }
}
