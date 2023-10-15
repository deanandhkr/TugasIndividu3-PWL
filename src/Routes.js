import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={
                    <Layout />
                }>
                    <Route index element={
                        <Home />
                    } />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter >
    );
}