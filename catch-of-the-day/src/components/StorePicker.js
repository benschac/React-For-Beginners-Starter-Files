import React from 'react';

class StorePicker extends React.Component {
  goToStore(e) {
    e.preventDefault();
    console.log('changed URL');
    this.context.router.transitionTo(`/store/${storeId}`)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name"
        defaultValue="Ben" ref={(input) => {this.storeInput = input}}/>
      <button type="submit">Submit</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.Proptypes.object
}

export default StorePicker;
