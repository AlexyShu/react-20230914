import React from 'react';
import {Header} from '../Header/component.jsx';
import {Footer} from '../Footer/component.jsx';
import styles from './styles.module.css'

export const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header className={styles.header} />
            <main className={styles.contentWrapper}>{children}</main>
            <div id="modal" />
            <Footer className={styles.footer} />
        </div>
    );
};