import { Popover, PopoverTrigger, PopoverContent, PopoverCloseButton } from "@chakra-ui/react"
import { Image, Circle, Flex, Progress, Text, Box, } from "@chakra-ui/react"
import { useState, useEffect } from "react";
import { useDisclosure } from '@chakra-ui/react'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // ga ngaruh ??

import HomeScreen from "./homeScreen";
import phone from '../asset/icon/hp1.png';
import phoneHover from '../asset/icon/hp2.png';

function Phone() {
	const [hover, setHover] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure()

	const [load, setLoad] = useState(true);

	if (isOpen) {
		console.log("halo")
	}

    return (
<<<<<<< HEAD
        <Box bottom={0} position='fixed'>
            <Popover 
				placement='top-start' 
				isOpen={isOpen}
				onOpen={onOpen}
				onClose={onClose}
			>
=======
        <Box>
            <Popover placement='top-start'>
>>>>>>> parent of d794019 (Merge pull request #20 from maecyntha/master)
                <PopoverTrigger>
					<Box>
						<Image
							onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}
							src={!hover ? phone : phoneHover} 
							width={{base:'75%', sm:'50%', md:'25%'}}
							cursor='pointer'
						/>
					</Box>
                </PopoverTrigger>
<<<<<<< HEAD
                <PopoverContent width="280px" mb="-20px" borderRadius={25} color='white' bg='blue.800' borderColor='blue.800'>
=======
                <PopoverContent borderRadius={25} color='white' bg='blue.800' borderColor='blue.800'>
>>>>>>> parent of d794019 (Merge pull request #20 from maecyntha/master)
                    <Flex justifyContent='center' py={2} >
						<Circle size='15px' bg='black'></Circle>
						<Circle alignSelf='center' ml={2} size='5px' bg='black'></Circle>
					</Flex>
					<Box
						overflowY='scroll'
						height='420px'
						mx={2}
						mb={2}
						backgroundColor='gray.200'
						p={3}
						borderRadius={20}
						color='black'
					>
						{load ? (
							<Flex my='50%' direction='column' align='center' justifyContent='flex-end'>
								<Text >Loading</Text>
								<Progress w='60%' size='sm' isIndeterminate />
							</Flex>
						) : 
						( <HomeScreen /> )
						}
					</Box>
                    <PopoverCloseButton/>
                </PopoverContent>
            </Popover>
        </Box>
    )
}

// function Content () {
	

// 	return (
// 		<Box
// 			overflowY='scroll'
// 			height='420px'
// 			mx={2}
// 			mb={2}
//             backgroundColor='gray.200'
// 			p={3}
// 			borderRadius={20}
// 			color='black'
// 		>
// 			{load ? (
// 				<Flex my='50%' direction='column' align='center' justifyContent='flex-end'>
// 					<Text >Loading</Text>
// 					<Progress w='60%' size='sm' isIndeterminate />
// 				</Flex>
// 			) : 
// 			( <HomeScreen /> )
// 			}
//         </Box>
// 	)
// }



export default Phone;