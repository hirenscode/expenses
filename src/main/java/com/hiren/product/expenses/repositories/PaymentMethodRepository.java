package com.hiren.product.expenses.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hiren.product.expenses.domains.PaymentMethod;

@Repository
public interface PaymentMethodRepository
    extends CrudRepository<PaymentMethod, Long> {
}
