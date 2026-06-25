// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoGate title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoGate/i);
    expect(titleElement).toBeInTheDocument();
});
