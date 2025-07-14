import { useEffect, useState } from "react";
import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

// function App() {
//   const [joke, setJoke] = useState(null);
//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const response = await fetch("https://icanhazdadjoke.com/", {
//           headers: {
//             Accept: "application/json",
//           },
//         });

//         const data = await response.json();
//         console.log(data);
//         setJoke(data.joke);
//       } catch (error) {
//         console.log("Fetch error:", error);
//       }
//     };

//     fetchPost();
//   }, []);

//   return (
//     <QueryClientProvider client={queryClient}>
//       <>
//         <h1>DAD JOKES</h1>
//         {joke && <h3>{joke}</h3>}
//       </>
//     </QueryClientProvider>
//   );
// }

// export default App;

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const [joke, setJoke] = useState(null);
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      }).then((res) => res.json()),
  });
  console.log(data);
  // setJoke(data.joke);
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <h1>DAD JOKES</h1>
        {joke && <h3>{joke}</h3>}
      </>
    </QueryClientProvider>
  );
}
