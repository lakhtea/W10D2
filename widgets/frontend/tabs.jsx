import React from "react";
import Header from "./header";

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(e) {
    this.setState({ index: e.currentTarget.getAttribute("data-id") });
    document.querySelectorAll(".active").forEach((el) => {
      el.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  }

  render() {
    const tabs = this.props.tabs;
    return (
      <div>
        <h1>Tabs</h1>
        <div className="tab-container">
          <ul className="header-container">
            {tabs.map((tab, idx) => {
              return (
                <h5
                  className="header"
                  onClick={this.changeTab}
                  key={idx}
                  data-id={idx}
                >
                  <Header title={tab.title} />
                </h5>
              );
            })}
          </ul>

          <div className="content">{tabs[this.state.index].content}</div>
        </div>
      </div>
    );
  }
}
