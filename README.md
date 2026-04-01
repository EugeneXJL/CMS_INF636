# Courier Management System (CMS)

A full-stack web application for managing courier deliveries, built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Project Overview

This Courier Management System allows customers to create and track shipments, and provides administrators with tools to manage all packages. The system includes role-based authentication, full CRUD operations for parcels, couriers, and deliveries, and is deployed via CI/CD pipeline to AWS EC2.

**GitHub Starter Project:** [https://github.com/nahaQUT/sampleapp_IFQ636.git](https://github.com/nahaQUT/sampleapp_IFQ636.git)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js 18, Tailwind CSS, Axios, React Router |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas (Mongoose ODM) |
| Authentication | JWT (JSON Web Tokens), bcrypt |
| Deployment | AWS EC2, PM2, Nginx |
| CI/CD | GitHub Actions (self-hosted runner) |
| Testing | Mocha, Chai, Sinon |

## Features

### Customer Features
- User registration and login
- Create shipments with sender/receiver details and shipping method
- Track packages by tracking number
- View shipment history
- Update and delete shipments

### Admin Features
- Admin registration and login
- Dashboard with package statistics (Total, Active, Delivered)
- Manage all packages (view, edit, delete)

### Authentication & Authorisation
- Role-based access control (customer / admin)
- JWT token-based API protection
- Separate login portals for customers and admins

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/profile` | Get user profile (protected) |
| PUT | `/api/auth/profile` | Update user profile (protected) |

### Parcels
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/parcels` | Create a new parcel (protected) |
| GET | `/api/parcels` | Get all user's parcels (protected) |
| GET | `/api/parcels/:id` | Get parcel by ID (protected) |
| GET | `/api/parcels/track/:trackingNumber` | Track parcel by tracking number (public) |
| PUT | `/api/parcels/:id` | Update a parcel (protected) |
| DELETE | `/api/parcels/:id` | Delete a parcel (protected) |

### Couriers
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/couriers` | Create a new courier (protected) |
| GET | `/api/couriers` | Get all couriers (protected) |
| GET | `/api/couriers/:id` | Get courier by ID (protected) |
| PUT | `/api/couriers/:id` | Update a courier (protected) |
| DELETE | `/api/couriers/:id` | Delete a courier (protected) |

### Deliveries
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/deliveries` | Create a new delivery (protected) |
| GET | `/api/deliveries` | Get all deliveries (protected) |
| GET | `/api/deliveries/:id` | Get delivery by ID (protected) |
| PUT | `/api/deliveries/:id` | Update a delivery (protected) |
| DELETE | `/api/deliveries/:id` | Delete a delivery (protected) |

## Project Structure

```
CMS_INF636/
├── backend/
│   ├── config/
│   │   └── db.js                  # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js      # Authentication logic
│   │   ├── parcelController.js    # Parcel CRUD
│   │   ├── courierController.js   # Courier CRUD
│   │   └── deliveryController.js  # Delivery CRUD
│   ├── middleware/
│   │   └── authMiddleware.js      # JWT authentication
│   ├── models/
│   │   ├── User.js                # User schema (with role)
│   │   ├── Parcel.js              # Parcel schema
│   │   ├── Courier.js             # Courier schema
│   │   └── Delivery.js            # Delivery schema
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── parcelRoutes.js
│   │   ├── courierRoutes.js
│   │   └── deliveryRoutes.js
│   ├── test/
│   │   ├── parcelController.test.js
│   │   ├── courierController.test.js
│   │   └── deliveryController.test.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── CreateShipment.jsx
│   │   │   ├── TrackPackage.jsx
│   │   │   ├── ShipmentHistory.jsx
│   │   │   ├── UpdateShipment.jsx
│   │   │   ├── AdminLogin.jsx
│   │   │   ├── AdminRegister.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── ManagePackages.jsx
│   │   ├── App.js
│   │   └── axiosConfig.jsx
│   └── package.json
├── .github/
│   └── workflows/
│       └── ci.yml                 # CI/CD pipeline
└── package.json
```

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account
- Git

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/EugeneXJL/CMS_INF636.git
cd CMS_INF636
```

2. Install all dependencies:
```bash
npm run install-all
```

3. Create `backend/.env` file:
```
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
PORT=5001
```

4. Start development server:
```bash
npm run dev
```

5. Open `http://localhost:3000` in your browser.

## Deployment (AWS EC2)

The application is deployed on AWS EC2 using:
- **Nginx** as a reverse proxy (port 80 → frontend, /api → backend)
- **PM2** as a process manager for Node.js
- **GitHub Actions** self-hosted runner for CI/CD

### CI/CD Pipeline
- Triggered on push to `main` branch
- Installs dependencies
- Runs backend tests (Mocha/Chai/Sinon)
- Builds frontend
- Deploys to EC2 via PM2

## GitHub Branching Strategy

This project follows a **feature branch workflow**:
- `main` — stable production branch
- `feature/parcel-crud` — Parcel CRUD backend
- `feature/courier-crud` — Courier CRUD backend
- `feature/delivery-crud` — Delivery CRUD backend
- `feature/frontend-pages` — Frontend pages and CI/CD
- `feature/add-tests` — Backend test cases
- `feature/admin-pages` — Admin pages and role-based auth

Each feature is developed in a dedicated branch and merged to `main` via Pull Request.

## Testing

Run backend tests:
```bash
cd backend
npm test
```

Tests cover CRUD operations for:
- Parcel Controller (create, read, update, delete)
- Courier Controller (create, read, update, delete)
- Delivery Controller (create, read, update, delete)
