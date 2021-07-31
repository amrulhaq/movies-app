import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { combineReducers } from "redux";
import selectedMovie from '../redux/reducers/selectedMovie'
import searchKeyword from '../redux/reducers/searchKeyword'

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { selectedMovie, searchKeyword }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }