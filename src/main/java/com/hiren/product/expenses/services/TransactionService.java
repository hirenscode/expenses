package com.hiren.product.expenses.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hiren.product.expenses.domains.Transaction;
import com.hiren.product.expenses.repositories.TransactionRepository;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository repository;

    public void add(Transaction transaction) {
        repository.save(transaction);
    }

    public Iterable<Transaction> findAll() {
        return repository.findAll();
    }

    public Transaction findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public boolean remove(Transaction transaction) {
        if (transaction != null) {
            repository.delete(transaction);
            return !repository.existsById(transaction.getId());
        }
        return false;
    }
}
