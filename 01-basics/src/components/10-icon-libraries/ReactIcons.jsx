import { Container } from "react-bootstrap";
import {
  FaReact,
  FaAngular,
  FaCreativeCommonsSamplingPlus,
} from "react-icons/fa";
import { FaBorderNone } from "react-icons/fa";
import { BorderNoneIcon } from "@radix-ui/react-icons";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";

export default function ReactIcons() {
  return (
    <Container>
      <h2 className="text-center text-primary">React Icons</h2>

      <div className="text-center">
        {/* REACT ICONS */}
        <FaReact size="5rem" color="lightblue" cursor="pointer" title="React" />
        <FaAngular
          size="5rem"
          color="crimson"
          cursor="pointer"
          title="Angular"
        />
        <FaCreativeCommonsSamplingPlus
          size="5rem"
          color="yellowgreen"
          cursor="pointer"
          title="Creative Commons"
        />
        <FaBorderNone size="5rem" />

        {/* RADIX ICONS */}
        <BorderNoneIcon width="5rem" height="5rem" color="mediumspringgreen" />

        {/* MUI ICONS */}
        <AirlineSeatIndividualSuiteIcon color="warning" fontSize="large" />
      </div>
    </Container>
  );
}
