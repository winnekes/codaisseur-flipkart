import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import ReduxThunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
	? window.__REDUX_DEVTOOLS_EXTENSION__()
	: x => x;

const persistConfig = {
	// Root
	key: "root",
	storage
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducer);

const enhancer = compose(
	applyMiddleware(ReduxThunk),
	devTools
);

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

export { store, persistor };
