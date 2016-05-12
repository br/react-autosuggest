import {
  INPUT_FOCUSED,
  INPUT_BLURRED,
  INPUT_CHANGED,
  UPDATE_FOCUSED_SUGGESTION,
  REVEAL_SUGGESTIONS,
  CLOSE_SUGGESTIONS} from "./constants";

export function inputFocused(shouldRenderSuggestions) {
  return {
    type: INPUT_FOCUSED,
    shouldRenderSuggestions
  };
}

export function inputBlurred() {
  return {
    type: INPUT_BLURRED
  };
}

export function inputChanged(shouldRenderSuggestions, lastAction) {
  return {
    type: INPUT_CHANGED,
    shouldRenderSuggestions,
    lastAction
  };
}

export function updateFocusedSuggestion(sectionIndex, suggestionIndex, value) {
  return {
    type: UPDATE_FOCUSED_SUGGESTION,
    sectionIndex,
    suggestionIndex,
    value
  };
}

export function revealSuggestions() {
  return {
    type: REVEAL_SUGGESTIONS
  };
}

export function closeSuggestions(lastAction) {
  return {
    type: CLOSE_SUGGESTIONS,
    lastAction
  };
}
