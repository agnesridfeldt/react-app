import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div className="index-content">
                <div className="content">
                    <div className="slide"></div>
                    <div className="quote">
                        <blockquote>
                            <p>A <strong>superb tale</strong> of physical adventure, political suspense, and romance.
                                <cite>- Booklist, STARRED REVIEW</cite>
                            </p>
                        </blockquote>
                        <img src={require("../images/thg.jpeg")} alt="Logo. Suzanne Collins signature." className="logo"/>                    
                    </div>
                </div>

                <div className="form">
                    <form action="action_page.php">
                        <h2>Sign up for newsletters</h2>
                        <div className="form-row">
                            <div className="form-group">
                                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" name="email" placeholder="Your email.." />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;