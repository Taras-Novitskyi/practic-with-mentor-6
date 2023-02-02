import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/users/usersOperations';
// import {} from '../../redux/users/usersSelectors';
import { EditUserForm } from '../EditUserForm/EditUserForm';

export const UsersListItem = ({ name, email, id }) => {
  const [isShowEditForm, setIsShowEditForm] = useState(false);
  const dispatch = useDispatch();

  const hideEditForm = () => {
    setIsShowEditForm(false);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button onClick={() => dispatch(deleteUser(id))}>Delete</button>
      {isShowEditForm ? (
        <button onClick={() => setIsShowEditForm(true)}>Edit</button>
      ) : (
        <EditUserForm
          currentName={name}
          currentEmail={email}
          userId={id}
          isHiddenForm={hideEditForm}
        />
      )}
    </div>
  );
};
