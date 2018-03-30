import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import QueryHandler from "../components/QueryHandler";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid padded>
        <Grid.Row>
          <Grid.Column>
            <div>
              <h1>Home</h1>
              <p>Age: {this.props.state.age}</p>
              <div>
                <button onClick={this.props.actions.growAYearOlder}>
                  More age
                </button>
              </div>
            </div>

            <hr />

            <QueryHandler loadingSize="big" />

          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;
