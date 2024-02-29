import React from "react";

class Books extends React.Component {
    render() {
        return (
            <div className="book-page">
                <h1>The Hunger Games</h1>
                <div className="book-container">
                <div className="books">
                        <h2>The Hunger Games</h2>
                        <div className="book-info">
                            <p>
                                Katniss and Peeta Mellark have just won the 74th Hunger Games and are returning home to District
                                12 to get some rest. But it doesn't take long for Katniss to realize that people are unhappy
                                with the Capitol's rule and that rebellion is in the air.
                            </p>
                            <img src={require("../images/thg.jpeg")} alt="Cover of Catching Fire by Suzanne Collins." />
                        </div>
                    </div>

                    <div className="books">
                        <h2>Catching Fire</h2>
                        <div className="book-info">
                            <p>
                                Katniss and Peeta Mellark have just won the 74th Hunger Games and are returning home to District
                                12 to get some rest. But it doesn't take long for Katniss to realize that people are unhappy
                                with the Capitol's rule and that rebellion is in the air.
                            </p>
                            <img src={require("../images/cf.jpeg")} alt="Cover of Catching Fire by Suzanne Collins." />
                        </div>
                    </div>

                    <div className="books">
                        <h2>Mockingjay</h2>
                        <div className="book-info">
                            <p>
                                In a dystopian society where teenagers fight to the death in the live Hunger Games event,
                                14-year-old Katniss Everdeen decides to take her little sister's place in the arena to save
                                her life.
                            </p>
                            <img src={require("../images/m.jpeg")} alt="Cover of Mockingjay by Suzanne Collins." />
                        </div>
                    </div>
                </div>

                <h1>The Underground Chronicles</h1>
                <div className="book-container">
                    <div className="books">
                        <h2>Gregor the Overlander</h2>
                        <div className="book-info">
                            <p>
                                When Gregor falls through a grate in the laundry room of his apartment building, he hurtles into
                                the dark Underland, where spiders, rats, cockroaches coexist uneasily with humans. This world is
                                on the brink of war, and Gregor's arrival is no accident.
                            </p>
                            <img src={require("../images/uc1.jpeg")} alt="Cover of Gregor the Overlander by Suzanne Collins." />
                        </div>
                    </div>

                    <div className="books">
                        <h2>Gregor and the Prophecy of Bane</h2>
                        <div className="book-info">
                            <p>
                                Months have passed since Gregor first fell into the strange Underland beneath New York City, and
                                he swears he will never go back. But he is destined to be a key player in another prophecy, this
                                one about an ominous white rat called the Bane. The Underlanders know there is only one way to
                                lure Gregor back to their world: by kidnapping his little sister, Boots.
                            </p>
                            <img src={require("../images/uc2.jpeg")} alt="Cover of Gregor and the Prophecy of Bane by Suzanne Collins." />
                        </div>
                    </div>

                    <div className="books">
                        <h2>Gregor and the Curse of the Warmbloods</h2>
                        <div className="book-info">
                            <p>
                                With two prophecies fulfilled, Gregor is now focused on the Prophecy of Blood, which calls for
                                Gregor and "the princess," Boots, to return to the Underland to help ward off a plague. His mom
                                agrees to let them go - on the condition that she travels with them. When they arrive in the
                                subterranean city, the plague is spreading--and one of Gregor's family is stricken.
                            </p>
                            <img src={require("../images/uc3.jpeg")} alt="Cover of Gregor and the Curse of the Warmbloods by Suzanne Collins." />
                        </div>
                    </div>

                    <div className="books">
                        <h2>Gregor and the Marks of Secret</h2>
                        <div className="book-info">
                            <p>
                                Gregor is drawn into a crisis. For generations, rats have run the mice--or "nibblers"--out of
                                whatever lands they've claimed, keeping them on the move. But now the mice are disappearing, and
                                the young queen Luxa is determined to find out why.
                            </p>
                            <img src={require("../images/uc4.jpeg")} alt="Cover of Gregor and the Marks of Secret by Suzanne Collins." />
                        </div>
                    </div>

                    <div className="books">
                        <h2>Gregor and the Code of Claw</h2>
                        <div className="book-info">
                            <p>
                                Everyone in the Underland has been taking great pains to keep The Prophecy of Time from
                                Gregor. Gregor suspected it says something awful but he never imagined just how awful: It calls
                                for the warrior's death. Now, with an army of rats approaching and his mom and sister still in
                                Regalia, Gregor the warrior must gather up his courage to help defend Regalia and get his family
                                home safely.
                            </p>
                            <img src={require("../images/uc5.jpeg")} alt="Cover of Gregor and the Code of Claw by Suzanne Collins." />
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Books;