import React, { useState } from "react";
import { queryOptions } from "@tanstack/react-query";

export default function CreateTodoQueryOptions() {
  const [id, setId] = useState(1);
  const [on, setOn] = useState(true);
  return queryOptions({
    queryKey: ["todos", id],
    // queryKey: ["todos"],
    queryFn: () => getTodos(id),
    enabled: on,
  });
}

const getTodos = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  return await response.json();
};
