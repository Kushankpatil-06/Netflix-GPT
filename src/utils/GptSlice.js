import { createSlice } from '@reduxjs/toolkit';

const GptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch : (false)
    },
    reducers: {
        ToggleGptView: (state, action) => {
            state.showGptSearch =  !state.showGptSearch
            },
},
}
)
export const {ToggleGptView}=GptSlice.actions;

export default GptSlice.reducer