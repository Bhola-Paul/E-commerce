A full-featured e-commerce web application built using the MERN stack (MongoDB, Express, React, Node.js) with JWT-based authentication and a separate Admin Panel for product and order management.

🚀 Features
✅ User Features
User registration & login with JWT authentication

Product browsing with search and category filters

Product details page with reviews & ratings

Add to cart & checkout functionality

Order placement with order summary and payment method

View order history

🔐 Authentication & Authorization
JWT-based authentication (with refresh tokens support)

Role-based access: User and Admin

🛠️ Admin Panel
Secure login for Admin users

Add, edit, or delete products

Manage orders (update status, view user details)

View all users and order stats

🧰 Tech Stack
Tech	Description
MongoDB	NoSQL database for storing data
Express.js	Backend framework for Node.js
React.js	Frontend library for building UI
Node.js	JavaScript runtime environment
JWT	Authentication and authorization
Redux	State management (for React)
Mongoose	MongoDB ORM for schema & queries
TailwindCSS / Bootstrap	Styling (optional based on choice)

📁 Folder Structure
bash
Copy
Edit
/client        # React frontend
├── /src
│   ├── /components
│   ├── /pages
│   ├── /redux
│   ├── /api

/server        # Node.js backend
├── /controllers
├── /models
├── /routes
├── /middleware
├── /utils
🔧 Installation & Setup
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/mern-ecommerce.git
cd mern-ecommerce
Backend Setup

bash
Copy
Edit
cd server
npm install
Create .env file in /server with the following:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Frontend Setup

bash
Copy
Edit
cd ../client
npm install
▶️ Running the App
Start Backend

bash
Copy
Edit
cd server
npm run dev
Start Frontend

bash
Copy
Edit
cd client
npm start
Frontend: http://localhost:3000

Backend API: http://localhost:5000/api

🔑 API Overview
Method	Route	Access	Description
POST	/api/auth/register	Public	Register a new user
POST	/api/auth/login	Public	Login and get JWT token
GET	/api/products	Public	Fetch all products
POST	/api/orders	User	Create a new order
GET	/api/admin/products	Admin	View all products
POST	/api/admin/products	Admin	Add new product
DELETE	/api/admin/products/:id	Admin	Delete a product
PUT	/api/admin/orders/:id	Admin	Update order status

