"use client";

interface ITodoItemProps {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
}

export function TodoItem({ id, title, complete, toggleTodo }: ITodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className=" cursor-pointer peer"
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
        defaultChecked={complete}
      >
        {title}
      </label>
    </li>
  );
}
