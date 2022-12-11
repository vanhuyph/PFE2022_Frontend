import React, { useCallback } from 'react'
import { Box, Center } from 'native-base'
import { themeTools, useTheme, useColorMode, useColorModeValue, Text, VStack } from 'native-base';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import MenuButton from '../../components/MenuButton/MenuButton';

const SideBar = (props) => {
    const { navigation } = props

    const handlePressBackButton = useCallback(() => {
        navigation.closeDrawer()
    }, [navigation])
    const handlePressMain = useCallback(() => {
        navigation.navigate('Home')
    }, [navigation])

    return (
        <Box flex={1} safeArea _light={{ bg: 'primary.50' }} _dark={{ bg: 'primary.1000' }}>
            <Center>
                <VStack justifyContent="space-between" height='100%' pt={10}
                    pb={10} width="100%">
                    <VStack width="100%" space={8} pt={10}>
                        <MenuButton text="Home" icon="home" onPress={handlePressMain} />
                        <MenuButton text="Profil" icon="user" />
                        <MenuButton text="Search" icon="search1" />

                    </VStack>

                    <VStack space={10} width="100%">
                        <Center>
                            <ThemeToggle />
                        </Center>
                        <MenuButton text="Logout" icon="logout" />

                    </VStack>

                </VStack>


            </Center>
        </Box>
    )
}

export default SideBar