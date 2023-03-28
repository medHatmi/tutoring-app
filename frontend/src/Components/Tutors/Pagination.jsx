import React from 'react'

export default function Pagination({ tutorsPerPage, totalTutors, paginate }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTutors / tutorsPerPage); i++) {
      pageNumbers.push(i);
    }



    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <div onClick={() => paginate(number)} className='page-link' style={{color: 'green'}}>
                    {number}
                    </div>
                </li>
                ))}
            </ul>
        </nav>
    )
}
