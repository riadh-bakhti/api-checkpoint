import { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function UserList() {
  // useState hook used to store the list of users
  const [listOfUser, setListOfUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook used to fetch the data once the component is mounted
  useEffect(() => {
    let isMounted = true;

    axios
      .get(API_URL)
      .then((response) => {
        if (isMounted) {
          setListOfUser(response.data);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || 'Something went wrong while loading users.');
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <p className="status-message">Loading users...</p>;
  }

  if (error) {
    return <p className="status-message error">Error: {error}</p>;
  }

  return (
    <div className="user-grid">
      {/* Map listOfUser to display the list of users on the screen */}
      {listOfUser.map((user) => (
        <article className="user-card" key={user.id}>
          <div className="user-card__header">
            <div className="avatar">{user.name.charAt(0)}</div>
            <div>
              <h2>{user.name}</h2>
              <span className="username">@{user.username}</span>
            </div>
          </div>

          <ul className="user-card__details">
            <li>
              <span className="label">Email</span>
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </li>
            <li>
              <span className="label">Phone</span>
              <span>{user.phone}</span>
            </li>
            <li>
              <span className="label">Website</span>
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noreferrer"
              >
                {user.website}
              </a>
            </li>
            <li>
              <span className="label">Company</span>
              <span>{user.company.name}</span>
            </li>
            <li>
              <span className="label">City</span>
              <span>{user.address.city}</span>
            </li>
          </ul>
        </article>
      ))}
    </div>
  );
}

export default UserList;
