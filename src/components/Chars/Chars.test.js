import { screen, render, userEvent } from '../../test';
import Chars from './index';

const charsList = [
    {
        nickname: 'nickname',
        birthday: '00-00-00',
        occpation: 'occpation',
        appearance: '1,2,3',
        status: 'status',
        portrayed: 'actor name',
        img: 'img',
        name: 'name'
    }
]

describe('Chars component', () => {
    it('renders correctly', () => {

        render(<Chars items={charsList} />);

        expect(screen.getByText(/nick name:/i)).toBeInTheDocument();
        expect(screen.getByText(/birthday:/i)).toBeInTheDocument();
        expect(screen.getByText(/occpation:/i)).toBeInTheDocument();
        expect(screen.getByText(/breaking bad seasons:/i)).toBeInTheDocument();
        expect(screen.getByText(/status:/i)).toBeInTheDocument();
        expect(screen.getByText(/actor name:/i)).toBeInTheDocument();
        expect(screen.getByRole('img', { name: /name/i })).toBeInTheDocument();

    });

});