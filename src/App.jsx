import { useEffect, useState } from "react";
import "./App.css";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

function App() {
  const [id, setId] = useState(1);
  const [on, setOn] = useState(true);
  const { data, isPending, isLoading, isFetching, refetch, error } = useQuery({
    queryKey: ["todos", id],
    // queryKey: ["todos"],
    queryFn: () => getTodos(id),
    enabled: on,
  });
  console.log(data?.slice(0, 10));

  if (error) {
    alert("Something went wrong");
  }

  return (
    <>
      <div>
        {isPending ? (
          <span class="loader"></span>
        ) : (
          JSON.stringify(data?.slice(0, 10))
        )}
      </div>
      <br />
      {/* <button onClick={() => refetch()}>Refetch</button> */}
      <button onClick={() => setId((prev) => prev + 1)}>Increment ID</button>
    </>
  );
}

const getTodos = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  return await response.json();
};

export default App;

// const queryClient = new QueryClient();

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// export default function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Example />
//     </QueryClientProvider>
//   );
// }

// function Example() {
//   const [joke, setJoke] = useState(null);
//   const { isPending, error, data } = useQuery({
//     queryKey: ["repoData"],
//     queryFn: () =>
//       fetch("https://icanhazdadjoke.com/", {
//         headers: {
//           Accept: "application/json",
//         },
//       }).then((res) => res.json()),
//   });
//   console.log(data);

//   if (isPending) return <h1>Loading...</h1>;

//   if (error) return "An error has occurred: " + error.message;

//   return (
//     <QueryClientProvider client={queryClient}>
//       <>
//         <h1>DAD JOKES</h1>
//         <br />
//         <br />
//         <br />
//         {data && <h3>{data.joke}</h3>}
//       </>
//     </QueryClientProvider>
//   );
// }
