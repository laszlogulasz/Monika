import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Bio extends React.Component {

  render() {
    return <ScrollableAnchor id="1">
      <section id="bio">

        <div className="container bio--box">
          <article>
            <h2>
              <span>Bio</span>
            </h2>
            <p>Podczas Jazz Jamboree w 2009 roku została zaproszona przez Michała Urbaniaka do wspólnego koncertu w warszawskiej Sali Kongresowej. Miała wtedy 19 lat. Jej brawurowy występ porwał publiczność, wtedy też zaproponowano Jej pierwszy kontrakt płytowy (Sony Music).</p>
            <p>Szkołę muzyczną w klasie fortepianu ukończyła z wyróżnieniem, następnie rozpoczęła naukę wokalistyki jazzowej na wydziale piosenki w Zespole Państwowych Szkół Muzycznych im. Fryderyka Chopina w Warszawie. Podróż za ocean i nauka w John Jersey High School utwierdziła ją w tym, że jej drogą jest śpiewanie jazzu. Za namową przyjaciół brała udział w wielu festiwalach wokalnych zdobywając tam nagrody i najważniejsze doświadczenia zawodowe.</p>
            <p>Przełomowym momentem w jej karierze było otrzymanie stypendium w University of Miami Frost School of Music w 2008 roku. Dwa lata później rozpoczęła studia w Los Angeles Music Academy pod okiem Tierney Sutton i Doriana Holley.</p>
            <p>Po powrocie do Polski zaczęła studiować psychoseksuologię co obok muzyki stało się Jej ogromną pasją i życiowym wyzwaniem.</p>
          </article>
        </div>
      </section>
    </ScrollableAnchor>
  }
}
