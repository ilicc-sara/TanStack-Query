import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState(null);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json",
          },
        });

        const data = await response.json();
        console.log(data);
        setJoke(data.joke);
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };

    fetchPost();
  }, []);

  return (
    <>
      <h1>DAD JOKES</h1>
      {joke && <h3>{joke}</h3>}
    </>
  );
}

export default App;
