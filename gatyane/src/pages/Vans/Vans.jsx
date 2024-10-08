import React from "react";
import { Link, useSearchParams } from "react-router-dom";


export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])

    const typeFilter = searchParams.get("type")
    console.log(searchParams.toString())

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))

    }, [])

    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-title">
            <Link to={van.id} state={{ search: searchParams.toString() }}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }
    return (
        <div className="van-list-container">
            <h1>Explore our options</h1>
            <div className='van-list-filter-button'>
                <button
                    onClick={() => handleFilterChange('type', 'simple')}
                    className="van-type simple"
                >Simple</button>
                <button onClick={() => handleFilterChange('type', 'luxury')} className="van-type luxury">luxury</button>
                <button onClick={() => handleFilterChange(' type', 'rugged')} className="van-type rugged">rugged</button>
                <button onClick={() => handleFilterChange('type', null)} className="van-type clear-filters ">Clear filters</button>
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}