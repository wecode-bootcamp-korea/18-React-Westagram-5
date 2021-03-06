import React from "react";
import "./Main.scss";
import "../../../Styles/common.scss";
import Header from "../../../Components/Header";
import Feeds from "./Feeds/Feeds";
import MainRight from "./MainRight/MainRight";

class Mainsong extends React.Component {
  render(){
    return (
    <div>
      <Header/>
      <main>
        <Feeds/>
        <MainRight/>
      </main>
    </div>
    )
  }
};

export default Mainsong;