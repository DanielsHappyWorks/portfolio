import React, { Component } from 'react';
import data from '../data.json';
import './header.scss';

// Import Materialize
import M from "materialize-css";


class SuperCoolComponent extends Component {

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    var socialMediaLinks = data.socialMediaLinks.map(function (link) {
      return <li key="link.name"><a href={link.link} class="waves-effect"><i class={"fab " + link.icon + " overrideIcon"}></i>{link.name}</a></li>;
    })
    
    return (
      <header>
        <ul id="slide-out" class="sidenav sidenav-fixed">
          <li>
            <div class="user-view">
              <div class="background">
                <img src={data.profileBackground} alt="background" />
              </div>
              <img class="circle" src={data.profileImage} alt="profile" />
              <span class="white-text name">{data.name}</span>
              <a href="#email">
                <span class="white-text email">{data.email}</span>
              </a>
            </div>
          </li>
          <li>
            <a href={data.resume.link} class="waves-effect" download><i class="far fa-file-pdf overrideIcon"></i>{data.resume.name}</a>
          </li>
          <li>
            <div class="divider">
            </div>
          </li>
          <li >
            <a class="subheader">Links</a>
          </li>
          {socialMediaLinks}
        </ul>

        <div class="container">
          <a data-target="slide-out" class="top-nav sidenav-trigger full hide-on-large-only"><i class="material-icons">menu</i></a>
        </div>
      </header>
    )
  }
}

export default SuperCoolComponent;