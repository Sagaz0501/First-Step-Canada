FirstStep_CA
This project was generated using Angular CLI version 20.3.3.

Project Overview
FirstStep_CA is a web application designed to support new immigrants in Canada by simplifying essential settlement processes and government-related information.

The platform focuses on helping users understand real Canadian systems such as:

Social Insurance Number (SIN)

G1 Driver's License (Ontario)

Basic tax processes (CRA)

The application prioritizes clarity, accessibility, and structured guidance, transforming complex information into understandable step-by-step flows.

🎯 Hackathon Metrics Alignment
This project fulfills hackathon objectives as follows:

✅ Canada-Specific Systems
Service Canada (SIN)

Ontario Driver Licensing (G1)

Canada Revenue Agency (CRA)

✅ Social & Systemic Accessibility
Supports immigrants navigating government systems

Reduces institutional barriers

✅ Cognitive Accessibility
Step-by-step structure

Clear language

Visual guidance

Reduced cognitive overload

🧱 Project Structure (Initial Commit)
The first commit contains only the application skeleton.

Current components:

text
src/app/
│
├── components/
│   ├── header/
│   ├── footer/
│   └── home-page/
Components to be added:

text
├── sin/
├── g1/
├── taxes/
Each topic will later include:

Overview component

Step-by-step wizard component

👥 Team Structure
Each team member owns one full topic:

Developer A → SIN

Developer B → G1 Driver's License

Developer C → Taxes

Each developer is responsible for:

Content

UI

Wizard steps

Validation logic

🧩 Technology Stack
Angular

Angular Material

TypeScript

SCSS

UI Standardization
Cards: mat-card

Buttons: mat-button, mat-raised-button

Wizard: Angular Material Stepper (mat-stepper)

All step-by-step flows must use mat-stepper for consistency.

🎨 Official Government of Canada Color Palette
To reflect a real Canadian government visual identity, the project follows colors inspired by the official GCWeb Design System.

Purpose	Color	Hex
Primary (Canada Red)	Red	#C00000
Dark Red (Header / Footer)	Deep Red	#A00000
Secondary (Canada Gray)	Dark Gray	#26374A
Background	White	#FFFFFF
Section Background	Light Gray	#F1F1F1
Text Primary	Black	#000000
Links	Government Blue	#284162
Focus / Highlight	Blue	#2B4380
⚠️ These colors are adapted from the official Government of Canada web standards to ensure a familiar and trustworthy appearance.

🇨🇦 Why This Matters
Using official Canadian-style colors helps:

Build trust

Improve credibility

Make the platform feel institutional and familiar

Strengthen the "Best Canadian Focus" evaluation

🌱 Git Workflow
Clone the repository:
bash
git clone <REPOSITORY_URL>
cd firststep_ca
npm install
Create your branch:
bash
git checkout -b feat/sin
# OR
git checkout -b feat/g1
# OR
git checkout -b feat/taxes
Commit your work:
bash
git add .
git commit -m "feat: add SIN step-by-step wizard"
git push -u origin feat/sin
All changes must be submitted via Pull Request. Direct commits to main are not allowed.

♿ Accessibility Requirements
Accessibility is a core requirement of this project.

Mandatory practices:

Semantic HTML (header, main, section, footer)

Proper heading order

Accessible labels for inputs

Keyboard navigation

Visible focus indicators

High contrast text

No information conveyed by color alone

Angular Material accessibility features must not be removed

🚀 Development Commands
Development server
To start a local development server, run:

bash
ng serve
Once the server is running, open your browser and navigate to http://localhost:4200/. The application will automatically reload whenever you modify any of the source files.

Code scaffolding
Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

bash
ng generate component component-name
For a complete list of available schematics (such as components, directives, or pipes), run:

bash
ng generate --help
Building
To build the project run:

bash
ng build
This will compile your project and store the build artifacts in the dist/ directory. By default, the production build optimizes your application for performance and speed.

Running unit tests
To execute unit tests with the Karma test runner, use the following command:

bash
ng test
Running end-to-end tests
For end-to-end (e2e) testing, run:

bash
ng e2e
Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

🎯 Project Goal
The goal of FirstStep_CA is not to replicate government websites, but to help newcomers understand them — clearly, calmly, and accessibly.



Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
