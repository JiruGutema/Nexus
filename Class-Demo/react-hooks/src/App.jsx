// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import ProfileCard from "./components/ProfileCard";
// import UserDetails from "./components/UserDetails";
// import { UserContext } from "./hooks/UserContext";
// import "./App.css";

// // ✅ Create the context once — outside the component
// export default function App() {
//   const [user] = useState({
//     name: "Jiru Gutema",
//     email: "jiru@example.com",
//     role: "Software Developer",
//     avatar:
//       "https://res.cloudinary.com/dohn3v11c/image/upload/v1759605966/gulit_removed_bag_w35x0t.png",
//   });

//   return (
//     <UserContext.Provider value={user}>
//       <div className="app-container">
//         <Navbar />
//         <main className="main-content">
//           {/* Pass via props */}
//           <ProfileCard user={user} />

//           {/* Access via context */}
//           <UserDetails />
//         </main>
//       </div>
//     </UserContext.Provider>
//   );
// }

// import { useState } from "react";
// import "./App.css";
// function App() {
//   const theme = localStorage.getItem("theme");
//   const [color, setColor] = useState(theme);
//   const [textColor, setTextColor] = useState("black");

//   return (
//     <div style={{ backgroundColor: color, color: textColor }} className="app">
//       <h1>My favorite color is {color}!</h1>
//       <button
//         type="button"
//         style={{ backgroundColor: textColor, color: color }}
//         onClick={() => {
//           if (color !== "white") {
//             setColor("white");
//             setTextColor("black");
//           } else {
//             setColor("black");
//             setTextColor("white");
//           }
//           localStorage.setItem("theme", color);
//         }}
//       >
//         Blue
//       </button>
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import { useEffect, useState } from "react";
// function App() {
//   const [number_one, setNumberOne] = useState(0);
//   const [number_two, setNumberTwo] = useState(0);
//   const [sum, setSum] = useState(0);

//   useEffect(() => {
//     setSum(() => number_one + number_two);
//   }, [number_one, number_two]); // <- add the count variable here

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <p style={{ fontSize: "24px", color: "black" }}>Sum: {sum}</p>

//       <button
//         style={{ marginRight: "10px" }}
//         onClick={() => {
//           setNumberOne((n) => n + 1),
//             console.log("number one", number_one),
//             console.log("number two", number_two);
//         }}
//       >
//         Increament Number One
//       </button>

//       <button
//         onClick={
//          () => {
//           setNumberTwo((n) => n + 1),
//             console.log("number one", number_one),
//             console.log("number two", number_two);
//         }

//         }
//       >
//         Increament Number Two
//       </button>
//     </div>
//   );
// }
// export default App;

import { useState } from "react";
import { UserContext } from "./hooks/UserContext";
import { ProductContext } from "./hooks/ProductContext";
import { Component2 } from "./components/Component2";
import { Component3 } from "./components/Component3";

function App() {
  const [user] = useState("Jiru Gutema");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <UserContext.Provider value={user}>
      <Component3 />
      </UserContext.Provider>

      
      <ProductContext.Provider value={"Laptop"}>
        <Component2 />
      </ProductContext.Provider>
    </>
  );
}

export default App;
