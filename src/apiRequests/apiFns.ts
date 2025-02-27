import { useQuery, useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:4040" });

// const useQueryTodos = () => {
//   return useQuery({
//     queryKey: ["todos"],
//     queryFn: async () => {
//       const res = await axiosInstance.get("/todos");
//       return res.data;
//     },
//   });
// };

const useAddPlace = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (placeSummary: any) => {
      return await axiosInstance.post("/register/place", placeSummary);
    },
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ["place"] });
    // },
  });
};

// const useUpdateTodo = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: async (todo: ITodo) => {
//       return await axiosInstance.patch(`/todos/${todo.id}`, todo);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["todos"] });
//     },
//   });
// };

// const useDeleteTodo = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: async ({ id }: { id: string }) => {
//       return await axiosInstance.delete(`/todos/${id}`);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["todos"] });
//     },
//   });
// };

// export { useQueryTodos, useAddTodo, useUpdateTodo, useDeleteTodo };
export { useAddPlace };
