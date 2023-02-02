import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/users/usersOperations';

export const AddUserForm = ({ isHiddenForm }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.form.elements.name.value;
    const email = e.target.form.elements.email.value;

    dispatch(addUser({ name, email }));
    isHiddenForm();
    e.target.form.reset();
  };

  return (
    <form>
      <label>
        Name
        <input name="name" />
      </label>
      <label>
        Email
        <input name="email" />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Add user
      </button>
    </form>
  );
};
