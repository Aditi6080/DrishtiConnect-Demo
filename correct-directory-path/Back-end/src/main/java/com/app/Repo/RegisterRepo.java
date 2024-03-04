package com.app.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.app.Entity.Register;

public interface RegisterRepo extends JpaRepository<Register, Integer> {
	
    @Query("SELECT r FROM Register r WHERE r.Email = :email AND r.Password = :password")
    Iterable<Register> findByEmailAndPassword(@Param("email") String email, @Param("password") String password);
    
    @Query("SELECT r FROM Register r WHERE r.Email = :email")
    Optional<Register> findByEmail(@Param("email") String email);

    @Query("SELECT r FROM Register r WHERE r.Password = :password")
    Optional<Register> findByPassword(@Param("password") String password);
}
