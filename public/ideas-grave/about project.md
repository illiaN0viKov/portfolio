# 💡 Ideas Grave — Collaborative Idea Management App

A fun and interactive idea tracking platform built with **Next.js (App Router)** where ideas live inside lobbies and evolve through a full lifecycle — each stage having its own distinct visual identity.

---

## 🚀 Core Features

- 🏠 **Lobby-Based System**  
  Create lobbies, join via invite codes, or invite others to collaborate.

- 🧠 **Idea Lifecycle Views**  
  Each idea has a unique visual state (active, archived, buried, etc.), making progression feel dynamic and engaging.

- 🗳️ **Voting System**  
  Members can propose changes and vote on idea direction inside each lobby.

- 💬 **Propositions System**  
  Users can submit suggestions and improvements for any idea.

- 📝 **Notes Section**  
  Idea owners can document thoughts, plans, and internal notes.

- 🎨 **Expressive UI Design**  
  Each idea stage has its own visual identity for a more playful experience.

---

## 🛠 Tech Stack

**Frontend**
- Next.js (App Router)
- Tailwind CSS

**Database**
- MongoDB
- Mongoose

**Authentication**
- Better Auth
- Google OAuth
- Email & Password login

**State Management**
- React Hooks (heavy client-side state flows)

---

## 🧠 Architecture Highlights

- 🏗️ **Lobby Isolation System**  
  Every lobby acts as a separate workspace for ideas and members.

- 🔐 **Role-Based Permissions**  
  Distinct roles for lobby owners, idea owners, and members.

- 🗳️ **Voting Sessions**  
  Each idea has its own voting cycle with real-time participation tracking.

- ⚡ **Server Actions Architecture**  
  All mutations (ideas, votes, propositions, lobby actions) handled via server actions.

- 🎭 **UI-State Mapping**  
  Idea status directly controls UI styling and layout for immersive UX.

---

## 📌 Summary

Ideas Grave turns idea management into a collaborative, visual, and interactive experience where concepts evolve through discussion, voting, and structured lifecycle stages.