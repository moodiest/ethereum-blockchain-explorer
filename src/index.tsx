import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChainDataProvider, ToastProvider, WalletProvider } from './contexts';
import { Address, App, Block, Tx } from './pages';
import { Footer, Navigation } from './components';
import './index.scss';

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <ToastProvider>
      <WalletProvider>
        <ChainDataProvider>
          <BrowserRouter>
            <Navigation />

            <Routes>
              <Route path="/address/:id" element={<Address />} />
              <Route path="/tx/:id" element={<Tx />} />
              <Route path="/block/:id" element={<Block />} />
              <Route path="*" element={<App />} />
            </Routes>

            <Footer />
          </BrowserRouter>
        </ChainDataProvider>
      </WalletProvider>
    </ToastProvider>
  </StrictMode>,
);
