import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CharacterDataState {
    nickname?: string,
    age?: string,
    race?: string,
    faction?: string,
    gender?: string,
    employment?: string,
}

const initialState: CharacterDataState = {
    nickname: 'Test',
    age: 'Test',
    race: 'Test',
    faction: 'Test',
    gender: 'Test',
    employment: 'Test',
}

export const characterDataSlice = createSlice({
    name: 'characterData',
    initialState,
    reducers: {
        setNickname: (state, action: PayloadAction<string>) => {
            state.nickname = action.payload;
        },
        setAge: (state, action: PayloadAction<string>) => {
            state.age = action.payload;
        },
        setRace: (state, action: PayloadAction<string>) => {
            state.race = action.payload;
        },
        setFaction: (state, action: PayloadAction<string>) => {
            state.faction = action.payload;
        },
        setGender: (state, action: PayloadAction<string>) => {
            state.gender = action.payload;
        },
        setEmployment: (state, action: PayloadAction<string>) => {
            state.employment = action.payload;
        }
    }
});

export const { 
    setNickname, 
    setAge, 
    setRace, 
    setFaction, 
    setGender, 
    setEmployment 
} = characterDataSlice.actions;

export default characterDataSlice.reducer;