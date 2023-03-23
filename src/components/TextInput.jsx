import { useState } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";


const TextInput = ({ extractKeywords }) => {

    const [text, setText] = useState();

    const toast = useToast();


    const submitText = () => {

        if(!text) {

            toast({
                title: 'Text field is Empty',
                description: 'Please enter some text in the input field',
                status: 'error',
                duration: 4000,
                isClosable: false
            });

        } else {

            extractKeywords(text);
            
        }

    }

    return (
        <>

            <Textarea
                bg="blue.400"
                color="white"
                padding={4}
                marginTop={6}
                height={200}
                onChange={(e) => setText(e.target.value)}
            >
            </Textarea>

            <Button
                bg="blue.500"
                color="white"
                width="100%"
                marginTop={4}
                _hover={{ bg: 'blue.700' }}
                onClick={submitText}
            >Extract Keywords</Button>

        </>
    );

};

export default TextInput;