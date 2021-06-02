import Link from 'next/link';
import { UserCardLayout } from './styled';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { usePhotoContext } from '../../../context/PhotoContext';

const UserCard = ({ userImage, userName, description = null, openModel }) => {
  const {
    photoState: { myPhotoList }
  } = usePhotoContext();
  return (
    <UserCardLayout>
      <div className="user_img">
        <LazyLoadImage
          effect="blur"
          src={userImage ? userImage : '/Photo/user.jpg'}
          className="img"
          layout="fill"
          alt="user profile"
          height="100%"
          width="100%"
        />
        <Link href="/home" className="back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="back_icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
      <div className="info">
        <section className="info_data">
          <h3>{myPhotoList.length}</h3>
          <p>posts</p>
        </section>

        <section className="info_data">
          <h3>220K</h3>
          <p>followers</p>
        </section>
        <section className="info_data">
          <h3>140k</h3>
          <p>following</p>
        </section>
      </div>
      <div className="follow">
        <button className="follow_btn" onClick={openModel}>
          Edit Profile
        </button>
      </div>
      <div className="user_details">
        <h1>{userName}</h1>
        <p>
          {description
            ? description !== '' && description
            : 'Add description ...'}
        </p>
      </div>
    </UserCardLayout>
  );
};

export default UserCard;
