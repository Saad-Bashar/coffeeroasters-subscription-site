import { useState, useEffect } from "react"
import * as Device from 'expo-device'

const useDevice = () => {
  const [isTablet, setIsTablet] = useState(false)

  const checkIsTablet = async () => {
    const deviceType = await Device.getDeviceTypeAsync()
    console.log("DEVICE TYPE == ", deviceType)
    setIsTablet(deviceType === 2)
  }

  useEffect(() => {
    checkIsTablet()
  }, [])

  return isTablet
}

export default useDevice
