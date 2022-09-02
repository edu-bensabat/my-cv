const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  home: true,
  curriculo: false,
  contato: false,
  sobreSite: false,
};

const componentConfigSlice = createSlice({
  name: 'componentConfig',
  initialState,
  reducers: {
    closeComponents(state) {
      state.home = false;
      state.curriculo = false;
      state.contato = false;
      state.sobreSite = false;
    },

    openHome(state) {
      state.home = true;
    },

    openCurriculo(state) {
      state.curriculo = true;
    },

    openContato(state) {
      state.contato = true;
    },

    openSobreSite(state) {
      state.sobreSite = true;
    },
  },
});


export const componentConfigActions = componentConfigSlice.actions
export const componentConfigReducer = componentConfigSlice.reducer
