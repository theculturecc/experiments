import React, {
  Children,
  cloneElement,
  createContext,
  useContext,
  useState
} from "react";

const middle =
  "M233.53 274.17a50.09 50.09 0 0 1 30.32-22.31 49.59 49.59 0 0 1 19.83-.95 49.8 49.8 0 0 1 32.75 19.8 50.09 50.09 0 0 1 8.21 17.33 49.59 49.59 0 0 1 .95 19.83 49.8 49.8 0 0 1-19.8 32.75 50.09 50.09 0 0 1-17.33 8.21 49.59 49.59 0 0 1-19.83.95l-2.87 18.83a68.84 68.84 0 0 0 51.31-12.64 68.8 68.8 0 0 0 27.35-45.23 68.84 68.84 0 0 0-12.64-51.31 68.8 68.8 0 0 0-45.23-27.35 68.84 68.84 0 0 0-51.31 12.64 68.8 68.8 0 0 0-27.35 45.23l18.83 2.87a49.8 49.8 0 0 1 6.81-18.65z";

const inner =
  "M286.07 310.63a14.3 14.3 0 0 1-20.2-.37 14.3 14.3 0 0 1 .37-20.2l-13.22-13.71a33.31 33.31 0 0 0-.86 47.13 33.17 33.17 0 0 0 23.39 10.19 33.32 33.32 0 0 0 24.6-56.46l-13.71 13.22a14.3 14.3 0 0 1-.37 20.2z";

const initialState = { activeMiddle: false, activeInner: false };

export const LogoContext = createContext(initialState);

export function LogoManager({ children }) {
  const [middle, setMiddleState] = useState(false);
  const [inner, setInnerState] = useState(false);

  const toggle = updater => () => updater(state => !state);

  return (
    <LogoContext.Provider
      value={{
        activeMiddle: middle,
        toggleMiddle: toggle(setMiddleState),
        activeInner: inner,
        toggleInner: toggle(setInnerState)
      }}
    >
      {children}
    </LogoContext.Provider>
  );
}

export function CeeController({ children, type }) {
  const context = useContext(LogoContext);

  if (!type || !["Inner", "Middle", "Combo"].includes(type)) {
    throw new Error(
      'A C-Controller needs a type "Middle", "Inner" or "Combo" to know which C letter it is going to transition.'
    );
  }

  // with the "Combo" type, a Controller can
  // toggle Inner & Middle C at the same time!
  const toggleFunction =
    type === "Combo"
      ? () => {
          context[`toggleInner`]();
          context[`toggleMiddle`]();
        }
      : context[`toggle${type}`];

  // make the children of a Controller behave like a toggle button!
  return Children.map(children, child =>
    cloneElement(child, {
      onClick: toggleFunction,
      onKeyPress: event => {
        if (event.key === "Enter") {
          toggleFunction();
        }
      },
      tabIndex: 0
    })
  );
}

