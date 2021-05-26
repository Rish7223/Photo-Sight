import { Heading } from '../components/UI/Typography';
import AppLayout from '../components/App-Layout';
import Link from 'next/link';
import MainNavbar from '../components/Section/Navbar/Navbar';

export default function Home() {
  return (
    <AppLayout>
      <MainNavbar />
      <div
        style={{
          padding: '5rem 0'
        }}
      >
        <Heading center>Private Page</Heading>
        <Link href="/">go to login</Link>
      </div>
    </AppLayout>
  );
}
