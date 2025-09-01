# financial-dashboard 
# Advanced MERN AI Financial SaaS Platform

A comprehensive full-stack financial management SaaS platform built with the MERN stack, featuring AI-powered insights, real-time analytics, and advanced financial tools.

## 🛠️ Technology Stack

### Frontend
- **React.js** - Modern UI library
- **Redux Toolkit** - State management
- **Material-UI / Tailwind CSS** - Component library and styling
- **Chart.js / Recharts** - Data visualization
- **React Router** - Client-side routing

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication and authorization
- **Socket.io** - Real-time communication

### AI & Machine Learning
- **OpenAI API** - AI-powered insights and recommendations
- **TensorFlow.js** - Client-side machine learning
- **Python Integration** - Advanced analytics and ML models

### DevOps & Deployment
- **Docker** - Containerization
- **AWS / Vercel** - Cloud deployment
- **GitHub Actions** - CI/CD pipeline
- **MongoDB Atlas** - Cloud database

Key Features
🔐 Authentication: Email + Password with JWT
🏢 Create & Edit Transactions
📤 Upload & Scan Receipt with AI
📈 Advanced Analytics with MongoDB Aggregate Pipeline
📊 Expenses Breakdown Pie Chart
📈 Income & Expense Line Chart
📅 Filter by Date Ranges (e.g., Last 30 Days)
♻️ Recurring Transactions with Cron Job
📄 Auto-Generated Monthly Report (emailed to user)
📥 CSV Transaction Import
🔍 Filter & Search
📅 Pagination
🗑️ Bulk Delete
➕ Duplicate Transactions
🧑‍💼 Upload Profile Photo (Cloudinary)
🌐 Built with MERN Stack (Node.js, MongoDB, React, TypeScript)


## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v16.0.0 or higher)
- npm or yarn package manager
- MongoDB (local or Atlas)
- Git

## 🔧 Installation & Setup



### 1. Install Dependencies

#### Backend Setup
```bash
cd backend
npm install
```

#### Frontend Setup
```bash
cd frontend
npm install
```

### 2. Environment Configuration

#### Backend Environment Variables
Create a `.env` file in the backend directory:
```env
# Database
MONGODB_URI=mongodb://localhost:27017/financial-saas
# or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/financial-saas

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key

# OpenAI API
OPENAI_API_KEY=your-openai-api-key

# Server Configuration
PORT=5000
NODE_ENV=development

# Email Configuration (Optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Payment Gateway (Optional)
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
```

#### Frontend Environment Variables
Create a `.env` file in the frontend directory:
```env
REACT_APP_API_URL=http://localhost:5173/api
REACT_APP_OPENAI_API_KEY=your-openai-api-key
REACT_APP_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
```

### 3. Database Setup

#### Using MongoDB Locally
```bash
# Start MongoDB service
mongod

# Create database (optional - will be created automatically)
mongo
use financial-saas
```

#### Using MongoDB Atlas
1. Create a cluster on [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Get your connection string
3. Update the `MONGODB_URI` in your `.env` file

## 🚀 Running the Application

### Development Mode

#### Start Backend Server
```bash
cd backend
npm run dev
```
The backend server will run on `http://localhost:9000`

#### Start Frontend Development Server
```bash
cd frontend
npm start
```
The frontend will run on `http://localhost:5173`

### Production Mode

#### Build Frontend
```bash
cd frontend
npm run build
```

#### Start Production Server
```bash
cd backend
npm start
```

## 📁 Project Structure

```
Advanced-MERN-AI-Financial-SaaS-Platform/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── transactionController.js
│   │   ├── budgetController.js
│   │   └── aiController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Transaction.js
│   │   ├── Budget.js
│   │   └── Goal.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── transactions.js
│   │   ├── budgets.js
│   │   └── ai.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── validation.js
│   │   └── errorHandler.js
│   ├── utils/
│   │   ├── aiHelpers.js
│   │   ├── emailService.js
│   │   └── validators.js
│   ├── config/
│   │   └── database.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard/
│   │   │   ├── Auth/
│   │   │   ├── Transactions/
│   │   │   ├── Budget/
│   │   │   ├── Charts/
│   │   │   └── Common/
│   │   ├── pages/
│   │   │   ├── Dashboard.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Transactions.js
│   │   │   └── Budget.js
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   ├── slices/
│   │   │   └── api/
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── aiService.js
│   │   ├── utils/
│   │   │   ├── helpers.js
│   │   │   └── constants.js
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   ├── .env
│   ├── package.json
│   └── README.md
├── docs/
├── docker-compose.yml
├── Dockerfile
└── README.md
```

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Transactions
- `GET /api/transactions` - Get all transactions
- `POST /api/transactions` - Create new transaction
- `PUT /api/transactions/:id` - Update transaction
- `DELETE /api/transactions/:id` - Delete transaction
- `GET /api/transactions/analytics` - Get transaction analytics

### Budget Management
- `GET /api/budgets` - Get all budgets
- `POST /api/budgets` - Create new budget
- `PUT /api/budgets/:id` - Update budget
- `DELETE /api/budgets/:id` - Delete budget

### AI Features
- `POST /api/ai/insights` - Get AI financial insights
- `POST /api/ai/categorize` - Auto-categorize transactions
- `POST /api/ai/recommendations` - Get AI recommendations

## 🤖 AI Features

### Financial Insights
- Spending pattern analysis
- Budget optimization suggestions
- Investment recommendations
- Financial goal tracking

### Smart Categorization
- Automatic transaction categorization
- Custom category creation
- Learning from user behavior

### Predictive Analytics
- Cash flow forecasting
- Expense predictions
- Budget variance analysis

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- Rate limiting
- CORS configuration
- Environment variable protection

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm test
```

### Frontend Testing
```bash
cd frontend
npm test
```

### Run All Tests
```bash
npm run test:all
```

## 🐳 Docker Deployment

### Using Docker Compose
```bash
# Build and start all services
docker-compose up --build

# Run in detached mode
docker-compose up -d

# Stop services
docker-compose down
```

### Individual Docker Build
```bash
# Backend
cd backend
docker build -t financial-saas-backend .

# Frontend
cd frontend
docker build -t financial-saas-frontend .
```

## 🌐 Deployment

### Frontend Deployment (Vercel)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel --prod
```

### Backend Deployment (Railway/Heroku)
```bash
# Using Railway
railway login
railway init
railway up

# Using Heroku
heroku create your-app-name
git push heroku main
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style Guidelines
- Use ES6+ features
- Follow consistent naming conventions
- Write meaningful commit messages
- Add comments for complex logic
- Ensure responsive design

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need support:

- 📧 Email: [try.rushabh@gmail.com](mailto:try.rushabh@gmail.com)

---

⭐ If you found this project helpful, please give it a star on GitHub!

Happy coding! 🚀
