import * as React from 'react';
import {generatePath, useNavigate, useParams} from 'react-router-dom';
import useBem from '../../hooks/useBem';
import {useGetQuestionByModuleIdQuery} from '../../redux/services/questions.api';
import {IQuestionInterface} from '../../types/IQuestionInterface';
import {Text, Box, Button, Image, Radio, RadioGroup, Stack, ButtonGroup} from '@chakra-ui/react';
import {getSfDrivingKzImg} from '../../shared/variables';
import {useEffect, useState} from 'react';
import Pagination from '../../shared/layouts/Pagination';
import {ROUTE_CARD_MODULE} from '../index';

import './CardModulePage.scss';

export default function CardModulePage() {
    const {bemBlock, bemElement} = useBem('CardModulePage');
    const {moduleId, pageNumber} = useParams()
    const navigate = useNavigate()

    const {currentData: questionsData, isLoading} = useGetQuestionByModuleIdQuery({
        moduleId,
        pageNumber,
        pageSize: 40
    })

    const [currentQuestion, setCurrentQuestion] = useState<IQuestionInterface | undefined>()
    const [questionResponses, setQuestionResponses] = useState<{[key: number]: number}>({})
    const [testIsFinished, setTestIsFinished] = useState(false)

    useEffect(() => setCurrentQuestion(questionsData?.data[0]), [isLoading])

    if (isLoading) {
        return <div>Loading...</div>
    }

    const currentQuestionIndex = questionsData?.data.findIndex((question: IQuestionInterface) => currentQuestion?.id === question.id)
    const isLastQuestion = currentQuestionIndex === (questionsData?.data.length - 1)
    const allQuestionsHaveResponses = Object.keys(questionResponses).length === questionsData?.data.length
    const testFinishCondition = allQuestionsHaveResponses || isLastQuestion

    console.log(questionResponses, 'questionResponses')

    const getQuestionCard = (card: IQuestionInterface) => (
        <Box
            key={card.id}
            w='100%'
            maxW='md'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
        >
            {card?.questionImg && (
                <Box display='flex' justifyContent='center'>
                    <Image
                        src={getSfDrivingKzImg(card.questionImg)}
                        alt={card.questionImg}
                        boxSize='400px'
                    />
                </Box>
            )}
            <Box p='6'>
                <Box
                    mt='1'
                    as='h4'
                    fontWeight='semibold'
                    lineHeight='tight'
                >
                    {card.text}
                </Box>

                <Box display='flex' mt='10' mb='15' alignItems='center'>
                    <RadioGroup value={questionResponses[card.id]}>
                        <Stack spacing={5} direction='column'>
                            {card.options?.map((option, index) => {
                                const isCorrectAnswer = index === card.correctAnswerId && testIsFinished
                                return (
                                    <Radio
                                        borderColor='orange'
                                        isDisabled={testIsFinished}
                                        className={bemElement('radio', {
                                            correct: isCorrectAnswer,
                                            disabled: testIsFinished
                                        })}
                                        colorScheme='orange'
                                        value={index}
                                        onChange={() => setQuestionResponses({...questionResponses, [card.id]: index})}
                                    >
                                        <Text className={bemElement('radio-label', {
                                            correct: isCorrectAnswer,
                                            disabled: testIsFinished,
                                        })}>
                                            {option}
                                        </Text>
                                    </Radio>
                                )
                            })}
                        </Stack>
                    </RadioGroup>
                </Box>
                <ButtonGroup spacing={15} mt='15'>
                    <Button
                        colorScheme='orange'
                        disabled={!questionResponses.hasOwnProperty(card.id) || testIsFinished}
                        onClick={() => {
                            if (testFinishCondition) {
                                setTestIsFinished(true);
                                return;
                            }

                            setCurrentQuestion(questionsData.data[currentQuestionIndex + 1]);
                        }}
                    >
                        {(testFinishCondition || testIsFinished) ? 'Закончить тест' : 'Следующий вопрос'}
                    </Button>
                    {testIsFinished && (
                        <Button onClick={() => {
                            setTestIsFinished(false)
                            setQuestionResponses({})
                            navigate(generatePath(ROUTE_CARD_MODULE, {
                                moduleId,
                                pageNumber: String(Number(pageNumber) + 1)
                            }))
                        }}>
                            Новый тест
                        </Button>
                    )}
                </ButtonGroup>
            </Box>
        </Box>
    )

    return (
        <div className={bemBlock()}>
            <div className={bemElement('card-container')}>
                {/*@ts-ignore*/}
                {currentQuestion && getQuestionCard(currentQuestion)}
            </div>
            <Pagination
                items={questionsData?.data}
                ableItemsIds={Object.keys(questionResponses)}
                route={ROUTE_CARD_MODULE}
                currentItem={currentQuestion}
                setCurrentItem={setCurrentQuestion}
            />
        </div>
    );
}
