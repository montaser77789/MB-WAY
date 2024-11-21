import { createSlice } from "@reduxjs/toolkit";

// تعديل اسم الواجهة لتجنب 
interface InboxMessageState {
  isOpen: boolean;
}

const initialState: InboxMessageState = {
  isOpen: false,
};

export const InboxMessage = createSlice({
  name: "Message",
  initialState,
  reducers: {
    toogleInboxMessage: (state : InboxMessageState) => {
      state.isOpen = !state.isOpen;
      console.log(state.isOpen);
    }
  },
});

export const { toogleInboxMessage } = InboxMessage.actions;

export default InboxMessage.reducer;
