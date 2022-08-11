import * as React from 'react';
import useBem from '../../hooks/useBem';
import {useState} from 'react';
import {generatePath, useNavigate} from 'react-router-dom';
import {ROUTE_CARD_MODULE} from '../index';
import {Button} from '@chakra-ui/react';
import './TestPage.scss';

export default function TestPage() {
    const {bemBlock, bemElement} = useBem('TestPage');
    const navigate = useNavigate();

    const [selectedModule, setSelectedModule]: any = useState(null)

    const modulesArray = [
        {
            id: 1,
            title: 'Первый модуль'
        },
        {
            id: 2,
            title: 'Второй модуль'
        },
        {
            id: 3,
            title: 'Третий модуль'
        },
        {
            id: 4,
            title: 'Четвертый модуль'
        },
        {
            id: 5,
            title: 'Пятый модуль'
        },
    ]

    const getCard = (card: any) => (
        <div
            key={card.title}
            className={bemElement('card')}
            onClick={() => setSelectedModule(card)}
        >
            <p>
                {card.title}
            </p>
        </div>
    )

    return (
        <div className={bemBlock()}>
            <h1>
                Выберите модуль для изучения вопросов:
            </h1>
            <div className={bemElement('cards-container')}>
                {modulesArray.map(module => getCard(module))}
            </div>
            <Button
                colorScheme='purple'
                disabled={!selectedModule}
                onClick={() => navigate(generatePath(ROUTE_CARD_MODULE, {moduleId: selectedModule.id, pageNumber: '1'}))}
            >
                {selectedModule
                    ? `Перейти к тестированию в ${selectedModule.title}`
                    : 'Нет выбранного модуля'}
            </Button>
        </div>
    );
}

