-- create and use warehouse database
CREATE DATABASE warehouse;USE warehouse;-- create cities table
CREATE TABLE cities(
    city_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    city VARCHAR(20),
    state VARCHAR(20)
);-- create warehouses table
CREATE TABLE warehouses(
    wid INTEGER PRIMARY KEY AUTO_INCREMENT,
    wname VARCHAR(30),
    city_id INTEGER NOT NULL,
    extra_context JSON,
    FOREIGN KEY (city_id) REFERENCES cities(city_id)
);-- create stores table
CREATE TABLE stores(
    sid INTEGER PRIMARY KEY AUTO_INCREMENT,
    store_name VARCHAR(30),
    city_id INTEGER NOT NULL,
    warehouse_id INTEGER NOT NULL,
    FOREIGN KEY (city_id) REFERENCES cities(city_id),
    FOREIGN KEY (warehouse_id) REFERENCES warehouses(wid)
);-- create customers table
CREATE TABLE customers(
    cno INTEGER PRIMARY KEY AUTO_INCREMENT,
    cname VARCHAR(30),
    addr VARCHAR(40),
    customer_city_id INTEGER NOT NULL,
    FOREIGN KEY (customer_city_id) REFERENCES cities(city_id)
);-- create orders table
CREATE TABLE orders(
    order_no INTEGER PRIMARY KEY AUTO_INCREMENT,
    odate DATE,
    customer_id INTEGER NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(cno)
);-- create items table
CREATE TABLE items(
    item_no INTEGER PRIMARY KEY AUTO_INCREMENT,
    description_text VARCHAR(50),
    weight DECIMAL(3, 2),
    cost DECIMAL(5, 2) NOT NULL
);-- create cart table (M to M relationship of items and orders table)
CREATE TABLE cart(
    cart_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    item_id INTEGER NOT NULL,
    order_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (item_id) REFERENCES items(item_no),
    FOREIGN KEY (order_id) REFERENCES orders(order_no)
);-- create stock table (M to M relationship of stores and items table)
CREATE TABLE stock(
    stock_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    store_id INTEGER NOT NULL,
    item_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (store_id) REFERENCES stores(sid),
    FOREIGN KEY (item_id) REFERENCES items(item_no)
);-- insert data in cities table
INSERT INTO
    cities(city, state)
VALUES
    ("Noida", "Uttar Pradesh");
INSERT INTO
    cities(city, state)
VALUES
    ("Shimla", "Himachal Pradesh");
INSERT INTO
    cities(city, state)
VALUES
    ("Gurgaon", "Haryana");
INSERT INTO
    cities(city, state)
VALUES
    ("Mumbai", "Maharashtra");-- insert data in warehouses table
INSERT INTO
    warehouses(wname, city_id, extra_context)
VALUES
    ("Noida retailers", 1, '{"workers": 1}');
INSERT INTO
    warehouses(wname, city_id, extra_context)
VALUES
    ("Shimla goods", 2, '{"workers": 12}');
INSERT INTO
    warehouses(wname, city_id, extra_context)
VALUES
    ("Gurgaon warehouse", 3, '{"workers": 32}');
INSERT INTO
    warehouses(wname, city_id, extra_context)
VALUES
    ("Mumbai godown", 4, '{"workers": 8}');-- insert data in stores table
INSERT INTO
    stores (store_name, city_id, warehouse_id)
VALUES
    ("Noida store", 1, 1);
INSERT INTO
    stores (store_name, city_id, warehouse_id)
VALUES
    ("Shimla store", 2, 2);
INSERT INTO
    stores (store_name, city_id, warehouse_id)
VALUES
    ("Gurgaon store", 3, 3);
INSERT INTO
    stores (store_name, city_id, warehouse_id)
VALUES
    ("Mumbai store", 4, 4);-- insert data in customers table
INSERT INTO
    customers (cname, addr, customer_city_id)
VALUES
    ("Vijay", "#313, Sector-43", 1);
INSERT INTO
    customers (cname, addr, customer_city_id)
VALUES
    ("Ajay", "#54, Sector-33", 1);
INSERT INTO
    customers (cname, addr, customer_city_id)
VALUES
    ("Ramesh", "#5423, Sector-12", 1);
INSERT INTO
    customers (cname, addr, customer_city_id)
VALUES
    ("Manish", "#354, Sector-11", 2);
INSERT INTO
    customers (cname, addr, customer_city_id)
VALUES
    ("Suresh", "#635, Sector-21", 2);
INSERT INTO
    customers (cname, addr, customer_city_id)
VALUES
    ("Anil", "#225, Sector-2", 2);
INSERT INTO
    customers (cname, addr, customer_city_id)
VALUES
    ("Aditya", "#103, Sector-54", 3);
INSERT INTO
    customers (cname, addr, customer_city_id)
VALUES
    ("Vinay", "#6352, Sector-12", 3);
INSERT INTO
    customers (cname, addr, customer_city_id)
