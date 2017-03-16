import {createSelector} from 'reselect';


export const selectEmail = state => state.session.email;
export const selectMsgId = state => state.message.result;
export const selectMsgEntities = state => state.entities.messages;
export const selectMsg = createSelector(
  [selectMsgId, selectMsgEntities, selectEmail],
  (id, entities) => {
    if(entities[id]) {
      return entities[id].content;
    }

    return null;
  }
);
