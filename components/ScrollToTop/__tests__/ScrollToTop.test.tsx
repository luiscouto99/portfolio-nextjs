import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render, fireEvent } from '@testing-library/react';
import ScrollToTop from '../ScrollToTop';

global.scrollTo = jest.fn();

describe('ScrollToTop', () => {
  beforeEach(() => {
    global.scrollY = pageYOffsetMock;
    render(<ScrollToTop pageYOffset={pageYOffsetMock} />);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  const pageYOffsetMock = 1400;

  it('should be called on click', () => {
    const scrollBtn = screen.getByTestId('scroll-btn');
    fireEvent.click(scrollBtn);
    expect(global.scrollTo).toHaveBeenCalledTimes(1);
  });

  it('should be called to top: 0 and left: 0', () => {
    const scrollBtn = screen.getByTestId('scroll-btn');
    fireEvent.click(scrollBtn);
    expect(global.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  it('should scroll to the top of the page', () => {
    const scrollBtn = screen.getByTestId('scroll-btn');
    fireEvent.click(scrollBtn);

    setTimeout(() => {
      expect(window.scrollY).toEqual(0);
    }, 100);
  });
});
