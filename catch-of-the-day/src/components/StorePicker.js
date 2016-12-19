import React from "react";
import { render } from 'react-dom';
class StorePicker extends React.Component {
  goToStore(e) {
      e.preventDefault();
      console.log("Clicked method");
      console.log(this.storeInput.value);
      const storeId = this.storeInput.value;
      this.context.router.transitionTo(`/store/${storeId}`);

    }
  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <div>
          <h2>Please Enter a Store</h2>
          <input type="text" required placeholder="Store Name"
          ref={(input)=> {this.storeInput = input}}/>
          

        </div>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
