export type JournalEntry = {
  id: string;
  date: string;
  title: string;
  category: string;
  content: string;
};

export const journalEntries: JournalEntry[] = [
  {
    id: "day-6-task-1",
    date: "Day 6",
    title: "Task 1: Product with IoT (Real-Life Problem Solving)",
    category: "Product Idea",
    content: `
## Smart Home Integrating System with Live Traffic & Cybersecurity

**Concept:** 
A comprehensive smart home system primarily designed for the safety, convenience, and security of elderly grandparents, integrated into a broader smart city architecture.

**Key Features:**
- **Smart Gadgets & Cameras:** Devices are seamlessly connected to the internet, allowing for easy access and monitoring.
- **Controlled Access:** E.g., remote access granting for delivery personnel.
- **Cyber-Wing Integration:** In the event of a crime or emergency, the system can automatically send an SOS to the appropriate bureaus (police, medical) so the cyber-wing can easily identify the situation.
- **Future Internet Plan:** This is part of a larger plan for smart cities where live traffic and home security are interconnected.
`
  },
  {
    id: "iot-applications",
    date: "13/04/2026",
    title: "Internet of Things (IoT) Applications & Research Domains",
    category: "IoT",
    content: `
## Popular Machine-to-Machine (M2M) Applications
- Smart homes & Intelligent wearable security systems
- Smart assisted living & Healthcare/wellbeing monitoring
- Intelligent Internet of Medical Things (IIoMT) & Internet of Mirrors (IoM)
- Industrial Internet of Things (IIoT) for logistics and smart factories
- Intelligent Transportation Systems (ITS) and automated traffic control
- Space Internet of Things (Space-IoT)
- Space-Air-Ground Integrated Networks (SAGIN)

## Subsets of IoT

1. **NeuroVision Platform (AI Engine Based):** An innovative platform integrating AI with IoT for brain interfacing (with or without surgery).
2. **Adaptive & Proactive Healthcare Services:** Using IoT to build special smart suits/clothes integrated with mobile devices for personal health monitoring.
3. **Space Internet of Things (Space-IoT):** Designed to overcome terrestrial limitations (reliable connectivity, ubiquitous coverage, scalability).
4. **Internet of Mirrors (IoM):** A subset for beauty and healthcare services monitoring user context via visual cues, behavioral patterns, and environment.
5. **Neuro-symbolic Artificial Intelligence of Things (NSAIoT):** An AI integration approach for creating a trustworthy IoT ecosystem.
`
  },
  {
    id: "digital-electronics",
    date: "22/05/2026",
    title: "Digital Electronics, Boolean Algebra & Logic Networks",
    category: "Digital Electronics",
    content: `
## Digital Electronics Foundation
Digital electronics operate using binary values (0 and 1) which are fundamental for IoT and computer processing. 

### Advantages of Digital Systems over Analog:
- Noise immunity
- Power of abstraction
- Modular designs
- Ease of software tools and programmability

### Boolean Algebra Axioms
- **Identity:** A ⋅ 1 = A | A + 0 = A
- **Null:** A ⋅ 0 = 0 | A + 1 = 1
- **Idempotent:** A ⋅ A = A | A + A = A
- **Complement:** A ⋅ A' = 0 | A + A' = 1
- **De Morgan's Theorems:** (A + B)' = A' ⋅ B' | (A ⋅ B)' = A' + B'

## Karnaugh Maps (K-Maps)
Graphical method to simplify Boolean expressions. Groups adjacent 1s (SOP) or 0s (POS) to eliminate variables, reducing hardware costs.

## Combinational Logic Circuits
1. **Half Adder:** Adds two 1-bit numbers. (Sum = A ⊕ B, Carry = A ⋅ B)
2. **Full Adder:** Adds three 1-bit numbers (A, B, Cin).
3. **Multiplexers (MUX):** Data Selector (Many-to-One). Example: 4:1 MUX.
4. **Demultiplexers (DEMUX):** Data Distributor (One-to-Many).
5. **Encoders & Decoders:** Convert between multiple inputs/outputs and coded formats (e.g., 8:3 Encoder, 3:8 Decoder).
`
  },
  {
    id: "basics-of-electronics",
    date: "Day 2",
    title: "Basics of Electronics & Network Theory",
    category: "Electronics",
    content: `
## Electronics Circuit Components
- **Passive Components:** Resistor, Capacitor, Inductor. (Cannot amplify signals). 
  - Resistors resist electrons (Ohms). Color coding: BBROYGBVGW.
  - Inductors store magnetic fields.
  - Capacitors block DC and pass AC, storing electric fields.
- **Active Devices:** Transistors and Diodes (can amplify or process signals).

## Circuits and Networks
- **Ohm's Law:** V = IR (at constant temperature).
- **Series Circuits:** Current is same, voltage is different. Resistance = R1 + R2.
- **Parallel Circuits:** Voltage is same, current is different. Effective Resistance = 1/R1 + 1/R2.
- **Voltage Divider Rule:** V(r1) = V * (r1 / (r1 + r2)). Used for stepping down voltage (e.g., 12V to 5V).

## Kirchhoff's Laws
- **KCL (Kirchhoff's Current Law):** Total current entering a node equals total current leaving.
- **KVL (Kirchhoff's Voltage Law):** Total voltage rise across a closed loop equals voltage drop.
`
  }
];
