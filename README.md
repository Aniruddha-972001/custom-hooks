# React Reusable Logic Demo

This project demonstrates reusable logic patterns in React using:

- Custom Hooks

- Higher Order Components (HOC)

- Local Storage

- Debouncing

- Theme Management

- Error Boundary Pattern

## Concepts Covered

### 1. Custom Hooks

A custom hook is a reusable function that contains React logic such as state, effects, refs, or other hooks.

Custom hooks help keep components clean by moving repeated logic outside of UI components.

In this project, I implemented:

- `useLocalStorage`

- `useTheme`

- `useDebounce`

---

## useLocalStorage

### Purpose

`useLocalStorage` keeps React state synchronized with the browser's `localStorage`.

Normal React state resets after page refresh.  

This hook makes the value persistent.

### Example Use Case

- Save username

- Save theme preference

- Save login flag

- Save user settings

### How It Works

1. Checks if a value already exists in `localStorage`

2. If it exists, it loads that value

3. If not, it uses the provided initial value

4. When state updates, it updates both React state and `localStorage`


## useTheme

### Purpose

`useTheme` manages light and dark theme switching.

It uses `localStorage` internally, so the selected theme stays saved after refresh.

### How It Works

1. Reads the current theme from `localStorage`

2. Applies the theme as a class on document.body

3. Provides a toggleTheme function to switch between light and dark mode


## useDebounce

### Purpose

`useDebounce` delays updating a value until the user stops typing for a specified time.

This is useful for search inputs and API calls.

### Example Use Case

### Without debounce:

- User types "react"
- API call happens for:
- r
- re
- rea
- reac
- react
  
### Without debounce:

- API call happens only after the user stops typing

### How It Works

1. `useState` to store the delayed value

2.  `useEffect` to start a timer

3.  cleanup function to clear the previous timer


## Higher Order Component

A `Higher Order Component` is a function that takes a component as input and returns a new enhanced component.
Custom hooks reuse logic inside a component.HOCs reuse logic by wrapping a component from the outside.


## withAuth HOC

### Purpose


