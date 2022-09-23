import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: { items: [], totalQuantity: 0, itemsToRemove: [] },
  reducers: {
    fillCardList(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.items.length;
    },
    addItemToRemoveList(state, action) {
      const id = action.payload;
      const existingItem = state.itemsToRemove.find((item) => item === id);

      if (!existingItem) {
        state.itemsToRemove.push(id);
      }
    },
    removeItemFromRemoveList(state, action) {
      const id = action.payload;
      const existingItem = state.itemsToRemove.find((item) => item === id);

      if (existingItem) {
        state.itemsToRemove = state.itemsToRemove.filter((item) => item !== id);
      }
    },
    addItemToCardList(state) {
      const lastItemId = state.items[state.items.length - 1]?.id;      
      let newId = "m1";

      if (lastItemId && isNaN(lastItemId)) {
        newId = `m${+lastItemId.slice(1) + 1}`;
      }

      state.items.push({
        id: newId,
        headerText: "Name",
        bodyText: "Description",
        source: "local"
      });

      state.totalQuantity++;
    },
    removeItemsFromCardList(state) {
      const removeIds = state.itemsToRemove;
      let newItemsList;
      newItemsList = state.items.filter((item) => !removeIds.includes(item.id));
      state.items = newItemsList;

      state.totalQuantity = newItemsList.length;
      state.itemsToRemove.length = 0;
    },
    updateExistingItem(state, action) {
      const id = action.payload.id;
      const newData = action.payload.tempData;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {        
        existingItem.headerText = newData.tempHeader;
        existingItem.bodyText = newData.tempBody;
      }
    }
  },
});

export const cardActions = cardSlice.actions;
export default cardSlice;
