import { Typography } from '@material-ui/core';
import React from 'react';
import Question6Image from '../images/question6-gamma.png'

export const CONTROL_QUESTIONS = [
    {
        component: function () { // QUESTION 1
            return (
                <div>
                    <Typography>
                        Water lilies double in area every 24 hours. At the beginning of summer there is one water lily on the lake.
                        It takes 60 days for the lake to become completely covered with water lilies.
                        On which day is the lake half covered?
                    </Typography>
                </div>
            );
        },
        timeToComplete: 180
    },
    {
        component: function () { // QUESTION 2
            return (
                <div>
                    <Typography>
                        A dealer in antique coins got an offer to buy a beautiful bronze coin.
                        The coin had an emperor’s head on one side and the date “544 BC” stamped on the other.
                        The dealer examined the coin, but instead of buying it, he called the police. Why?
                    </Typography>
                </div>
            );
        },
        timeToComplete: 180
    },
    {
        component: function () { // QUESTION 3
            return (
                <div>
                    <Typography>
                        A magician claimed to be able to throw a ping pong ball so that it would go a short distance,
                        come to a dead stop, and then reverse itself. He also added that he would not bounce the ball
                        against any object or tie anything to it. How could he perform this feat?
                    </Typography>
                </div>
            );
        },
        timeToComplete: 180
    },
    {
        component: function () { // QUESTION 4
            return (
                <div>
                    <Typography>
                        Three people play a game in which one person loses and two people win each round.
                        The one who loses must double the amount of money that each of the other two players has at that time.
                        The three players agree to play three games. At the end of the three games,
                        each player has lost one game and each person has $8. What was the original stake of each player?
                    </Typography>
                </div>
            );
        },
        timeToComplete: 180
    },
    {
        component: function () { // QUESTION 5
            return (
                <div>
                    <Typography>
                        Four women, Anna, Emily, Isabel, and Yvonne, receive a bunch of flowers from their partners, Tom, Ron, Ken, and Charlie.
                        The following information is known:
                    </Typography>
                    <Typography>
                        • Anna’s partner, Charlie, gave her a huge bouquet of her favorite blooms; which aren’t roses.
                    </Typography>
                    <Typography>
                        • Tom gave daffodils to his partner (not Emily).
                    </Typography>
                    <Typography>
                        • Yvonne received a dozen lilies, but not from Ron.
                    </Typography>
                    <Typography>
                        What type of flowers (carnations, daffodils, lilies, or roses) were given to each woman and who is her partner?
                    </Typography>
                </div>
            );
        },
        timeToComplete: 180
    },
    {
        component: function () { // QUESTION 5
            return (
                <div>
                    <Typography>
                        Algebra: Solve for x, y, and z:
                    </Typography>
                    <Typography>
                        • x + y - 3z = -10
                    </Typography>
                    <Typography>
                        • x - y + 2z = 3
                    </Typography>
                    <Typography>
                        • 2x + y - z = -6
                    </Typography>
                </div>
            );
        },
        timeToComplete: 180
    }
]

