import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>
        <Route path="/item/:productId" element={<ItemDetailContainer/>}></Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
