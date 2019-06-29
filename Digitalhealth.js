import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Header from "./Layout/Header.js";
import LeftNav from "./Layout/LeftNav.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelopeOpen, faUsers, faFileUpload, faUser, faArrowUp, faArrowDown, faCheckCircle, faTags } from "@fortawesome/free-solid-svg-icons/";
import { faChartBar } from "@fortawesome/free-regular-svg-icons/";
library.add(faEnvelopeOpen, faUsers, faFileUpload, faUser, faChartBar,  faArrowUp, faArrowDown, faCheckCircle, faTags );

class Digitalhealth extends Component {
  constructor() {
    super();
    this.state = {
      title: "My Digital Health",
      leftNav: {
        policies: false,
        reports: false,
        tags: false
      },
    };
  }
  componentDidMount() {
    document.title = "My Digital Health";
  }
  render() {
    return (
      <div>
        <Header titleCallback={this.defineTheTitleInHeader} title={this.state.title} key={this.state.title}/>

        <div className="mdh_main">
          <LeftNav leftNavData={this.state.leftNav} key={this.state.title}/>
          <div className="mdh_viewp" id="mdh_viewp">
            <div className="mdh_viewp_top_nav">
              <a href="javascript:void(0);">Ad Operations Report</a>
              <a href="javascript:void(0);">Programmatic Operation Report</a>
              <a href="javascript:void(0);">Advertiser Report 2</a>
            </div>
            <div className="mdh_box_views">
              <div className="mdh_box">
                <div className="mdh_dummy" />
                <div className="mdh_info">
                  <h3>Total Tags Scanned</h3>
                  <h1>86</h1>
                  <div className="mdh_bottom_row">
                    <div className="mdh_info_bottom green">
                      <FontAwesomeIcon icon={ faArrowUp } />
                      <span>38%</span>
                    </div>
                    <div className="mdh_info_graph">
                      <FontAwesomeIcon icon={faChartBar} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mdh_box">
                <div className="mdh_dummy" />
                <div className="mdh_info">
                  <h3>Total Tags In Violation</h3>
                  <h1>700</h1>
                  <div className="mdh_bottom_row">
                    <div className="mdh_info_bottom red">
                      <FontAwesomeIcon className="thisArrowDown" icon={ faArrowDown } />
                      <span>18%</span>
                    </div>
                    <div className="mdh_info_graph">
                      <FontAwesomeIcon icon={faChartBar} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mdh_box">
                <div className="mdh_dummy" />
                <div className="mdh_info">
                  <h3>Total Campaigns Fulfilled</h3>
                  <h1>534</h1>
                  <div className="mdh_bottom_row">
                    <div className="mdh_info_bottom green">
                      <FontAwesomeIcon icon={ faArrowUp } />
                      <span>10%</span>
                    </div>
                    <div className="mdh_info_graph">
                      <FontAwesomeIcon icon={faChartBar} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mdh_box">
                <div className="mdh_dummy" />
                <div className="mdh_info">
                  <h3>Total Tags Packages QA'd</h3>
                  <h1>100</h1>
                  <div className="mdh_bottom_row">
                    <div className="mdh_info_bottom red">
                      <FontAwesomeIcon className="thisArrowDown" icon={ faArrowDown } />
                      <span>8%</span>
                    </div>
                    <div className="mdh_info_graph">
                      <FontAwesomeIcon icon={faChartBar} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Digitalhealth;
