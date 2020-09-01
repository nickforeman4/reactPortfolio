import React from "react";
function About() {
    return (
        <div>
            <div className="container">
        <div className="row">

        <div className="col-md-6">
            <div className="card mt-2">
            <div className="card-header" style="background-color: grey;">
                <h2 className="card-title" style="color: white; text-align: center;">About Me</h2>
            </div>
            <div className="card-body">
                <img src="./assets/images/SuitPic.JPG" className="card-img-top" alt="Profile Image"/>
            </div>
            <div className="card-footer">
                <p className="card-text">
                    My name is Nicholas "Nick" Foreman. I am originally from Houston, Texas, but I have done a lot of moving around throughout my lifetime.
                    I have 2 siblings, and my parents have been together for over 30 years. I attended the Georgia Institute of Technology, where I received
                    my degree in History, Technology, & Society, and also played basketball. Obviously, I'm a basketball fanatic, but I also enjoy movies,
                    travelling, finiding new restaurants, and spending time with family and friends.
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>
        </div>)
}