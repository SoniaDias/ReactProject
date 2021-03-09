import { render, screen } from '@testing-library/react';
import {timesTwo} from './fucntions';

test('test times two', () => {
  expect(timesTwo(4)).toBe(8);
});