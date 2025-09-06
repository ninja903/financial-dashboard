 💰 Advanced MERN AI Financial SaaS Platform

A comprehensive full-stack financial management SaaS platform built with the **MERN stack**, featuring **AI-powered insights**, real-time analytics, and advanced financial tools to empower users in managing their finances effectively.

---

## 🌟 Key Features

### 🔐 Security & Authentication
- Secure authentication with **Email + Password** using **JWT**
- Protected user sessions with token management
- Industry-standard security practices

### 📊 Transaction Management
- Full **CRUD** operations for transactions
- **AI Receipt Scanning** – Upload and scan receipts with AI
- **CSV Import** – Effortlessly import existing data
- **Bulk Actions** – Efficient management

### 📈 Advanced Analytics
- Real-time dashboard with **MongoDB Aggregation**
- Interactive **pie charts** for expenses breakdown
- Trend analysis with **line charts**
- Custom date range filtering (Last 7, 30, 90 days, or custom)

### 🤖 AI-Powered Features
- Smart categorization of transactions
- AI-driven spending insights & recommendations
- Predictive analytics (cash flow forecasting)
- Automated monthly reports emailed to users

### 🚀 Additional Features
- ♻️ Recurring transactions with **Cron Jobs**
- 🔍 Powerful search & filtering
- 📄 Pagination for large data sets
- ➕ Smart duplication of transactions
- 🧑‍💼 Profile photo upload with **Cloudinary**

---

## 🛠️ Tech Stack

| Frontend          | Backend            | AI & Analytics    | DevOps & Cloud      |
|-------------------|------------------- |-------------------|---------------------|
| React, Redux      | Node.js, Express   | OpenAI, TensorFlow| Docker, AWS, Vercel |
|TypeScript,Tailwind| MongoDB, JWT       | Chart.js          | GitHub Actions      |
  
---

## 📋 Prerequisites
Make sure you have:
- Node.js v16+
- npm or yarn
- MongoDB (local or Atlas)
- Git

---

## ⚡ Quick Start

### 1️⃣ Clone the Repo
```bash
git clone https://github.com/ninja903/financial-dashboard.git
cd financial-dashboard
2️⃣ Install Dependencies
Backend:

bash
Copy code
cd backend
npm install
Frontend:

bash
Copy code
cd frontend
npm install
3️⃣ Configure Environment Variables
Backend .env
env
Copy code
MONGODB_URI=mongodb://localhost:27017/financial-saas
JWT_SECRET=your-super-secret-jwt-key
OPENAI_API_KEY=your-openai-api-key
PORT=9000
NODE_ENV=development
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
Frontend .env
env
Copy code
REACT_APP_API_URL=http://localhost:9000/api
REACT_APP_OPENAI_API_KEY=your-openai-api-key
REACT_APP_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
4️⃣ Database Setup
Local MongoDB:

bash
Copy code
mongod
Atlas: Replace MONGODB_URI in .env with Atlas connection string.

5️⃣ Run the App
Backend:

bash
Copy code
cd backend
npm run dev
Frontend:

bash
Copy code
cd frontend
npm start
Backend runs on http://localhost:9000

Frontend runs on http://localhost:5173

📁 Project Structure
pgsql
Copy code
financial-dashboard/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── config/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
├── docker-compose.yml
├── Dockerfile
└── README.md
🔐 API Endpoints
Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login & get JWT token
GET	/api/auth/me	Get current user
POST	/api/auth/logout	Logout

Transactions
Method	Endpoint	Description
GET	/api/transactions	Get all transactions
POST	/api/transactions	Create a new transaction
PUT	/api/transactions/:id	Update transaction
DELETE	/api/transactions/:id	Delete transaction
GET	/api/transactions/analytics	Get analytics data

🧪 Testing
Backend:

bash
Copy code
cd backend
npm test
Frontend:

bash
Copy code
cd frontend
npm test
🐳 Docker Deployment
bash
Copy code
docker-compose up --build -d
docker-compose down
🌐 Deployment
Frontend: Vercel

Backend: Railway / Heroku / AWS

🤝 Contributing
Fork the repo

Create a branch: git checkout -b feature/YourFeature

Commit: git commit -m 'Add feature'

Push: git push origin feature/YourFeature

Open a Pull Request

📞 Contact
📧 Email: try.rushabh@gmail.com

⭐ If you like this project, star the repo and share it! ⭐

📄 License
This project is licensed under the MIT License.