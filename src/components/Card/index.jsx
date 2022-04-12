import {React, useState, useEffect} from "react";
import "./index.css";
import Button from "../Button";
import Star from "../../assets/Vector.svg";

export default function Card() {
    
    const [review, setReview] = useState([]);
  
    useEffect(() => {
        fetch('./data.json', {
            headers: {
                Accept: 'application/json'
            }
        }).then(res => res.json())
            .then(res => {setReview(res.reviews)
            })
    }, [])

    let rating = 0

    review.map(item => {
        rating += item.stars 
        return (rating)
    })

    return (
        <div className="card-body">
            <header>
                <div className="rating">
                    <h4>Overall rating</h4>
                    <p>{parseFloat(rating/review.length).toFixed(1)}</p>
                </div>
                <Button>Leave review</Button>
            </header>
            <div className="container">
                <select name="sorted" id="sortedby">
                    <option>Newest first</option>
                    <option>Oldest first</option>
                </select>
                <div className="reviews">
                    {review.map(el => {
                        return (
                            <div key={el.id} className="each-review">
                                <div className="profile">
                                    <img src={el.profile_pic} alt="profile" />
                                </div>
                                <div className="review">
                                    <div className="intro">
                                        <h4>{el.name}</h4>
                                        <p>{el.stars} <img src={Star} alt="estrela" />  stars {el.date}</p>
                                    </div>
                                    <p>{el.comment}</p>
                                </div>
                            </div>
                        )   
                    })}
                </div>
            </div>
        </div>
    )
}