---
id: d0056098-ed04-4a31-ad38-1ff039bc93cb
created_date: 2025-09-24T20:02:44
type: note
tags:
  - Physic
  - "#Electronic"
---
Pull-up và pull-down resistors đảm bảo tín hiệu digital đầu vào có trạng thái được xác định (high hoặc low) khi không có tín hiệu nào khác trực tiếp dẫn nó đi, phòng tránh được "floating" voltages. 
A pull-up resistor connects an input to the positive supply (VCC), making it default to a high state, while a pull-down resistor connects it to ground, defaulting it to a low state. These resistors are commonly used with switches, where pressing the switch connects the input to the opposite voltage source, overriding the resistor to change the logic level.  

## What They Are and Why They Are Needed
- **[Floating Input](https://www.google.com/search?newwindow=1&client=firefox-b-d&sca_esv=445b876859e41926&cs=1&sxsrf=AE3TifOYpFbBOdAKua5ezAHTEbE-1sJTUQ%3A1758718509550&q=Floating+Input&sa=X&ved=2ahUKEwiB1_P_uPGPAxUydfUHHf6yOU0QxccNegQIEBAB&mstk=AUtExfBJWwNl_0FpZ2ZoJtHcJVb5rN5TuqHFajNsaznsl7h32sq81lcWeyHCRk5OghtQu8I17G5sqWSTDGVqaV88yofJ1LYhDn43mM2kOMxWD3UYXd6zpMDjPXrmXjUThpqvHjRuASVFUwsBX62kDEiP9gS4y2UZ9gNTZA4ngb33gxojVjeyLvZbeHYVlMqX5OEQfs6frhho65q9cNGeil2edis37fNXNp2EpdJBfSSKI7dh5x0BU09gJzusTcxUNYj48EDe-OnWCQxYgeRzgu3B5BMq&csui=3):**
    Without a pull-up or pull-down resistor, an input pin not connected to anything can have an indeterminate voltage, a state known as "floating". This can lead to unpredictable and unreliable circuit behavior because the input can be affected by stray electromagnetic fields. 
- **Defined State:**
    A pull-up or pull-down resistor provides a weak connection to either the positive voltage (VCC) or ground (GND), respectively. This weak connection ensures that the input pin always defaults to a known logic state (high or low) when no other signal is present. 
This video explains what pull-up/pull-down resistors are and why they are necessary:

## How They Work 
- **Pull-Up Resistor:**
    A pull-up resistor is connected between the input pin and the positive voltage supply (VCC).
    - **Default State:** When a connected switch or other component is open, the pull-up resistor pulls the input pin's voltage to VCC, resulting in a logic HIGH.
    - **Active State:** When the switch is closed and connects the pin to ground, the resistor is effectively bypassed, and the input reads a logic LOW.
- **Pull-Down Resistor:**
    A pull-down resistor is connected between the input pin and ground (GND).
    - **Default State:** When a switch is open, the pull-down resistor pulls the pin's voltage to GND, resulting in a logic LOW.
    - **Active State:** When the switch closes and connects the pin to the positive supply (VCC), the resistor is bypassed, and the input reads a logic HIGH.
## When to Use Which

- **Choose based on desired default state:**
    
    Use a pull-up resistor if you want the input to default to a HIGH state, and a pull-down resistor if you want it to default to a LOW state. 
    

- **Consider your circuit design:**
    
    The choice also depends on the physical arrangement of the components, such as a switch connected between the pin and ground (requiring a pull-up) or between the pin and VCC (requiring a pull-down). 
    

Practical Considerations 

- **Resistor Value:**
    
    Pull-up and pull-down resistors are typically high-value (e.g., 10k ohms) to limit current flow when the switch is closed, preventing a short circuit and damage to components.
    
- **Internal Resistors:**
    
    Many modern microcontrollers, like the Arduino, have built-in, software-configurable pull-up resistors, eliminating the need for an external component in some applications.