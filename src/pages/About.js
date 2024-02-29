import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="about-page">
        <div className="short-version">
          <h1>The Short Version</h1>
          <p>
            In 1991, Suzanne Collins began her career writing for children's TV, contributing to several Nickelodeon
            shows like "Clarissa Explains it All" and "The Mystery Files of Shelby Woo." She also wrote for "Little
            Bear" and "Oswald," co-wrote the holiday special "Santa, Baby!" and later became Head Writer for
            "Clifford's Puppy Days" and worked on "Wow! Wow! Wubbzy!" Her meeting with James Proimos while working
            on "Generation O!" led her to children's books.

            Her first book series, "The Underland Chronicles," started with "Gregor the Overlander," inspired by
            urban life contrasts to "Alice in Wonderland." It was a New York Times bestseller and sold in 21 foreign
            territories. Her next series, "The Hunger Games Trilogy," achieved international acclaim, staying on the
            New York Times bestseller list for over six years, sold in 54 territories, and adapted into successful
            films by Lionsgate. In 2010, TIME named her one of the world's most influential people. In 2016, she
            received the Authors Guild Award for her significant impact on young readers.

            She also released "YEAR OF THE JUNGLE," an autobiographical picture book in 2013, and "WHEN CHARLIE
            MCBUTTON LOST POWER," a children's book about a tech-obsessed boy, in 2005.
          </p>
          <img src={require("../images/sc2.jpeg")} alt="Logo. Suzanne Collins signature." className="logo"/>                    
        </div>
        <div className="long-version">
          <h1>The Long Version</h1>
          <p>
            In 1991, Suzanne Collins began her professional career writing for children's television. She worked on
            the staffs of several Nickelodeon shows, including the Emmy-nominated hit Clarissa Explains it All and
            The Mystery Files of Shelby Woo. For preschool viewers, she penned multiple stories for the
            Emmy-nominated Little Bear and Oswald. She also co-wrote the Rankin/Bass Christmas special, Santa, Baby!
            with her friend, Peter Bakalian, which was nominated for a WGA Award in Animation. Most recently she was
            the Head Writer for Scholastic Entertainment's Clifford's Puppy Days,and a freelancer on Wow! Wow!
            Wubbzy! While working on a Kids WB show called Generation O! she met children's author and illustrator
            James Proimos, who talked her into giving children's books a try.
          </p>
          <p>
            Thinking one day about Alice in Wonderland, she was struck by how pastoral the setting must seem to kids
            who, like her own, lived in urban surroundings. In New York City, you're much more likely to fall down a
            manhole than a rabbit hole and, if you do, you're not going to find a tea party. What you might find...?
            Well, that's the story of Gregor the Overlander, the first book in her five-part fantasy/war series, The
            Underland Chronicles,which became a New York Times bestseller. It has been sold into 21 foreign
            territories.
          </p>
          <p>
            Her next series, The Hunger Games Trilogy, is an international bestseller. The Hunger Games has spent
            over six years to date on The New York Times bestseller list since publication in September 2008, and
            has also appeared consistently on USA Today and Publishers Weekly bestseller lists. It has been sold
            into 54 territories in 52 languages. In 2010 Suzanne was named to the TIME 100 list as well as the
            Entertainment Weekly Entertainers of the Year list. In 2016, she was presented the 2016 Authors Guild
            Award for Distinguished Service to the Literary Community for exemplifying the unique power of young
            people's literature to change lives and create lifelong book lovers. It was the first time the Guild
            presented the award to a YA author.
          </p>
          <p>
            Lionsgate released a film adaptation of THE HUNGER GAMES on March 23, 2012, directed by Gary Ross who
            also shared screenplay credit with Suzanne and Billy Ray. It broke multiple box office records and went
            on to become the 14th highest-grossing North American release of all time on its way to generating
            nearly $700 million at the worldwide box office. Lionsgate released the second installment THE HUNGER
            GAMES: CATCHING FIRE worldwide on November 22, 2013, directed by Francis Lawrence from a screenplay by
            Simon Beaufoy and Michael DeBruyn and bringing back stars Jennifer Lawrence, Josh Hutcherson, Liam
            Hemsworth, Woody Harrelson, Elizabeth Banks, Willow Shields, Paula Malcomson, Donald Sutherland, Stanley
            Tucci and Lenny Kravitz along with new cast members Philip Seymour Hoffman, Sam Claflin, Jena Malone and
            Jeffrey Wright. It was the highest-grossing domestic box office release of 2013 and the 10th
            highest-grossing domestic release of all time. Lionsgate released THE HUNGER GAMES: MOCKINGJAY – PART 1
            on November 21, 2014 and THE HUNGER GAMES: MOCKINGJAY – PART 2 on November 20, 2015, also directed by
            Lawrence and welcoming Julianne Moore, Mahershala Ali, Natalie Dormer, and Patina Miller to the cast.
            Both screenplays were by Peter Craig and Danny Strong from an adaptation by Suzanne Collins. All four
            films were produced by Nina Jacobson of Color Force and Jon Kilik. The worldwide box for the entire
            franchise was nearly 3 billion.
          </p>
          <p>
            In September 2013, Suzanne released a critically acclaimed autobiographical picture book, YEAR OF THE
            JUNGLE, illustrated by James Proimos. It deals with the year she was six and her father was deployed to
            Viet Nam. It has been sold into 12 territories in 11 languages. Her first picture book, WHEN CHARLIE
            MCBUTTON LOST POWER, about a boy obsessed with computer games, was illustrated by Mike Lester and came
            out in 2005. It has been sold into 4 foreign territories.
          </p>
          <p>
            Her books have sold over 100 million copies worldwide.
          </p>
        </div>
      </div>
    );
  }
}

export default About;