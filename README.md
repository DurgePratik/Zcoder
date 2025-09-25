 # Zcoder - Online Coding Platform

Zcoder is a full-stack web platform that allows users to solve coding problems online. Built with **React, Next.js, TypeScript, Tailwind CSS**, and **Firebase**, it features secure authentication, a curated problem set, an integrated code editor, and sandboxed code execution.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Features

- **User Authentication & Authorization**
  - Firebase Authentication with Recoil for state management.
  - Route protection and secure Firestore rules.

- **Curated Problem Set**
  - Problems categorized by difficulty: Easy, Medium, Hard.
  - Sample test cases for each problem.
  - Tracks user progress and solved problems.

- **Monaco-Based Code Editor**
  - Integrated in-browser editor using Monaco Editor.
  - Syntax highlighting and multi-language support.
  - LocalStorage persistence to prevent code loss.

- **Sandboxed Code Execution**
  - Custom sandbox environment executes code safely.
  - Validates outputs against test cases and provides real-time verdicts.
  - Prevents infinite loops or unsafe operations.

- **User Dashboard**
  - Displays solved problems and submission history.

- **Responsive UI**
  - Fully responsive interface built with Tailwind CSS.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, Next.js, TypeScript, Tailwind CSS |
| State Management | Recoil |
| Authentication | Firebase Authentication |
| Database | Firebase Firestore |
| Code Editor | Monaco Editor |
| Code Execution | Custom sandboxing technique |
| Deployment | Vercel / Firebase Hosting |

---

## Architecture

