import { useEffect } from "react";
import "./App.css";

function App() {
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
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };

    fetchPost();
  }, []);

  return (
    <>
      <h1>API</h1>
    </>
  );
}

export default App;
