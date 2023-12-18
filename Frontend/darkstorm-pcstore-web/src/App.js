import "./App.css";
import { DetailPage } from "./Pages/DetailPage";
import { LandingPage } from "./Pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NoFOundPage } from "./Pages/NoFoundPage";
import { CheckoutPage } from "./Pages/CheckoutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="detail" element={<DetailPage />} />
          <Route path="cart-checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NoFOundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
