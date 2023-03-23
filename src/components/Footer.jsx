import { Box, Image, Text, Flex } from "@chakra-ui/react";

import openailogo from './../assets/openai.png';

const Footer = () => {
  return (
    <Box marginTop={50}>

        <Flex justifyContent="center" alignItems="center">

            <Image src={openailogo} mr={1} />

            <Text>Powered by OpenAI</Text>

        </Flex>

    </Box>
  )
};

export default Footer;