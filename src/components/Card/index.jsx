import { Link } from 'react-router-dom'
import { Box, Image, Button } from "@chakra-ui/react"

function Card() {
  return (
    <div>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
          <Link >
             <Image src='https://picsum.photos/seed/picsum/200/300' alt='lorem'>
             </Image>
              <Box p="6">
                <Box d="plex" alignItems="baseLine">
                  05/11/2014
                </Box>
               <Box mt="1" fontWeight="semibold" as='h4' lineHeight="tight">
                  Macbook Pro
               </Box>
              </Box>
           
          </Link>
        <Button colorScheme='green'>Add to basket</Button>

        </Box>


    </div>
  )
}

export default Card