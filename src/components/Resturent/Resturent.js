import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Meals from '../Meals/Meals';

const Resturent = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    const handleSearchField = (e) => {
        const searchTextValue = (e).target.value;
        setSearchText(searchTextValue);
        // console.log(searchTextValue);
    }

    return (
        <div>

            <div className="py-2">
                <h2>This is resturent</h2>
                <input className="w-75" onChange={handleSearchField} type="text" placeholder="Search meals here" />

            </div>

            <div className="p-2">
                <Row xs={1} md={3} className="g-4">
                    {
                        meals.map(meal => <Meals
                            key={meal.idMeal}
                            meal={meal}
                        ></Meals>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Resturent;