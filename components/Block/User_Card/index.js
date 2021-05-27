import Link from 'next/link';
import { UserCardLayout } from './styled';

const UserCard = ({ userImage, userName, description = null }) => {
  return (
    <UserCardLayout>
      <div className="user_img">
        <img
          src={userImage ? userImage : '/Photo/user.jpg'}
          className="img"
          alt="user profile"
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
          <h3>251</h3>
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
        <button className="follow_btn">Edit Profile</button>
      </div>
      <div className="user_details">
        <h1>{userName}</h1>
        <p>{description ? description : 'Add description ...'}</p>
      </div>
    </UserCardLayout>
  );
};

export default UserCard;
