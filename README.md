# 🛍️ Apna Dukan - Modern E-Commerce Platform

A feature-rich, fully responsive e-commerce web application built with React, offering a seamless shopping experience with modern UI/UX design.

## 🚀 Live Demo

**[View Live Site](YOUR_VERCEL_DEPLOYMENT_URL_HERE)**

---

## ✨ Features

- 🛒 **Complete Shopping Cart** - Add, remove, and update product quantities
- ❤️ **Wishlist Functionality** - Save favorite items for later
- 🔍 **Advanced Filtering** - Search by name, category, and price range
- 📄 **Smart Pagination** - Browse 20 products with 10 items per page
- 💳 **Multi-Step Checkout** - Streamlined checkout process with form validation
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Beautiful gradients, animations, and hover effects
- 🔔 **Toast Notifications** - Real-time feedback for user actions
- 🚀 **Fast Performance** - Built with Vite for lightning-fast development and builds

---

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library
- **React Router DOM** - Client-side routing
- **Tailwind CSS v4** - Utility-first styling
- **Lucide React** - Beautiful icon library
- **React Hook Form** - Form validation
- **React Hot Toast** - Elegant notifications

### Build Tools
- **Vite** - Next-generation frontend tooling
- **ESLint** - Code quality and consistency

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
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

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code quality |

---

## 📂 Project Structure

```
e-commerce-react/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx       # Navigation bar with cart/wishlist badges
│   │   ├── Footer.jsx       # Footer component
│   │   ├── ProductCard.jsx  # Product display card
│   │   └── filter.jsx       # Filter sidebar
│   │
│   ├── pages/              # Route components
│   │   ├── Home.jsx        # Homepage with hero & featured products
│   │   ├── Products.jsx    # Product listing with pagination
│   │   ├── ProductDetail.jsx # Single product view
│   │   ├── Cart.jsx        # Shopping cart
│   │   ├── Wishlist.jsx    # Saved items
│   │   ├── CheckoutPage.jsx # Checkout flow
│   │   └── About.jsx       # About page
│   │
│   ├── context/            # State management
│   │   ├── CartContext.jsx     # Cart state & functions
│   │   └── WishlistContext.jsx # Wishlist state & functions
│   │
│   ├── Data/               # Static data
│   │   └── products.js     # Product catalog (20 items)
│   │
│   ├── App.jsx             # Main app with routing
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
│
├── public/                 # Static assets
├── package.json            # Dependencies
└── vite.config.js         # Vite configuration
```

---

## 🎯 Key Functionalities

### 🛒 Shopping Cart
- Add products with custom quantities
- Update quantities directly in cart
- Remove items
- Real-time total calculation
- Persistent state using Context API

### ❤️ Wishlist
- Save favorite products
- Quick add/remove toggle
- Visual feedback with filled heart icon
- Move items to cart

### 🔍 Product Filtering
- **Search** - Find products by name
- **Category Filter** - Browse by product category
- **Price Range** - Filter by maximum price
- Real-time filter updates

### 💳 Checkout Process
- **Step 1** - Contact information with email validation
- **Step 2** - Shipping address details
- **Step 3** - Payment information
- Order summary with tax and shipping calculations
- Success confirmation screen

---

## 🌐 Deployment

This project is configured for deployment on **Vercel**.

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Update README**
   - Replace `YOUR_VERCEL_DEPLOYMENT_URL_HERE` with your live URL

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/YOUR_PROFILE)

---

## 🙏 Acknowledgments

- Product images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- UI inspiration from modern e-commerce platforms

---

## 📞 Support

If you have any questions or need help, please open an issue or contact me directly.

**Happy Shopping! 🛍️**
