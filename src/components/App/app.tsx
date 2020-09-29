import * as React from "react";
import './app.scss';
import Header from "../Header/header"

import Footer from "../Footer/footer"


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Footer />
      </React.Fragment>
    )
  }
}
export default App
