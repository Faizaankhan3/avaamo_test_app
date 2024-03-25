import React, { useState, useEffect } from 'react'
import Download from './Download'

const UsersList = () => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const fetchUsers = async () => {
      try {
        const response = await fetch('/users')
        const data = await response.json()
        setUsers(data)
        setError(null)
      } catch (error) {
        setError('Failed to fetch users')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className='users-list-container'>
      <h1>Avaamo Users</h1>
      <table className="users-list-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Download(csv)</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className={index % 2 !== 0 ? 'users-list-table__row--odd' : ''}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td><Download userId={user.id}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersList
