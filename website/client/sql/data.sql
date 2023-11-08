

CREATE TABLE user_registrations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  date_of_birth DATE,
  address VARCHAR(255),
  phone_number VARCHAR(20)
);

INSERT INTO user_registrations (full_name, email, password_hash, date_of_birth, address, phone_number)
VALUES ('ABOUD THE DUDE',
        'ABDULLAH@aboud.com',
        'Aboud',
        '2003-08-20',
        'Al-basra',
        '+96407705856142');
