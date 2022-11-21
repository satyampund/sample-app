import React from 'react'
import './UserCard.css'

function UserCard({ studentName, fruit }) {
    return (
        <div className='student'>
            <h2>{studentName}</h2>
            <h2>{studentName} likes {fruit}</h2>
        </div>
    )
}

export default UserCard