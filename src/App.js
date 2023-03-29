import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>
        <Route path="/item/:productId" element={<ItemDetailContainer/>}></Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
