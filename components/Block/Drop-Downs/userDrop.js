import { Menu } from '@headlessui/react';
import Link from 'next/link';
import Styled from 'styled-components';
import { useUserContext } from '../../../context/UserContext';
import { UserIcon } from '../../UI/UserIcon';

const DropDown = Styled.div`
  position: relative;

  .menu_button {
      background-color: transparent;
      border: none;
      cursor: pointer;
  }

  .menu {
      position: absolute;
      border: 1px solid #9999;
      border-radius: 5px; 
      top: 40px;
      right: 0;
      background: #fff;
      padding: 5px 20px;
      z-index: 10;
      box-shadow: 0 1px 3px #7773;
  }

  .menu_item {
    text-decoration: none;
    padding: 5px 2px;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 500;
    color: #2b2b2b;
    background: transparent;
    border: none;
    width: 100%;
    margin: 5px 0;
    cursor: pointer;
    transition: all 0.3s ease;

    .icon {
        width: 30px;
        height: 18px;
        transform: translateY(2px);
    }

    a {
      text-decoration: none;
      color: #2b2b2b;
    }

    &:hover {
        opacity: 0.8;
    }
  }

  .user_email {
    padding: 5px 2px;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 500;
    color: #2b2b2b;
    padding: 5px 2px;
    border-bottom: 1px solid #9999;

      .icon {
        width: 30px;
        height: 18px;
        transform: translateY(2px);
    }
  }


`;

const UserDrop = () => {
  const {
    authState: { auth },
    dispatchLogout
  } = useUserContext();
  return (
    auth.user && (
      <DropDown as="div" className="userDrop">
        <Menu as="div">
          <Menu.Button className="menu_button" as="button">
            <UserIcon img={auth.user.photoURL} />
          </Menu.Button>
          <Menu.Items as="div" className="menu">
            <Menu.Item as="section" className="user_email">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#eb1461dd"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <p>{auth.user.email}</p>
            </Menu.Item>
            <Menu.Item as="div" className="menu_item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#eb1461dd"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>
              <Link href="/profile">
                <a href="/profile">
                  <p>profile</p>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item
              as="button"
              className="menu_item"
              onClick={dispatchLogout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#eb1461dd"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <p>logout</p>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </DropDown>
    )
  );
};

export default UserDrop;
