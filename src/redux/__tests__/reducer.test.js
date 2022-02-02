jest.mock("../initial-state", () => {
  return {
    initialState: {
      todos: [],
    },
  };
});

import reducer from "../reducer";

describe("Reducer", () => {
  beforeEach(() => {
    global.window = {
      localStorage: {
        setItem: jest.fn(),
      },
    };
  });
  afterEach(()=>{
    global.window=null;
  })
  test("should add a todo item", () => {
    const initialState = {
      todos: [],
    };
    const action = {
      type: "ADD_TODO",
      payload: {
        title: "test",
      },
    };
    const newState = reducer(initialState, action);
    expect(newState.todos[0].title).toEqual("test");
  });
});
