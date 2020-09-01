import React from "react";

function Contact() {
    return (
        <div id="contactinfo">
            <div className="container">
                <div className="row">

                    <div className="col-md-6">
                        <div className="card mt-2">
                            <div className="card-header bg-secondary">
                                <h2 className="card-title text-light text-center">Contact</h2>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <h5 className="card-title">Email</h5>
                                    <p>
                                        nicholas.m.foreman@gmail.com
                                    </p>
                                </li>
                                <li className="list-group-item">
                                    <h5 className="card-title">Facebook</h5>
                                    <a className="card-link" href="https://www.facebook.com/nick4man">Nick Foreman</a>
                                </li>
                                <li className="list-group-item">
                                    <h5 className="card-title">Github</h5>
                                    <a className="card-link" href="https://github.com/nickforeman4">nickforeman4</a>
                                </li>
                                <li className="list-group-item">
                                    <h5 className="card-title">Instagram</h5>
                                    <a className="card-link" href="https://www.instagram.com/nickforeman4/">nickforeman4</a>
                                </li>
                                <li className="list-group-item">
                                    <h5 className="card-title">LinkedIn</h5>
                                    <a className="card-link" href="https://www.linkedin.com/in/nickforeman/">Nicholas Foreman</a>
                                </li>
                            </ul>
                            <div className="card-footer text-center">
                                <img alt="Gmail" src="./images/GmailLogo.png" width="60" height="60" />
                                <a href="https://www.facebook.com/nick4man">
                                    <img alt="Facebook" src="./images/FacebookLogo.png" width="60" height="60" /></a>
                                <a href="https://github.com/nickforeman4">
                                    <img alt="Github" src="./images/GithubLogo.png" width="60" height="60" /></a>
                                <a href="https://www.instagram.com/nickforeman4/">
                                    <img alt="Instagram" src="./images/InstagramLogo.png" width="60" height="60" /></a>
                                <a href="https://www.linkedin.com/in/nickforeman/">
                                    <img alt="LinkedIn" src="./images/LinkedInLogo.png" width="60" height="60" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;