<div align="center">

# 💰 Advanced MERN AI Financial SaaS Platform

*A comprehensive full-stack financial management SaaS platform built with the MERN stack, featuring AI-powered insights, real-time analytics, and advanced financial tools to empower users in managing their finances effectively.*

## 🌟 Key Features

### 🔐 **Security & Authentication**
- **Secure Authentication** - Email and password-based authentication with JWT
- **Protected Sessions** - Secure user sessions with token management
- **Data Protection** - Industry-standard security practices

### 📊 **Transaction Management**
- **Complete CRUD Operations** - Create, view, edit, and delete transactions
- **AI Receipt Scanning** - Upload and scan receipts with AI extraction
- **CSV Import** - Effortlessly import existing transaction data
- **Bulk Actions** - Perform bulk operations for efficient management

### 📈 **Advanced Analytics**
- **Real-time Dashboard** - Beautiful analytics powered by MongoDB Aggregate Pipeline
- **Expenses Breakdown** - Interactive pie charts for spending categories
- **Trend Analysis** - Track financial flow over time with line charts
- **Custom Date Filtering** - Filter by Last 7, 30, 90 days, or custom periods

### 🤖 **AI-Powered Features**
- **Smart Categorization** - Automatic transaction categorization
- **Financial Insights** - AI-driven spending analysis and recommendations
- **Predictive Analytics** - Cash flow forecasting and expense predictions
- **Automated Reports** - Monthly financial reports delivered to your inbox

### 🚀 **Additional Features**

- ♻️ **Recurring Transactions** - Set up automated recurring income/expenses with Cron Jobs
- 🔍 **Advanced Search** - Powerful search and filtering capabilities
- 📄 **Pagination** - Efficiently browse large transaction lists
- ➕ **Smart Duplication** - Easily duplicate existing transactions
- 🧑‍💼 **Profile Customization** - Upload profile photos via Cloudinary integration

## 🛠️ Technology Stack

<div align="center">

### Frontend Excellence
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Backend Powerhouse
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)

### AI & Analytics
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)

### DevOps & Cloud
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

</div>

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher recommended)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git** version control system

---

## ⚡ Quick Start Guide

### 📦 **1. Install Dependencies**

#### Backend Setup
```bash
cd backend
npm install
# or
yarn install
```
#### Frontend Setup
```bash
cd frontend
npm install
# or
yarn install
```
### 🔧 **2. Environment Configuration**

#### 🔑 Backend Environment Variables

Create `backend/.env`:

```bash
# 🗄️ Database Configuration
MONGODB_URI=mongodb://localhost:27017/financial-saas
# For MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/financial-saas?retryWrites=true&w=majority

# 🔐 JWT Secret (generate a strong, random string)
JWT_SECRET=your-super-secret-jwt-key

# 🤖 OpenAI API (obtain from OpenAI platform)
OPENAI_API_KEY=your-openai-api-key

# 🌐 Server Configuration
PORT=9000
NODE_ENV=development

# 📧 Email Configuration (for automated reports)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# 💳 Payment Gateway (Optional - Stripe)
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
```

#### 🎨 Frontend Environment Variables

Create `frontend/.env`:

```bash
# 🔗 API Configuration
REACT_APP_API_URL=http://localhost:9000/api

# 🤖 AI Integration
REACT_APP_OPENAI_API_KEY=your-openai-api-key

# 💳 Payment Processing
REACT_APP_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
```

### 🗄️ **3. Database Setup**

#### Using MongoDB Locally
```bash
# Start MongoDB service
mongod
```
*The database `financial-saas` will be created automatically*

