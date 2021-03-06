# Follow those steps to run the App

## 1: clone repo and install dependencies

`git clone <repo-link>`

## 2: Run Server

Run the server with the following
`yarn server`

With json-server mock API will be available at the port 5001 (The server should be up and running before running the app. In the opposite case an error message should be displayed on the screen!)

## 3: Run App

Run the app with the following
`yarn start`

it will open the application to the port 3000

## 4: Tests

To check the test run following:
`yarn test`

# Tasks

We would like you to demonstrate, using a technology of your choice, how to fetch and manipulate data in a json format and then present that to a user.

Given the two datasets in this repository, create a Javascript project that creates a component similar to the wire frame provided.

This task should take you somewhere from a few hours to a day. Please don’t take any more time than this, we are more interested in your approach than completing the task.

Please look at the mockup provided and decide how best to approach this problem.

## Acceptance Criteria

Some basic acceptance criteria is as below:

1. Given I load the component I am presented with a list of installed SDK’s.
2. Given the component is loaded, and ‘Installed’ is selected, when I click the “uninstalled” button, the application will render the list of uninstalled SDK’s.
3. Given the component is loaded, and ‘Uninstalled’ is selected, when I click the “installed” button, the application will render the list of installed SDK’s.
4. Given the list is rendered I would like to see the SDK’s grouped into their categories.
5. Given the component is loaded I would like to see the last seen date for each SDK in a human readable format.
6. Given the component is loaded I would like to see the latest updated date in the format provided in the wire frame.
7. Given the component is loaded I would like to see the total count of SDK’s.

## Outcomes

Some things we would like to see:

- Frequent commits.
- Some testing implementation.
- A choice of application state (context, redux etc)
- Some UI decisions being made, a UI wire frame has been provided but feel free to add your own framework or styles.

It’s up to you what technology you want to use to achieve this. Our current stack is using React and GraphQL but we are more interested in your approach to solving the task given to you.
