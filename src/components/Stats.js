import { Box } from "@chakra-ui/react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";

const Stats = ({ ticker, change, lastClose }) => {
  let percentLabel;

  if (change > 0) {
    percentLabel = "increase";
  } else {
    percentLabel = "decrease";
  }

  return (
    <Box
      h={{ sm: "90%", md: "95%", lg: "50%" }}
      // p={{ sm:"6"}}
      w={{ sm: "42.5%", md: "47.5%", lg:"100%"}}
      display="flex"
      alignItems="center"
      justifyContent="center"
      rounded="lg"
      marginTop="1"
      marginBottom="1"
      boxShadow="lg"
      bg="#2d324d"
    >
      <Stat
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <StatLabel fontSize={{ sm: "1rem", md: "1rem", lg:"1.25rem"}}>{ticker}</StatLabel>
        <StatNumber fontSize={{ sm: "0.8rem", md: "0.8rem", lg:"1.15rem"}}>${lastClose}</StatNumber>
        <StatHelpText fontSize={{ sm: "0.8rem", md: "0.8rem", lg:"1.15rem"}}>
          <StatArrow type={percentLabel} />
          {change}%
        </StatHelpText>
        <StatHelpText marginTop={{ sm: "-0.5rem", md:"-0.5rem"}} fontSize={{ sm: "0.6rem", md: "0.6rem", lg:"0.8rem"}} fontStyle="italic">
          (as of last close)
        </StatHelpText>
      </Stat>
    </Box>
  );
};
export default Stats;
