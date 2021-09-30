import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const Details = () => {
    const { detailsId } = useParams();
    const [meal, setMeal] = useState({});
    const history = useHistory();

    const handleClick = () => {
        history.push('/resturent');
    }

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detailsId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [])
    return (
        <div>
            <h1>This is details page</h1>


            <div>
                <Card>
                    <Card.Img variant="top" src={meal.strMealThumb} />
                    <Card.Body>
                        <h2>Mealid: {detailsId}</h2>
                        <Card.Title>Name:{meal.strMeal}</Card.Title>
                        <Card.Text>Contry:{meal.strArea}</Card.Text>
                        <Card.Text>Catagory:{meal.strCategory}</Card.Text>
                        <Button onClick={handleClick} variant="outline-secondary">Go to resturent</Button>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default Details;