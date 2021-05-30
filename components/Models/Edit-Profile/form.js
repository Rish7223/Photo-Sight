import { useState } from 'react';
import { useUserContext } from '../../../context/UserContext';
import Alert from '../../UI/Alert';

const EditProfileForm = ({ cancel }) => {
  const {
    authState: {
      error,
      auth: { authLoading, user }
    },
    useUpdateUserProfile,
    dispatchRemoveError
  } = useUserContext();
  const [name, setName] = useState(user && user.displayName);
  const [description, setDescription] = useState({
    count: 0,
    value: user && user.description
  });
  const [formError, setFormError] = useState(null);

  const changeDescription = event => {
    setDescription({
      value: event.target.value,
      count: event.target.value.length
    });
  };

  const updateUser = event => {
    event.preventDefault();
    if (description.count < 151) {
      useUpdateUserProfile({ name, description: description.value });
    } else {
      setFormError({
        type: 'info',
        message: 'Description is to long. please make it 150 of length!'
      });
    }
  };
  return (
    <form className="edit_form" onSubmit={updateUser}>
      <div className="edit_form-data">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Edit your name ..."
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="edit_form-data">
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          placeholder="Edit description ..."
          id="description"
          value={description.value}
          onChange={e => changeDescription(e)}
        />
        <div className="wordCount">
          <p>Word count:</p>
          <p
            className="numbers"
            style={{
              color: description.count > 155 && '#ff4333'
            }}
          >
            {description.count} / 155
          </p>
        </div>
      </div>
      <section className="actions">
        <button
          className="cancel"
          type="button"
          onClick={() => {
            dispatchRemoveError();
            setFormError(null);
            cancel();
          }}
        >
          cancel
        </button>
        <button className="save" type="submit">
          {!authLoading ? (
            'save'
          ) : (
            <img
              src="/Images/three-dots.svg"
              width="30px"
              alt="loading"
              aria-hidden="true"
            />
          )}
        </button>
      </section>
      {error && (
        <Alert
          type={error.type}
          message={error.message}
          closeAlert={dispatchRemoveError}
        />
      )}
      {formError && (
        <Alert
          type={formError.type}
          message={formError.message}
          closeAlert={() => {
            setFormError(null);
          }}
        />
      )}
    </form>
  );
};

export default EditProfileForm;
