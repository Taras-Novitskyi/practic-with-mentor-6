import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUser } from '../../redux/users/usersOperations';

export const EditUserForm = ({ userToUpdate, isHiddenForm }) => {
  // const { name, email, id } = editUser;
  const [name, setName] = useState(userToUpdate.name);
  const [email, setEmail] = useState(userToUpdate.email);

  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;

      default:
        alert('Not corect input data');
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(editUser({ ...userToUpdate, name: name, email: email }));

    isHiddenForm();
  };

  return (
    <form>
      <label>
        Name
        <input name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Email
        <input name="email" value={email} onChange={handleChange} />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Edit user
      </button>
    </form>
  );
};
