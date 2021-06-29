import useSwr from "swr";
import Link from "next/link";
import React from "react";
import Form from "./form.js";

import styles from '../styles/styles.module.scss';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return <Form/>
  }

};
