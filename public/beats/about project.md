# 🎧 BeatStore — Full-Stack Beat Marketplace

A production-ready beat marketplace built with **Next.js 15 (App Router)**, featuring a custom MP3 player, Stripe-powered checkout, and a FastAPI backend for automated licensing and delivery.

---

## 🚀 Core Features

- 🎵 **Custom MP3 Player**  
  Fully custom audio player with waveform visualization, seek control, volume control, and queue system.

- 🔎 **Advanced Beat Search**  
  Filter beats by genre, BPM, mood, and price.

- 🛒 **Cart & Checkout System**  
  Multi-item cart with Stripe Checkout supporting:
  - Credit/Debit cards
  - Apple Pay
  - Google Pay

- 📄 **Automated License Generation**  
  PDF license generated automatically after purchase using FastAPI + ReportLab.

- 📧 **Transactional Emails**  
  Purchase confirmation and license delivery via SMTP.

- 🔒 **Secure Beat Delivery**  
  Signed URLs from Supabase ensure beats are only accessible after payment.

- 📱 **Mobile-First UI**  
  Fully responsive, modern, and performance-focused interface.

---

## 🛠 Tech Stack

**Frontend**
- Next.js 15 (App Router)
- Tailwind CSS

**Database**
- PostgreSQL
- Prisma ORM

**Payments**
- Stripe (Checkout + Webhooks)

**Storage**
- Supabase Storage (Signed URLs)

**Backend Microservice**
- FastAPI (Python)
- ReportLab (PDF generation)
- SMTP (email service)

---

## 🧠 Architecture Highlights

- 💳 **Stripe Webhook Verification**  
  Payment is confirmed via webhook before granting download access.

- 🔐 **Secure File Delivery**  
  Supabase signed URLs with short expiration prevent unauthorized access.

- ⚙️ **Decoupled Microservice Architecture**  
  FastAPI handles email + PDF generation independently from Next.js.

- 🗄️ **Prisma Data Modeling**
  Models include:
  - Users
  - Beats
  - Orders
  - Licenses

- 🚀 **Server Actions + Route Handlers**
  Next.js manages:
  - Stripe session creation
  - Webhook processing
  - Signed URL generation

---

## 📌 Summary

BeatStore is a full-stack production-grade music marketplace with secure digital delivery, automated licensing, and a scalable microservice backend architecture.