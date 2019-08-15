# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

    - SELECT ProductName, CategoryName FROM [Categories] 
    join Products on Categories.CategoryId = Products.CategoryId 
    limit 76

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

    - SELECT OrderId, ShipperName FROM [Shippers]
    join Orders on Shippers.ShipperId = Orders.ShipperId
    where Orders.OrderId < 104099	


### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

    - SELECT ProductName, Quantity FROM [OrderDetails]
    join Products on OrderDetails.ProductId = Products.ProductId
    Where OrderDetails.OrderID = 10251
    order By Products.ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 