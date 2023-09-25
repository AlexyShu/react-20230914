import React from 'react';
import ReactDOM from 'react-dom/client';
import {restaurants} from './constants/mocks.js';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);


root.render(
    <div>

        <div>
            <h3>{restaurants[0].name}</h3>
            <h4>Меню:</h4>
            <ul>
                <li>{restaurants[0].menu[0].name}</li>
                <li>{restaurants[0].menu[1].name}</li>
                <li>{restaurants[0].menu[2].name}</li>
            </ul>
            <div>
                <h5>Отзывы:</h5>
                <ul>
                    <li>
                        <p>{restaurants[0].reviews[0].user}:</p>
                        <p>{restaurants[0].reviews[0].text}</p>
                    </li>
                    <li>
                        <p>{restaurants[0].reviews[1].user}:</p>
                        <p>{restaurants[0].reviews[1].text}</p>
                    </li>
                </ul>
            </div>
        </div>

        <div>
            <h3>{restaurants[1].name}</h3>
            <h4>Меню:</h4>
            <ul>
                <li>{restaurants[1].menu[0].name}</li>
                <li>{restaurants[1].menu[1].name}</li>

            </ul>
            <div>
                <h5>Отзывы:</h5>
                <ul>
                    <li>
                        <p>{restaurants[1].reviews[0].user}:</p>
                        <p>{restaurants[1].reviews[0].text}</p>
                    </li>
                    <li>
                        <p>{restaurants[1].reviews[1].user}:</p>
                        <p>{restaurants[1].reviews[1].text}</p>
                    </li>
                    <li>
                        <p>{restaurants[1].reviews[2].user}:</p>
                        <p>{restaurants[1].reviews[2].text}</p>
                    </li>
                </ul>
            </div>
        </div>

        <div>
            <h3>{restaurants[2].name}</h3>
            <h4>Меню:</h4>
            <ul>
                <li>{restaurants[2].menu[0].name}</li>
                <li>{restaurants[2].menu[1].name}</li>
                <li>{restaurants[2].menu[2].name}</li>
            </ul>
            <div>
                <h5>Отзывы:</h5>
                <ul>
                    <li>
                        <p>{restaurants[2].reviews[0].user}:</p>
                        <p>{restaurants[2].reviews[0].text}</p>
                    </li>
                </ul>
            </div>
        </div>

        <div>
            <h3>{restaurants[3].name}</h3>
            <h4>Меню:</h4>
            <ul>
                <li>{restaurants[3].menu[0].name}</li>
                <li>{restaurants[3].menu[1].name}</li>
            </ul>
            <div>
                <h5>Отзывы:</h5>
                <ul>
                    <li>
                        <p>{restaurants[3].reviews[0].user}:</p>
                        <p>{restaurants[3].reviews[0].text}</p>
                    </li>
                    <li>
                        <p>{restaurants[3].reviews[1].user}:</p>
                        <p>{restaurants[3].reviews[1].text}</p>
                    </li>
                </ul>
            </div>
        </div>

    </div>
);