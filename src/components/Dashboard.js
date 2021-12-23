import React from 'react';
import { Link } from 'react-router-dom';

function DashBoard () {
    return (
        <div>
            <h2>DashBoard</h2>
            <Link to='/'>logout</Link>
            <div className='dash-options'>
                <button >Add Plant</button>
                <button >View Plants</button>
            </div>
        </div>
    )
}

export default DashBoard;