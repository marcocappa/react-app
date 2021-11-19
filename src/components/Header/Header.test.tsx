import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('call onClick', async () => {
    // Arrange
    const onFetch = jest.fn();
    render(<Header onFetch={onFetch} />);

    const buttonInstalled = screen.getByTestId('test-installed');
    const buttonUninstalled = screen.getByTestId('test-uninstalled');

    // Act
    fireEvent.click(buttonInstalled);
    fireEvent.click(buttonUninstalled);

    // Assert
    expect(onFetch).toHaveBeenNthCalledWith(1, 'installed');
    expect(onFetch).toHaveBeenNthCalledWith(2, 'uninstalled');
  });
});
