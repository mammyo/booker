import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout.js';

const Root = () => (
    <BrowserRouter>
        <Layout/>
    </BrowserRouter>
);

export default Root;