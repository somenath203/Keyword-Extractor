import { Container, Box } from "@chakra-ui/react";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";
import ResultModal from "./components/ResultModal";


const App = () => {

  const [keywordsFromText, setKeywordsFromText] = useState();

  const [isModalOpen, setIsModalOpen] = useState();

  const [loading, setLoading] = useState();


  const configuration = new Configuration({

    apiKey: import.meta.env.VITE_OPEN_AI_KEY

  });

  const openai = new OpenAIApi(configuration);


  const extractKeywordsFromText = async (text) => {

    setLoading(true);

    setIsModalOpen(true);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: 'Extract keywords from this text. Make the first letter of every word uppercase and separate with commas:\n\n' + text + '',
      temperature: 0.5,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.8,
      presence_penalty: 0.0
    });

    setKeywordsFromText(response.data.choices[0].text.trim());

    setLoading(false);

  };


  const closeModal = () => {

    setIsModalOpen(false);

  }

  return (
    <Box bg="blue.600" color="white" height="100vh" paddingTop={130}>

      <Container maxW="3xl" centerContent>

        <Header />

        <TextInput extractKeywords={extractKeywordsFromText} />

        <Footer />

      </Container>

      <ResultModal keywords={keywordsFromText} loading={loading} isOpen={isModalOpen} closeModal={closeModal} />

    </Box>
  )
};

export default App;