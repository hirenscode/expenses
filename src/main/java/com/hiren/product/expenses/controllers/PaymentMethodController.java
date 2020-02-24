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

import com.hiren.product.expenses.domains.PaymentMethod;
import com.hiren.product.expenses.services.PaymentMethodService;

@RestController
@RequestMapping("/api/v1/payment-method")
@CrossOrigin(value = "http://localhost:3000")
public class PaymentMethodController {

    @Autowired
    private PaymentMethodService service;

    @PostMapping
    public ResponseEntity<?> addPaymentMethod(@RequestBody PaymentMethod paymentMethod) {
        service.add(paymentMethod);
        return new ResponseEntity<PaymentMethod>(paymentMethod, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Iterable<PaymentMethod> getPaymentMethods() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public PaymentMethod getPaymentMethod(@PathVariable("id") Long id) {
        return service.findById(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> removePaymentMethod(@PathVariable("id") Long id) {
        PaymentMethod paymentMethod = service.findById(id);
        boolean removed = service.remove(paymentMethod);
        if (!removed) {
            return new ResponseEntity<>("Cannot be removed, or doesn't exist", HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>("Record removed successfully!", HttpStatus.ACCEPTED);
    }
}
