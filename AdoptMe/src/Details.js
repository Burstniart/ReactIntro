import { Component, useEffect } from "react";
// can't use hooks with class components
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

// as class
class Details extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {loading: true};
  //   }

    state = {loading: true}
    
    async componentDidMount() {
      const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
      );
      const json = await res.json();

      this.setState(Object.assign({ loading: false}, json.pets[0]))
      
    }
    
    render() {
      if (this.state.loading) {
        return <h2>loading...</h2>
      }

      // throw new Error("Just Monika.");
      
      const {animal, breed, city, state, description, name, images} = this.state;

      return (
        <div className="details">
          <Carousel images={images} />
          <div>
            <h1>{name}</h1>
            <h2>
              {`${animal} - ${breed} - ${city}, ${state}`}
            </h2>
            <button>Adopt {name}</button>
            <p>{description}</p>
          </div>
        </div>
      )
    }
}

const WrappedDetails = () => {
  const params = useParams();
  return (
    <ErrorBoundary>
      <Details params={params} />
    </ErrorBoundary>
  )
}

export default WrappedDetails;

// const Details = () => {
//   const { id } = useParams();
//   return <h2>Monika! {id}</h2>;
// }

// export default Details;