import React from "react";
import ListDevice from "./ListDevice";
import { connect } from "react-redux";

import JSONData_ru from "../../../content/locales/ru/translation_ru.json";
import JSONData_en from "../../../content/locales/en/translation_en.json";

import "./style.scss";

class Production extends React.Component {
  render() {
    let devices = null;
    if (this.props.isLanguage) {
      devices = JSONData_ru.ru[1].devices;
    } else {
      devices = JSONData_en.en[1].devices;
    }

    return (
      <div className="ProductionContainer">
        <div className="containerDevices">
          {devices.map((device, index) => {
            return (
              <div className={"containerDevices__" + index}>
                <ListDevice
                  key={index}
                  name={device.name}
                  task={device.task}
                  options={device.options}
                  other={device.other}
                  img_A={device.img_A}
                  img_B={device.img_B}
                  img_C={device.img_C}
                  info={device.info}
                  link={device.link}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    isLanguage: state.app.isLanguage,
  }),
  null
)(Production);
