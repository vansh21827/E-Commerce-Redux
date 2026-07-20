# 🛍️ E-Shop Redux

A modern and responsive **React E-Commerce Application** built with **Redux Toolkit** for advanced global state management. This project demonstrates scalable frontend architecture by replacing Context API with Redux, implementing global filters, optimizing rendering performance, and creating a seamless shopping experience.

---

## 🚀 Live Demo

> Add your deployed Vercel link here

**Example:**
```
https://your-project.vercel.app
```

---

## 📸 Preview

> Add screenshots here

- Home Page
- Shop Page
- Product Details
- Shopping Cart
- Checkout
- Sidebar Filters

---

# ✨ Features

### 🛒 Shopping Experience

- Browse products
- Product Details page
- Shopping Cart
- Quantity Management
- Remove Items
- Order Summary
- Checkout Page
- Protected Checkout Route

---

### ⚡ Redux Toolkit

- Global Redux Store
- Cart Slice
- Filter Slice
- Centralized State Management
- Redux Dispatch Actions
- React Redux Provider

---

### 🔍 Product Filtering

- Search Products
- Sort by Price
- Sort by Rating
- Category Filter
- Price Range Filter
- Instant UI Updates

---

### ⚡ Performance Optimization

- React.memo
- useMemo
- useCallback
- Optimized Rendering
- Reduced Re-renders

---

### 💾 Persistence

- Cart saved in Local Storage
- Automatic Cart Restore
- Persistent User Experience

---

### 📱 Responsive Design

- Mobile Friendly
- Tablet Friendly
- Desktop Optimized
- Modern UI

---

# 🛠️ Tech Stack

- React
- Redux Toolkit
- React Redux
- React Router DOM
- JavaScript (ES6+)
- HTML5
- CSS3
- DummyJSON API
- LocalStorage

---

# 📂 Folder Structure

```
src
│
├── assets
│
├── components
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProtectedRoute.jsx
│   └── SidebarFilters.jsx
│
├── context
│   └── AuthContext.jsx
│
├── features
│   ├── cart
│   │   └── cartSlice.js
│   │
│   └── filter
│       └── filterSlice.js
│
├── pages
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Login.jsx
│   └── NotFound.jsx
│
├── redux
│   └── store.js
│
├── styles
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/e-shop-redux.git
```

Move into project directory

```bash
cd e-shop-redux
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

---

# 📦 Dependencies

```json
{
  "@reduxjs/toolkit": "^2.x",
  "react-redux": "^9.x",
  "react-router-dom": "^7.x",
  "react": "^19.x",
  "react-dom": "^19.x"
}
```

---

# 🌐 API

This project uses the **DummyJSON Products API**

```
https://dummyjson.com/products
```

---

# 🧠 Redux Store Structure

```
store
│
├── cart
│   ├── cart
│   ├── totalItems
│   └── totalPrice
│
└── filter
    ├── search
    ├── sort
    ├── category
    └── maxPrice
```

---

# 🛒 Cart Actions

- Add Product
- Remove Product
- Increase Quantity
- Decrease Quantity
- Clear Cart

---

# 🔍 Filter Actions

- Search Products
- Sort Products
- Filter by Category
- Filter by Maximum Price

---

# ⚡ Performance Improvements

The application uses several React optimization techniques:

- React.memo
- useMemo
- useCallback
- Redux Global State
- Optimized Component Rendering

---

# 📖 Sprint Objectives Covered

## ✅ Phase 1 – Base Architecture

- Redux Toolkit Integration
- React Redux Provider
- Global Store
- Cart Migration from Context API
- Redux Slice Architecture

---

## ✅ Phase 2 – State Integration

- Sidebar Filters
- Category Filter
- Price Filter
- Search
- Sorting
- Global Filter State

---

## ✅ Phase 3 – Optimization

- useMemo
- useCallback
- React.memo
- Optimized Rendering

---

# 🎯 Learning Outcomes

This project demonstrates:

- Redux Toolkit
- Global State Management
- Slice Architecture
- React Router
- Component Reusability
- State Persistence
- Performance Optimization
- Responsive UI Development
- Modern React Best Practices

---

# 📄 License

This project is developed for educational purposes as part of a Frontend Engineering Sprint on **Advanced State Architecture using Redux Toolkit**.

---

# 👨‍💻 Author

**Vansh Saxena**

GitHub: https://github.com/vansh21827
