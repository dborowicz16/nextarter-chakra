'use client';

import { Circle, Text, Flex } from "@chakra-ui/react"
import { Montserrat } from "next/font/google"
import { motion } from 'framer-motion';

const montserrat = Montserrat({ subsets: ['latin'] });

export const Loader = () => {

    return (
        <Circle display={{ base: 'none', xl: 'block' }} backgroundColor={'rgba(0, 0, 0, 0.1)'} height={'140%'} width={'100%'} flexDirection={'column'} color={'#282C35'} fontSize={52} fontWeight={600} className={montserrat.className} zIndex={998} flex={'1 0 100%'} position={'relative'} right={0}>
            <Flex flexDirection={'column'} height={'100%'} justifyContent={'center'} left={'15%'} top={'-1%'} position={'absolute'}>
                <motion.p
                    style={{
                        height: '150px',
                        marginRight: '60px',
                        letterSpacing: '3px',
                        fontSize: '128px',
                        cursor: 'default'
                    }}
                    whileHover={{
                        color: '#f9b234',
                        x: [0, -20, 20, 0],
                        transition: {
                            duration: 1,
                            ease: "easeInOut"
                        }
                    }}
                >
                    D
                    <motion.span
                        style={{
                            fontSize: '48px',
                            marginLeft: 3,
                            letterSpacing: '25px',
                        }}
                    >
                        esign
                    </motion.span>
                </motion.p>
                <motion.p
                    style={{
                        height: '150px',
                        marginRight: '16px',
                        letterSpacing: '3px',
                        fontSize: '128px',
                        cursor: 'default'
                    }}
                    whileHover={{
                        color: '#3ecd5e',
                        x: [0, 20, -20, 0],
                        transition: {
                            duration: 1,
                            ease: "easeInOut",
                        }
                    }}
                >
                    B
                    <motion.span
                        style={{
                            fontSize: '48px',
                            marginLeft: 3,
                            letterSpacing: '25px'
                        }}
                    >
                        uild
                    </motion.span>
                </motion.p>
                <motion.p
                    style={{
                        height: '150px',
                        marginRight: '5px',
                        letterSpacing: '3px',
                        fontSize: '128px',
                        cursor: 'default'
                    }}
                    whileHover={{
                        color: '#e44002',
                        x: [0, -20, 20, 0],
                        transition: {
                            duration: 1,
                            ease: "easeInOut"
                        }
                    }}
                >
                    S
                    <motion.span
                        style={{
                            fontSize: '48px',
                            marginLeft: 3,
                            letterSpacing: '25px'
                        }}
                    >
                        upport
                    </motion.span>
                </motion.p>
                <motion.p
                    style={{
                        height: '150px',
                        letterSpacing: '3px',
                        fontSize: '128px',
                        cursor: 'default'
                    }}
                    whileHover={{
                        color: '#952aff',
                        x: [0, 20, -20, 0],
                        transition: {
                            duration: 1,
                            ease: "easeInOut"
                        }
                    }}
                >
                    S
                    <motion.span
                        style={{
                            fontSize: '48px',
                            marginLeft: 3,
                            letterSpacing: '25px'
                        }}
                    >
                        olutions
                    </motion.span>
                </motion.p>
            </Flex>
        </Circle>
    )
}