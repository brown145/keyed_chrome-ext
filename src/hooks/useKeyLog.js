import { useEffect, useReducer } from "react";

const MODIFIER_KEYS = ["Alt", "Control", "Meta", "Shift"];
const INPUT_ELEMENTS = ["INPUT", "TEXTAREA"];

const defaultState = {
  key: null,
  modifiers: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "keydown":
      return { ...state, ...payload };
    default:
      return state;
  }
};

const getModifiers = (event) => {
  const { altKey, ctrlKey, metaKey, shiftKey } = event;
  const modifiers = [];

  if (altKey) modifiers.push("ALT");
  if (ctrlKey) modifiers.push("CTRL");
  if (metaKey) modifiers.push("CMD");
  if (shiftKey) modifiers.push("SHIFT");

  return modifiers;
};

const useKeyLog = (config = {}) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    const { allowInputs = false, allowRepeat = false } = config;

    const hotkeyHandler = (event) => {
      if (!event.key) return;
      if (event.repeat && !allowRepeat) return;
      if (!allowInputs && INPUT_ELEMENTS.includes(event.target.tagName)) return;
      if (MODIFIER_KEYS.includes(event.key)) return;

      const { key } = event;
      const modifiers = getModifiers(event);
      const keypressed = event.code.toLowerCase() === "space" ? "Space" : key;

      dispatch({ type: "keydown", payload: { key: keypressed, modifiers } });
    };

    document.addEventListener("keydown", hotkeyHandler);

    return () => document.removeEventListener("keydown", hotkeyHandler);
  }, [config]);

  return state;
};

export default useKeyLog;
