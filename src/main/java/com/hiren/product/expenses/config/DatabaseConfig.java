package com.hiren.product.expenses.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;

import lombok.extern.slf4j.Slf4j;

@Configuration
@Slf4j
public class DatabaseConfig {

    @Value("${spring.jpa.hibernate.ddl-auto:none}")
    private String ddlAuto;

    @Bean
    @Profile("prod")
    public CommandLineRunner initDatabase(JdbcTemplate jdbcTemplate) {
        return args -> {
            log.info("Initializing database with ddl-auto: {}", ddlAuto);
            
            // Check if tables exist and create them if needed
            try {
                jdbcTemplate.execute("SELECT 1 FROM payment_method LIMIT 1");
                log.info("payment_method table exists");
            } catch (Exception e) {
                log.info("Creating payment_method table");
                jdbcTemplate.execute(
                    "CREATE TABLE IF NOT EXISTS payment_method (" +
                    "id BIGSERIAL PRIMARY KEY, " +
                    "bank_name VARCHAR(255) NOT NULL, " +
                    "user_identified_name VARCHAR(255), " +
                    "account_number VARCHAR(16) NOT NULL)");
            }
            
            try {
                jdbcTemplate.execute("SELECT 1 FROM transaction LIMIT 1");
                log.info("transaction table exists");
            } catch (Exception e) {
                log.info("Creating transaction table");
                jdbcTemplate.execute(
                    "CREATE TABLE IF NOT EXISTS transaction (" +
                    "id BIGSERIAL PRIMARY KEY, " +
                    "date TIMESTAMP NOT NULL, " +
                    "amount DECIMAL(21, 2) NOT NULL, " +
                    "description TEXT NOT NULL, " +
                    "expense_by VARCHAR(255) NOT NULL, " +
                    "category VARCHAR(255) NOT NULL, " +
                    "payment_method_id BIGINT, " +
                    "FOREIGN KEY (payment_method_id) REFERENCES payment_method(id))");
            }
        };
    }
} 