-- Create payment_method table if it doesn't exist
CREATE TABLE IF NOT EXISTS payment_method (
    id BIGSERIAL PRIMARY KEY,
    bank_name VARCHAR(255) NOT NULL,
    user_identified_name VARCHAR(255),
    account_number VARCHAR(16) NOT NULL
);

-- Create transaction table if it doesn't exist
CREATE TABLE IF NOT EXISTS transaction (
    id BIGSERIAL PRIMARY KEY,
    date TIMESTAMP NOT NULL,
    amount DECIMAL(21, 2) NOT NULL,
    description TEXT NOT NULL,
    expense_by VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    payment_method_id BIGINT,
    FOREIGN KEY (payment_method_id) REFERENCES payment_method(id)
); 