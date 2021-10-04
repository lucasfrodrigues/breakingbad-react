import { screen, render, userEvent } from '../../test';
import Search from './index';


describe('Search component', () => {
    it('renders correctly', () => {

        render(<Search />);

        expect(screen.getByPlaceholderText('Search characters')).toBeInTheDocument();

    });

    it('add autofocus', () => {

        render(<Search />);

        expect(screen.getByPlaceholderText('Search characters')).toHaveFocus();

    });

});