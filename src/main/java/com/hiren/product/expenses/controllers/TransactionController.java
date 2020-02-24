package com.hiren.product.expenses.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hiren.product.expenses.domains.Transaction;
import com.hiren.product.expenses.services.TransactionService;

@RestController
@RequestMapping("/api/v1/transaction")
@CrossOrigin(value = "http://localhost:3000")
public class TransactionController {

    @Autowired
    private TransactionService service;

    @PostMapping
    public ResponseEntity<?> addTransaction(@RequestBody Transaction transaction) {
        service.add(transaction);
        return new ResponseEntity<Transaction>(transaction, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Iterable<Transaction> getTransactions() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Transaction getTransaction(@PathVariable("id") Long id) {
        return service.findById(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> removeTransaction(@PathVariable("id") Long id) {
        Transaction transaction = service.findById(id);
        boolean removed = service.remove(transaction);
        if (!removed) {
            return new ResponseEntity<>("Cannot be removed, or doesn't exist", HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>("Record removed successfully!", HttpStatus.ACCEPTED);
    }
}
