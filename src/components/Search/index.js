import React, { useState } from 'react';
import { SearchArea } from './styled.js'


export default ({ getQuery }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <SearchArea>
            <form>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Search characters'
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                />
            </form>
        </SearchArea>
    )
}

