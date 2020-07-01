import React from 'react'
import styles from '../style/header.module.css'

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.box}>
                    <h1>soundzbay</h1>
                    <p>bay of best beats.</p>
                    <a className={styles.button} href="#">Get Beats</a>
                </div>
            </header>
        </>
    )
}

export default Header