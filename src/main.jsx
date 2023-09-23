import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {restaurants} from './constants/mocks.js';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const user = {
    fontWeight: 'bold'
}

const reviewsTitle = {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'green',
}

const menuTitle = {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'blue',
}

const restaurantName = {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'pink',
}

const card = {
    background: '#f9f7f7',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    width: '400px',
}

const reviews = {
    background: 'white',
    borderRadius: '20px',
    padding: '10px 40px',
    width: '300px',
}

const wrap = {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: '450px 450px',
}

root.render(
    <div style={wrap}>

        <div style={card}>
            <h3 style={restaurantName}>{restaurants[0].name}</h3>
            <h4 style={menuTitle}>Меню:</h4>
            <ul>
                <li>{restaurants[0].menu[0].name}</li>
                <li>{restaurants[0].menu[1].name}</li>
                <li>{restaurants[0].menu[2].name}</li>
            </ul>
            <div style={reviews}>
                <h5 style={reviewsTitle}>Отзывы:</h5>
                <ul>
                    <li>
                        <p style={user}>{restaurants[0].reviews[0].user}:</p>
                        <p>{restaurants[0].reviews[0].text}</p>
                    </li>
                    <li>
                        <p style={user}>{restaurants[0].reviews[1].user}:</p>
                        <p>{restaurants[0].reviews[1].text}</p>
                    </li>
                </ul>
            </div>
        </div>

        <div style={card}>
            <h3 style={restaurantName}>{restaurants[1].name}</h3>
            <h4 style={menuTitle}>Меню:</h4>
            <ul>
                <li>{restaurants[1].menu[0].name}</li>
                <li>{restaurants[1].menu[1].name}</li>

            </ul>
            <div style={reviews}>
                <h5 style={reviewsTitle}>Отзывы:</h5>
                <ul>
                    <li>
                        <p style={user}>{restaurants[1].reviews[0].user}:</p>
                        <p>{restaurants[1].reviews[0].text}</p>
                    </li>
                    <li>
                        <p style={user}>{restaurants[1].reviews[1].user}:</p>
                        <p>{restaurants[1].reviews[1].text}</p>
                    </li>
                    <li>
                        <p style={user}>{restaurants[1].reviews[2].user}:</p>
                        <p>{restaurants[1].reviews[2].text}</p>
                    </li>
                </ul>
            </div>
        </div>

        <div style={card}>
            <h3 style={restaurantName}>{restaurants[2].name}</h3>
            <h4 style={menuTitle}>Меню:</h4>
            <ul>
                <li>{restaurants[2].menu[0].name}</li>
                <li>{restaurants[2].menu[1].name}</li>
                <li>{restaurants[2].menu[2].name}</li>
            </ul>
            <div style={reviews}>
                <h5 style={reviewsTitle}>Отзывы:</h5>
                <ul>
                    <li>
                        <p style={user}>{restaurants[2].reviews[0].user}:</p>
                        <p>{restaurants[2].reviews[0].text}</p>
                    </li>
                </ul>
            </div>
        </div>

        <div style={card}>
            <h3 style={restaurantName}>{restaurants[3].name}</h3>
            <h4 style={menuTitle}>Меню:</h4>
            <ul>
                <li>{restaurants[3].menu[0].name}</li>
                <li>{restaurants[3].menu[1].name}</li>
            </ul>
            <div style={reviews}>
                <h5 style={reviewsTitle}>Отзывы:</h5>
                <ul>
                    <li>
                        <p style={user}>{restaurants[3].reviews[0].user}:</p>
                        <p>{restaurants[3].reviews[0].text}</p>
                    </li>
                    <li>
                        <p style={user}>{restaurants[3].reviews[1].user}:</p>
                        <p>{restaurants[3].reviews[1].text}</p>
                    </li>
                </ul>
            </div>
        </div>

    </div>
);