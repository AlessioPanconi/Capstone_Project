package capstone.backend.backend.repositories;

import capstone.backend.backend.entities.EmailContatto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface EmailContattoRepository extends JpaRepository<EmailContatto, UUID> {
}
