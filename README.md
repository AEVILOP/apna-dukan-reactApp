# 🛒 Apna Dukan - E-Commerce React App

A modern, fully-responsive e-commerce web application built with React, featuring a clean UI, shopping cart functionality, wishlist management, and a complete checkout process.

🔗 **Live Demo**: [https://apna-dukan-react-app.vercel.app](https://apna-dukan-react-app.vercel.app)

---

## ✨ Features

### 🛍️ Shopping Experience
- **Product Catalog**: Browse a curated collection of products with detailed information
- **Product Details**: View comprehensive product information including images, descriptions, and pricing
- **Search & Filter**: Easily find products with intuitive search and filtering options
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices

### 🛒 Cart & Wishlist
- **Shopping Cart**: Add, remove, and update product quantities
- **Wishlist**: Save favorite items for later purchase
- **Real-time Updates**: Instant cart and wishlist updates with visual feedback
- **Persistent State**: Cart and wishlist data preserved using Context API

### 💳 Checkout Process
- **Form Validation**: Comprehensive validation for all checkout fields
  - ZIP Code: 6-digit numeric validation
  - Card Number: 12-digit numeric validation
  - Expiry Date: Month/Year picker with future date validation
  - CVV: 3-4 digit numeric validation
- **Dynamic Submit Button**: Visual feedback with color-coded states
  - Red with lock icon when form is incomplete
  - Green with unlock icon when ready to submit
- **Order Confirmation**: Professional order confirmation page with order ID

### 🎨 User Interface
- **Modern Design**: Clean, professional interface built with Tailwind CSS
- **Smooth Animations**: Polished transitions and hover effects
- **Toast Notifications**: Real-time feedback for user actions
- **Mobile-Optimized**: Auto-scroll to top on page navigation for better mobile UX

---

## 🚀 Tech Stack

- **Frontend Framework**: React 19.2.0
- **Routing**: React Router DOM 7.13.0
- **Styling**: Tailwind CSS 4.1.18
- **Form Handling**: React Hook Form 7.71.1
- **Icons**: Lucide React 0.563.0
- **Notifications**: React Hot Toast 2.6.0
- **Build Tool**: Vite 7.2.4
- **Deployment**: Vercel

---

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/AEVILOP/apna-dukan-reactApp.git
   cd apna-dukan-reactApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 🏗️ Project Structure

```
e-commerce-react/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Footer.jsx      # Footer component
│   │   └── ProductCard.jsx # Product display card
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Landing page
│   │   ├── Products.jsx    # Product listing
│   │   ├── ProductDetail.jsx # Product details
│   │   ├── Cart.jsx        # Shopping cart
│   │   ├── Wishlist.jsx    # Wishlist page
│   │   ├── CheckoutPage.jsx # Checkout form
│   │   └── About.jsx       # About page
│   ├── context/            # React Context for state management
│   │   ├── CartContext.jsx # Cart state management
│   │   └── WishlistContext.jsx # Wishlist state management
│   ├── Data/               # Product data
│   │   └── products.js     # Product catalog
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── vercel.json            # Vercel deployment config
├── package.json           # Dependencies
└── vite.config.js         # Vite configuration
```

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🎯 Key Features Implementation

### State Management
- **Context API**: Global state management for cart and wishlist
- **React Hooks**: useState, useEffect, useContext for component logic
- **Persistent State**: Cart and wishlist data maintained across navigation

### Form Validation
- **React Hook Form**: Efficient form handling with minimal re-renders
- **Real-time Validation**: onChange mode for instant feedback
- **Pattern Matching**: Regex validation for numeric fields
- **Custom Validation**: Future date validation for expiry dates

### Routing
- **Client-Side Routing**: React Router for seamless navigation
- **Dynamic Routes**: Product detail pages with URL parameters
- **Vercel Configuration**: Custom rewrites for SPA routing support

### Responsive Design
- **Mobile-First Approach**: Optimized for mobile devices
- **Breakpoint System**: Tailwind's responsive utilities
- **Touch-Friendly**: Large tap targets and smooth scrolling

---

## 🌐 Deployment

The application is deployed on Vercel with automatic deployments from the main branch.

### Deploy Your Own

1. Fork this repository
2. Import to Vercel
3. Deploy with default settings
4. The `vercel.json` configuration handles client-side routing automatically

---

## 📝 Environment Variables

This project doesn't require any environment variables for basic functionality. All product data is stored locally in the `src/Data/products.js` file.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**AEVILOP**
- GitHub: [@AEVILOP](https://github.com/AEVILOP)

---

## 🙏 Acknowledgments

- Product images from Unsplash
- Icons from Lucide React
- UI inspiration from modern e-commerce platforms

---

**Made with ❤️ using React and Tailwind CSS**