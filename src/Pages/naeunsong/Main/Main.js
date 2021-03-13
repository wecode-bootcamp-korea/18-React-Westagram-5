import React from "react";
import Header from "./Header/Header";
import Feeds from "./Feeds/Feeds";
import MainRight from "./MainRight/MainRight";
import "./Main.scss";
import "../../../Styles/common.scss";

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