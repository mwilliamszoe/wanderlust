import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import {
  Segment,
  List,
  Grid,
  Header,
  Table,
  Container,
  Button,
  Rating
} from "semantic-ui-react";

class ExperienceDetail extends Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
  }

  handleClick = () => {
    this.setState({
      liked: !this.state.liked
    });
    if (this.state.liked === false) {
      fetch("http://localhost:4000/likes", {
        method: "POST",
        body: JSON.stringify({
          user_id: 1,
          experience_id: 3
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("cliked like");
    }
    if (this.state.liked === true) {
      console.log("clicked unlike");
    }
    // if (this.state.liked === false) {
    //   fetch("http://localhost:4000/likes", {
    //     method: "DELETE",
    //     body: JSON.stringify({
    //       id: 1
    //     }),
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   });
    // }
    // if (this.state.liked === true) {
    // fetch("http://localhost:4000/likes", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     experience_id: 41,
    //     user_id: 9
    //   }),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // });
    // }
  };

  render() {
    console.log("liked?", this.state.liked);
    const ex = this.props.location.state.experience;
    return (
      <div>
        <Button inverted onClick={this.handleClick} className="saved">
          <Rating icon="heart" size="massive" />
        </Button>
        <Jumbotron>
          <h1>{ex.title}</h1>
          <hr />
        </Jumbotron>
        <Segment className="experience">
          <Container className="Experience-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
            fermentum nunc, sit amet gravida ex. Suspendisse potenti. In sed
            tellus vel leo vehicula semper et vel sem. Sed ac placerat velit.
            Sed neque metus, blandit eu aliquet sit amet, euismod eu dui. Proin
            vel vehicula lorem. Quisque pharetra nibh at dui bibendum luctus.
            Suspendisse porttitor tincidunt nulla. Sed pharetra tellus non
            ligula pretium gravida. Nam leo lectus, dignissim nec iaculis quis,
            dignissim semper purus. Proin porta felis sit amet lacus commodo, ut
            volutpat enim commodo.
            <br />
            <br />
            Duis vel mauris ac tortor facilisis iaculis. Nullam sit amet orci et
            elit volutpat gravida sed quis urna. Suspendisse dapibus dui risus,
            ut tempor odio dictum vel. Nullam molestie tortor dui. Donec eget
            lectus at est scelerisque vestibulum. Praesent fringilla volutpat
            tellus non bibendum. Nunc tincidunt bibendum felis eu pulvinar.
            Vestibulum lobortis sollicitudin nulla, id scelerisque eros
            tincidunt in. Suspendisse risus tortor, porttitor nec est sed,
            iaculis dapibus dolor. Nam mauris odio, vestibulum et condimentum
            sed, vestibulum eget metus. Aliquam congue quam nec lobortis semper.
            Curabitur id diam leo. Suspendisse potenti. Sed maximus, ante sed
            pellentesque rutrum, lorem velit hendrerit dui, tempus varius eros
            neque vel augue. Nullam facilisis nulla lectus, et ullamcorper
            sapien cursus eget. Mauris in euismod dolor. Donec sed hendrerit
            leo, in efficitur neque. Phasellus sed tempor enim, tristique
            fringilla metus. Pellentesque sapien mauris, iaculis eu eros quis,
            vestibulum bibendum ipsum. Quisque convallis bibendum lorem, quis
            tincidunt diam molestie eget. Proin tristique vestibulum lectus nec
            elementum.
          </Container>
        </Segment>
        <hr />
        <Segment className="packing-list">
          <Header className="packing-list-title">Packing List</Header>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <List>
                  <List.Item className="packing-list-item">Socks</List.Item>
                  <List.Item className="packing-list-item">Shoes</List.Item>
                  <List.Item className="packing-list-item">Hat</List.Item>
                  <List.Item className="packing-list-item">Belt</List.Item>
                  <List.Item className="packing-list-item">Sweater</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List>
                  <List.Item className="packing-list-item">Camera</List.Item>
                  <List.Item className="packing-list-item">Laptop</List.Item>
                  <List.Item className="packing-list-item">Usb</List.Item>
                  <List.Item className="packing-list-item">Sunscreen</List.Item>
                  <List.Item className="packing-list-item">Goggles</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <hr />
        <Segment className="other-info">
          <Header className="other-info-title">Other info</Header>

          <Table basic="very" className="other-info">
            <Table.Body>
              <Table.Row>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.Cell>Approved</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Address</Table.HeaderCell>
                <Table.Cell>Approved</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Phone</Table.HeaderCell>
                <Table.Cell>Approved</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Hours</Table.HeaderCell>
                <Table.Cell>Approved</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Website</Table.HeaderCell>
                <Table.Cell>Approved</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </div>
    );
  }
}

export default ExperienceDetail;
