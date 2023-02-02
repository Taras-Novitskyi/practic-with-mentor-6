import { Button } from 'components/Button/Button';
import { UsersList } from 'components/UsersList/UserList';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/users/usersOperations';
import { AddUserForm} from "../../components/AddUserForm/AddUserForm";

export const Users = () => {
  const [isListShown, setIsListShown] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);
  const dispatch = useDispatch()

  const showUsersList = () => {
    setIsListShown(true);
    dispatch(fetchUsers());
  };

  const showForm = () => {
    setIsShowForm(true);
  }

  const hideForm = () => {
    setIsShowForm(false);
  };

  return (
    <>
      {isListShown ? (
        <>
          <UsersList />
          {!isShowForm ? (
            <Button text="Add users" clickHandler={showForm} />
          ) : (
            <AddUserForm isHiddenForm={hideForm} />
          )}
        </>
      ) : (
        <Button text="Show users" clickHandler={showUsersList} />
      )}
    </>
  );
};
