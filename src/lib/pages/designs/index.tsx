'use client';
import { Box, Text, Flex, Input, Grid } from "@chakra-ui/react";
import { Lato, Montserrat } from 'next/font/google';
import { SearchIcon, ChevronRightIcon } from "@chakra-ui/icons";
import './styles.scss'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@chakra-ui/react";

const montserrat = Montserrat({ subsets: ['latin'] });
const lato = Lato({ weight: "400", subsets: ['latin'] });

const query = `
{
  postsCollection {
    items {
      title
      publishDate
      description
      designUrl
      featuredImage {
        url
      }
    }
  }
}
`


const Designs = () => {
    const [designs, setDesigns] = useState(null);
    const [isMobile] = useMediaQuery('(max-width:  768px)');
    const [inputValue, setInputValue] = useState<string | undefined>();
    const [flexboxWidth, setFlexboxWidth] = useState();


    useEffect(() => {
        window
            .fetch(`https://graphql.contentful.com/content/v1/spaces/ga0b40zoiucm/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Authenticate the request
                    Authorization: "Bearer U-1feYtKU3Uq2ArInScAi46p6_31wTA-jGlxgfT2NIY",
                },
                // send the GraphQL query
                body: JSON.stringify({ query }),
            })
            .then((response) => response.json())
            .then(({ data, errors }) => {
                if (errors) {
                    console.error(errors);
                }

                // rerender the entire component with new data
                setDesigns(data.postsCollection.items);
            });
    }, []);

    if (!designs) {
        return "Loading...";
    }

    console.log('posts', designs)
    console.log('value', inputValue);

    return (
        <>
            <Flex backgroundColor={'#282C35'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} position={'fixed'} padding={4} zIndex={998}>
                <Link href="/">
                    <Flex alignItems={'center'} gap={2}>
                        <Box boxSize={10} position={'relative'}>
                            <Image src="/upscaledWhiteDevices.png" alt="dbss logo" fill />
                        </Box>
                        <Text className={montserrat.className} color={'white'} fontSize={32} fontWeight={'600'}>dbss</Text>
                    </Flex>
                </Link>
                <Link href={'/'} className={montserrat.className} style={{ color: 'white', fontSize: 20, fontWeight: 600, marginRight: 10 }}>Back To Home</Link>
            </Flex>
            <Box width={'100%'} height={'fit-content'}>
                <Flex backgroundColor={'#F5F5F5'} height={'100%'} width={'100%'} justifyContent={'center'} direction={'column'} gap={1} paddingX={isMobile ? 5 : 20} paddingTop={120} paddingBottom={20} color={'white'}>
                    <Text color={'#282C35'} className={montserrat.className} fontSize={36} fontWeight={600}>Find Your Design</Text>
                    <Text color={'#282C35'} className={lato.className} fontSize={20} fontWeight={600}>Explore Our Design Showcase: Turn inspiration to Reality!</Text>
                    <Flex justifyContent={'center'} alignItems={'center'} position={'relative'} my={10} width={isMobile ? '100%' : '30%'} minWidth={'300px'}>
                        <Input onChange={(event) => setInputValue(event.target.value)} className={lato.className} color={'#cecfda'} fontSize={24} placeholder='Search For Work' _placeholder={{ color: '#cecfda', opacity: 1 }} size={'sm'} borderX={'none'} paddingY={7} borderRadius={0} borderColor={'#cecfda'} borderWidth={2} _focusVisible={{ borderColor: '#cecfda', borderWidth: 2, boxShadow: 'none' }} />
                        <SearchIcon position={'absolute'} top={'50%'} right={5} transform={'translateY(-50%)'} color={'#cecfda'} fontSize={30} />
                    </Flex>
                    <Grid templateColumns={isMobile ? 'repeat(auto-fit, 1fr)' : 'repeat(auto-fit, minmax(250px, 0.25fr))'} width={'100%'} gap={'30px'}>
                        {inputValue ? (
                            designs.filter((design) => design.title.toLowerCase().includes(inputValue.toLowerCase())).length === 0 ? (
                                <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                                    <Box height={'350px'} width={'350px'} position={'relative'} marginBottom={5}>
                                        <Image src={'/noDataRobot.png'} fill alt={""} style={{ position: 'absolute' }} />
                                    </Box>
                                    <Text color={'black'} className={lato.className} fontSize={24} fontWeight={700}>No designs found</Text>
                                </Flex>
                            ) : (
                                designs.filter((design) => design.title.toLowerCase().includes(inputValue.toLowerCase())).map((design) => (
                                    <Link href={`${design.designUrl}`} key={design.id} style={{ width: '100%' }}>
                                        <div className="card" style={{ width: '100%' }}>
                                            <Image src={`${design.featuredImage.url}`} alt="" fill />
                                            <Box backgroundColor={'rgba(0, 0, 0, 0.6)'} position={'absolute'} width={'100%'} height={'100%'} _hover={{ backgroundColor: 'black', opacity: '90%' }}>
                                                <div className="card-content">
                                                    <h2 style={{ color: 'white' }} className={montserrat.className}>
                                                        {design.title}
                                                    </h2>
                                                    <p className={lato.className} style={{ fontSize: 20 }}>
                                                        {design.description}
                                                    </p>
                                                    <p id="cta" className={lato.className}>
                                                        Click to view design <ChevronRightIcon boxSize={6} />
                                                    </p>
                                                </div>
                                            </Box>
                                        </div>
                                    </Link>
                                ))
                            )
                        ) : (
                            designs.map((design) => (
                                <Link href={`${design.designUrl}`} key={design.id} style={{ width: '100%' }}>
                                    <div className="card" style={{ width: '100%' }}>
                                        <Image src={`${design.featuredImage.url}`} alt="" fill />
                                        <Box backgroundColor={'rgba(0, 0, 0, 0.6)'} position={'absolute'} width={'100%'} height={'100%'} _hover={{ backgroundColor: 'black', opacity: '90%' }}>
                                            <div className="card-content">
                                                <h2 style={{ color: 'white' }} className={montserrat.className}>
                                                    {design.title}
                                                </h2>
                                                <p className={lato.className} style={{ fontSize: 20 }}>
                                                    {design.description}
                                                </p>
                                                <p id="cta" className={lato.className}>
                                                    Click to view design <ChevronRightIcon boxSize={6} />
                                                </p>
                                            </div>
                                        </Box>
                                    </div>
                                </Link>
                            ))
                        )}

                    </Grid>
                </Flex>
                <Flex backgroundColor={'#282C35'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} padding={4} color={'#F5F5F5'}>
                    <Flex alignItems={'center'} gap={2}>
                        <Box boxSize={10} position={'relative'}>
                            <Image src="/upscaledWhiteDevices.png" alt="dbss logo" fill />
                        </Box>
                        <Text className={montserrat.className} color={'white'} fontSize={32} fontWeight={'600'}>dbss</Text>
                    </Flex>
                    <Text className={lato.className} fontSize={20}>DbssLLC@gmail.com</Text>
                </Flex>
            </Box>
        </>
    )
}

export default Designs;