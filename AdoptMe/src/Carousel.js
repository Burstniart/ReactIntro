import { Component } from "react";

class Carousel extends Component {
  state = {
    active : 0
  }

  static defaultProps = {
    images: ["http://pets-imafes.dev-apis.com/pets/none.jpg"]
  }

}

export default Carousel;