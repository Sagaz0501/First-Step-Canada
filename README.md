# 🇨🇦 FirstStep_CA

## 📘 Project Overview

**FirstStep_CA** is a web application designed to support **new immigrants in Canada** by simplifying essential government-related processes and settlement information.

Many newcomers struggle with complex terminology, fragmented documentation, and unclear instructions.  
This project focuses on **clarity, structure, and accessibility**, helping users understand what they need and what to do next.

### Supported Topics
- Social Insurance Number (SIN)
- G1 Driver’s License (Ontario)
- Basic Taxes Information (CRA)

---

## 🎯 Hackathon Goals & Metrics

This project aligns with the hackathon objectives as follows:

### ✅ Canada-Specific Systems
- Service Canada (SIN)
- Ontario Driver Licensing (G1)
- Canada Revenue Agency (CRA)

### ✅ Social & Systemic Accessibility
- Helps immigrants navigate Canadian institutions
- Reduces informational and systemic barriers

### ✅ Cognitive Accessibility
- Step-by-step guidance
- Simple and clear language
- Reduced cognitive overload
- Visual progress indicators

---

## 🧱 Project Structure

Initial project structure:

```text
src/app/
│
├── components/
│   ├── header/
│   ├── footer/
│   └── home-page/
│
├── sin/
├── g1/
└── taxes/
```

Each topic will include:
- Overview component
- Step-by-step wizard component

---

## 👥 Team Workflow

Each developer owns **one complete topic**:

- Developer A → SIN
- Developer B → G1 Driver’s License
- Developer C → Taxes

Each developer is responsible for:
- UI implementation
- Content creation
- Wizard logic
- Validation

---

## ⚙️ Technology Stack

- Angular
- Angular Material
- TypeScript
- SCSS

### UI Standards
- Cards: `mat-card`
- Buttons: `mat-button`, `mat-raised-button`
- Wizard: **Angular Material Stepper (`mat-stepper`)**

All step-by-step flows must use `mat-stepper` for consistency.

---

## 🎨 Government of Canada Color Palette

| Usage | Color | Hex |
|------|------|------|
| Primary (Canada Red) | Red | `#C00000` |
| Header / Footer | Dark Red | `#A00000` |
| Secondary | Dark Blue-Gray | `#26374A` |
| Background | White | `#FFFFFF` |
| Section Background | Light Gray | `#F1F1F1` |
| Text | Black | `#000000` |
| Links | Government Blue | `#284162` |
| Focus / Highlight | Blue | `#2B4380` |

---

## 🌱 Git Workflow

### Clone the repository

```bash
git clone https://github.com/Sagaz0501/First-Step-Canada.git
cd FirstStep_CA
npm install
```

### Create your feature branch

```bash
git checkout -b feat/sin
git checkout -b feat/g1
git checkout -b feat/taxes
```

### Commit and push your changes

```bash
git add .
git commit -m "feat: add SIN step-by-step wizard"
git push -u origin feat/sin
```

All changes must be submitted via **Pull Requests**.  
Direct commits to `main` are not allowed.

---

## ♿ Accessibility Requirements

Accessibility is mandatory.

### Required practices
- Semantic HTML (`header`, `main`, `section`, `footer`)
- Proper heading hierarchy (`h1 → h2 → h3`)
- Keyboard navigation
- Accessible labels for all inputs
- Visible focus indicators
- Sufficient contrast
- No information conveyed by color alone

Angular Material ARIA attributes must not be removed.

---

## 🚀 Project Goal

The goal of **FirstStep_CA** is not to replace government websites, but to help newcomers **understand Canadian processes clearly and confidently**.

---

**Clarity over complexity. Accessibility over features.**
