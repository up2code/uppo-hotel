import { test, expect } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';

// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import { composeStories } from '@storybook/nextjs-vite';

import * as stories from './../room-type-form.stories'; // 👈 Our stories imported here.

const { InvalidForm } = composeStories(stories);

test('Checks if the form is valid', async () => {
  // Renders the composed story
  await InvalidForm.run();

  const buttonElement = await screen.findByRole('button');

  fireEvent.click(buttonElement);

  const isFormValid = screen.getByTestId('name-erro');
  expect(isFormValid.textContent).toBe('Required');
});
