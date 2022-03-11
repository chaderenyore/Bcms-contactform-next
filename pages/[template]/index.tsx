import { GetServerSideProps } from 'next';
import { getBcmsClient } from 'next-plugin-bcms';
import Link from 'next/link';
import React, { FC } from 'react';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const client = getBcmsClient();
  const entries = await client.entry.getAll({
    template: ctx.params?.template as string,
  });

  return {
    props: {
      entries: entries.map((entry) => {
        return {
          title: entry.meta.en.title,
          uri: `/${ctx.params?.template}/${entry.meta.en.slug}`,
        };
      }),
    },
  };
};

const Template: FC<{ entries: Array<{ uri: string; title: string }> }> = (
  props
) => {
  return (
    <div>
      <Link href="/">Home</Link>
      <ul>
        {props.entries.map((entry, idx) => {
          return (
            <li key={idx}>
              <Link href={entry.uri}>{entry.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Template;
