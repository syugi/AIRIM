// imports the React Javascript Library
import React from 'react';
//Card
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import blue from '@material-ui/core/colors/blue';

//Tabs
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  input: {
    display: 'none',
  },
  button: {
    color: blue[900],
    margin: 10,
  },
  card: {
    maxWidth: 400,
  },
});

class ImageUploadCard extends React.Component {
  state = {
    mainState: 'initial', // initial, search, gallery, uploaded
    imageUploaded: 0,
    selectedFile: null,
  };

  handleUploadClick = (event) => {
    console.log();
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      this.setState({
        selectedFile: [reader.result],
      });
    }.bind(this);
    console.log(url); // Would see a path?

    this.setState({
      mainState: 'uploaded',
      selectedFile: event.target.files[0],
      imageUploaded: 1,
    });
  };

  renderInitialState() {
    const { classes, theme } = this.props;
    const { value } = this.state;

    return (
      <React.Fragment>
        <input
          accept="image/*"
          //className={classes.input}
          id="contained-button-file"
          //multiple
          type="file"
          onChange={this.handleUploadClick}
        />
      </React.Fragment>
    );
  }

  renderUploadedState() {
    const { classes, theme } = this.props;

    return (
      <React.Fragment>
        <Button className={classes.button} onClick={this.imageResetHandler}>
          초기화
        </Button>
        <CardActionArea>
          <img
            width="100%"
            className={classes.media}
            src={this.state.selectedFile}
          />
        </CardActionArea>
      </React.Fragment>
    );
  }

  imageResetHandler = (event) => {
    console.log('Click!');
    this.setState({
      mainState: 'initial',
      selectedFile: null,
      imageUploaded: 0,
    });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <input
                accept="image/*"
                //className={classes.input}
                id="contained-button-file"
                //multiple
                type="file"
                onChange={this.handleUploadClick}
              />
            </Grid>
            <Grid item xs={12}>
              {this.state.mainState == 'uploaded' && (
                <Card className={classes.card}>
                  <img
                    width="100%"
                    className={classes.media}
                    src={this.state.selectedFile}
                  />
                  <Button
                    className={classes.button}
                    onClick={this.imageResetHandler}
                  >
                    삭제
                  </Button>
                </Card>
              )}
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImageUploadCard);
