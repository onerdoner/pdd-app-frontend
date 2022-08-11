import React from 'react';
import useBem from '../../../hooks/useBem';
import {IQuestionInterface} from '../../../types/IQuestionInterface';
import {Button, Stack} from '@chakra-ui/react';

import './Pagination.scss';

interface IPaginationProps {
    items: any[],
    route: string,
    currentItem: any,
    ableItemsIds: string[],
    setCurrentItem: (item: IQuestionInterface) => void,
}

export default function Pagination(props: IPaginationProps) {
    const {bemBlock, bemElement} = useBem('Pagination');

    console.log(props.ableItemsIds, 'props.ableItemsIds')

    return (
        <div className={bemBlock()}>
            <Stack className={bemElement('container')} direction='column'>
                {props.items?.map((item: IQuestionInterface, index) => (
                    <Button
                        m={0}
                        key={item.id}
                        onClick={() => props.setCurrentItem(item)}
                        colorScheme='orange'
                        disabled={!props.ableItemsIds.includes(String(item.id)) && item.id !== props.items[0].id && item.id !== props.currentItem}
                        variant={props.currentItem === item ? 'solid' : 'outline'}
                    >
                        {index + 1}
                    </Button>
                ))}
            </Stack>
        </div>
    )
}