import { Flex, Box, Text } from "@chakra-ui/react"
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const montserrat = Montserrat({ subsets: ['latin'] });


const url = window.location.href;
const isDesignsPageCheck = url.includes('designs');
console.log('is designs page', isDesignsPageCheck);
console.log('url', url)

export const Navbar = () => {
    const [isDesignsPage, setIsDesignsPage] = useState(false);

    useEffect(() => {
        setIsDesignsPage(isDesignsPageCheck)
        console.log('is designs apge huh?', isDesignsPage)
    }, [url, isDesignsPageCheck]);

    return (
        <Flex backgroundColor={'#282C35'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} position={'fixed'} padding={4} zIndex={998}>
            <Link href="/">
                <Flex alignItems={'center'} gap={2}>
                    <Box boxSize={10} position={'relative'}>
                        <Image src="/upscaledWhiteDevices.png" alt="dbss logo" fill />
                    </Box>
                    <Text className={montserrat.className} color={'white'} fontSize={32} fontWeight={'600'}>dbss</Text>
                </Flex>
            </Link>
            {isDesignsPage &&
                <Link href={'/'} className={montserrat.className} style={{ color: 'white', fontSize: 32, fontWeight: 600, marginRight: 10 }}>Back To Home</Link>
            }
        </Flex>
    )
}