import React from "react";

class Timeline extends React.Component {
    render() {
        return (
            <div className="timeline-content">
                <div className="timeline-page">
                    <h1>Timeline</h1>
                    <div className="timeline">
                        <div className="container left">
                            <div className="content">
                                <h2>September 2003</h2>
                                <p>Gregor the Overlander</p>
                            </div>
                        </div>
                        <div className="container right">
                            <div className="content">
                                <h2>September 2004</h2>
                                <p>Gregor and the Prophecy of Bane</p>
                            </div>
                        </div>
                        <div className="container left">
                            <div className="content">
                                <h2>July 2005</h2>
                                <p>Gregor and the Curse of the Warmbloods</p>
                            </div>
                        </div>
                        <div className="container right">
                            <div className="content">
                                <h2>May 2006</h2>
                                <p>Gregor and the Marks of Secret</p>
                            </div>
                        </div>
                        <div className="container left">
                            <div className="content">
                                <h2>April 2007</h2>
                                <p>Gregor and the Code of Claw</p>
                            </div>
                        </div>
                        <div className="container right">
                            <div className="content">
                                <h2>October 2008</h2>
                                <p>The Hunger Game</p>
                            </div>
                        </div>
                        <div className="container left">
                            <div className="content">
                                <h2>September 2009</h2>
                                <p>Catching Fire</p>
                            </div>
                        </div>
                        <div className="container right">
                            <div className="content">
                                <h2>August 2010</h2>
                                <p>Mockingjay</p>
                            </div>
                        </div>
                        <div className="container left">
                            <div className="content">
                                <h2>May 2020</h2>
                                <p>The Ballad of Songbirds and Snakes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Timeline;