import { BCMSEntry } from '@becomes/cms-client/types';
import { GetServerSideProps } from 'next';
import { getBcmsClient } from 'next-plugin-bcms';
import Link from 'next/link';
import React, { FC } from 'react';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const client = getBcmsClient();
  const entry = await client.entry.get({
    template: ctx.params?.template as string,
    entry: ctx.params?.entry as string,
  });

  return {
    props: {
      backUri: `/${ctx.params?.template}`,
      entry,
    },
  };
};

const Template: FC<{ entry: BCMSEntry; backUri: string }> = (props) => {
  return (
    <div>
      <Link href="/">Home</Link>
      <br />
      <Link href={props.backUri}>Back</Link>
      <pre>
        <code>{JSON.stringify(props.entry, null, '  ')}</code>
      </pre>
    </div>
  );
};

export default Template;
