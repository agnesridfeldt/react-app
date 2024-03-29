import React from "react";

class Interview extends React.Component {
    render() {
        return (
            <div className="interview-all">
                <div className="interview-page">
                    <h1>Interview</h1>
                    <div className="interview-content">
                        <div className="video-container">
                            <video width="320" height="240" controls>
                                <source src={require("../images/video.mp4")} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="questions-answers">
                            <p className="questions">Q: Of all the places Gregor could have traveled to, why the Underland?</p>
                            <p className="answer">I liked the fact that this world was teeming under New York City and nobody was
                                aware of it. That you could be going along preoccupied with your own problems and then whoosh! You take a
                                wrong turn in your laundry room and suddenly a giant cockroach is right in your face. No magic, no space or
                                time travel, there's just a ticket to another world behind your clothes dryer.
                            </p>
                            <p className="questions">Q: Is there anything you find/found difficult or challenging in writing from
                                the perspective of an 11-year-old boy?</p>
                            <p className="answer">I remember being eleven very clearly and I had a lot of friends who were boys so
                                it felt pretty natural being in Gregor's head.
                            </p>
                            <p className="questions">Q: Are you anything like Gregor?</p>
                            <p className="answer">I think I'm like Gregor because we both want to do the right thing but sometimes
                                have trouble figuring out what it is. Also, neither of us likes to ride roller coasters and we've both
                                changed a lot of diapers. But Gregor is much braver than I am…if I even see a regular sized rat in New York City I
                                immediately cross the street.
                            </p>
                            <p className="questions">Q: What kinds of things did you enjoy doing when you were 11?</p>
                            <p className="answer">Gymnastics, like Luxa. Reading. Running around in the woods with my friends.
                            </p>
                            <p className="questions">Q: Many people think bats, rats, cockroaches, and spiders are creepy! Did you
                                have to get over your fear of any (or all!) of them to write this story?</p>
                            <p className="answer">I wish I could say that after I researched the creepy animals I was no longer at
                                all afraid of them…but that would be a big fib! Cockroaches aren't really scary, just a little germy, so I
                                don't mind them much. I love bats…except these really loud ones that get in my attic in the summer and hold some
                                kind of party all night long. Spiders still scare me some, although I'm also fascinated by them and I
                                can happily watch them from a distance. But rats…not pet rats but the wild kind…I will always have what I
                                consider to be a healthy fear of rats. You should, too.
                            </p>
                            <p className="questions">Q: Are you kinder to cockroaches, bats, rats, and/or spiders nowadays?</p>
                            <p className="answer">I don't think I was ever particularly unkind to them…but I do have more of a
                                connection with them now. I'm more aware of their similarities to humans. And I'm sympathetic to their desire to
                                survive, which all creatures share.
                            </p>
                            <p className="questions">Q: Did you have a sibling who, like Boots, got you into a world of trouble?</p>
                            <p className="answer">I have two older sisters and one older brother and hold them largely responsible
                                for the trouble I got into growing up. I believe as the youngest child, that is my right.
                            </p>
                            <p className="questions">Q: Have you ever lived in New York City?</p>
                            <p className="answer">I lived in New York City for 16 years, from 1987 to 2003. But when I was growing
                                up we moved all the time because my dad was in the Air Force. We were mostly on the eastern half of the U.S.
                                and in Europe but, like Gregor, I definitely know what it feels like to be a stranger somewhere.
                            </p>
                            <p className="questions">Q: If you had to go to the Underland, what items would you take along with you?
                                And who would you take with you?</p>
                            <p className="answer">I'd take all the flashlights and batteries I could find. I'd also take a couple of
                                bottles of water and chocolate, because I don't like traveling without either of these things. I would wear
                                very comfortable clothes and sneakers…in case I had to run. My husband, Cap, would be great to have in the
                                Underland, since he is very good in an emergency, but I'd want him to be with our kids up in the Overland so
                                I'd know they were in safe hands. (Note: Cap says he would not take me to the Underland because I am not good in an emergency and
                                I would constantly make him stop and ask for directions. Both of these things are true.)
                                So I think I would take my good friend Christopher Santos with me, because he is very diplomatic
                                and travels a lot and he seems at ease in foreign places. Also, he would never make loud, mean remarks about
                                the creatures which could get a person in all kinds of trouble.
                                In the Underland, I would make it my first order of business to hook up with a couple of bats
                                because, let's face it, without a bat you're probably going to end up as someone's lunch.
                            </p>
                            <p className="questions">Q: Have you ever been lost and wanted to find your way home?</p>
                            <p className="answer">All the time. I have a terrible sense of direction. I get lost practically every
                                time I leave my house. Fortunately, people are usually very kind about giving you directions if you ask
                                politely.
                            </p>
                            <p className="questions">Q: Do you think you were destined to be a writer? (or is there some free will
                                involved?!)</p>
                            <p className="answer">I…have no idea how to answer this. I would have to go to a cave and meditate on it
                                or something, and then I probably still wouldn't know.
                            </p>
                            <p className="questions">Q: If you could invite one of the characters to have dinner with your family,
                                who would it be? What might you cook for them?! What questions would you ask them?</p>
                            <p className="answer">I would invite Ripred to dinner because I think he would tell the most interesting
                                stories. We would have to serve shrimp in cream sauce because this is his favorite dish of all. Just to
                                irritate him, I would tell him he has to use a napkin—or he won't get dessert. He would use the napkin, because
                                dessert would be a fabulous chocolate cake and he loves food, but I bet he would glare at me the whole
                                time. I would ask all kinds of questions about being a rat, and living alone in the Dead Land, and
                                about his family. Ripred sometimes sneaks up to the Overland, so I would ask him his opinion of New York
                                City, too. After dinner, we'd play Scrabble.
                            </p>
                            <p className="questions">Q: All fun aside for a moment, Gregor is also about war and battling forces and
                                survival. Can you tell us a little bit about this?</p>
                            <p className="answer">Gregor falls into a fantastical world, but he's really acting out the main role in
                                a war story. Almost as soon as he arrives in the Underland, he's recognized as the "warrior" of the
                                prophecies and he's called upon to undertake what are essentially a series of military missions. For instance,
                                in Book I he goes into enemy territory to rescue a prisoner of war who also happens to be his dad. It's never
                                described as such, but that's what's really happening.

                                As the series continues, Gregor is faced with increasingly difficult quests and choices as the
                                Underland breaks into a massive global war. His struggle to survive-both physically and spiritually-forms
                                the arc of The Underland Chronicles.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Interview;