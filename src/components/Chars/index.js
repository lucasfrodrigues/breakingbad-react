import React from 'react';
import { AreaItems } from './styled';


export default ({ items }) => {
    return (
        <AreaItems>
            <div className="list-area">
                {items.length > 0 && items.map((item, key) => (
                    <div key={key} className="list-area--item" >
                        <div className="list-area--info">
                            <p><span>Nick Name: </span> {item.nickname}</p>
                            <p><span>Birthday: </span> {item.birthday}</p>
                            <p><span>Occpation: </span> {item.occupation}</p>
                            <p><span>Breaking Bad Seasons: </span> {item.appearance}</p>
                            <p><span>Status: </span> {item.status}</p>
                            <p><span>Actor Name: </span> {item.portrayed}</p>
                        </div>
                        <img src={item.img} alt={item.name} />
                        <div className="list-area--name">
                            <p>{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </AreaItems>
    );
}