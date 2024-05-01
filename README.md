## Here is the Probelem Statement fo HackerRank React Interview

Create a basic navigation application , as shown below. Some core functionalities have already been implemented, but the application is not complete. Application requirements are given below, and the finished application must pass all of the unit tests.

The app has one component: the Navigation view. The list of locations to be displayed is already provided in the app.

The app should implement the following functionalities:

The locations should be initially displayed in their respective < li > tags in the same order in which they are provided.

Each location can have one or two icon buttons, depending upon its position in the list:

The first location should only have the Move Down icon button

The last location should only have the Move Up icon button

All the other Jocations should have both the Move Up and the Move Down buttons

Clicking on the Move Down button should move the location down by one position in the list.
Similarly, clicking the Move Up button should move the location up try one position in the list.

When a location is moved either up or down, it should exchange its position with the location positioned just above (if moving up) or below (if moving down).

PROBLEMS OUTPUT
The list of locations is passed as props to the Navigation component
The locations lists an array of strings, with each item representing a location in the list.

The locations list is an array of strings, with each item representing a location in the list.

Note: The utility function is last is provided to help with determining if the current location is the last item in the list. Also, the function getClasses is present in the template to aid in rendering. Please do not modify this function.

The following data-testid/class attributes are required in the component for the tests to pass:

The parent container of the location list <ul> should have the data-testid attribute 'location-list"

Each location item in the list should have the data-testid

attribute location-0', 'location-1', 'location-2, and so on.

Each location name paragraph tag <p> should have the data-testid attribute "location"

Each Move Up button should have the data-testid attribute up-button

Each Move Down button should have the data-testid attribute 'down-button

Please note that the component has the above data-testid attributes for test cases and certain classes and ids for rendering purposes. It is advised not to change them.

## Learnings

This assignment touches upon several fundamental concepts in React. Here are the main ones:

1. Props: Understanding how to pass data from a parent component to a child component using props is fundamental in React. In this assignment, you pass the locations data from the App component to the Navigation component as a prop.
   State: Managing component state is another core concept. In the Navigation component, you use the useState hook to manage the state of the locations array. When a location is moved up or down, the state is updated accordingly, triggering a re-render of the component.
2. Handling Events: React components can respond to user interactions by handling events. In this assignment, you handle the click events of the "Move Up" and "Move Down" buttons by defining event handler functions (moveUpward and moveDownward) and attaching them to the respective buttons.
3. Conditional Rendering: Sometimes, you need to conditionally render certain parts of a component based on certain conditions. In this assignment, you conditionally render the "Move Up" and "Move Down" buttons based on the position of each location in the list.
4. Key Prop in Lists: When rendering dynamic lists in React, each list item should have a unique key prop. This helps React identify which items have changed, been added, or been removed, improving performance and avoiding issues with component reordering.
