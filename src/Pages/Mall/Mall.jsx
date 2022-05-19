import react from "react";
import { Grid, GridItem, Box, Button, VStack } from "@chakra-ui/react";
import { Line } from "../../components/Grid/Line";

import Pause from "../../components/buttons/PauseBtn";
import Phone from "../../components/phone/phoneMain";
import MapPop from "../../components/buttons/MapPop";
import PartTime from './partTimeMall';

function Mall(props){
  return (
    <Box className="mall">
      <Grid className="Grid" h='100vh' templateRows='repeat(5, 1fr)' templateColumns='repeat(3, 1fr)' gap={0}>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Pause />
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>

        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <MapPop
            home={() => props.handleClick('home')}
            cafe={() => props.handleClick('cafe')}
            mall={() => props.handleClick('mall')}
            uni={() => props.handleClick('uni')}
          />
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>

        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>

        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <VStack spacing={4} align="end">
            <PartTime />
            <Button onClick={() => props.handleClick('cart')}>My Shopping Cart</Button>
          </VStack>
        </GridItem>

        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Phone/>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
			</Grid>
    </Box>
  );
}

export default Mall;
