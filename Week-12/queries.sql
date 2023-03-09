-- Find the item that has minimum weight.
SELECT
    MIN(weight) AS minimum_weight_item
FROM
    items;-- Find the different warehouses in Mumbai.
SELECT
    DISTINCT *
FROM
    warehouses AS w
    LEFT join cities AS c ON w.city_id = c.city_id
WHERE
    c.city = "Mumbai";-- Find the details of items ordered by a customer “Vijay.
SELECT
    *
FROM
    items
WHERE
    item_no IN (
        SELECT
            item_id
        FROM
            cart
        WHERE
            order_id IN (
                SELECT
                    order_no
                FROM
                    orders
                WHERE
                    customer_id IN (
                        SELECT
                            cno
                        FROM
                            customers
                        WHERE
                            cname = "Vijay"
                    )
            )
    );