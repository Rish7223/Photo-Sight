import { useContext } from 'react';
import { Layout } from '../components/Layout';
import { DarkMode } from '../context/Darkmode';

export default function Home() {
  const {
    state: { textColor, isDark },
    toggleDark
  } = useContext(DarkMode);
  return (
    <Layout>
      <div className={`text-3xl ${textColor} mb-10`}>Working...</div>
      <button
        onClick={toggleDark}
        className="ml-10 p-2 rounded-full shadow-lg focus:outline-none hover:shadow-md"
      >
        {isDark ? '🌞' : '🌙'}
      </button>
    </Layout>
  );
}
