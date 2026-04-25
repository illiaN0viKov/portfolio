# 🧑‍💻 Job Hunter — Job Application Tracker

A clean and interactive job application tracker built with **Next.js (App Router)**, focused on a smooth drag-and-drop experience for managing job applications across fully customizable columns.

---

## 🚀 Core Features

- 📌 **Job Tracking System**  
  Organize all job applications by status in a kanban-style board.

- 🖱️ **Drag & Drop Interface**  
  Move job cards between columns to instantly update application status.

- 🧩 **Customizable Columns**  
  Add, reorder, and manage columns to match your personal workflow.

- 🗂️ **Flexible Job Cards**  
  Each card contains relevant application details and can be edited or moved.

- 🎨 **Clean UI/UX**  
  Minimal and focused design optimized for productivity and clarity.

---

## 🛠 Tech Stack

**Frontend**
- Next.js (App Router)
- Tailwind CSS

**Drag & Drop**
- dnd-kit

**Database**
- MongoDB
- Mongoose

**Authentication**
- Better Auth

---

## 🧠 Architecture Highlights

- ⚡ **Persistent Board State**  
  Drag-and-drop updates are synced to the database on drop.

- 👤 **User-Specific Boards**  
  Column order and card order are stored per user for full personalization.

- 🚀 **Optimistic UI Updates**  
  Instant UI feedback during drag operations for smooth UX.

- 🔄 **Server Actions**  
  All mutations (cards, columns, status updates) handled via server actions.

---

## 📌 Summary

Job Hunter is designed to simplify job application tracking through a fast, customizable, and intuitive kanban system with real-time state updates and persistent user-specific layouts.