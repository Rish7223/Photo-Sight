import { Heading } from '../components/UI/Typography';
import AppLayout from '../components/App-Layout';
import Link from 'next/link';
import useAuthentication from '../hooks/useAuthentication';
import MainNavbar from '../components/Section/Navbar/Navbar';

export default function Home() {
  const { logout } = useAuthentication();
  return (
    <AppLayout>
      <MainNavbar />
      <Heading>Private Page</Heading>
      <Link href="/">go to login</Link>
      <button onClick={logout}>logout</button>
    </AppLayout>
  );
}
