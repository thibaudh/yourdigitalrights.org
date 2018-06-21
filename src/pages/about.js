import { FormattedDate, FormattedMessage } from "react-intl";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Paper from "@material-ui/core/Paper";
import Social from "../components/Social";
import Typography from "@material-ui/core/Typography";
import { container } from "../styles/layout";
import pageWithIntl from "../components/PageWithIntl";
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    position: "relative",
    ...container,
    [theme.breakpoints.up("md")]: {
      marginTop: 60
    }
  },
  inner: {
    padding: 30
  }
});

const Privacy = ({ classes }) => {
  return (
    <div>
      <Nav />
      <div className={classes.container}>
        <Paper className={classes.inner}>
          <Typography component="h1" variant="display1" gutterBottom={true}>
            <FormattedMessage id="privacyTitle" defaultMessage="About" />
          </Typography>
          <Typography component="p">About us here</Typography>
        </Paper>
      </div>
      <Social />
      <Footer />
    </div>
  );
};

export default withRoot(pageWithIntl(withStyles(styles)(Privacy)));
