import { Link } from 'react-router-dom'
import moment from 'moment';
import { Box, Image, Button } from "@chakra-ui/react"

function Card({item}) {
  return (
    <div>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
          <Link >
             <Image src={item.photos[0]} alt='lorem' loading='lazy'>
             </Image>
              <Box p="6">
                <Box d="plex" alignItems="baseLine">
                  {moment(item.createdAt).format('MM/DD/YY')}
                </Box>
               <Box mt="1" fontWeight="semibold" as='h4' lineHeight="tight">
                {item.title}
               
               </Box>
               <Box>{item.price} $</Box>
              </Box>
           
          </Link>
        <Button colorScheme='green'>Add to basket</Button>

        </Box>


    </div>
  )
}

export default Card