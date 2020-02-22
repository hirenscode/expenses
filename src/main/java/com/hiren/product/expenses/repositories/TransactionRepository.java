package com.hiren.product.expenses.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hiren.product.expenses.domains.Transaction;

@Repository
public interface TransactionRepository extends CrudRepository<Transaction, Long> {
}
