import React, { Fragment } from "react";

const Module = () => (
  <Fragment>
    {/* Not Running */}
    {/*
    <div class="module__name"> kissasian</div>
    <div class="module__type module__type--drama">drama</div>
    <div class="module__status module__status--not-running clearfix">Not Running</div>
    */}

    {/* Running */}
    {/*
    <div className="module__close">x</div>
    <div className="module__name"> 9anime</div>
    <div className="module__type module__type--anime">anime</div>
    <div className="module__status module__status--running">Running</div>
    */}

    {/* Disabled */}
    <div className="module__name"> prontv</div>
    <div className="module__type module__type--adult">adult</div>
    <div className="module__status module__status--disabled">Disabled</div>
  </Fragment>
);

export default Module;
