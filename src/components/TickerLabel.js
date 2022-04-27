import { ListItem, Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";

const TickerLabel = ({ ticker, deleteTicker }) => {
  return (
    <ListItem mr="3%">
      <Tag borderRadius="full" variant="solid" bg="#7c72ff">
        <TagLabel>{ticker}</TagLabel>
        <TagCloseButton onClick={() => deleteTicker(ticker)} />
      </Tag>
    </ListItem>
  );
};

export default TickerLabel;
