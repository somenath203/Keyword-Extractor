import { Heading, Image, Text } from "@chakra-ui/react";

import lightbulblogo from './../assets/light-bulb.svg';


const Header = () => {
  return (
    <>

        <Image src={lightbulblogo} alt="light bulb logo" width={100} marginBottom="1rem" />

        <Heading color="white" marginBottom="1rem">Keyword Extractor</Heading>

        <Text fontSize={25} textAlign="center">Write or Paste the text below to extract the keywords</Text>
        
    </>
  )
};

export default Header;