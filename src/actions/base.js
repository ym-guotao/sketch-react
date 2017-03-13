import * as cs from '../constants';


// common action, some of them used to UI changing
export default function setUIElement(domain, key, value) {
  return {
    domain,
    type: cs.SET_UI_ELEMENT,
    payload: { key, value },
  };
}
