import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import formatElapsedTime from './formatElapsedTime';

test('Time format of string will be 00:00:00', () => {
  expect(formatElapsedTime("notnumber")).toBe("00:00:00");
});

test('Time format of 129100 will be 02:09.10', () => {
  expect(formatElapsedTime(129100)).toBe("02:09.10");
});

test('Time format of 100000000 will be 27:46:40.00', () => {
  expect(formatElapsedTime(100000000)).toBe("27:46:40.00");
});
