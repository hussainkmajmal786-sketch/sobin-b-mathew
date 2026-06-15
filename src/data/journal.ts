export type JournalEntry = {
  id: string;
  date: string;
  title: string;
  category: string;
  content: string;
};

export const journalEntries: JournalEntry[] = [
  {
    id: "day-1",
    date: "Day 1",
    title: "Resistors, Ohm's Law, KCL & KVL",
    category: "Network Theory",
    content: `
**Instructor:** Dr. Anand — HOD ECE, IIIT Kottayam

Course overview covering Network Theory, Circuits & Networks, Basic Electronics, and Rectification with real-world charger examples.

## Resistors & Circuits
- Resistors are two-terminal devices measured in Ohms, with no polarity.
- **Series circuits:** current is equal across components; total resistance R_total = R₁ + R₂.
- **Parallel circuits:** voltage is equal; 1/R_total = 1/R₁ + 1/R₂.
- **Ohm's Law:** V = R × I (at constant temperature).
- Ammeters connect in series; voltmeters connect in parallel.

## Kirchhoff's Laws
- **KCL:** current entering a node equals current leaving.
- **KVL:** voltage rise equals voltage drop across a closed loop.
- **Voltage divider:** V(R₁) = R₁ / (R₁ + R₂) × V_total.

Afternoon sessions covered nodal analysis, super mesh analysis, the superposition principle, and network theorems.
`
  },
  {
    id: "day-2",
    date: "Day 2",
    title: "Diodes & Rectifiers",
    category: "Diodes & Rectifiers",
    content: `
**Instructor:** Dr. Anand — HOD ECE, IIIT Kottayam

Examined the V-I characteristics of diodes, demonstrating forward-bias conduction and reverse-bias blocking. Explored diode applications as switches in circuits.

Studied half-wave and full-wave rectifiers converting AC to pulsating DC via bridge rectifier configurations. Additional applications included clamper circuits and switch regulators — critical for power supply design and signal conditioning.
`
  },
  {
    id: "day-3",
    date: "Day 3",
    title: "Computer Networks & VS Code Setup",
    category: "Networks & Setup",
    content: `
**Sessions 1 & 2 — IIIT Kottayam**

- **Session 1:** Installed VS Code in a virtual machine for the coding setup.
- **Session 2:** Introduced computer networks fundamentals covering IEEE 802.3 (Ethernet) and IEEE 802.11 (Wi-Fi) standards.

## Five Components of Data Communications
1. **Sender** — device transmitting structured messages.
2. **Medium** — physical transmission path.
3. **Message** — information being communicated.
4. **Receiver** — device decoding messages.
5. **Protocol** — rules governing sender-receiver communication.
`
  },
  {
    id: "day-4",
    date: "13/04/2026",
    title: "IoT Fundamentals & M2M Applications",
    category: "IoT",
    content: `
**Instructor:** Shajulin Sir

## Popular M2M Applications
- Healthcare (health/wellness monitoring)
- Smart homes (intelligent wearable security)
- IIoT (logistics/cargo)
- ITS (automated traffic control)
- Smart retail (asset tracking/displays)
- Smart payments (inventory management)

## IoT Subsets
IIoT (industrial), CIoT (consumer), Space-IoT (coverage), IoM (beauty/healthcare mirrors), IIoMT (medical things), NSAIoT (neuro-symbolic AI), and ITS (traffic/pedestrian prediction).

The primary challenge involves achieving trustworthy IoT ecosystems through AI integration. Major domains include Smart Cities, Smart Agriculture, and Smart Assisted Living — including health-monitoring clothing integrated with mobile devices.
`
  },
  {
    id: "day-5",
    date: "Day 5",
    title: "IoT Product Ideation — Smart Home & Cybersecurity",
    category: "Project Idea",
    content: `
A design assignment to create real-life IoT products solving genuine problems.

## Smart Home Integrating System with Cybersecurity
Targeting elderly grandparents, integrating automation with live traffic monitoring and cybersecurity layers.

**Key Features:**
- All cameras, gadgets, and smart devices connect to the internet for seamless access.
- Enables delivery personnel home access.
- A cybersecurity wing identifies crime threats instantly.
- Emergency SOS automatically alerts the appropriate bureaus.

Conceptualized as future-internet infrastructure for connected smart cities.
`
  },
  {
    id: "day-6",
    date: "22/05/2026",
    title: "History of Electronics & Components",
    category: "Electronics",
    content: `
**Instructor:** Dr. Vineeth (Wireless Communication)

## Evolution of Electronics
- Vacuum tube (1904, John Fleming)
- Vacuum triode (1906, Lee De Forest)
- Transistor (1947, Bardeen/Brattain/Shockley at Bell Labs) — beginning the semiconductor era.
- Integrated Circuit demonstrated 1957 (Jack Kilby), progressing SSI → MSI → VLSI → ULSI (Moore's Law).

## Components
- **Passive (cannot amplify):** Resistors resist electron flow (Ω), Capacitors store electric fields blocking DC/passing AC (Farad), Inductors store magnetic fields blocking AC/passing DC (Henry).
- **Active (amplify/process):** transistors and diodes.

**Lab equipment:** breadboards, PCBs, multimeters, function generators, oscilloscopes, soldering kits.

Electronics applications span 21st-century industry, communication, entertainment, medical, and defence sectors, with digital electronics proving essential for IoT binary operations.
`
  },
  {
    id: "day-7",
    date: "22/05/2026",
    title: "Digital Electronics — Logic Gates & Boolean Algebra",
    category: "Digital Electronics",
    content: `
**Instructor:** Dr. Vineeth

Analog signals are sinusoidal with infinite possible values (difficult to process); digital signals use two discrete values (0, 1) enabling easier processing, noise immunity, and modular designs.

## Logic Gates
- **AND** (series switches, output 1 only if all inputs are 1)
- **OR** (parallel switches, output 1 if any input is 1)
- **NOT** (inverter), plus NAND, NOR, XOR, XNOR.

Number system conversions covered Decimal, Binary, Hexadecimal, and Octal, including 1's and 2's complement for signed numbers.

## Boolean Algebra
- **Identity:** A·1=A, A+0=A
- **Null:** A·0=0, A+1=1
- **Idempotent:** A·A=A, A+A=A
- **Complement:** A·A'=0, A+A'=1
- **De Morgan's:** (A+B)'=A'·B', (A·B)'=A'+B'
- Plus Commutative, Associative, Distributive, Absorption.

## Karnaugh Maps
Use Gray code ordering to simplify Boolean expressions by grouping adjacent 1s (SOP) or 0s (POS), in groups of 1, 2, 4, or 8 rectangular cells. Don't Care (X) values are treated flexibly to form larger groups, reducing gate count.
`
  },
  {
    id: "day-8",
    date: "Day 8",
    title: "Combinational Circuits — Adders, MUX, Decoders",
    category: "Digital Electronics",
    content: `
**Instructor:** Dr. Vineeth (continued)

- **Network Analysis** determines circuit current/voltage/power (KCL, KVL, Mesh, Nodal, Superposition, Thevenin, Norton).
- **Network Synthesis** designs circuits achieving desired functions using AND, OR, NOT gates in Sum of Products form.

## Adders & Subtractors
- **Half Adder:** Sum = A⊕B, Carry = A·B
- **Full Adder:** Sum = A⊕B⊕C_in, Carry = AB + C_in(A⊕B) — two half adders + one OR gate.
- **Half Subtractor:** Difference = A⊕B, Borrow = A'·B
- **Full Subtractor:** Difference = A⊕B⊕B_in, Borrow = A'B + A'B_in + BB_in

## Data Routing
- **MUX** selects one of many inputs (4:1: Y = S₁'S₀'I₀ + S₁'S₀I₁ + S₁S₀'I₂ + S₁S₀I₃).
- **DEMUX** distributes one input to many outputs.
- **Encoders** convert active inputs to binary (8:3); **Decoders** activate single outputs from binary input (3:8), used in memory addressing and 7-segment displays.
`
  },
  {
    id: "day-9",
    date: "Day 9",
    title: "Sequential Logic — Flip-Flops & State Machines",
    category: "Digital Electronics",
    content: `
**Instructor:** Dr. Vineeth (continued)

Combinational circuit output depends on present inputs only; sequential circuit output depends on present inputs plus previous states (memory).

- **Synchronous:** clock-driven, state changes at clock pulses (easier design — counters/registers/clocks).
- **Asynchronous:** clockless, immediate state changes (faster but complex — ripple counters).

## Flip-Flop Types
- **SR** (Set/Reset, S=R=1 invalid)
- **JK** (improved SR, J=K=1 toggles)
- **D** (stores input directly)
- **T** (toggles on T=1)

## Sequential Design Steps
Understand the problem (inputs/outputs/states) → draw state diagram → create state table → state assignment → choose flip-flop type → derive input equations via K-Maps → draw logic circuit.

**State assignment methods:** Binary, Gray Code (one bit change), One-Hot (one flip-flop per state). State reduction combines equivalent states to minimize hardware.
`
  },
  {
    id: "day-10",
    date: "Day 10",
    title: "Embedded Systems & Microcontrollers",
    category: "Embedded Systems",
    content: `
**Instructor:** Dr. Della Thomas — IIIT Kottayam

Embedded systems are dedicated computers built into larger devices performing a single specific job (washing machines, microwaves, cars, IoT devices), optimized for fixed tasks with tight constraints on power, cost, and size.

**Key traits:** real-time response, low power, reliability, resource constraints (limited memory/CPU), often bare-metal (no OS).

- **Microprocessors** use external memory/I/O (higher cost, general-purpose).
- **Microcontrollers** pack everything on-chip (lower cost, dedicated control). E.g., Intel Core vs. ATmega328P/PIC/ESP32.

## Microcontroller Components
CPU (fetch/decode/execute), Memory (Flash for programs, SRAM for data, EEPROM non-volatile), I/O Ports, Timers/ADC, Communication Units.

## ATmega328P
8-bit AVR, 16 MHz, 32 KB Flash, 2 KB SRAM, 1 KB EEPROM, 14 digital I/O (6 PWM), 6 analog inputs, UART/SPI/I²C.
`
  },
  {
    id: "day-11",
    date: "Day 11",
    title: "MCU Architecture, GPIO & Communication Protocols",
    category: "Embedded Systems",
    content: `
**Instructor:** Dr. Della Thomas (continued)

## Memory Architecture
- **Von Neumann:** program/data share one memory and bus.
- **Harvard:** separate program/data memory and buses (faster — used by ATmega328P).

## GPIO
Pins configure as inputs (sensors/buttons) or outputs (LEDs/relays), using pull-up/pull-down resistors to maintain defined logic levels for floating inputs. Registers (DDR, PORT, PIN) underlie Arduino's friendly functions.

## Serial Communication
- **UART** (TX/RX for device-to-device / Serial Monitor)
- **SPI** (MOSI/MISO/SCK/SS for fast SD cards/displays)
- **I²C** (SDA/SCL for many sensors on two wires via addressing)

**Interrupts** pause the main loop instantly to handle urgent events, then resume. **Timers/PWM** generate precise delays and PWM for dimming/motor speed. **ADC** transforms 0–5V signals into 0–1023 numbers for the CPU.
`
  },
  {
    id: "day-12",
    date: "Day 12",
    title: "Networking & Cloud Basics — Part 1 · OSI & TCP/IP",
    category: "Networking",
    content: `
**Instructor:** Dr. S. Venkatesh — Phase 02 · Day 1

## OSI Model (7 Layers)
Data moves down the sender stack and back up the receiver stack, each layer adding headers (encapsulation):
Application (HTTP/MQTT) → Presentation (encryption/encoding) → Session → Transport (TCP/UDP) → Network (routing/IP) → Data Link (MAC/framing) → Physical (bits over wire/radio).

## TCP/IP Concepts
- **IP Address:** logical location (IPv4=32-bit, IPv6=128-bit)
- **MAC Address:** physical hardware NIC address
- **Ports:** HTTP=80, HTTPS=443, MQTT=1883
- **DNS:** resolves names into IP addresses

## TCP vs UDP
- **TCP:** connection-oriented, guaranteed ordered delivery, slower — web/email/file transfer.
- **UDP:** connectionless, best-effort, faster — streaming/gaming/DNS.

**Building blocks:** hubs, switches, routers, modems, access points. **Topologies:** star, bus, ring, mesh. **Classifications:** LAN, WAN, MAN.
`
  },
  {
    id: "day-13",
    date: "Day 13",
    title: "Networking & Cloud Basics — Part 2 · IoT Protocols & Cloud",
    category: "Networking",
    content: `
**Instructor:** Dr. S. Venkatesh — Phase 02 · Day 2

## IoT Communication Protocols
- **MQTT:** lightweight publish/subscribe over TCP, low-bandwidth, central broker.
- **HTTP/REST:** request-response over TCP, heavier for constrained devices.
- **CoAP:** REST-like over UDP for tiny devices.
- **WebSocket:** full-duplex single TCP connection for live dashboards.

MQTT devices publish messages to topics (e.g., \`home/temp\`); others subscribe via a central broker, with three QoS levels (0, 1, 2) trading speed for delivery guarantees.

## Cloud
- **Service models:** IaaS (raw compute/storage), PaaS (build/deploy apps), SaaS (ready-to-use apps).
- **Deployment models:** Public (AWS, Azure, GCP), Private (in-house), Hybrid.
- **IoT platforms:** ThingSpeak, Blynk, Firebase.

Discussions covered latency, edge vs. cloud processing, and IoT hybrid approaches.
`
  },
  {
    id: "day-14",
    date: "Day 14",
    title: "Cisco Packet Tracer — Network Simulation Lab",
    category: "Networking Lab",
    content: `
**Hands-on Networking Lab — Phase 02**

Cisco Packet Tracer is free network simulation software enabling drag-and-drop router/switch/PC/server placement with real-time packet visualization — ideal for practice without physical hardware.

## Hands-on Builds
- **Simple LAN:** connect 2+ PCs through switches, assign IPs, verify with ping.
- **Router Setup:** link two networks through routers with interface/gateway config.
- **Subnetting:** split networks into subnets, apply subnet masks, test cross-subnet routing.
- **Simulation Mode:** step through packet flow layer-by-layer, observing ARP, ICMP, DNS.

**Key commands:** \`ping <ip>\`, \`ipconfig\`, \`tracert <ip>\`.
`
  },
  {
    id: "day-15",
    date: "Day 15",
    title: "Introduction to AWS & Docker",
    category: "Cloud & Containers",
    content: `
**Cloud & Containers — Phase 02**

## AWS
The world's largest cloud platform, renting compute, storage, and databases on-demand. Core IoT-relevant services:
- **EC2** (virtual cloud servers)
- **S3** (object storage)
- **IoT Core** (MQTT device connection/management)
- **Lambda** (serverless code execution)
- **DynamoDB** (fast NoSQL device data)

Benefits: scalability (millions of devices), pay-as-you-go, global reach, built-in security, remote access.

## Docker
Packages applications with all dependencies into lightweight portable containers running identically everywhere — solving "works-on-my-machine" problems.

- **Containers** share the host OS kernel (lightweight, seconds startup) vs. **VMs** needing a full guest OS (heavy, slow).
- **Workflow:** Dockerfile (recipe) → Image (snapshot) → Container (running instance).
- **Commands:** \`docker build\`, \`docker run\`, \`docker ps\`, \`docker pull\`.
`
  },
  {
    id: "day-16",
    date: "03/06/2026",
    title: "Arduino Programming — Setup, Pins & First Sketches",
    category: "Arduino",
    content: `
**Phase 03**

Arduino Uno features the ATmega328P with 14 digital I/O pins (6 PWM), 6 analog inputs, USB programming, and a 16 MHz clock. IDE installation requires board and COM port selection.

## Sketch Structure
- \`setup()\` runs once at power-on (pin modes, Serial.begin).
- \`loop()\` runs forever, top-to-bottom.

## Core Digital I/O
- \`pinMode(pin, MODE)\` — set INPUT/OUTPUT
- \`digitalWrite(pin, HIGH/LOW)\` — turn output on/off
- \`digitalRead(pin)\` — read HIGH/LOW
- \`delay(ms)\` — pause

**First Blink:** \`pinMode(13, OUTPUT); digitalWrite(13, HIGH); delay(1000); digitalWrite(13, LOW); delay(1000);\`

Serial Monitor with \`Serial.begin(9600)\` and \`Serial.println()\` printed values for debugging.
`
  },
  {
    id: "day-17",
    date: "04/06/2026 – 06/06/2026",
    title: "Sensors, Analog Input & Actuators",
    category: "Arduino",
    content: `
**Phase 03**

- \`analogRead(A0)\` returns 0–1023 (10-bit ADC) mapping 0–5V.
- \`analogWrite(pin, 0–255)\` produces PWM "fake analog" for dimming/speed.
- Voltage conversion: V = reading × (5.0 / 1023).

## Sensors
- **TMP36/LM35** analog temperature sensors (voltage-scaled output)
- **HC-SR04** ultrasonic distance sensor (echo time-of-flight)
- **DHT11** digital temperature/humidity sensor (single pin)
- **LDR/IR** light-dependent and infrared sensors

## Actuators
LEDs, buzzers, DC motors (via transistor/motor driver), servo motors using \`Servo.h\` with \`myServo.write(angle)\`.

The \`map(value, fromLow, fromHigh, toLow, toHigh)\` function proved handiest — e.g., \`map(analogRead(A0), 0, 1023, 0, 180)\` drives a servo from a potentiometer. Demos: TMP36 temperature to Serial, LED dimming via potentiometer PWM, servo sweeping 0°–180°, ultrasonic buzzer triggering under 10 cm.
`
  },
  {
    id: "day-18",
    date: "09/06/2026 – 10/06/2026",
    title: "Mini-Projects & GitHub Submission Day",
    category: "Projects",
    content: `
**Phase 03 — Exercise X · GitHub Submission**

Combined digital I/O, analog sensors, actuators, NeoPixels, and a 16×2 LCD (\`LiquidCrystal.h\`) into a full set of Arduino builds, each pushed to its own GitHub repository.

All the hands-on code lives on my GitHub: [github.com/sobinbmathew94-beep](https://github.com/sobinbmathew94-beep)

## Integrated Project
- [arduino-smart-temperature-controlled-fan-system](https://github.com/sobinbmathew94-beep/arduino-smart-temperature-controlled-fan-system) — TMP36 → auto DC fan + LCD

## Sensors & Inputs
- [ultra-sonic-sensor](https://github.com/sobinbmathew94-beep/ultra-sonic-sensor) — distance via echo time-of-flight
- [PIR-motion-sensor](https://github.com/sobinbmathew94-beep/PIR-motion-sensor) — motion detection
- [IR-sensor](https://github.com/sobinbmathew94-beep/IR-sensor) — object/line detection
- [MQ2-gas-sensor](https://github.com/sobinbmathew94-beep/MQ2-gas-sensor) — gas/smoke sensing
- [soil-moisture-sensor](https://github.com/sobinbmathew94-beep/soil-moisture-sensor) — soil moisture levels
- [light-sensor](https://github.com/sobinbmathew94-beep/light-sensor) — ambient light (LDR)
- [push-button-sensor](https://github.com/sobinbmathew94-beep/push-button-sensor) — digital button input
- [potentiometer-sensor](https://github.com/sobinbmathew94-beep/potentiometer-sensor) — analog input

## Actuators & Outputs
- [servo-motor](https://github.com/sobinbmathew94-beep/servo-motor) — angle positioning
- [DC-motor](https://github.com/sobinbmathew94-beep/DC-motor) — basic DC motor control
- [DC-gear-motor](https://github.com/sobinbmathew94-beep/DC-gear-motor) — geared motor drive
- [relay](https://github.com/sobinbmathew94-beep/relay) — switching loads
- [buzzer](https://github.com/sobinbmathew94-beep/buzzer) — tone generation

## LEDs & Lighting
- [neopixel-strip8](https://github.com/sobinbmathew94-beep/neopixel-strip8) — 8-LED NeoPixel strip
- [neopixel-strip4](https://github.com/sobinbmathew94-beep/neopixel-strip4) — 4-LED NeoPixel strip
- [neopixel-LED](https://github.com/sobinbmathew94-beep/neopixel-LED) — single addressable NeoPixel
- [RGB-led](https://github.com/sobinbmathew94-beep/RGB-led) — RGB color mixing
- [LED](https://github.com/sobinbmathew94-beep/LED) — basic LED control

## Web
- [portfolio](https://github.com/sobinbmathew94-beep/portfolio) — personal portfolio site

## Git Workflow
\`git init\` → \`git add .\` → \`git commit\` → \`git branch -M main\` → \`git remote add origin\` → \`git push\`

Twenty repositories published, spanning sensors, actuators, lighting, an integrated fan system, and a web build — all under version control on GitHub.
`
  }
];
