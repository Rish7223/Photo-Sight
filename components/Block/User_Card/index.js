import Styled from 'styled-components';
import Image from 'next/image';

const UserCardLayout = Styled.div`
    max-width: 250px;
    padding: 20px;
    border: 1px solid #2b2b2b;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .user_img {
        position: relative;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid #fff0;
        box-shadow: 0 0 0 2px #eb1461;

        .img {
            object-fit: cover;
        }
    }

    .info {
        margin-top: 1rem;
        padding: 10px 0;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;

        &_data {
            display: flex;
            flex-direction: column;
            align-items: center;
            line-height: 1.2;

            h4 {
                font-size: 1rem;
                font-weight: 700;
                color: #2b2b2b;
            }

            p {
                font-size: 0.9rem;
                font-weight: 500;
                color: #2b2b2b99;
            }
        }
    }

    .follow {
        padding: 10px 0;
        width: 100%;
        &_btn {
            padding: 8px;
            width: 100%;
            border: none;
            border-radius: 5px;
            background-color: #208cee;
            color: #fff;
            font-size: 1rem;
            font-weight: 500;
    
        }

    }

    .user_details {
        line-height: 1.3;
        margin-top: 3rem;
        h1 {
            font-size: 1.2rem;
            color: #2b2b2b;
        }

        p {
            font-size: 1rem;
            color: #2b2b2bdd;
            margin-top: 10px;
        }
    }

    
`;

const UserCard = ({ userImage }) => {
  return (
    <UserCardLayout>
      <div className="user_img">
        <Image
          src={userImage ? userImage : '/Photo/user.jpg'}
          layout="fill"
          className="img"
          alt="user profile"
        />
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
        <button className="follow_btn">Follow</button>
      </div>
      <div className="user_details">
        <h1>Rishabh Tyagi</h1>
        <p>
          I am a student and currently{' '}
          <span role="img" aria-labelledby="emoji">
            🌱
          </span>{' '}
          learning web technologies. I am also interested or I would say working
          on python, C/C++, Linux, and Reactjs.
        </p>
      </div>
    </UserCardLayout>
  );
};

export default UserCard;
