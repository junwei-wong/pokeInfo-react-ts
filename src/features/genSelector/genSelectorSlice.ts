import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface GenSelectorState {
  genStart: number
  genEnd: number
}

const initialState: GenSelectorState = {
  genStart: 0,
  genEnd: 150,
}

type GenIndexMappingType = {
  [genId: string]: { genStart: number; genEnd: number }
}

const GenIndexMapping: GenIndexMappingType = {
  1: { genStart: 0, genEnd: 150 },
  2: { genStart: 151, genEnd: 250 },
  3: { genStart: 251, genEnd: 385 },
  4: { genStart: 386, genEnd: 492 },
  5: { genStart: 493, genEnd: 648 },
  6: { genStart: 649, genEnd: 720 },
  all: { genStart: 0, genEnd: 720 },
}

export const genSelectorSlice = createSlice({
  name: "genSelector",
  initialState,
  reducers: {
    selectByGeneration: (state, action: PayloadAction<string>) => {
      const { genStart, genEnd } = GenIndexMapping[action.payload]
      state.genStart = genStart
      state.genEnd = genEnd
    },
  },
  selectors: {
    selectGenStart: genSelector => genSelector.genStart,
    selectGenEnd: genSelector => genSelector.genEnd,
  },
})

export const { selectByGeneration } = genSelectorSlice.actions

export const { selectGenStart, selectGenEnd } = genSelectorSlice.selectors
