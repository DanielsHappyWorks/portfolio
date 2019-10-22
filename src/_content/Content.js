import React, { Component } from 'react';
import './content.scss';
import data from '../data.json';
import M from "materialize-css";


class Content extends Component {

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    var links = data.socialMediaLinks.map(function (link) {
      return <a href={link.link} class={"btn-floating " + link.iconColour + " waves-effect padLeft pulse"}><i class={"fab " + link.icon + " overrideIcon lineHight"}></i></a>;
    })

    var collapsibleContent = data.collabsableContent.map(function (content) {
      return (
        <li class={content.class}>
          <div class="collapsible-header"><i class="material-icons iconColor">{content.icon}</i>{content.name}</div>
          <div class="collapsible-body">
            <div class="collection">

              {content.data.map(function (elm) {
                return (
                  <li class="collection-item avatar">
                    <img src={elm.picture} alt="" class="circle" />
                    <span class="title">{elm.title}</span>
                    <p>{elm.date}<br />{elm.description}</p>
                  </li>
                )
              })}
            </div>
          </div>
        </li>
      )
    })

    var cards = data.cardData.map(function (card) {
      return (
        <div class="col s4">
          <div class="card-panel minHeight">
            <p class="flow-text">{card.title}</p>
            <div class="divider"></div>
            <ul >
              {card.list.map(function (list) { return <li><i class={list.icon + " cardIcon"}></i><span>{list.name}</span></li> })}
            </ul>
          </div>
        </div>
      )
    })

    return (
      <main>
        <div class="container">
          <div class="card horizontal">
            <div class="card-image">
              <img class="circle" src="resources/images/daniel.jpg" />
            </div>
            <div class="card-stacked">
              <div class="card-content ">
                <span class="card-title activator grey-text text-darken-4">{data.name}</span>
                <p>{data.jobTitle}</p>
              </div>
              <div class="card-tabs">
                <ul class="tabs tabs-fixed-width">
                  <li class="tab"><a class="active" href="#test4">About Me</a></li>
                  <li class="tab"><a href="#test5">Resume</a></li>
                  <li class="tab"><a href="#test6">Links</a></li>
                </ul>
              </div>
              <div class="card-content grey lighten-5">
                <div id="test4">{data.bio}</div>
                <div id="test5">
                  <a href="resources/cv.pdf" class="btn waves-effect waves-light" download><i class="far fa-file-pdf padRight"></i>Download CV</a></div>
                <div id="test6">{links}</div>
              </div>
            </div>
          </div>


          <ul class="collapsible">{collapsibleContent}</ul>

          <div class="row">{cards}</div>
        </div>
      </main >
    )
  }
}

export default Content;