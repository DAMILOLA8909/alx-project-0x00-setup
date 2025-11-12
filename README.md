# alx-project-0x00-setup

# 🏗️ ALX Project 0x00 — Frontend Setup

This project, **alx-project-0x00-setup**, is part of the **ALX Frontend Developer Specialization**.  
It introduces the foundational concepts of **component-based design** in modern web applications using **Next.js**, **TypeScript**, and **Tailwind CSS**.

The goal of this project is to demonstrate how modular, reusable, and dynamic UI components can be built efficiently with clean and maintainable code.

---

## 🚀 Project Overview

The project focuses on breaking down a user interface into smaller, reusable components such as **Cards**, **Pills**, and **Buttons**.  
These components are composed together to create a consistent and flexible UI — following the **"Component-Driven Development"** principle.

### 🔧 Technologies Used

| Technology              | Purpose                                                              |
| ----------------------- | -------------------------------------------------------------------- |
| 🧩 **Next.js**          | Framework for building fast React applications with built-in routing |
| 🔷 **TypeScript**       | Type-safe code for better structure and scalability                  |
| 🎨 **Tailwind CSS**     | Utility-first CSS framework for rapid, responsive design             |
| ⚛️ **React Components** | Modular UI design with reusability and composition in mind           |


---

## 🧩 Components Implemented

### 1. **Pill Component**
A simple reusable component that accepts a `title` prop and displays a pill-shaped label.

**File:** `components/Pill.tsx`  
**Interface:** `interfaces/index.ts`
```tsx
export interface PillProps {
  title: string
}
```

### 2. Card Component

A container component that uses multiple Pill components and displays a property-style card with an image, title, and rating.

**File:** components/Card.tsx
**Usage Example:**
```tsx
<Card />
```

### 3. Button Component

A reusable button that accepts a title and styles prop to customize its size and shape.

**File:** components/Button.tsx
**Interface:**
```tsx
export interface ButtonProps {
  title: string
  styles: string
}
```

**Button Variants Implemented:**

- 🟣 rounded-sm — Small button

- 🔵 rounded-md — Medium button

- 🟢 rounded-lg — Large button

- 🔴 rounded-full — Circular button

---

## 📁 Project Structure

```pgsql
alx-project-0x00-setup/
├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Pill.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── index.tsx
│   └── landing.tsx
├── public/
│   └── assets/
│       ├── house.png
│       └── star.png
├── styles/
│   └── globals.css
├── README.md
└── package.json
```

---

### 🧠 Key Learnings

- How to structure and organize components for maintainability

- How to pass props and define interfaces in TypeScript

- How to reuse components across multiple pages

- How to style dynamically using Tailwind CSS

- How to run and test Next.js applications locally

---

### ⚙️ Setup & Installation
1️⃣ Clone the Repository
```bash
git clone https://github.com/DAMILOLA8909/alx-project-0x00-setup.git
cd alx-project-0x00-setup
```

2️⃣ Install Dependencies
```bash
npm install
```

3️⃣ Run Development Server
```bash
npm run dev -- -p 3000
```

4️⃣ View in Browser

Open your browser and navigate to:
👉 http://localhost:3000/landing


### 🧭 Example Usage

In pages/landing.tsx:
```tsx
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Landing() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Landing Page</h1>
      <Card />
      <div className="flex flex-col gap-4 mt-8">
        <Button title="Small" styles="rounded-sm px-3 py-1 text-sm" />
        <Button title="Medium" styles="rounded-md px-4 py-2 text-base" />
        <Button title="Large" styles="rounded-lg px-5 py-3 text-lg" />
        <Button title="Full" styles="rounded-full px-6 py-3 text-lg" />
      </div>
    </div>
  );
}
```

---

### 🧪 Testing Checklist

| Feature                | Description                                               | Status |
| ---------------------- | --------------------------------------------------------- | ------ |
| ✅ **Pill Component**   | Accepts `title` prop and renders correctly                | ✅      |
| ✅ **Card Component**   | Displays image, text, and pills dynamically               | ✅      |
| ✅ **Button Component** | Accepts `title` and `styles` props                        | ✅      |
| ✅ **Button Variants**  | Includes rounded-sm, rounded-md, rounded-lg, rounded-full | ✅      |
| ✅ **Landing Page**     | Displays all components properly                          | ✅      |

---

### 🧑‍💻 Author

👋 **Ojo Damilola**

💼 Frontend Developer in training @ ALX Africa

🔗 GitHub: DAMILOLA8909

💬 “Building scalable UIs one component at a time.”

---

### 🏁 License

This project is licensed under the **MIT License** — you are free to use, modify, and distribute it with attribution.

### 🌟 Acknowledgments

- 🙏 ALX Africa for the opportunity to learn and grow in full-stack development

- 💡 The open-source community for the amazing tools and documentation

- 👥 Fellow ALX learners for collaboration and inspiration
