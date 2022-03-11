import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface childrenState {
  value: number
}

const initialState: childrenState = {
  value: 0,
}

export const childrenSlice = createSlice({
  name: 'children',
  initialState,
  reducers: {
    addChild: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },

    decreaseChild: (state, action: PayloadAction<number>) => {
      if (state.value > 0) {
        state.value -= action.payload
      }
    },
  },
})

export const { addChild, decreaseChild } = childrenSlice.actions

export const numberOfChildren = (state: RootState) => state.children.value

export default childrenSlice.reducer
