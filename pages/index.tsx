import type { NextPage, GetServerSideProps } from 'next';
import { getBcmsClient } from 'next-plugin-bcms';
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = async () => {
  const client = getBcmsClient();
  const templates = await client.template.getAll();

  return { props: { data: templates.map((e) => e.name) } };
};

const Home: NextPage<{ data: string[] }> = ({ data }) => {
  console.log();
  return (
    <div>
      <ul>
      {data.map((template, idx) => {
        return (
          <li key={idx}>
            <Link href={`/${template}`}>{template}</Link>
          </li>
        );
      })}
    </ul>

    <Link href="/contact" className='underline text-blue-600'>Click Here to go to Contact Page</Link>
    </div>
  );
};

export default Home;
