import React from 'react';
import styles from './Vision.module.scss';
export default function ValuesAndPrinciples() {

  return (
    <section className={styles.container}>
      <h1>{"About the Project"}</h1>
      <p>{"The Bronx People’s Budget Survey is part of the work of the Bronx-wide Coalition to establish a community driven, comprehensive vision for economic development grounded in racial justice and economic democracy in our borough and city."}</p>
      <div className={styles.content}>
        <h3>{"Bronx-wide Coalition"}</h3>
        <div className={styles.columns}>
          <p>{"Members of the Bronx-wide Coalition co-created this tool with the Barnard College + Columbia University Urban Studies program to engage Bronx residents in the Coalition’s borough-wide planning process. We are working to develop a long-term, transformative economic development plan for our borough grounded in our vision and values, and we know Bronx residents are best positioned to identify what we already have, what we need, and the future we want to co-create for ourselves and our families. The Bronx People’s Budget Survey is one way for you to tell us what’s important to you!"}</p>
          <div className={styles.spacer}/>
          <p>{"Currently, elected officials make decisions about how to allocate the City’s budget in line with what they think is most important. We believe the people of the Bronx and New York City should have a more direct say in how the budget is created, so that it reflects the true needs and priorities of its residents. We believe that the City’s resources should benefit all residents and communities, especially those who have been historically disinvested in and marginalized."}</p>
        </div>
      </div>
    </section>
  );
};
