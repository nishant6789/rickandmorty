import React from 'react'
import {Status} from './category/Status'
import {Species} from './category/Species'
import {Gender} from './category/Gender'
export const Filter = ({pageNumber, setPageNumber,setStatus, setGender, setSpecies}) => {
    let clearContent = () => {
        setStatus("")
        setGender("")
        setSpecies("")
        setPageNumber(1);
        window.location.reload(false)
    }
    return (
        <div className="col-lg-3 col-12 mb-5">
            <div className="text-center fw-bold fs-4 mb-2">Filters</div>
            <div style={{cursor : 'pointer'}} onClick={clearContent} className="text-primary text-decoration-underline text-center mb-3">Clear Filter</div>
            <div className="accordion" id="accordionExample">
                <Status setPageNumber={setPageNumber} setStatus={setStatus} />
                <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
                <Gender setPageNumber={setPageNumber} setGender={setGender} />
            </div>
        </div>
    )
}