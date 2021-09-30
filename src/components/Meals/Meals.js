import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';


const Meals = (props) => {
    const { strMeal, strArea, strMealThumb, idMeal } = props.meal;
    const url = `/meals/${idMeal}`;
    const history = useHistory();

    const handleClick = () => {
        history.push(url);
    }
    return (
        <div>
            <div>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={strMealThumb} />
                        <Card.Body>
                            <Card.Title>{strMeal}</Card.Title>
                            <Card.Text>{strArea}</Card.Text>
                            <Button onClick={handleClick} variant="outline-secondary">Show detals</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </div>
        </div>
    );
};

export default Meals;