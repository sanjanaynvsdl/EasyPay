## Easy Pay  

A payment application built using **Node.js, React, Express, MongoDB, and Tailwind CSS**. Users can securely authenticate and send money. Transactions are handled using **MongoDB transactions** to ensure secure and reliable payments.  

## API Endpoints  

### User Routes (`/api/v1/user`)  
- **POST** `/signup` → Register a new user  
- **POST** `/signin` → Authenticate & log in  
- **GET** `/bulk` → Fetch multiple users for transactions  

### Account Routes (`/api/v1/account`)  
- **GET** `/balance` → Get user account balance  
- **POST** `/transfer` → Transfer money to another user  

## Setup Instructions  

### 1. Clone the Repository  
```sh
git clone your-repo-url
cd your-repo-name
```

### 2. Backend Setup  
```sh
cd backend
npm install
npm run dev
```
Create a **.env** file in the backend root directory and add:  
```
MONGODB_URI=your_mongodb_url
JWT_SECRET_KEY=your_jwt_secret
PORT=3000
```
Backend runs on: **http://localhost:3000**  

### 3. Frontend Setup  
```sh
cd frontend
npm install
npm run dev
```
Create a **.env** file in the frontend root directory and add:  
```
VITE_API_URL=deployed_backend_url
```
Frontend runs on: **http://localhost:5173**  

## Deployment  
- **Frontend:** Deployed on [Vercel](your-vercel-url)  
- **Backend:** Deployed on [Render](your-render-url)  
