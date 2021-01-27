import React, { useState } from "react";
import {
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
  const [todoString, setTodoSring] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoString === "") {
      return alert("Please enter a todo");
    }
    const todo = {
      todoString,
      id: v4(),
    };

    addTodos(todo);

    setTodoSring("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your Next Todo"
            value={todoString}
            onChange={(e) => setTodoSring(e.target.value)}
          />
          <InputGroupAddon>
            <Button color="warning">Add</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};
export default TodoForm;
