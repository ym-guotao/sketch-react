import * as cs from '../constants';


// common action, some of them used to UI changing
export function setUIElement(domain, key, value) {
  return {
    domain,
    type: Constants.SET_UI_ELEMENT,
    payload: { key, value },
  };
}
