package com.hiren.product.expenses;

import java.math.BigDecimal;
import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;

import com.hiren.product.expenses.domains.PaymentMethod;
import com.hiren.product.expenses.domains.Transaction;
import com.hiren.product.expenses.repositories.PaymentMethodRepository;
import com.hiren.product.expenses.repositories.TransactionRepository;

//@Component to load initial add it as Component
public class DataLoader
    implements ApplicationRunner {

    private PaymentMethodRepository paymentMethodRepository;
    private TransactionRepository repository;

    @Autowired
    public DataLoader(PaymentMethodRepository paymentMethodRepository,
                      TransactionRepository repository) {
        this.paymentMethodRepository = paymentMethodRepository;
        this.repository = repository;
    }

    public void run(ApplicationArguments args) {
        PaymentMethod paymentMethod = PaymentMethod.builder()
                .id(100l)
                .userIdentifiedName("ChaseSapphire")
                .bankName("Chase")
                .accountNumber("2394729872394823")
                .build();

        Transaction transaction = Transaction.builder()
                .id(100l)
                .date(Instant.EPOCH)
                .category("Food")
                .amount(new BigDecimal(23.94))
                .description("Lunch")
                .expenseBy("Home")
//                .paymentMethod(paymentMethod)
                .build();

        paymentMethodRepository.save(paymentMethod);
        repository.save(transaction);
    }
}
