import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Sarra AYARI",
      bio:
        "Certified Lead Auditor ISO 9001V2015 , IRCA® Certified Professional Scrum Master Level I ,PSM I® .I had a rich experience along 2 years as Junior Management Consultant .I had participate on the implementation also :  - Of some ISO management system like ISO 9001:2015 , ISO 45001:2018 , ISO 14001:2015 - Project management system - Lean Management .I m also worked to become integrated into the Management world, and i fixed to getting the PMP® Certification on 2021 as an objectif to develop my professional career",
      imgSrc: "sarra.jpg",
      profession: "Junior project manager",
      show: true,
      intervall: null,
      timer: 0,
    };
  }

  componentDidMount() {
    this.setState({
      intervall: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            textAlign: "center",
            backgroundColor: "rosybrown",
            height: "650px",
          }}
        >
          <button
            onClick={() =>
              this.setState({
                fullName: "Sarra AYARI",
                bio:
                  "Certified Lead Auditor ISO 9001V2015 , IRCA® Certified Professional Scrum Master Level I ,PSM I® .I had a rich experience along 2 years as Junior Management Consultant .I had participate on the implementation also :  - Of some ISO management system like ISO 9001:2015 , ISO 45001:2018 , ISO 14001:2015 - Project management system - Lean Management .I m also worked to become integrated into the Management world, and i fixed to getting the PMP® Certification on 2021 as an objectif to develop my professional career",
                imgSrc: "sarra.jpg",
                profession: "Junior project manager",
                show: !this.state.show,
              })
            }
          >
            show
          </button>
          {this.state.show && (
            <div>
              <h2>{this.state.fullName}</h2>
              <h3>{this.state.bio}</h3>
              <h4>{this.state.profession}</h4>
              <img src={this.state.imgSrc} alt="image" />
              <h2> {this.state.timer} </h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
