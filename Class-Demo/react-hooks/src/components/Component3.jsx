import { useContext } from "react";
import { UserContext } from "../hooks/UserContext";
import { ProductContext } from "../hooks/ProductContext";

export function Component3() {
  const user = useContext(UserContext); 
  const product = useContext(ProductContext);

  return (
    <>
      <h1>Hello From Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
      <h2>{`Product: ${product}`}</h2>
    </>
  );
}