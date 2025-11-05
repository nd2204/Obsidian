---
id: 3dd7acbe-24b9-4496-8aed-bc2b3bbe2f8e
created_date: 2025-09-30T20:20:21
type: literature
tags:
  - Uncategorized
links:
---
From ChatGPT study mode:

Let me walk you through **priority inversion** in a story form:

---

### 🚦 Imagine three tasks:

- **High priority (HP)** → needs UART to send urgent data.
    
- **Low priority (LP)** → also uses UART.
    
- **Medium priority (MP)** → doesn’t use UART at all.
    

---

### Case 1: Using a **binary semaphore**

1. LP task takes the semaphore to use UART.
    
2. HP task wakes up, tries to take semaphore → but it’s blocked.
    
3. Before LP can finish, MP task wakes up (priority > LP) → runs instead.
    
4. Result: HP is waiting, but MP (who doesn’t even care about UART) hogs the CPU.  
    → This is **priority inversion**: the “wrong” task runs because LP is stuck holding the resource.
    

---

### Case 2: Using a **mutex**

1. LP task takes the mutex.
    
2. HP task wakes up and tries to take it → blocked.
    
3. FreeRTOS says: “Whoa, a high-priority task is waiting!”  
    → It temporarily **boosts LP’s priority** to HP’s level until LP releases the mutex.
    
4. LP finishes quickly, gives mutex, HP gets it, everything is fair.
    

That automatic priority boost is called **priority inheritance**, and it’s what makes mutexes safe for protecting shared resources.

---

👉 Quick check:  
If you were just signaling between a sensor ISR and a task (no shared resource), would you pick a **semaphore** or a **mutex**?