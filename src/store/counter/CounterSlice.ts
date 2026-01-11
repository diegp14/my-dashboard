import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number,
  isReady: boolean
}

const initialState: CounterState = {
  value: 5,
  isReady: false
}

const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    initCounterState(state, action: PayloadAction<number>) {
      if(state.isReady) return;
      state.value = action.payload;
      state.isReady = true;
    },

    addOne: (state) => {
      state.value += 1;
    },
    subtractOne: (state) => {
      if(state.value === 1) return;
      state.value -= 1;
    },
    resetCount: (state, action: PayloadAction<number>) => {
      if(action.payload < 0) action.payload = 0;
      state.value = action.payload;
    }
    
  }
});

export const { addOne, subtractOne, resetCount, initCounterState } = CounterSlice.actions;

export default CounterSlice.reducer;