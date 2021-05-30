import { useUserContext } from '../../../context/UserContext';
import { Heading } from '../../UI/Typography';
import { FormLayout } from '../Share-Photo/style';
import EditProfileForm from './form';
import { StyledEditProfile } from './style';

const EditProfileModel = ({ closeModel }) => {
  const { dispatchRemoveError } = useUserContext();
  const cancelClose = () => {
    closeModel();
  };
  return (
    <FormLayout>
      <StyledEditProfile>
        <div className="head">
          <Heading color="#2b2b2baa" fontSize="2rem">
            Edit Profile
          </Heading>
          <button
            onClick={() => {
              dispatchRemoveError();
              closeModel();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <EditProfileForm cancel={cancelClose} />
      </StyledEditProfile>
    </FormLayout>
  );
};

export default EditProfileModel;
