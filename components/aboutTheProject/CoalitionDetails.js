import React from 'react';
import Image from 'next/image';
import bananaKelly from '../../static/coalition_logos/banana_kelly.jpg';
import bcdi from '../../static/coalition_logos/bcdi.png';
import bronxBethany from '../../static/coalition_logos/bronx_bethany.png';
import laal from '../../static/coalition_logos/laal.png';
import local79 from '../../static/coalition_logos/local_79.png';
import mekong from '../../static/coalition_logos/mekong.png';
import mom from '../../static/coalition_logos/mom.png';
import nosQuedamos from '../../static/coalition_logos/nos_quedamos.jpg';
import nwbccc from '../../static/coalition_logos/nwbccc.png';
import thePoint from '../../static/coalition_logos/the_point.jpeg';
import whedco from '../../static/coalition_logos/whedco.jpg';
import ympj from '../../static/coalition_logos/ympj.png';
import styles from './CoalitionDetails.module.scss';
export default function CoalitionDetails() {

  return (
    <section className={styles.container}>
      <div className={styles.iconContainer}>
        <div className={styles.iconSubContainer1}>
          <Image src={bananaKelly} alt={"Banana Kelly"}/>
          <Image src={bcdi} alt={"Bronx Cooperative Development Initiative"}/>
          <Image src={bronxBethany} alt={"Bronx Bethany"}/>
          <Image src={laal} alt={"LAAL"}/>
          <Image src={local79} alt={"Local 79"}/>
          <Image src={mekong} alt={"Mekong"}/>
        </div>
        <div className={styles.iconSubContainer2}>
          <Image src={mom} alt={"Mothers On The Move"}/>
          <Image src={nosQuedamos} alt={"Nos Quedamos"}/>
          <Image src={nwbccc} alt={"N.W.B.C.C.C."}/>
          <Image src={thePoint} alt={"The Point"}/>
          <Image src={whedco} alt={"WHEDCO"}/>
          <Image src={ympj} alt={"Youth Ministries for Peace and Justice"}/>
        </div>
      </div>
      <div className={styles.content}>
        <h3>{"A Plan for the Bronx"}</h3>
        <div className={styles.columns}>
          <p>{"The Bronx-wide Coalition is made up of community, labor, and faith community groups that have come together to advance a shared vision for the Bronx grounded in advancing racial justice and economic democracy, which we define as shared ownership and shared decision-making over our assets and local economy. The Bronx already has much of what it needs to transform its local economy and become a thriving, healthy borough. "}</p>
          <p>{"However, Bronxites currently do not have enough meaningful ownership or control over our futures. To ensure existing residents who fought for the Bronx can continue to call it home for generations to come, our Coalition of organizations and residents launched a Bronx-wide planning process in the spring of 2021. We’ve begun to engage Bronx residents through virtual People’s Assemblies, and we’ll continue to have virtual and in-person events to source our assets, challenges, opportunities, and solutions for transforming our Bronx."}</p>
        </div>
      </div>
    </section>
  );
};
