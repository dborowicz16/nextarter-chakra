'use client';

import {
  useMediaQuery, Flex, Text, Box, Button, FormControl, FormLabel, Input, Radio, Stack, RadioGroup, Textarea, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Lato, Montserrat } from 'next/font/google';
import Image from 'next/image';
import './styles.scss'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Loader } from '~/lib/components/loader/loader';
import { useForm } from '@formspree/react';
import { useEffect, useState } from 'react';

const montserrat = Montserrat({ subsets: ['latin'] });
const lato = Lato({ weight: "400", subsets: ['latin'] });

const Home = () => {
  const [isMobile] = useMediaQuery('(max-width:  768px)');
  const [state, handleSubmit] = useForm("mnqebrpe");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setIsOpen(true)
    }
  }, [state.succeeded]);

  return (
    <>
      <Flex backgroundColor={'#282C35'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} position={'fixed'} padding={4} zIndex={998}>
        <Link href="/">
          <Flex alignItems={'center'} gap={2}>
            <Box boxSize={10} position={'relative'}>
              <Image src="/upscaledWhiteDevices.png" alt="dbss logo" fill loading='eager' />
            </Box>
            <Text className={montserrat.className} color={'white'} fontSize={32} fontWeight={'600'}>dbss</Text>
          </Flex>
        </Link>
      </Flex>
      <Box width={'100%'}> {/* Home page */}
        <Box height={'100%'} width={'100%'}>
          <Flex height={'100%'} width={'100%'} justifyContent={'space-between'} alignItems={'center'} overflow={'hidden'}>
            <Flex height={'100%'} width={'100%'} justifyContent={'center'} direction={'column'} gap={1} paddingX={{ base: 5, md: 20 }} color={'white'} position={'relative'} flex={'1 0 50%'}>
              <Text className={montserrat.className} fontSize={{ base: 36, xl: 60 }} fontWeight={600}>A digital agency focused on <span color='white' className="highlighted">you</span></Text>
              <Text className={lato.className} fontSize={{ base: 20, xl: 24 }} marginRight={{ base: 14, md: 72 }}>Crafting digital experiences tailored around your specific business needs</Text>
              <Link href="/portfolio"><Button variant={'outline'} color={'white'} size={'lg'} maxWidth={'200px'} marginTop={2} borderRadius={10} className={lato.className} _hover={{ color: '#282C35', backgroundColor: '#e2e8f0' }} fontSize={20}>View Our Portfolio</Button></Link>
            </Flex>
            {!isMobile &&
              <Loader />
            }
          </Flex>
          {/* About Us page */}
          <motion.div id="aboutDiv" initial={{ opacity: 0, translateX: '-100%' }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ ease: 'easeInOut', duration: 0.5 }} style={{ overflow: 'hidden', backgroundColor: '#68aaff' }}>
            <Flex gap={{ base: 0, '2xl': 10 }} paddingY={{ base: 50, md: 100 }} paddingX={{ base: 5, md: 20 }} justifyContent={{ base: 'center', '2xl': 'space-between' }} alignItems={'center'} direction={{ base: 'column', '2xl': 'row-reverse' }} textAlign={'left'} color={'#F5F5F5'} height={'100%'}>
              <motion.div initial={{ opacity: 0, translateX: '-100%' }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ ease: 'easeInOut', duration: 0.5 }} style={{ marginBottom: 20 }}>
                <img id="natureCropped" src={'/natureCropped.gif'} alt='' />
              </motion.div>
              <Flex direction={'column'} width={{ base: '100%', '2xl': '60%' }}>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: 'easeInOut', duration: 0.5 }}>
                  <Text fontWeight={600} fontSize={36} className={montserrat.className} marginBottom={-5}>Our Mission</Text><br />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: 'easeInOut', duration: 0.5 }}>
                  <Text fontSize={{ base: 20, '2xl': 24 }} className={lato.className}>At DBSS, we believe in the power of creativity, technology, and unwavering dedication to bring our clients' visions to life. Our name, which is short for Design Build Support Solutions, reflects our commitment to being your comprehensive partner on your digital journey.</Text><br />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: 'easeInOut', duration: 0.5 }}>
                  <Text fontSize={{ base: 20, '2xl': 24 }} className={lato.className}>From conceptualization to execution, we're here to guide you through every stage: design, development, launch, and ongoing support. With a passion for our craft and a dedication to excellence, we transform visions into realities, one pixel at a time.</Text>
                </motion.div>
              </Flex>
            </Flex>
          </motion.div> {/* Our Services page */}
          <Flex backgroundColor={'#F5F5F5'} paddingX={{ base: 5, md: 20 }} paddingY={20} justifyContent={'center'} direction={'column'} textAlign={'left'} color={'#282C35'} overflowX={'hidden'} height={{ base: 'fit-content' }}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: 'easeInOut', duration: 0.5 }}>
              <Text color={'#282C35'} className={montserrat.className} fontSize={36} fontWeight={600}>Our Services</Text>
              <Text className={lato.className} fontSize={{ base: 20, md: 24 }} marginRight={12} width={'80%'}>Leverage Our Digital Expertise to Drive Your Business Growth</Text>
            </motion.div>
            <div className="ag-format-container">
              <div className="ag-courses_box">
                <motion.div className="ag-courses_item" initial={{ opacity: 0, translateX: '-100%' }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ ease: 'easeInOut', duration: 0.5 }} style={{ marginRight: 10 }}>
                  <div className="ag-courses-item_link">
                    <div className="ag-courses-item_bg"></div>

                    <div className="ag-courses-item_title" style={{ color: '#f9b234' }}>
                      UI/UX Design
                    </div>

                    <div className="ag-courses-item_date-box">
                      Crafting seamless experiences for both web and mobile applications. Elevate your digital presence with our UI/UX design services.
                    </div>
                  </div>
                </motion.div>

                <motion.div className="ag-courses_item" initial={{ opacity: 0, translateX: isMobile ? '100%' : '-100%' }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ ease: 'easeInOut', duration: 0.5, delay: isMobile ? 0 : 0.5 }} style={{ marginLeft: 10, marginRight: 10 }}>
                  <div className="ag-courses-item_link">
                    <div className="ag-courses-item_bg"></div>

                    <div className="ag-courses-item_title" style={{ color: '#3ecd5e' }}>
                      Development
                    </div>

                    <div className="ag-courses-item_date-box">
                      Turning visions into digital reality. Discover our expertise in web and mobile app development for impactful solutions.
                    </div>
                  </div>
                </motion.div>

                <motion.div className="ag-courses_item" initial={{ opacity: 0, translateX: '-100%' }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ ease: 'easeInOut', duration: 0.5, delay: isMobile ? 0 : 1 }} style={{ marginLeft: 10, marginRight: 10 }}>
                  <div className="ag-courses-item_link">
                    <div className="ag-courses-item_bg"></div>

                    <div className="ag-courses-item_title" style={{ color: '#e44002' }}>
                      Support
                    </div>

                    <div className="ag-courses-item_date-box">
                      Sustaining excellence post-launch from bug fixes to enhancements, our web & mobile app support keep your digital solutions running smoothly.
                    </div>
                  </div>
                </motion.div>

                <motion.div className="ag-courses_item" initial={{ opacity: 0, translateX: isMobile ? '100%' : '-100%' }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ ease: 'easeInOut', duration: 0.5, delay: isMobile ? 0 : 1.5 }} style={{ marginLeft: 10 }}>
                  <div className="ag-courses-item_link">
                    <div className="ag-courses-item_bg"></div>

                    <div className="ag-courses-item_title" style={{ color: '#952aff' }}>
                      E-Commerce
                    </div>

                    <div className="ag-courses-item_date-box">
                      Empower your online business. Explore our e-commerce solutions for seamless transactions and captivating user experiences.
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </Flex>

          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <ModalOverlay />
            <ModalContent margin={'auto'}>
              <ModalHeader className={montserrat.className}>Form Submission Success</ModalHeader>
              <ModalCloseButton />
              <ModalBody className={lato.className}>
                Thank you for reaching out! We will get back to you as soon as possible!
              </ModalBody>
              <ModalFooter>
                <Button className={lato.className} backgroundColor={'#6bacff'} color={'white'} _hover={{ opacity: 0.8 }} mr={3} onClick={() => setIsOpen(false)}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Flex position={'relative'} backgroundColor={'#68aaff'} paddingX={{ base: 5, md: 20 }} paddingY={14} justifyContent={'center'} direction={'column'} textAlign={'left'} color={'#F5F5F5'} className={lato.className}>
            <Text className={montserrat.className} fontSize={36} width={'100%'} marginBottom={30} fontWeight={600}>Let's Craft Brilliance</Text>
            <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 990 }}>
              <Flex flexDirection={{ base: 'column', md: 'row' }} gap={{ base: 0, md: 50 }}>
                <FormControl width={{ base: '100%', lg: '25%' }} isRequired>
                  <FormLabel color={'#F5F5F5'} fontSize={20} fontWeight={400} className={lato.className}>Full Name</FormLabel>
                  <Input type='text' name='name' borderWidth={3} marginBottom={5} _focusVisible={{ borderColor: 'white' }} />
                </FormControl>
                <FormControl width={{ base: '100%', lg: '25%' }} isRequired>
                  <FormLabel color={'#F5F5F5'} fontSize={20} fontWeight={400} className={lato.className}>Email address</FormLabel>
                  <Input type='email' name='email' borderWidth={3} marginBottom={5} _focusVisible={{ borderColor: 'white' }} />
                </FormControl>
              </Flex>
              <Flex flexDirection={{ base: 'column', md: 'row' }} gap={{ base: 0, md: 50 }}>
                <FormControl width={{ base: '100%', lg: '25%' }}>
                  <FormLabel color={'#F5F5F5'} fontSize={20} fontWeight={400} className={lato.className}>Phone Number</FormLabel>
                  <Input type='tel' name='phone' borderWidth={3} marginBottom={5} _focusVisible={{ borderColor: 'white' }} />
                </FormControl>
                <FormControl width={{ base: '100%', lg: '25%' }} isRequired>
                  <FormLabel color={'#F5F5F5'} fontSize={20} fontWeight={400} className={lato.className}>Company Name</FormLabel>
                  <Input type='text' name='company' borderWidth={3} marginBottom={5} _focusVisible={{ borderColor: 'white' }} />
                </FormControl>
              </Flex>
              <FormControl isRequired>
                <FormLabel className={lato.className} fontSize={24} marginTop={15} marginBottom={15}>Project Type</FormLabel>
                <RadioGroup mb={15}>
                  <Stack spacing={4} direction='row' flexWrap={'wrap'}>
                    <Radio id={'radio1'} width={'100%'} value='Refresh An Existing Site ' fontSize={20} className={lato.className}>Refresh An Existing Site</Radio>
                    <Radio id={'radio2'} width={'100%'} value='Build a Brand New Site' fontSize={20} className={lato.className}>Build a Brand New Site</Radio>
                    <Radio id={'radio3'} width={'100%'} value='Fix Problem With Existing Site' fontSize={20} className={lato.className}>Fix Problem With Existing Site</Radio>
                    <Radio id={'radio4'} width={'100%'} value='Mobile App' fontSize={20} className={lato.className}>Mobile App</Radio>
                    <Radio id={'radio5'} width={'100%'} value='E-Commerce' fontSize={20} className={lato.className}>E-Commerce</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <Flex flexDirection={'column'} width={{ base: '100%', lg: '53%' }}>
                <Text mt={4} mb={2} fontSize={24} className={lato.className}>Additional Comments</Text>
                <Textarea name='comments' borderWidth={3} mb={4} _focusVisible={{ borderColor: '#F5F5F5' }} resize={'none'} />
                <Button type='submit' borderColor={'#69A1F3'} background={'#F5F5F5'} color={'#69A1F3'} size={'lg'} borderRadius={'10px'} fontSize={20}>Submit</Button>
              </Flex>
            </form>
            {!isMobile &&
              <motion.div id="dnaCropped" style={{ position: 'absolute', height: '80%', top: '10%', right: '5%', zIndex: 980, marginTop: 'auto', marginBottom: 'auto' }} initial={{ opacity: 0, translateX: '-100%' }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ ease: 'easeInOut', duration: 0.5 }}>
                <img src='/dnaCropped.gif' loading='eager' style={{ height: '100%'}} />
              </motion.div>
            }
          </Flex>
          <Flex backgroundColor={'#282C35'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} padding={4} color={'#F5F5F5'}>
            <Flex alignItems={'center'} gap={2}>
              <Box boxSize={10} position={'relative'}>
                <Image src="/upscaledWhiteDevices.png" alt="dbss logo" fill />
              </Box>
              <Text className={montserrat.className} color={'white'} fontSize={32} fontWeight={'600'}>dbss</Text>
            </Flex>
            <Text className={lato.className} fontSize={20}>Hello@DbssLLC.com</Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Home;
