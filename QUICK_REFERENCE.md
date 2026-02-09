# Apna Dukan - Quick Reference Guide

## 📁 File Structure Quick Reference

```
src/
├── components/
│   ├── Navbar.jsx          → Top navigation bar
│   ├── Footer.jsx          → Bottom footer
│   ├── ProductCard.jsx     → Product display card
│   └── filter.jsx          → Filter sidebar
│
├── pages/
│   ├── Home.jsx            → Landing page
│   ├── Products.jsx        → All products with pagination
│   ├── ProductDetail.jsx   → Single product view
│   ├── Cart.jsx            → Shopping cart
│   ├── Wishlist.jsx        → Saved items
│   ├── CheckoutPage.jsx    → Checkout form
│   └── About.jsx           → About page
│
├── context/
│   ├── CartContext.jsx     → Cart state management
│   └── WishlistContext.jsx → Wishlist state management
│
├── Data/
│   └── products.js         → 20 product items
│
├── App.jsx                 → Main app with routes
└── main.jsx                → Entry point
```

---

## 🎯 Common Tasks

### Adding a New Product
**File:** `src/Data/products.js`

```javascript
{
    id: 21,
    name: "Product Name",
    price: 1999,
    originalPrice: 2999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-xxx",
    description: "Product description",
    features: ["Feature 1", "Feature 2"],
    inStock: true,
    rating: 4.5
}
```

### Adding a New Page
1. Create file in `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`:
   ```javascript
   <Route path="/newpage" element={<NewPage />} />
   ```
3. Add link in `src/components/Navbar.jsx`

### Accessing Cart Data
```javascript
import { useCart } from '../context/CartContext';

const MyComponent = () => {
    const { cart, addToCart, removeFromCart, getCartTotal } = useCart();
    
    // Use cart functions
    addToCart(product);
    removeFromCart(productId);
    const total = getCartTotal();
};
```

### Accessing Wishlist Data
```javascript
import { useWishlist } from '../context/WishlistContext';

const MyComponent = () => {
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
    
    // Use wishlist functions
    addToWishlist(product);
    removeFromWishlist(productId);
};
```

---

## 🔑 Key Hooks Used

| Hook | Purpose | Example |
|------|---------|---------|
| `useState` | Component state | `const [count, setCount] = useState(0)` |
| `useEffect` | Side effects | `useEffect(() => { /* code */ }, [deps])` |
| `useContext` | Access context | `const value = useContext(MyContext)` |
| `useReducer` | Complex state | `const [state, dispatch] = useReducer(reducer, initial)` |
| `useParams` | URL parameters | `const { id } = useParams()` |
| `useNavigate` | Navigation | `const navigate = useNavigate(); navigate('/path')` |
| `useLocation` | Current URL | `const location = useLocation()` |

---

## 🎨 Common Tailwind Classes

### Layout
- `flex` - Flexbox container
- `grid` - Grid container
- `grid-cols-3` - 3 columns
- `gap-4` - Gap between items
- `container` - Centered container
- `mx-auto` - Center horizontally

### Spacing
- `p-4` - Padding all sides
- `px-4` - Padding left/right
- `py-4` - Padding top/bottom
- `m-4` - Margin all sides
- `mt-4` - Margin top
- `space-x-4` - Horizontal space between children

### Colors
- `bg-blue-600` - Background color
- `text-white` - Text color
- `border-gray-300` - Border color

### Typography
- `text-xl` - Font size
- `font-bold` - Font weight
- `text-center` - Text alignment

### Effects
- `shadow-md` - Box shadow
- `rounded-lg` - Border radius
- `hover:bg-blue-700` - Hover state
- `transition-all` - Smooth transitions

### Responsive
- `md:flex` - Flex on medium screens and up
- `lg:grid-cols-4` - 4 columns on large screens
- `sm:text-xl` - Larger text on small screens

---

## 📝 Common Patterns

### Conditional Rendering
```javascript
{condition && <Component />}
{condition ? <ComponentA /> : <ComponentB />}
```

### Mapping Arrays
```javascript
{items.map(item => (
    <Component key={item.id} data={item} />
))}
```

### Event Handling
```javascript
<button onClick={handleClick}>Click</button>
<button onClick={() => handleClick(id)}>Click</button>
```

### Form Handling
```javascript
const [value, setValue] = useState('');

<input 
    value={value}
    onChange={(e) => setValue(e.target.value)}
/>
```

### Navigation
```javascript
// Using Link
<Link to="/products">Products</Link>

// Using navigate
const navigate = useNavigate();
navigate('/products');
```

---

## 🐛 Common Issues & Solutions

### Issue: Component not re-rendering
**Solution:** Make sure you're updating state correctly
```javascript
// ❌ Wrong
state.push(item);

// ✅ Correct
setState([...state, item]);
```

### Issue: "Cannot read property of undefined"
**Solution:** Use optional chaining
```javascript
// ❌ Might crash
const name = product.user.name;

// ✅ Safe
const name = product?.user?.name;
```

### Issue: Infinite useEffect loop
**Solution:** Add proper dependencies
```javascript
// ❌ Runs forever
useEffect(() => {
    setCount(count + 1);
});

// ✅ Runs once
useEffect(() => {
    setCount(count + 1);
}, []); // Empty array = run once
```

### Issue: Cart not persisting
**Solution:** Check localStorage is working
```javascript
// Save to localStorage
localStorage.setItem('cart', JSON.stringify(cart));

// Load from localStorage
const savedCart = JSON.parse(localStorage.getItem('cart'));
```

---

## 🚀 Performance Tips

1. **Use keys in lists**
   ```javascript
   {items.map(item => <div key={item.id}>{item.name}</div>)}
   ```

2. **Avoid inline functions in render**
   ```javascript
   // ❌ Creates new function every render
   <button onClick={() => handleClick(id)}>Click</button>
   
   // ✅ Better (if possible)
   <button onClick={handleClick}>Click</button>
   ```

3. **Lazy load images**
   ```javascript
   <img loading="lazy" src={image} alt={name} />
   ```

4. **Use React.memo for expensive components**
   ```javascript
   const ExpensiveComponent = React.memo(({ data }) => {
       // Component code
   });
   ```

---

## 📦 Dependencies

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x",
  "react-hook-form": "^7.x",
  "react-hot-toast": "^2.x",
  "lucide-react": "^0.x"
}
```

---

## 🔧 Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new package
npm install package-name

# Remove package
npm uninstall package-name
```

---

## 📚 Learning Resources

- **React Docs:** https://react.dev
- **React Router:** https://reactrouter.com
- **Tailwind CSS:** https://tailwindcss.com
- **Lucide Icons:** https://lucide.dev
- **React Hook Form:** https://react-hook-form.com

---

## 🎓 Next Steps

1. ✅ Understand component structure
2. ✅ Learn state management
3. ✅ Master routing
4. 🔄 Add backend API
5. 🔄 Implement authentication
6. 🔄 Add payment gateway
7. 🔄 Deploy to production

---

**Keep this guide handy for quick reference! 📖**
