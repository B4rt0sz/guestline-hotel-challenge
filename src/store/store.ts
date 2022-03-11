import { configureStore } from '@reduxjs/toolkit'

import starReducer from './slices/starSlice'
import adultsReducer from './slices/adultsSlice'
import childrenReducer from './slices/childrenSlice'

export const store = configureStore({
  reducer: {
    star: starReducer,
    adults: adultsReducer,
    children: childrenReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
