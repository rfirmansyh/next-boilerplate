import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../Counter';


describe('Counter', () => {
  let inputEl: HTMLInputElement | null = null;

  beforeEach(() => {
    render(<Counter defaultValue={5} />);
    inputEl = screen.getByLabelText('My Counter', { selector: 'input'}) as HTMLInputElement;
  });

  it('Render value by defaultValue prop, should be 5', () => {
    expect(inputEl?.value).toBe('5');
  });

  it('Should be 6, when + clicked', async () => {
    const btnEl = screen.getByRole('button', { name: 'Button Add' }) as HTMLButtonElement;
    await userEvent.click(btnEl);
    expect(inputEl?.value).toBe('6');
  });
  it('Should be 4, when - clicked', async () => {
    const btnEl = screen.getByRole('button', { name: 'Button Decrease' }) as HTMLButtonElement;
    await userEvent.click(btnEl);
    expect(inputEl?.value).toBe('4');
  });
});