VALUES
    ("Surbhi", "#222, Sector-64", 3);
INSERT INTO
    customers (cname, addr, customer_city_id)
VALUES
    ("Kamal", "#643, Sector-67", 3);
INSERT INTO
    customers (cname, addr, customer_city_id)
VALUES
    ("Anish", "#835, Sector-77", 4);
INSERT INTO
    customers (cname, addr, customer_city_id)
VALUES
    ("Sakshi", "#425, Sector-85", 4);
INSERT INTO
    customers (cname, addr, customer_city_id)
VALUES
    ("Divya", "#975, Sector-43", 4);
INSERT INTO
    customers (cname, addr, customer_city_id)
VALUES
    ("Samar", "#215, Sector-23", 4);-- insert data in orders table
INSERT INTO
    orders (odate, customer_id)
VALUES
    ('2022-11-22', 1);
INSERT INTO
    orders (odate, customer_id)
VALUES
    ('2022-10-10', 2);
INSERT INTO
    orders (odate, customer_id)
VALUES
    ('2022-07-13', 3);
INSERT INTO
    orders (odate, customer_id)
VALUES
    ('2022-12-21', 4);-- insert data in items table
INSERT INTO
    items(description_text, weight, cost)
VALUES("Wheat Flour", 1.00, 40.00);
INSERT INTO
    items(description_text, weight, cost)
VALUES("Onions", 1.00, 25.00);
INSERT INTO
    items(description_text, weight, cost)
VALUES("Watermelon", 1.00, 16.00);
INSERT INTO
    items(description_text, weight, cost)
VALUES("Bananas ", 1.00, 50.00);
INSERT INTO
    items(description_text, weight, cost)
VALUES("Gooseberry", 1.00, 65.00);
INSERT INTO
    items(description_text, weight, cost)
VALUES("Sugar", 1.00, 60.00);
INSERT INTO
    items(description_text, weight, cost)
VALUES("Chicken Masala", 0.25, 30.00);
INSERT INTO
    items(description_text, weight, cost)
VALUES("Garam Masala", 0.10, 25.00);-- insert data in cart table
INSERT INTO
    cart (item_id, order_id, quantity)
VALUES
    (1, 1, 4);
INSERT INTO
    cart (item_id, order_id, quantity)
VALUES
    (2, 1, 1);
INSERT INTO
    cart (item_id, order_id, quantity)
VALUES
    (4, 1, 4);
INSERT INTO
    cart (item_id, order_id, quantity)
VALUES
    (3, 2, 3);
INSERT INTO
    cart (item_id, order_id, quantity)
VALUES
    (5, 2, 6);
INSERT INTO
    cart (item_id, order_id, quantity)
VALUES
    (1, 2, 2);
INSERT INTO
    cart (item_id, order_id, quantity)
VALUES
    (7, 2, 12);
INSERT INTO
    cart (item_id, order_id, quantity)
VALUES
    (3, 3, 9);
INSERT INTO
    cart (item_id, order_id, quantity)
VALUES
    (2, 3, 33);
INSERT INTO
    cart (item_id, order_id, quantity)
VALUES
    (1, 3, 2);
INSERT INTO
    cart (item_id, order_id, quantity)
VALUES
    (4, 3, 2);
INSERT INTO
    cart (item_id, order_id, quantity)
VALUES
    (5, 3, 1);
INSERT INTO
    cart (item_id, order_id, quantity)
VALUES
    (6, 4, 1);
INSERT INTO
    cart (item_id, order_id, quantity)
VALUES
    (7, 4, 1);
INSERT INTO
    cart (item_id, order_id, quantity)
VALUES
    (4, 4, 10);
INSERT INTO
    cart (item_id, order_id, quantity)
VALUES
    (3, 4, 8);
INSERT INTO
    cart (item_id, order_id, quantity)
VALUES
    (1, 4, 6);
INSERT INTO
    cart (item_id, order_id, quantity)
VALUES
    (2, 4, 5);
INSERT INTO
    cart (item_id, order_id, quantity)
VALUES
    (8, 4, 5);-- insert data in stock table
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (1, 1, 50);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (1, 2, 30);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (1, 3, 60);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (1, 4, 70);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (1, 5, 80);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (1, 6, 30);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (1, 7, 10);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (1, 8, 50);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (2, 1, 50);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (2, 2, 30);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (2, 3, 60);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (2, 4, 70);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (2, 5, 80);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (2, 6, 30);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (2, 7, 10);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (2, 8, 50);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (3, 1, 50);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (3, 2, 30);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (3, 3, 60);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (3, 4, 70);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (3, 5, 80);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (3, 6, 30);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (3, 7, 10);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (3, 8, 50);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (4, 1, 50);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (4, 2, 30);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (4, 3, 60);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (4, 4, 70);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (4, 5, 80);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (4, 6, 30);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (4, 7, 10);
INSERT INTO
    stock (store_id, item_id, quantity)
VALUES
    (4, 8, 50);