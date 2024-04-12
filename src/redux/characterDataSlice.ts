import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import { set } from "react-hook-form";
import { IFormInput } from "../screens/CharacterSheet";
import { CharacterSheet } from "../util/import/getImportedCharacter";

export interface CharacterDataState extends CharacterSheet {}

const initialState: CharacterDataState = {};

export const characterDataSlice = createSlice({
  name: "characterData",
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
    },
    setData: (state, action: PayloadAction<CharacterSheet>) => {
      state.name = action.payload.name;
      state.imageUrl = action.payload.imageUrl;
      state.nickname = action.payload.nickname;
      state.age = action.payload.age;
      state.race = action.payload.race;
      state.faction = action.payload.faction;
      state.gender = action.payload.gender;
      state.employment = action.payload.employment;
      state.background = action.payload.background;
      state.personality = action.payload.personality;
      state.appearance = action.payload.appearance;
      state.battleStyle = action.payload.battleStyle;
      state.weapons = action.payload.weapons;
      state.strengths = action.payload.strengths;
      state.weaknesses = action.payload.weaknesses;
      state.strength = action.payload.strength;
      state.fortitude = action.payload.fortitude;
      state.speed = action.payload.speed;
      state.agility = action.payload.agility;
      state.dexterity = action.payload.dexterity;
      state.precision = action.payload.precision;
      state.intellect = action.payload.intellect;
      state.sharpness = action.payload.sharpness;
      state.instinct = action.payload.instinct;
      state.energy = action.payload.energy;
      state.knowledges = action.payload.knowledges;
      state.haki = action.payload.haki;
      state.medals = action.payload.medals;
    },
  },
});

export const {
  setNickname,
  setAge,
  setRace,
  setFaction,
  setGender,
  setEmployment,
  setData,
} = characterDataSlice.actions;

export default characterDataSlice.reducer;
