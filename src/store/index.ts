import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import shopReducer from './shop/reducers';

const rootResucer = combineReducers({
    shop: shopReducer
});

export type AppState = ReturnType<typeof rootResucer>;

export default function configureStorage() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootResucer,
        composeWithDevTools(middleWareEnhancer)
    );

    return store;
}