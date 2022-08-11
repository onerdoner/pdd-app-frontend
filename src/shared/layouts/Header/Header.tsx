import React from 'react';
import {ChevronDownIcon, ChevronRightIcon, CloseIcon, HamburgerIcon, Icon} from '@chakra-ui/icons';
import {
    Box,
    Collapse,
    Flex,
    IconButton,
    Text,
    useBreakpointValue,
    useColorModeValue,
    useDisclosure
} from '@chakra-ui/react';
import { DesktopNav } from './views/DesktopNav';
import {MobileNav} from './views/MobileNav';
import useBem from '../../../hooks/useBem';

import './Header.scss';
import {ROUTE_TEST, ROUTE_GAME, ROUTE_ROOT, ROUTE_CARD} from '../../../routes';

export interface INavItemProps {
    label: string;
    subLabel?: string;
    children?: Array<INavItemProps>;
    href?: string;
}

const NAV_ITEMS: Array<INavItemProps> = [
    {
        label: 'Тренажеры',
        children: [
            {
                label: 'Карточки',
                // subLabel: 'Trending Design to inspire you',
                href: ROUTE_CARD,
            },
            {
                label: 'Тест',
                // subLabel: 'Up-and-coming Designers',
                href: ROUTE_TEST,
            },
            {
                label: 'Игра',
                // subLabel: 'Up-and-coming Designers',
                href: ROUTE_GAME,
            },
        ],
    },
    {
        label: 'Главная страница',
        href: ROUTE_ROOT
    },
    {
        label: 'О проекте',
        href: ROUTE_ROOT
    },
];

export default function Header() {
    const {bemElement} = useBem('Header')
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <img src='/logos/logo.png' className={bemElement('logo')} />

                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}
                    >
                    </Text>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav navItems={NAV_ITEMS} />
                    </Flex>
                </Flex>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav navItems={NAV_ITEMS} />
            </Collapse>
        </Box>
    );
}