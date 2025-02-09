import AsyncStorage from "@react-native-async-storage/async-storage"; 

const useStorage = ()=>{
    const getItem = async (key) =>{
        try {

            const passwords = await AsyncStorage.getItem(key)

            return JSON.parse(passwords) || []
          } catch(e) {
            console.log(`error: ${e}`)
            return []
          }
    }
    const setItem = async(key, value)=>{
        try {
            let passwords = await getItem(key)
            passwords.push(value)
            await AsyncStorage.setItem(key, JSON.stringify(passwords))
          } catch(e) {
            console.log(`error: ${e}`)
          }
        
          console.log('Done.')
    }
    const removeItem = async(key,item ) =>{
        try {
            let passwords = getItem(key)

            let myPasswords = passwords.filter((password) =>{
                return(password !== item)
            })
            await AsyncStorage.removeItem(key)
            return myPasswords
          } catch(e) {
            console.log(`error: ${e}`)
          }
    }
    return{
      getItem,
      setItem,
      removeItem
    }
        
    
}

export default useStorage;