import React, { Component } from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = { activeItem: window.location.pathname };

  handleItemClick = (e, { id }) => this.setState({ activeItem: id });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
        <Menu.Item
          as={Link}
          to="/"
          name="Home"
          id="/"
          active={activeItem === "/"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/about"
          name="/about"
          id="/about"
          active={activeItem === "/about"}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position="right">
          <Dropdown item text="Language">
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
