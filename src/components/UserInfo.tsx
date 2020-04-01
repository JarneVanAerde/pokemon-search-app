import React, { Component } from "react";
import { User } from "../models/User.interface";

/**
 * This component will be used to display the information about the user.
 */
export class UserInfo extends Component<User> {
  
  /**
   * Renders the component.
   */
  public render() {
    const { name, numberOfPokemons } = this.props;

    return (
      <div>
        <p>
          User {name}
          {numberOfPokemons && <span> has {numberOfPokemons} pokemons.</span>}
        </p>
      </div>
    );
  }
}

export default UserInfo;
