'use client';

import { Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Flex as="main" height={'100%'} width={'100%'}>
        {children}
      </Flex>
    </>
  );
};

export default Layout;
