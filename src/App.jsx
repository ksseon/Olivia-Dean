import Layout from './common/Layout';
import About from './page/About';
import Gallery from './page/Gallery';
import Home from './page/Home';
import NotFiles from './page/NotFiles';
import Board from './page/Board';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Merch from './page/Merch';
import MerchDetail from './page/MerchDetail';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/gallery" element={<Gallery />} />

                        <Route path="/merch">
                            <Route index element={<Merch />} />
                            <Route path=":merchID" element={<MerchDetail />} />
                        </Route>

                        <Route path="/board" element={<Board />} />
                    </Route>

                    <Route path="/*" element={<NotFiles />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
