import React from 'react';
import reactDom from 'react-dom';
import ProductList from '../../pages/List';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

describe('Product List', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        reactDom.render(<BrowserRouter><ProductList /></BrowserRouter>, div);
    })
})