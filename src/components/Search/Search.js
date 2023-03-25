import React from 'react'
import styles from './Search.module.scss'

export const Search = ({setSearch, setPageNumber}) => {
    let searchBtn = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <form className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}>
        </form>

        <input onChange={(e) => {setPageNumber(1); setSearch(e.target.value)}} placeholder="Search Your Charater" className={`${styles.input}`} type="text"/>
        <div>
            <button onClick={searchBtn} className={`${styles.btn} my-4 btn btn-primary fs-5`}>Search</button>
        </div>
        
        </>
    )
};