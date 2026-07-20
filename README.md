# 🛍️ E-Shop Redux

A modern and responsive **React E-Commerce Application** built with **Redux Toolkit** for advanced global state management. This project demonstrates scalable frontend architecture by replacing Context API with Redux, implementing global filters, optimizing rendering performance, and creating a seamless shopping experience.

---

## 🚀 Live Demo
https://e-commerce-redux-8s5c.vercel.app/

---

## 📸 Preview
<img width="1112" height="906" alt="Screenshot 2026-07-20 113609" src="https://github.com/user-attachments/assets/92adce1e-a8bf-4e3c-8ef7-0c34e1ca682b" />
<img width="1101" height="906" alt="Screenshot 2026-07-20 113725" src="https://github.com/user-attachments/assets/32e7bf2d-3a2d-4dc3-9cfc-bf94bbc7272e" />
<img width="1058" height="902" alt="Screenshot 2026-07-20 113949" src="https://github.com/user-attachments/assets/a75afe91-b8a7-44aa-8d1a-fdc0058b73bf" />
<img width="1122" height="910" alt="Screenshot 2026-07-20 113756" src="https://github.com/user-attachments/assets/26da77b9-785e-44c8-b4a8-7fc40994fef9" />
<img width="1106" height="881" alt="Screenshot 2026-07-20 113843" src="https://github.com/user-attachments/assets/d9afc925-1684-4aff-b802-84400280ff13" />
<img width="1103" height="905" alt="Screenshot 2026-07-20 113913" src="https://github.com/user-attachments/assets/6f76d802-100e-4569-9c9e-3417cd0ccdb7" />

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

**Vansh Bansal**
