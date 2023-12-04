import { Stack } from 'expo-router'
import { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

// SplashScreen es lo primero que ve una persona cuando inicia la app, generalmente logotipo o nombre de la app mientras se carga la app
SplashScreen.preventAutoHideAsync()

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    // solo mostrar el home page si se cargaron los fonts
    if(fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])



  if(!fontsLoaded) return null;
  return <Stack onLayout={onLayoutRootView}/>

}

export default Layout