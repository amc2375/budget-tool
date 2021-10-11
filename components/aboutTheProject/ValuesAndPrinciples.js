import React from 'react';
import styles from './ValuesAndPrinciples.module.scss';
export default function ValuesAndPrinciples() {

  return (
    <section className={styles.container}>
      <h1>{"The Bronx-wide Coalition’s Values and Principles"}</h1>
      <ul>
        <li>{"We address injustice on a systemic level."}</li>
        <li>{"We center racial justice."}</li>
        <li>{"We apply an intergenerational lens."}</li>
        <li>{"We apply a gender justice lens."}</li>
        <li>{"We apply an environmental sustainability lens."}</li>
        <li>{"We use economic democracy as a framework from which to address poverty and inequality."}</li>
      </ul>
    </section>
  );
};
