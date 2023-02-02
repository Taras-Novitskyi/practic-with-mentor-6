import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../redux/users/usersOperations';
// import {} from '../../redux/users/usersSelectors';
import { EditUserForm } from '../EditUserForm/EditUserForm';
import { selectUsers } from 'redux/users/usersSelectors';

export const UsersList = () => {
  const [userToEdit, setUserToEdit] = useState(null);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const hideEditForm = () => {};

  const showEditForm = id => {
    const editUser = users.find(user => user.id === id);
    setUserToEdit(editUser);
  };

  return (
    <ul>
      {users.map(({ id, name, email }) => (
        <li key={id}>
          {/* <UsersListItem name={name} email={email} id={id} /> */}
          <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <button onClick={() => dispatch(deleteUser(id))}>Delete</button>
            {userToEdit && userToEdit.id === id ? (
              <EditUserForm userToUpdate={userToEdit} isHiddenForm={hideEditForm} />
            ) : (
              <button onClick={() => showEditForm(id)}>Edit</button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
