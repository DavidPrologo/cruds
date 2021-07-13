import React from 'react';

interface IColumn{
    date       : string;
    discription: string;
    state      : string;
}

interface Props {
    columns: IColumn;
}
const Header: React.FC<Props> = ({columns}:Props) => {
    return (
        <div className="row">
            <div className="col-4">{columns.date}</div>
            <div className="col-4">{columns.discription}</div>
            <div className="col-4">{columns.state}</div>
        </div>
    )
}

export default Header;