import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Todo from '../src/Todo'
import App from '../src/App'

it("render correctly", () => {
    const { queryByTestId, queryByPlaceholderText } = render(<Todo />)

    expect(queryByTestId("handleTransform")).toBeTruthy()

    // expect(queryByPlaceholderText('DONE' || 'UNDONE')).toEqual('DONE' || 'UNDONE')
})

describe("Input value", () => {
    it("update on change", () => {
        const { queryByPlaceholderText } = render(<App />)

        const searchInput = queryByPlaceholderText('Search')

        fireEvent.change(searchInput, { target: { value: 'abc'}})
        expect(searchInput.value).toBe('abc')
    })
})

describe("Submit Button", () => {
    it("click button", () => {
        const request = jest.fn();

        const { queryByTestId, queryByPlaceholderText } = render(<App />)

        const searchInput = queryByPlaceholderText('Search')

        fireEvent.change(searchInput, { target: { value: 'abc'}})
        
        fireEvent.click(queryByTestId("search-button"))
    })
})