#### Using MongoDB Atlas
1. Create a cluster on [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Get your connection string
3. Update `MONGODB_URI` in `backend/.env`

### 🚀 **4. Run the Application**

#### Development Mode

#### Start Backend Server
```bash
cd backend
npm run dev
# or
yarn dev
```
*Backend runs on* `http://localhost:9000`

#### Start Frontend Server
```bash
cd frontend
npm start
# or
yarn start
```
*Frontend runs on* `http://localhost:5173`

#### Production Mode

```bash
# Build Frontend
cd frontend
npm run build

# Start Production Server
cd ../backend
npm start
```

---

## 📁 Project Structure

```
Advanced-MERN-AI-Financial-SaaS-Platform/
├── 🔧 backend/
│   ├── 🎮 controllers/            # Business logic and request processing
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── transactionController.js
│   │   ├── budgetController.js
│   │   └── aiController.js
│   ├── 📊 models/                 # Database schemas and MongoDB interaction
│   │   ├── User.js
│   │   ├── Transaction.js
│   │   ├── Budget.js
│   │   └── Goal.js
│   ├── 🛣️ routes/                 # API endpoints and controller linking
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── transactions.js
│   │   ├── budgets.js
│   │   └── ai.js
│   ├── 🛡️ middleware/             # Authentication, validation, error handling
│   │   ├── auth.js
│   │   ├── validation.js
│   │   └── errorHandler.js
│   ├── 🔧 utils/                  # Utility functions
│   │   ├── aiHelpers.js
│   │   ├── emailService.js
│   │   └── validators.js
│   ├── ⚙️ config/                 # Database connection setup
│   │   └── database.js
│   ├── 🔑 .env                    # Environment variables
│   ├── 📦 package.json
│   └── 🚀 server.js               # Main backend entry point
├── 🎨 frontend/
│   ├── 📁 public/                 # Static assets
│   ├── 📝 src/                    # React source code
│   │   ├── 🧩 components/         # Reusable UI components
│   │   │   ├── Dashboard/
│   │   │   ├── Auth/
│   │   │   ├── Transactions/
│   │   │   ├── Budget/
│   │   │   ├── Charts/
│   │   │   └── Common/
│   │   ├── 📄 pages/              # Top-level page components
│   │   │   ├── Dashboard.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Transactions.js
│   │   │   └── Budget.js
│   │   ├── 🔄 redux/              # State management
│   │   │   ├── store.js
│   │   │   ├── slices/
│   │   │   └── api/
│   │   ├── 🔗 services/           # API and AI service integration
│   │   │   ├── api.js
│   │   │   └── aiService.js
│   │   ├── 🛠️ utils/              # Frontend utilities
│   │   │   ├── helpers.js
│   │   │   └── constants.js
│   │   ├── 🎨 styles/             # Global styles and themes
│   │   ├── 📱 App.js              # Main application component
│   │   └── 🏁 index.js            # React entry point
│   ├── 🔑 .env                    # Frontend environment variables
│   ├── 📦 package.json
│   └── 📖 README.md
├── 📚 docs/                       # Documentation files
├── 🐳 docker-compose.yml          # Docker Compose configuration
├── 📦 Dockerfile                  # Docker containerization
└── 📋 README.md                   # This file
```

---

## 🔐 API Endpoints

### 🔒 **Authentication**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | User login and JWT token |
| `POST` | `/api/auth/logout` | Log out current user |
| `GET` | `/api/auth/me` | Get authenticated user details |

### 💳 **Transactions**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/transactions` | Get all transactions (with filters, search, pagination) |
| `POST` | `/api/transactions` | Create a new transaction |
| `PUT` | `/api/transactions/:id` | Update existing transaction |
| `DELETE` | `/api/transactions/:id` | Delete transaction |
| `GET` | `/api/transactions/analytics` | Get aggregated analytics |

### 💰 **Budget Management**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/budgets` | Retrieve all user budgets |
| `POST` | `/api/budgets` | Create a new budget |
| `PUT` | `/api/budgets/:id` | Update existing budget |
| `DELETE` | `/api/budgets/:id` | Delete budget |

### 🤖 **AI Features**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/ai/insights` | Get AI financial insights |
| `POST` | `/api/ai/categorize` | Auto-categorize transactions |
| `POST` | `/api/ai/recommendations` | Get AI recommendations |

---

## 🤖 AI Features in Detail

### 📊 **Financial Insights**
- **Spending Pattern Analysis** - Understand money flow
- **Budget Optimization** - Smart budget recommendations  
- **Investment Advice** - Personalized suggestions
- **Goal Tracking** - AI-assisted financial goals

### 🎯 **Smart Categorization**
- **Auto-Categorization** - Intelligent transaction sorting
- **Custom Categories** - Create your own categories
- **Learning Algorithm** - Improves over time
- **Manual Override** - Easy corrections

### 🔮 **Predictive Analytics**
- **Cash Flow Forecasting** - Predict financial health
- **Expense Predictions** - Anticipate future costs
- **Budget Variance** - Identify deviations
- **Trend Analysis** - Long-term patterns

---

## 🔒 Security Features

| 🛡️ **Security Layer** | **Implementation** | **Status** |
|----------------------|-------------------|-----------|
| **Authentication** | JWT-based tokens | ✅ Active |
| **Password Security** | bcrypt hashing | ✅ Active |
| **Input Protection** | Validation & sanitization | ✅ Active |
| **Rate Limiting** | Brute-force protection | ✅ Active |
| **CORS** | Configured origins | ✅ Active |
| **Environment** | Variable protection | ✅ Active |

---

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm test
# or
yarn test
```

### Frontend Testing
```bash
cd frontend
npm test
# or
yarn test
```

### Run All Tests
```bash
npm run test:all
# or
yarn test:all
```

---

## 🐳 Docker Deployment

### 🚀 **Quick Docker Setup**

```bash
# Build and start all services
docker-compose up --build -d

# Stop services
docker-compose down
```

### 🔧 **Individual Docker Build**

#### Backend Image
```bash
cd backend
docker build -t financial-saas-backend .
```
#### Frontend Image
```bash
cd frontend
docker build -t financial-saas-frontend .


---

## 🌐 Deployment Options

### 🚀 **Cloud Deployment**

</div>

<table>
<tr>
<td width="33%" align="center">

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
**Frontend Deployment**

```bash
npm i -g vercel
cd frontend
vercel --prod
```

</td>
<td width="33%" align="center">

![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)
**Backend Deployment**

```bash
railway login
railway init
railway up
```

</td>
<td width="33%" align="center">

![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
**Alternative Backend**

```bash
heroku create your-app-name
git push heroku main
```

</td>
</tr>
</table>

---

## 🤝 Contributing

### 🌟 **We Welcome Contributors!**

*Every contribution makes this project better*

### 🚀 **How to Contribute**

1. **🍴 Fork** the repository
2. **🌿 Create** your feature branch: `git checkout -b feature/AmazingFeature`
3. **✨ Commit** your changes: `git commit -m 'Add some AmazingFeature'`
4. **🚀 Push** to the branch: `git push origin feature/AmazingFeature`
5. **🎯 Open** a Pull Request

### 📋 **Code Style Guidelines**

- ✅ Use **ES6+** JavaScript/TypeScript features
- ✅ Maintain **consistent naming** conventions
- ✅ Write **clear commit** messages
- ✅ Add **comments** for complex logic
- ✅ Ensure **responsive design** across devices

---

## 📞 Support & Contact

<div align="center">

### 💬 **Get Help & Connect**

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:try.rushabh@gmail.com)
**📧 Email:** try.rushabh@gmail.com

---

### 💝 **Show Your Support**

If this project helped you, please consider:

⭐ **Star this repository**  
🐛 **Report bugs and issues**  
🚀 **Contribute to the codebase**  
📢 **Share with your network**

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

Made with ❤️ by developers who care about financial wellness

⭐ **If you found this project helpful, please give it a star!** ⭐

**Happy coding! 🚀**