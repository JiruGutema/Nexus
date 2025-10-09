import { Link, useParams } from "react-router-dom";

export default function Iphone() {
    const {params} = useParams();
    
  return (
    <>
      <h1>Iphone Page</h1>
      <h1>We have the latest {params.model} model available!</h1>
      <p>Welcome to the Iphone page!</p>
      <Link to="/phone/Samsung">Go to Samsung</Link>
    </>
  );
}
