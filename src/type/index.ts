interface Category {
  id: string;
  name: string;
}

interface Tasks {
  id: string;
  name: string;
  category: string;
  description: string;
  status:string;
}

export interface User {
  id: string;
  token: string;
  name: string;
  email: string;
  isLogin: boolean;
}

export interface UserState {
  user: User;
  error: null | string;
  status: "idle" | "loading" | "succeeded" | "failed";
}

export interface CategoriesState {
  categories: Category[];
  status: "loading" | "succeeded" | "failed";
  error: null | string;
}

export interface TaskState {
  tasks: Tasks[];
  status: "loading" | "succeeded" | "failed";
  error: null | string;
}
