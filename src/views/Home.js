import React, { Component } from "react";
import withConsumer from "../context/Consumer";
import QueryHandler, { getData } from "../components/QueryHandler";
import gql from "graphql-tag";
import { Grid } from "semantic-ui-react";

const localQuery = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

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
              <p>Age: {this.props.globalState.age}</p>
              <div>
                <button onClick={this.props.actions.growAYearOlder}>
                  More age
                </button>
              </div>
            </div>

            <hr />

            <QueryHandler
              query={localQuery}
              Component={getData}
              loadingSize="small"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default withConsumer(Home);
