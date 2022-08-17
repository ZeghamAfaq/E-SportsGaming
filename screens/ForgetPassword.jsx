import { StyleSheet,TextInput, View, Image, Button,Text } from 'react-native';

// Exports Components
import Buttons from '../components/Buttons';
import Header from '../components/Header';
import ResetInput from '../components/ResetInput'

//Export icons
import { Ionicons } from '@expo/vector-icons';

//style component
const styles = StyleSheet.create({
  //main container
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#030A04'
  },
  //image section
  imgContainer: {
    flex:1,
    height:150,
    justifyContent: 'flex-start',
    alignItems: 'center',
    top:50
  },
  imgtxt:{
    color:'#FFB85D',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize:25,
    fontWeight:'bold'
  },
  //logo section
  logo: {
    width: 250,
    height: 150,
  },
  buttonContainer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:10,
    paddingVertical:14,
    bottom:250
  },
  backIcon:{
    position:'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom:100,
    left:'47%',
    backgroundColor: '#FF5412',
    borderRadius: 36
  }
});

const handlesubmit =()=>{
  alert('Password link send to your email successfully')
}
const ForgetPassword = ({navigation}) => {
  return (
    //  main container
    <View style={styles.container}>
      <Header />
      {/* image container */}
      <View style={styles.imgContainer}>
      <Image
        style={styles.logo}
        source={require('../assets/images/6.png')}
      />
       <Text style={styles.imgtxt}>Reset Password</Text>
    </View>
    <ResetInput />
      <View style={styles.buttonContainer}>
        <Buttons text='Submit' onPress={handlesubmit} />
      </View>
      <View style={styles.backIcon}>
       <Ionicons name="arrow-back-circle-outline" size={40} color="white"
       onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  )
  }; export default ForgetPassword
