import { createSlice } from '@reduxjs/toolkit';

const skip = [0, 12, 24];

export const pageSlice = createSlice({
    name: 'page',
    initialState: {
        current: 1,
        offset: 0,
    },
    reducers: {
        increment: (state) => {
            if (state.current < 3) {
                state.current += 1;
                state.offset += 12;
            }
        },
        decrement: (state) => {
            if (state.current > 1) {
                state.current -= 1;
                state.offset -= 12;
            }
        },
        incrementBySelection: (state, action) => {
            state.current = action.payload;
            state.offset = skip[state.current - 1];
        },
    },
});

export const { increment, decrement, incrementBySelection } = pageSlice.actions;

export default pageSlice.reducer;
