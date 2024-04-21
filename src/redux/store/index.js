import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducer from "../reducers";
import middlewares from "../middleware/index";

// Configuration de la persistance
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: [
    "language",
  ],
};

// Création du reducer persistant
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Création du store avec le reducer persistant et Redux Thunk middleware
const store = createStore(persistedReducer, middlewares);

// Création du persistor, utilisé pour réhydrater le store au démarrage de l'application
const persistor = persistStore(store);

export { store, persistor };
