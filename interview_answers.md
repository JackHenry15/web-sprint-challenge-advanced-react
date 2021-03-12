# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
One has a state. A stateful component is keeping track of changing data, where as a stateless functional component either always renders the same thing, or it changes based on props.
2. When does a componentWillMount function be called? What about a componentWillUpdate?
componentWillMount is invoked immediately before mounting occurs, before render. ComponentWillUpdate is invoked every time a re-render is required.
3. Define stateful logic.
Any code that uses state.
4. What are the three step of creating a successful test? What is done in each phase?
Arrange: use the render method to render a react element/inputs/conditions into the DOM,
act: Manipulate the target object or method you are testing,
assert: Make sure that the expected results have occurred.