export const MEDITATION_QUESTIONS = [
    {
        component: function () {
            return (
                <div>
                    <Typography>
                        A landscape gardener is given instructions to plant 4 special trees so that each
                        one is exactly the same distance from each of the others. How is he able to do it?
                    </Typography>
                </div>
            );
        },
        timeToComplete: 180
    },
    {
        component: function () {
            return (
                <div>
                    <Typography>
                        Captain Scott was out for a walk when it started to rain.
                        He did not have an umbrella and he wasn’t wearing a hat.
                        His clothes were soaked yet not a hair on his head got wet. How could this happen?
                    </Typography>
                </div>
            );
        },
        timeToComplete: 180
    },
    {
        component: function () {
            return (
                <div>
                    <Typography>
                        A prisoner was attempting to escape from a tower.
                        He found in his cell a rope which was half long enough to permit him to reach the ground safely.
                        He divided the rope in half and tied the two parts together and escaped.
                        How could he have done this? Explain specifically what he did.
                    </Typography>
                </div>
            );
        },
        timeToComplete: 180
    },
    {
        component: function () {
            return (
                <div>
                    <Typography>
                        Ann is twice as old as her son. They were both born in June.
                        Ten years ago Ann was three times as old as her son. What are their present ages?
                    </Typography>
                </div>
            );
        },
        timeToComplete: 180
    },
    {
        component: function () {
            return (
                <div>
                    <Typography>
                        Bachelor: Five bachelors, Andy, Bill, Carl, Dave, and Eric, go out together to eat five evening meals
                        (Fish, Pizza, Steak, Tacos, and Thai) on Monday through Friday. It was understood that Eric would miss Friday’s meal due to an out of town wedding.
                        Each bachelor served as the host at a restaurant of his choice on a different night. The following information is known:
                    </Typography>
                    <Typography>• Carl hosted the group on Wednesday.</Typography>
                    <Typography>• The fellows ate at a Thai restaurant on Friday.</Typography>
                    <Typography>• Bill, who detests fish, volunteered to be the first host.</Typography>
                    <Typography>• Dave selected a steak house for the night before one of the fellows hosted everyone at a raucous pizza parlor.</Typography>
                    <Typography>Which bachelor hosted the group each night and what food did he select?</Typography>
                </div>
            );
        },
        timeToComplete: 180
    },
    {
        component: function () {
            return (
                <div>
                    <Typography>Solve for m:</Typography>
                    <img style={{width: 300}} src={Question6Image}></img>
                </div>
            );
        },
        timeToComplete: 180
    }
]

// Survey questions
export const SURVEY_QUESTIONS = [
    {
        question: "How much experience do you have practicing meditation and/or mindfulness?",
        lowScale: "No experience",
        highScale: "Significant experience"
    },
    {
        question: "How effective did you find the meditation?",
        lowScale: "Not effective at all",
        highScale: "Highly Effective"
    },
    {
        question: "I lost myself when solving the problems",
        lowScale: "Strongly disagree",
        highScale: "Strongly agree"
    },
    {
        question: "I was so involved in the task that I lost track of time",
        lowScale: "Strongly disagree",
        highScale: "Strongly agree"
    },
    {
        question: "I blocked out things around me when solving the problems",
        lowScale: "Strongly disagree",
        highScale: "Strongly agree"
    },
    {
        question: "I blocked out things around me when solving the problems",
        lowScale: "Strongly disagree",
        highScale: "Strongly agree"
    },
    {
        question: "When I was solving the problems, I lost track of the world around me",
        lowScale: "Strongly disagree",
        highScale: "Strongly agree"
    },
    {
        question: "The time I spent solving the problems just slipped away",
        lowScale: "Strongly disagree",
        highScale: "Strongly agree"
    },
    {
        question: "I was absorbed in the problem solving",
        lowScale: "Strongly disagree",
        highScale: "Strongly agree"
    },
    {
        question: "During this experience I let myself go",
        lowScale: "Strongly disagree",
        highScale: "Strongly agree"
    },
    {
        question: "I felt involved in the problem solving",
        lowScale: "Strongly disagree",
        highScale: "Strongly agree"
    },
    {
        question: "This experience was fun",
        lowScale: "Strongly disagree",
        highScale: "Strongly agree"
    },
    {
        question: "The problems incited my curiosity",
        lowScale: "Strongly disagree",
        highScale: "Strongly agree"
    },
    {
        question: "I felt frustrated when solving the problems",
        lowScale: "Strongly disagree",
        highScale: "Strongly agree"
    },
    {
        question: "I found solving the problems confusing",
        lowScale: "Strongly disagree",
        highScale: "Strongly agree"
    },
    {
        question: "I felt annoyed when trying to solve the problems",
        lowScale: "Strongly disagree",
        highScale: "Strongly agree"
    },
    {
        question: "I felt discouraged when trying to solve the problems",
        lowScale: "Strongly disagree",
        highScale: "Strongly agree"
    },
    {
        question: "Solving the problems was mentally taxing",
        lowScale: "Strongly disagree",
        highScale: "Strongly agree"
    },
    {
        question: "This experience was demanding",
        lowScale: "Strongly disagree",
        highScale: "Strongly agree"
    },
    {
        question: "I felt in control of the experience",
        lowScale: "Strongly disagree",
        highScale: "Strongly agree"
    },
    {
        question: "I could not do some of the things required to solve the problems",
        lowScale: "Strongly disagree",
        highScale: "Strongly agree"
    },
]