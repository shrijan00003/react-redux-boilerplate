import React from 'react'

export default ({ id, title , details }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{details}</td>
        </tr>
    )
}
