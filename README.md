# **Peppermint Conversational Analytics – Stream Dashboard**

This project implements the **Stream Dashboard** for the Peppermint conversational analytics interface, focusing on usability, scalability, and responsiveness across devices.

---

## **🚀 Live Demo**

**Vercel Deployment:**  
[https://ask-stream.vercel.app/dashboard/stream](https://ask-stream.vercel.app/dashboard/stream)

---

## **🧠 Approach & Architecture**

The solution was built using **Next.js, TypeScript, and Tailwind CSS**, with a **component-driven architecture** to ensure reusability and maintainability.

**Key Goals:**

- Clean separation of concerns  
- Scalable UI for large conversation histories  
- Mobile-first responsiveness  
- Readiness for backend/API integration  

---

## **✨ Features Implemented**

1. **Conversational History Grouping**  
   - Conversations are grouped by: **Today**, **Last 7 Days**, and **Monthly buckets**  
   - Collapsible sections improve readability and reduce visual noise  

2. **Dropdown Filtering**  
   - A filter mechanism is implemented for users with 10+ conversations  
   - Prevents excessive vertical growth and improves discoverability  
   - Supports: **Today**, **Last 7 Days**, and **Monthly History**  

3. **Bookmarking System**  
   - Users can bookmark important conversations  
   - Bookmarks persist in **localStorage** to simulate real-world persistence  
   - Duplicate bookmarks are prevented  
   - Easily replaceable with an API-based persistence layer  

4. **Mobile Responsiveness**  
   - Mobile-first design approach ensures layout adapts across:  
     - Mobile  
     - Tablet  
     - Desktop  
   - Scrollable containers maintain usability on smaller screens  

5. **API-Ready Architecture**  
   - Placeholder functions included for sending requests to a backend  
   - Allows seamless integration if/when endpoints become available  
   - No major refactor needed to connect live APIs  

---

## **📌 Assumptions Made**

- Users may have many conversations; filtering and collapsible sections are necessary  
- Mobile users are a primary audience; responsiveness is critical  
- Bookmarking should persist across sessions, even without backend support  
- Backend APIs may not yet be available; frontend logic remains flexible  
- UI interactions should remain fast and intuitive without overloading the user  

---

## **🛠️ Tech Stack**

- **Next.js**  
- **TypeScript**  
- **React**  
- **Tailwind CSS**  
- **Lucide Icons**  
- **LocalStorage** (temporary persistence)  

---

## **⚙️ Setup Instructions**

**1. Clone the repository**  

```bash
git clone https://github.com/Ajinormotor/ask-stream.git
