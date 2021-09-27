import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../redux/actions'
import { Link } from "react-router-dom";


export default function NavBar() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    // const onClickHandler = (brand) => { dispatch(fetchBrandDetails(brand)); console.log('brand1', brand) }


    const categoryInfo = useSelector(state => state.categoryInfo)
    const { category } = categoryInfo
    return (

        <nav className="desktopNav row border-bottom bg-white">


            <div className="container">
                <ul>
                    {category && category.length > 0 && category.map(e => (<li key={e.slug}
                        className="dropdown spriteMenu">
                        <Link to={`/instantvouchers/category/${e.slug}`}>
                            <figure><img src={`${e.icon_url}`} className alt={e.name} />
                                <figcaption>{e.name}</figcaption>
                            </figure>
                        </Link>
                        <div className="dropdown-menu" aria-labelledby={`${e.name}-Dropdown`}>
                            {e.brands_name.length > 0 && e.brands_name.map((brand, i) => (< Link key={e.brands_slug[i]} className="dropdown-item" to={`/instantvouchers/${e.brands_slug[i]}`} >{brand}</Link>))}
                        </div>
                    </li>
                    ))}</ul>
            </div>

        </nav >

    )
}
