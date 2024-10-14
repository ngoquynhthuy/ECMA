import { render  , router} from "../lib"
import HomePage from "./pages/home"
import ProductPage from "./pages/products"
import './style/main.css'
import NotFoundPage from "./pages/NotFound"
import AdminProducts from "./pages/admin/Products"
import Dashboard from "./pages/admin/Dashboard"
import AdminProductEditPage from "./pages/admin/Product-edit"
import SignIn from "./pages/sign-in"
import SignUp from "./pages/sign-up"
import cart from "./pages/cart"

// Khai bao DOM
var app = document.querySelector("#app")

// app.innerHTML = ProductPage()

router.on('/', function() {
    render(HomePage, app)
})  
router.on('/products/:id', function({data}) {
    render(() => ProductPage(data.id), app)
})
router.on('/cart', function(){
    render(cart, app);
})


// Sign-in / Sign-out
router.on(`/sign-in`, function(){
    render(SignIn, app);
})
router.on(`/sign-up`, function(){
    render(SignUp,app);
})




// Admin

router.on('/admin/dashboard', function() {
    render(Dashboard, app)
})
router.on('/admin/products', function() {
    render(AdminProducts, app)
})
router.on('/admin/products/:id/edit', function({data}) {
    render(() =>AdminProductEditPage(data.id), app)
})


// router.notFound()


router.notFound(() => render(NotFoundPage, app));

router.resolve()

