# 🎉 LyfEvents — Event Discovery & Social Platform

A full-stack event discovery and social platform built with **React** and **Django**.  
Users can explore events, connect with attendees, and communicate in real time through a modern, interactive interface.

---

## 🚀 Core Features

- 🔍 **Event Discovery**  
  Search and explore events with powerful filtering and intuitive UI.

- 📝 **Event Creation & Management**  
  Create, customize, and manage your own events effortlessly.

- 💬 **Real-Time Messaging**  
  Instant communication powered by **WebSockets** and **Django Channels**.

- 👤 **User Profiles**  
  Personalized profiles with customization options.

- 🤝 **Social Interaction**  
  Connect with people attending the same events via integrated messaging.

- 🔐 **Authentication System**  
  JWT-based authentication with **student email pattern validation**.

- 📧 **Automated Emails**  
  Account verification and notification system.

---

## 🛠 Tech Stack

**Frontend**
- React

**Backend**
- Django
- Django REST Framework

**Real-Time**
- Django Channels
- WebSockets

**Infrastructure**
- Redis (caching & channel layer)
- MySQL (relational database)
- Microsoft Azure (deployment)

**Authentication**
- JWT (stateless authentication)

---

## 🧠 Architecture Highlights

- ⚡ **Scalable Real-Time System**  
  Django Channels + Redis enable efficient WebSocket communication.

- 🏫 **Access Control**  
  Student email validation ensures controlled platform access.

- 🔑 **Stateless Backend**  
  JWT-based authentication decoupled from Django sessions.

- 🚀 **Performance Optimization**  
  Redis caching reduces database load for frequently accessed data.

- ☁️ **Production Deployment**  
  Backend and MySQL hosted on **Azure** for reliability and scalability.

- 🗄 **Data Modeling**  
  Structured relational data using Django ORM and MySQL.

---

## 📌 Summary

LyfEvents combines real-time communication, scalable backend architecture, and a modern frontend to deliver a seamless social event experience.