import React, { Component } from "react";
import CustomButton from "./../Shared/customButton";
import "./feeding.css";
import Map from "pigeon-maps";
import Overlay from "pigeon-overlay";

export default class Feeding extends Component {
  state = {
    view: 0
  };
  changeView = value => {
    this.setState({ view: value });
  };
  render() {
    const { view } = this.state;
    return (
      <div style={{ marginLeft: "50px" }}>
        <CustomButton
          label="Besleme Planı"
          onClick={() => this.changeView(0)}
        />
        <CustomButton label="Harita" onClick={() => this.changeView(1)} />
        {view === 0 && <div>beslenme tablosu</div>}
        {view === 1 && (
          <div>
            <Map center={[41.1044, 29.0273]} zoom={15} width={600} height={600}>
              <Overlay anchor={[41.1044, 29.0273]}>
                <div>
                  <i class="fa-li fa fa-paw" />5
                </div>
              </Overlay>
            </Map>
          </div>
        )}
      </div>
    );
  }
}
