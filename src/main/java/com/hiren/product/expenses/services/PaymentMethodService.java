package com.hiren.product.expenses.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hiren.product.expenses.domains.PaymentMethod;
import com.hiren.product.expenses.repositories.PaymentMethodRepository;

@Service
public class PaymentMethodService {

    @Autowired
    private PaymentMethodRepository repository;

    public void add(PaymentMethod paymentMethod) {
        repository.save(paymentMethod);
    }

    public Iterable<PaymentMethod> findAll() {
        return repository.findAll();
    }

    public PaymentMethod findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public boolean remove(PaymentMethod paymentMethod) {
        if (paymentMethod != null) {
            repository.delete(paymentMethod);
            return !repository.existsById(paymentMethod.getId());
        }
        return false;
    }
}
