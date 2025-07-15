import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "./api";

function Demo() {
  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ["todos"],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <h1>
        <b>React Query Tutorial</b>
      </h1> */}
      {todos?.map((todo, index) => (
        <TodoCard key={index} tod0={todo} />
      ))}
    </div>
  );
}

export default Demo;
