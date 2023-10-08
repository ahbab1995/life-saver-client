import { createContext, useContext, useEffect, useReducer, useState } from "react"
import { cartReducer } from "./Reducers";



const Card = createContext()



const Context = ({ children }) => {

  const [products] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      
  }, []);

  
const [state, dispatch] = useReducer(cartReducer, {
  products: products,
  card: [],
});

  return (
    <Card.Provider value={{ state, dispatch }}>{ children }</Card.Provider>
  )
}
export const CartState = () => {
  return useContext(Card);
};

export default Context