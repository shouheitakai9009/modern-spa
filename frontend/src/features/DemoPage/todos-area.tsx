import { Checkbox } from '@/components/common/Checkbox';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/common/Table';
import { useState } from 'react';

interface TodoItem {
  checked: boolean;
  cateogory: 'work' | 'private';
  todo: string;
  createdAt: string;
}

const defaultTodos: TodoItem[] = [
  {
    checked: true,
    cateogory: 'work',
    todo: 'will remember how to use effect',
    createdAt: '2023-11-16',
  },
  {
    checked: false,
    cateogory: 'work',
    todo: 'styling an English app using @shadcn/ui',
    createdAt: '2023-11-17',
  },
  {
    checked: false,
    cateogory: 'private',
    todo: 'Trip the U.S with my wife',
    createdAt: '2023-11-17',
  },
  {
    checked: false,
    cateogory: 'private',
    todo: 'Go to a shopping mole with my baby',
    createdAt: '2023-11-17',
  },
];

export const TodosArea = () => {
  const [todos, setTodos] = useState<TodoItem[]>(defaultTodos);

  const onCheckedChange = (todo: TodoItem, checked: boolean | string) => {
    setTodos(
      todos.map((t) => {
        if (t.todo === todo.todo) {
          return {
            ...t,
            checked: checked as boolean,
          };
        }
        return t;
      }),
    );
  };

  return (
    <div>
      <Table>
        <TableCaption>Todos will archive parts of your life</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Todo</TableHead>
            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.todo}>
              <TableCell>
                <Checkbox
                  checked={todo.checked}
                  onCheckedChange={(checked) => onCheckedChange(todo, checked)}
                />
              </TableCell>
              <TableCell>{todo.cateogory}</TableCell>
              <TableCell>{todo.todo}</TableCell>
              <TableCell>{todo.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
