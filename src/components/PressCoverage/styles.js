import { container } from "../../styles/layout";
import { themeBg } from "../../styles/theme";

export default (theme) => ({
  container: {
    height: "75px",
    backgroundColor: "#f2f2f2",
    position: "relative",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  inner: {
    display: 'flex',
    overflow: 'hidden',
    flexGrow: 1,
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: "80%",
  },
});
