import React from "react";
import {
  CardsContainer,
  Card,
  CardTitle,
  CardBody,
} from "./styles/Cards.styled";

const Quotes = () => {
  return (
    <CardsContainer>
      <Card>
        <CardTitle>Theme changing</CardTitle>
        <CardBody>
          <p>
           user can able to select different theme colors and after logout the last used theme is saved and once login back it check weather the user has preference of color theme or not.
          </p>
        </CardBody>
      </Card>

      <Card>
        <CardTitle>Frontend REACTJS</CardTitle>
        <CardBody>
          <p>
           In this front end, styled components and axios third party package are used.
           Three UI are created with the protected routes.
           
          </p>
        </CardBody>
      </Card>

      <Card>
        <CardTitle>Backend - NodeJS,Express,MongoDB</CardTitle>
        <CardBody>
          <p>
            Four api are created (login,register,preference,updatecolorpreference).
            In the mongodb data is saved based on the used Ids.
          </p>
        </CardBody>
      </Card>
    </CardsContainer>
  )
};

export default Quotes;