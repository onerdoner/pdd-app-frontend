import {Stack, useColorModeValue} from '@chakra-ui/react';
import React from 'react';
import {INavItemProps} from '../Header';
import {MobileNavItem} from './MobileNavItem';

export const MobileNav = ({navItems}: {navItems: INavItemProps[]}) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {navItems.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};
