import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem/>', () => {
  const url = 'https://one-punch.com/saitama.jpg';

  test('release snapshot', () => {
    const { container } = render(<GifItem url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('Show image with URL and the indicated ALT', () => {
    render(<GifItem url={url} />);
    //expect(screen.getByRole('img').src).toBe(url);
    const { src } = screen.getByRole('img');
    expect(src).toBe(url);
  });
});
