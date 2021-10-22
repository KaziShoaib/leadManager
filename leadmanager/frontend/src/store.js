import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import messagesReducer from "./reducers/messagesReducer";
import leadsReducer from "./reducers/leadsReducer"
import authReducer from "./reducers/authReducer";

const reducers = combineReducers({
  leads: leadsReducer,
  messages: messagesReducer,
  auth: authReducer
})

const store = createStore( reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store