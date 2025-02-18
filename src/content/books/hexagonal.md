---
title: Designing Hexagonal Architecture with Java
description: Learn how to design and implement Hexagonal Architecture in Java to build maintainable and testable applications.
img: hexagonal_fixed.png
buy:
    spain: https://www.amazon.es/Designing-Hexagonal-Architecture-Java-change-tolerant/dp/1801816484
link: hexagonal
---

# Understanding Hexagonal Architecture with Java

Hexagonal Architecture, also known as **Ports and Adapters**, is a software design pattern that promotes maintainability, testability, and separation of concerns. This architecture ensures that the core application logic is independent of external systems such as databases, UI frameworks, or third-party APIs.

---

## Key Concepts of Hexagonal Architecture

### 1. **Domain-Centric Design**
At the core of the architecture lies the domain logic or business rules, which are independent of any external concerns.

### 2. **Ports**
Ports define interfaces that act as entry points (for primary actors like users) or exit points (for secondary actors like external systems) to the application. They enable communication between the application and the external world.

- **Primary Ports**: Interfaces implemented by the application to expose core functionality (e.g., service classes).
- **Secondary Ports**: Interfaces used by the application to communicate with external systems (e.g., repository interfaces).

### 3. **Adapters**
Adapters are responsible for implementing the port interfaces and handling interactions with external systems.

- **Primary Adapters**: Handle input (e.g., REST controllers, CLI commands).
- **Secondary Adapters**: Handle output (e.g., database implementations, external APIs).

### 4. **Independence**
By isolating dependencies and using interfaces, the core logic remains independent of:
- Frameworks
- Databases
- Messaging systems

---

## Implementation in Java

Below is a simplified implementation of Hexagonal Architecture in Java.

### 1. Define the Core Domain (Port)

```java
public interface OrderService {
    void placeOrder(Order order);
}
```

### 2. Implement the Core Logic

```java
public class OrderServiceImpl implements OrderService {
    private final OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public void placeOrder(Order order) {
        // Core business logic
        orderRepository.save(order);
    }
}
```

### 3. Create Secondary Port (Repository)

```java
public interface OrderRepository {
    void save(Order order);
}
```

### 4. Implement Adapters

#### REST Adapter (Primary Adapter)

```java
@RestController
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/orders")
    public ResponseEntity<String> placeOrder(@RequestBody Order order) {
        orderService.placeOrder(order);
        return ResponseEntity.ok("Order placed successfully");
    }
}
```

#### Database Adapter (Secondary Adapter)

```java
@Repository
public class OrderRepositoryImpl implements OrderRepository {
    @Override
    public void save(Order order) {
        // Code to save the order in the database
    }
}
```

---

## Benefits of Hexagonal Architecture

- **Testability**: Business logic can be tested independently of frameworks or databases.
- **Flexibility**: Swapping frameworks or external systems becomes easier.
- **Maintainability**: Clear separation of concerns reduces complexity.
- **Scalability**: Adapters can be scaled or replaced without impacting the core logic.

---

## Resources to Learn More

- [Hexagonal Architecture Explained](https://alistair.cockburn.us/hexagonal-architecture/)
- [Clean Architecture by Robert C. Martin](https://cleancoder.com/products)
- [Domain-Driven Design](https://www.domainlanguage.com/)

---

## Conclusion

Hexagonal Architecture is a powerful design pattern that brings clarity and resilience to Java applications. Its focus on separati