import { BCMSEntryParsed, BCMSMediaParsed } from '@becomes/cms-client/types';
import { GetServerSideProps } from 'next';
import { getBcmsClient } from 'next-plugin-bcms';
import { BCMSImage } from 'next-plugin-bcms/components';
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

const Template: FC<{ entry: BCMSEntryParsed; backUri: string }> = (props) => {
  return (
    <div>
      <Link href="/">Home</Link>
      <br />
      <Link href={props.backUri}>Back</Link>
      {props.entry.meta.en.cover_image ? (
        <BCMSImage
          media={props.entry.meta.en.cover_image as BCMSMediaParsed}
          options={{
            position: 'cover',
            sizes: {
              exec: [
                {
                  width: 350,
                  height: 300,
                },
                {
                  width: 600,
                  height: 300,
                },
                {
                  width: 900,
                  height: 300,
                },
                {
                  width: 1200,
                  height: 300,
                },
                {
                  width: 1500,
                  height: 300,
                },
                {
                  width: 1920,
                  height: 300,
                },
              ],
            },
          }}
        />
      ) : (
        ''
      )}
      <pre>
        <code>{JSON.stringify(props.entry, null, '  ')}</code>
      </pre>
    </div>
  );
};

export default Template;
