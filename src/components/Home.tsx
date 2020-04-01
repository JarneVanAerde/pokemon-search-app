import React, { ReactElement } from "react";
import "../styles/Home.scss";

/**
 * This component will be used to display the information about the application.
 */
const Home = (): ReactElement => {
  return (
    <div>
      <header>
        <h1>Welcome to the pokemon application</h1>
        <img src="images/logo.png" alt="logo" />
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repudiandae
        a cupiditate alias inventore perspiciatis officia, numquam ex eligendi
        ratione aliquid quos veniam placeat ducimus, tenetur molestiae
        voluptatibus provident vel quas non? Aspernatur odit veniam fugit sunt
        cum blanditiis. Modi maiores nihil est non, distinctio dolorem eveniet
        sapiente dicta fugiat?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repudiandae
        a cupiditate alias inventore perspiciatis officia, numquam ex eligendi
        ratione aliquid quos veniam placeat ducimus, tenetur molestiae
        voluptatibus provident vel quas non? Aspernatur odit veniam fugit sunt
        cum blanditiis. Modi maiores nihil est non, distinctio dolorem eveniet
        sapiente dicta fugiat?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repudiandae
        a cupiditate alias inventore perspiciatis officia, numquam ex eligendi
        ratione aliquid quos veniam placeat ducimus, tenetur molestiae
        voluptatibus provident vel quas non? Aspernatur odit veniam fugit sunt
        cum blanditiis. Modi maiores nihil est non, distinctio dolorem eveniet
        sapiente dicta fugiat?
      </p>
    </div>
  );
};

export default Home;
