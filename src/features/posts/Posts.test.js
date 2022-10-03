import {render, screen} from '@testing-library/react';
import PostsList from './PostsList';

test ('Render halaman Posst dengan benar',() => {
    render(<PostsList/>)

    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent('Back to Home');
});