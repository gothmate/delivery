import React from "react";
import "./index.css";
import Button from "../Button";

export default function Card() {
    return (
        <div className="card-body">
            <header>
                <div className="rating">
                    <h4>Overall rating</h4>
                    <p>4.5</p>
                </div>
                <Button>Leave review</Button>
            </header>
            <div className="container">
                <select name="sorted" id="sortedby">
                    <option>Newest first</option>
                    <option>Oldest first</option>
                </select>
                <div className="reviews">
                    <div className="each-review">
                        <div className="profile">
                            <img src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="profile" />
                        </div>
                        <div className="review">
                            <div className="intro">
                                <h4>John Doo</h4>
                                <p>...stars 10 days ago</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis, facere quos consequuntur expedita amet incidunt qui optio consequatur.</p>
                        </div>
                    </div>
                    <div className="each-review">
                        <div className="profile">
                            <img src="https://images.unsplash.com/photo-1542157585-ef20bfcce579?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=522&q=80" alt="profile" />
                        </div>
                        <div className="review">
                            <div className="intro">
                                <h4>Suzane Smith</h4>
                                <p>...stars 2 months ago</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis, facere quos consequuntur expedita amet incidunt qui optio consequatur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}