export default function Logo(props) {
  const { activeMiddle, activeInner } = useContext(LogoContext);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      fill="#282725"
      {...props}
    >
      <g id="C-C-C">
        <path d="M325.46 370.5a85.31 85.31 0 0 1-30.02 13.37 85.32 85.32 0 0 1-64.71-10.83 85.31 85.31 0 0 1-38.1-53.41 85.32 85.32 0 0 1 10.83-64.71 85.31 85.31 0 0 1 53.41-38.1 85.32 85.32 0 0 1 64.71 10.83l10.1-16.15a104.15 104.15 0 0 0-59.17-15.87 105.37 105.37 0 0 0-38.98 9 104.11 104.11 0 0 0-46.23 40.2A104.15 104.15 0 0 0 171.43 304a105.37 105.37 0 0 0 9 38.98 104.11 104.11 0 0 0 40.2 46.23 104.15 104.15 0 0 0 59.17 15.87 105.37 105.37 0 0 0 38.98-9 104.11 104.11 0 0 0 46.23-40.2l-16.15-10.1a85.56 85.56 0 0 1-23.4 24.72z" />
        <path d={middle} />
        <path
          d={middle}
          style={{
            transition: `transform 0.4s ease-${activeMiddle ? "out" : "in"}`,
            transform: activeMiddle ? "rotate(180deg)" : "",
            transformOrigin: "276.2px 300.3px"
          }}
        />
        <path d={inner} />
        <path
          d={inner}
          style={{
            transition: `transform 0.4s ease-${activeInner ? "out" : "in"}`,
            transform: activeInner ? "rotate(180deg)" : "",
            transformOrigin: "276.2px 300.3px"
          }}
        />
      </g>
      <g id="The_Culture">
        <path d="M419.8 292.06a.5.5 0 0 0 .5-.5v-40.21c0-9.81-5.37-15.67-14.37-15.67-5.58 0-8.96 2.7-11.47 5.65v-17.17a.5.5 0 0 0-.5-.5H338.44a.5.5 0 0 0-.5.5v10.83c0 .28.22.5.5.5h15.74v42.04c0 .28.22.5.5.5h11.74a.5.5 0 0 0 .5-.5v-42.04h14.96v42.32c0 .28.22.5.5.5h11.59a.5.5 0 0 0 .5-.5v-22.79c0-5.04 2.39-7.81 6.74-7.81 4.26 0 6.51 2.7 6.51 7.81l.02 36.55c0 .28.22.5.5.5h11.56zM444.65 278.93c7.91 0 13.34-2.16 17.08-6.81a.5.5 0 0 0-.06-.69l-6.63-5.87a.5.5 0 0 0-.67.01c-3.07 2.85-5.78 3.06-9.57 3.06-4.85 0-8.14-2.48-9.35-7h27.8a.5.5 0 0 0 .5-.46l.05-.64c.06-.74.11-1.38.11-2.3v-.15c0-16.74-10.99-22.68-20.4-22.68-11.8 0-20.7 9.36-20.7 21.77v.15c0 12.52 9.18 21.61 21.84 21.61zm-9.38-25.55c1.03-4.9 4.01-7.69 8.24-7.69 4.24 0 7.21 2.86 8.03 7.69h-16.27z" />
        <path d="M397.25 325.62a.5.5 0 0 0-.69-.02c-4.26 3.88-7.87 6.12-13.69 6.12-8.54 0-14.98-7-14.98-16.27v-.15c0-9.19 6.44-16.12 14.98-16.12 4.71 0 8.82 1.82 13.31 5.89.1.09.23.14.37.13a.53.53 0 0 0 .35-.17l7.47-8.61a.5.5 0 0 0-.03-.68c-5.88-5.79-12.48-8.38-21.39-8.38-16.15 0-28.32 12.08-28.32 28.1v.15c0 15.93 11.98 27.94 27.87 27.94 9.36 0 15.81-2.81 22.24-9.69a.5.5 0 0 0-.01-.69l-7.48-7.55zM446.08 300.77h-11.59a.5.5 0 0 0-.5.5v22.79c0 5.04-2.39 7.81-6.74 7.81-4.26 0-6.51-2.7-6.51-7.81v-22.79a.5.5 0 0 0-.5-.5h-11.59a.5.5 0 0 0-.5.5v26.45c0 9.81 5.37 15.67 14.37 15.67 5.58 0 8.96-2.7 11.47-5.65v4.38c0 .28.22.5.5.5h11.59a.5.5 0 0 0 .5-.5v-40.86a.5.5 0 0 0-.5-.49zM464.52 288.98h-11.59a.5.5 0 0 0-.5.5v52.65c0 .28.22.5.5.5h11.59a.5.5 0 0 0 .5-.5v-52.65a.5.5 0 0 0-.5-.5zM541.13 300.77h-11.59a.5.5 0 0 0-.5.5v22.79c0 5.04-2.39 7.81-6.74 7.81-4.26 0-6.51-2.7-6.51-7.81v-22.79a.5.5 0 0 0-.5-.5h-27.4v-10.94a.5.5 0 0 0-.5-.5H475.8a.5.5 0 0 0-.5.5v10.94h-4.38a.5.5 0 0 0-.5.5v9.91c0 .28.22.5.5.5h4.38v18.86c0 8.71 3.94 12.77 12.39 12.77 3.62 0 6.61-.77 9.4-2.43a.5.5 0 0 0 .25-.43v-9.3a.48.48 0 0 0-.25-.43.5.5 0 0 0-.49-.01 11.33 11.33 0 0 1-5.48 1.39c-2.27 0-3.24-1.04-3.24-3.46v-16.96h15.31v16.04c0 9.81 5.37 15.67 14.37 15.67 5.58 0 8.96-2.7 11.47-5.65v4.38c0 .28.22.5.5.5h11.59a.5.5 0 0 0 .5-.5v-40.86a.48.48 0 0 0-.49-.49zM573.09 300.01c-5.65-.27-9.79 2.13-12.56 7.28v-6.02a.5.5 0 0 0-.5-.5h-11.59a.5.5 0 0 0-.5.5v40.86c0 .28.22.5.5.5h11.59a.5.5 0 0 0 .5-.5v-15.09c0-9.1 4.12-13.91 11.93-13.91h.61a.5.5 0 0 0 .5-.5v-12.12a.5.5 0 0 0-.48-.5zM594.34 300.01c-11.8 0-20.7 9.36-20.7 21.77v.15c0 12.53 9.19 21.62 21.84 21.62 7.91 0 13.34-2.16 17.08-6.81a.5.5 0 0 0-.06-.69l-6.63-5.87a.5.5 0 0 0-.67.01c-3.07 2.85-5.78 3.06-9.57 3.06-4.85 0-8.14-2.48-9.35-7h27.8a.5.5 0 0 0 .5-.46l.05-.63c.06-.74.11-1.38.11-2.3v-.15c0-16.76-10.99-22.7-20.4-22.7zm0 10.3c4.24 0 7.21 2.86 8.03 7.69H586.1c1.03-4.9 4.01-7.69 8.24-7.69z" />
      </g>
    </svg>
  );
}
