'use client';

import { Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { Navbar } from '../components/navbar/navbar';

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
