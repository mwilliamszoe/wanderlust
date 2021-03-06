import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ExperienceCard = props => {
  return (
    <Card>
      <Link
        to={{
          pathname: `/experience/${props.experience.id}`,
          state: {
            experience: props.experience
          }
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1469284390178-5ff99261c5b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1862e7560412a1a52e9a5564c72eb3e9&auto=format&fit=crop&w=500&q=60"
          className="ex-img"
        />
        <Card.Content>
          <Card.Header className="ex-card-header">
            {props.experience.title}
          </Card.Header>
        </Card.Content>
      </Link>
    </Card>
  );
};

export default ExperienceCard;
