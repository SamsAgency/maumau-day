import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left"></div>
      <div className="banner-right">
        <marquee
          direction="up"
          onmouseover="this.stop()"
          onmouseout="this.start()"
          scrollamount="2"
          className="banner-quote"
        >
          <div className="banner-marquee-content">
            <h2 className="barner-marquee-title">1948</h2>
            <h4 className="barner-marquee-subtitle">Maumau war begins</h4>
            <h5 className="barner-middle-subtitle">Grievances</h5>
            <p className="barner-text-title">The main cause were: </p>
            <ul className="banner-marquee-ul">
              <li className="banner-marquee-li">Low wages</li>
              <li className="banner-marquee-li">Access to land</li>
              <li className="banner-marquee-li">Forced Labour</li>
              <li className="banner-marquee-li">Cultural Pride</li>
            </ul>
            <p className="banner-marque-text">
              Kipande: identity cards that Black workers had to submit to their
              White employers, who sometimes refused to return them or even
              destroyed the cards, making it incredibly difficult for workers to
              apply for other employment
            </p>
            <p className="banner-marque-text">
              Kikuyu were pressured to take the Mau Mau oath by militant
              nationalists who were opposed by the conservative elements of
              their society. While the British believed Jomo Kenyatta to be the
              overall leader, he was a moderate nationalist threatened by more
              militant nationalists, who continued the rebellion after his
              arrest.
            </p>
          </div>

          <div className="banner-marquee-content">
            <h2 className="barner-marquee-title">1951</h2>
            <h4 className="barner-marquee-subtitle">
              August: Mau Mau Movement Rumored
            </h4>

            <p className="banner-marque-text">
              Information was filtering in about secret meetings held in the
              forests outside Nairobi. A movement called the Mau Mau was
              believed to have started in the previous year which required its
              members to take an oath to drive the White man from Kenya.
              Intelligence suggested that members of the Mau Mau were restricted
              at the time to the Kikuyu tribe, many of whom were arrested during
              burglaries in Nairobi's White suburbs.
            </p>
          </div>

          <div className="banner-marquee-content">
            <h2 className="barner-marquee-title">1952</h2>

            <h4 className="barner-marquee-subtitle">
              August 24: Curfew Imposed
            </h4>
            <p className="banner-marque-text">
              The British government imposed a curfew in three districts on the
              outskirts of Nairobi where gangs of arsonists, believed to be
              members of the Mau Mau, were setting fire to the homes of Africans
              who refused to take the oath.
            </p>

            <h4 className="barner-marquee-subtitle">
              October 7: Assassination
            </h4>
            <p className="banner-marque-text">
              Senior Chief Waruhiu (traitor) was assassinated, stabbed to death
              by a spear in broad daylight on a main road on the outskirts of
              Nairobi. He had recently spoken out against increasing Mau Mau
              aggression against colonial rule.
            </p>

            <h4 className="barner-marquee-subtitle">
              October 19: British send troops
            </h4>
            <p className="banner-marque-text">
              The British government announced that it would send troops to
              Kenya to help the fight against the Mau Mau.
            </p>

            <h4 className="barner-marquee-subtitle">
              October 21: State of Emergency
            </h4>
            <p className="banner-marque-text">
              With the imminent arrival of British troops, the British colonial
              government declared a state of emergency following a month of
              increasing hostility. More than 40 people were murdered in Nairobi
              during the preceding four weeks and the Mau Mau, officially
              declared terrorists, acquired firearms to use alongside more
              traditional pangas. As part of the overall clampdown, Kenyatta,
              President of the Kenya African Union, was arrested for alleged Mau
              Mau involvement. (Note, he was not a Mau Mau)
            </p>

            <h4 className="barner-marquee-subtitle">
              October 19: British send troops
            </h4>
            <p className="banner-marque-text">
              The British government announced that it would send troops to
              Kenya to help the fight against the Mau Mau.
            </p>

            <h4 className="barner-marquee-subtitle">
              October 30: Arrests of Mau Mau Activists
            </h4>
            <p className="banner-marque-text">
              British troops were involved in the arrest of over 500 suspected
              Mau Mau activists.
            </p>

            <h4 className="barner-marquee-subtitle">
              November 14: Schools Closed
            </h4>
            <p className="banner-marque-text">
              Thirty-four schools in Kikuyu central areas are closed as a
              measure to restrict the actions of Mau Mau activists.
            </p>

            <h4 className="barner-marquee-subtitle">
              November 18: Kenyatta Arrested
            </h4>
            <p className="banner-marque-text">
              The British government announced that it would send troops to
              Kenya to help the fight against the Mau Mau.
            </p>

            <h4 className="barner-marquee-subtitle">
              November 25: Open Rebellion
            </h4>
            <p className="banner-marque-text">
              The Mau Mau declared open rebellion against British rule in Kenya.
              In response, British forces arrested over 2000 Kikuyu who they
              suspect of being Mau Mau members.
            </p>
          </div>

          <div className="banner-marquee-content">
            <h2 className="barner-marquee-title">1953</h2>

            <h4 className="barner-marquee-subtitle">
              January 18: Death Penalty for Administering Mau Mau Oath
            </h4>
            <p className="banner-marque-text">
              Governor-general Sir Evelyn Baring imposed the death penalty for
              anyone who administers the Mau Mau oath. The oath would often be
              forced upon a Kikuyu tribesman at knife point, and his death was
              called for if he failed to kill a European farmer when ordered.
            </p>

            <h4 className="barner-marquee-subtitle">
              January 26: White Settlers Panic and Take Action
            </h4>
            <p className="banner-marque-text">
              Panic spread through the Europeans in Kenya after the slaying of a
              White settler farmer and his family. Settler groups, displeased
              with the government's response to the increasing Mau Mau threat,
              created Commando Units to deal with it. Baring announced a new
              offensive under the command of Major-General William Hinde.
              Amongst those speaking out against the Mau Mau threat and the
              government's inaction was Elspeth Huxley, who compared Kenyatta to
              Hitler in a recent newspaper article (and would author "The Flame
              Trees of Thika" in 1959).
            </p>

            <h4 className="barner-marquee-subtitle">
              April 1: British Troops Kill Mau Maus in Highlands
            </h4>
            <p className="banner-marque-text">
              British troops kill 24 Mau Mau suspects and capture an additional
              36 during deployments in the Kenyan highlands.
            </p>

            <h4 className="barner-marquee-subtitle">
              April 8: Kenyatta Sentenced
            </h4>
            <p className="banner-marque-text">
              Kenyatta is sentenced to seven years hard labor along with five
              other Kikuyu detained at Kapenguria.
            </p>

            <h4 className="barner-marquee-subtitle">
              April 10-17: 1000 Arrested
            </h4>
            <p className="banner-marque-text">
              An additional 1000 Mau Mau suspects were arrested around the
              capital Nairobi.
            </p>

            <h4 className="barner-marquee-subtitle">May 3: Murders</h4>
            <p className="banner-marque-text">
              Nineteen Kikuyu members of the Home Guard were murdered by the Mau
              Mau.
            </p>

            <h4 className="barner-marquee-subtitle">
              May 29: Kikuyu Cordoned Off
            </h4>
            <p className="banner-marque-text">
              Kikuyu tribal lands were ordered to be cordoned off from the rest
              of Kenya to prevent Mau Mau activists from circulating to other
              areas.
            </p>

            <h4 className="barner-marquee-subtitle">
              July: Mau Mau Suspects Killed
            </h4>
            <p className="banner-marque-text">
              Another 100 Mau Mau suspects were killed during British patrols in
              Kikuyu tribal lands.
            </p>
          </div>

          <div className="banner-marquee-content">
            <h2 className="barner-marquee-title">1954</h2>

            <h4 className="barner-marquee-subtitle">
              January 15: Mau Mau Leader Captured
            </h4>

            <p className="banner-marque-text">
              General China, the second in command of the Mau Mau's military
              efforts, was wounded and captured by British troops. (He later
              became a traitor working for the British government)
            </p>

            <h4 className="barner-marquee-subtitle">
              March 9: More Mau Mau Leaders Captured
            </h4>

            <p className="banner-marque-text">
              Two more Mau Mau leaders were secured: General Katanga was
              captured and General Tanganyika surrendered to British authority.
            </p>

            <h4 className="barner-marquee-subtitle">March: British plan</h4>

            <p className="banner-marque-text">
              The great British plan to end the Mau Mau Rebellion in Kenya was
              presented to the country's legislature. General China, captured in
              January, was to write to the other terrorist leaders and suggest
              that nothing further could be gained from the conflict and that
              they should surrender to British troops waiting in the Aberdare
              foothills.
            </p>

            <h4 className="barner-marquee-subtitle">11: Failure of the plan</h4>

            <p className="banner-marque-text">
              British authorities in Kenya admitted that the "General China
              operation" legislature failed as Mau Mau refused to surrender and
              vowed to fight to the end.
            </p>

            <h4 className="barner-marquee-subtitle">
              April 24: 40,000 Arrested
            </h4>

            <p className="banner-marque-text">
              Over 40,000 Kikuyu were arrested by British forces, including 5000
              Imperial troops and 1000 Policemen, during widespread, coordinated
              dawn raids.
            </p>

            <h4 className="barner-marquee-subtitle">
              May 26: Treetops Hotel Burned
            </h4>

            <p className="banner-marque-text">
              The Treetops Hotel, where Princess Elizabeth and her husband were
              staying when they heard of King George VI's death and her
              succession to the throne of England, was burnt down by Mau Mau
              Revolutionaries.
            </p>
          </div>

          <div className="banner-marquee-content">
            <h2 className="barner-marquee-title">1955</h2>

            <h4 className="barner-marquee-subtitle">
              January 18: Amnesty Offered
            </h4>

            <p className="banner-marque-text">
              Sir Evelyn Baring offered an amnesty to Mau Mau activists if they
              would surrender. They would still face imprisonment but wouldn't
              suffer the death penalty for their crimes. European settlers were
              up in arms at the leniency of the offer.
            </p>

            <h4 className="barner-marquee-subtitle">
              April 21: Murders Continue
            </h4>

            <p className="banner-marque-text">
              Unmoved by the Baring's amnesty offer, the Mau Mau killings
              continued with two English men killed.
            </p>

            <h4 className="barner-marquee-subtitle">
              June 10: Amnesty Withdrawn
            </h4>

            <p className="banner-marque-text">
              Britain withdrew the offer of amnesty to the Mau Mau. The
              Revolutionaries stand firm on their fight for freedom and
              independence.
            </p>

            <h4 className="barner-marquee-subtitle">
              June 24: Death Sentences
            </h4>

            <p className="banner-marque-text">
              With the amnesty withdrawn, British authorities in Kenya proceeded
              with the death sentence for nine Mau Mau revolutionaries
              implicated in the deaths of the two schoolboys.
            </p>

            <h4 className="barner-marquee-subtitle">October: Death Toll</h4>

            <p className="banner-marque-text">
              Official reports said that more than 70,000 Kikuyu people
              suspected of Mau Mau membership were imprisoned, while over 13,000
              people were killed by British troops and Mau Mau activists over
              the previous three years.
            </p>
          </div>

          <div className="banner-marquee-content">
            <h2 className="barner-marquee-title">1956</h2>
            <h4 className="barner-marquee-subtitle">January 7: Death Toll</h4>

            <p className="banner-marque-text">
              The official death toll for Mau Mau activists killed by British
              forces in Kenya since 1952 was said to be 10,173.
            </p>

            <h4 className="barner-marquee-subtitle">
              February 5: Mau Mau Escape
            </h4>

            <p className="banner-marque-text">
              Nine Mau Mau activists escaped from Mageta island prison camp in
              Lake Victoria.
            </p>
          </div>

          <div className="banner-marquee-content">
            <h2 className="barner-marquee-title">1959</h2>

            <h4 className="barner-marquee-subtitle">
              July: British Opposition Attacks
            </h4>

            <p className="banner-marque-text">
              The deaths of 11 Mau Mau activists held at Hola Camp in Kenya were
              cited as part of opposition attacks on the U.K. government over
              its role in Africa.
            </p>

            <h4 className="barner-marquee-subtitle">
              November 10: State of Emergency Ends
            </h4>

            <p className="banner-marque-text">
              The state of emergency declared in 1952 came to an end in Kenya.
            </p>
          </div>

          <div className="banner-marquee-content">
            <h2 className="barner-marquee-title">1960</h2>

            <h4 className="barner-marquee-subtitle">
              January 18: Kenyan Constitutional Conference Boycotted
            </h4>

            <p className="banner-marque-text">
              The Kenyan Constitutional Conference in London was boycotted by
              African nationalist leaders.
            </p>

            <h4 className="barner-marquee-subtitle">
              April 18: Kenyatta Released
            </h4>

            <p className="banner-marque-text">
              In return for Kenyatta's release, African nationalist leaders
              agreed to take a role in Kenya's government.
            </p>
          </div>

          <div className="banner-marquee-content">
            <h2 className="barner-marquee-title">1963</h2>

            <h4 className="barner-marquee-subtitle">December 12</h4>

            <p className="banner-marque-text">
              TThe capture of rebel leader Field Marshal Dedan Kimathi on 21
              October 1956 signaled the defeat of the Mau Mau, and essentially
              ended the British military campaign. However, the rebellion
              survived until after Kenya's independence from Britain, driven
              mainly by the Meru units led by Field Marshal Musa Mwariama and
              General Baimungi. Baimuingi, one of the last Mau Mau generals, was
              killed shortly after Kenya attained self-rule.Kenya became
              independent seven years after the collapse of the uprising.
            </p>

            <h4 className="barner-marquee-subtitle">
              April 18: Kenyatta Released
            </h4>

            <p className="banner-marque-text">
              Many argue that the Mau Mau uprising helped catalyze
              decolonization as it showed that colonial control could only be
              maintained through the use of extreme force. The moral and
              financial cost of colonization was a growing issue with British
              voters, and the Mau Mau revolt brought those issues to a head.
              <br />
              However, the fighting between Kikuyu communities made their legacy
              contentious within Kenya. The colonial legislation outlawing the
              Mau Mau defined them as terrorists, a designation that remained in
              place until 2003, when the Kenyan government revoked the law. The
              government has since established monuments celebrating Mau Mau
              rebels as national heroes.
            </p>
          </div>

          <div className="banner-marquee-content">
            <h2 className="barner-marquee-title">2013</h2>

            <p className="banner-marque-text">
              The British government formally apologized for the brutal
              tactics it used to suppress the uprising and agreed to pay
              approximately £20 million in compensation to surviving victims of
              abuse.
            </p>
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default Banner;
