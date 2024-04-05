import Provider from "./Context/Provider.jsx"
import Cart from "./components/Cart/Cart.jsx"
import Header from "./components/Header/Header.jsx"
import Products from "./pages/contents/Products.jsx"

import "./styles/index.css"

export default function App() {
  return (
    <Provider className="container-project">

      <Header />
      <Products />
      <Cart />

    </Provider>
  )
}