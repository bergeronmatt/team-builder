import React from 'react';

const List = props => {
    return(
        <div className="member-list">
            {props.lists.map(list => (
                <div className="list" key={list.id}>
                    <h2>{list.name}</h2>
                    <h3>{list.email}</h3>
                    <h3>{list.role}</h3>
                </div>
            ))}
        </div>

    )
}

export default List;