interface Task {
  id: number;
  text: string;
  completed: boolean;
}

type Action =
  | { type: "DELETED"; payload: number }
  | { type: "TOGGLED"; payload: number }
  | { type: "ADD"; payload: Task }
  | { type: "DUPLICATE"; payload: number }
  | { type: "CLEARED" };

export function myReducer(state: Task[], action: Action) {
  console.log("ЭТО ОБЬЕКТ ACTION:", action);
  switch (action.type) {
    case "DELETED":
      return state.filter((task) => task.id !== action.payload);
    case "TOGGLED":
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      });
    case "CLEARED":
      return state.filter((task) => task.completed === false);
    case "ADD":
      return [...state, action.payload];
    case "DUPLICATE": {
      const original = state.find((task) => task.id === action.payload);
      if (original === undefined) return state;
      const duplicateTodo = {
        text: original.text,
        id: Date.now(),
        completed: false,
      };
      return [...state, duplicateTodo];
    }
    default:
      return state;
  }
}