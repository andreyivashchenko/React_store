import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoriesName: [
    "Всё",
    "Смартфоны",
    "Часы",
    "Планшеты",
    "Ноутбуки",
    "Телевизоры",
  ],
  categoriesId: 0,
  sortTypes: [
    {
      name: "популярности (DESC)",
      sortProperty: "rating",
    },
    {
      name: "популярности (ASC)",
      sortProperty: "-rating",
    },

    {
      name: "цене (ASC)",
      sortProperty: "-price",
    },
    {
      name: "цене (DESC)",
      sortProperty: "price",
    },
    {
      name: "алфавиту (ASC)",
      sortProperty: "-Alphabet",
    },
    {
      name: "алфавиту (DESC)",
      sortProperty: "Alphabet",
    },
  ],
  selectedType: 0,
  isOpen: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.categoriesId = action.payload;
    },
    changeSortType: (state, action) => {
      state.selectedType = action.payload;
    },
    isOpenSort: (state) => {
      state.isOpen = !state.isOpen;
    },
    setFilters: (state, action) => {
      state.categoriesId = Number(action.payload.categoriesId);
      state.selectedType = Number(action.payload.selectedType);
    },
  },
});

export const { changeCategory, changeSortType, isOpenSort, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
