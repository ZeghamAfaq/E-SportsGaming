import { StyleSheet,TextInput, View, Image, Button,Text } from 'react-native';

//Exports Components
import Buttons from '../components/Buttons';
import Header from '../components/Header';
import InputComponent from '../components/InputComponent';

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
    bottom:150
  },
  signupContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems:'center'
  },
  signuptext:{
    color: 'white',
    paddingHorizontal:10,
    fontSize:16
  },
  signup:{
    textDecorationLine: 'underline',
    color: '#FF5412',
    fontWeight: 'bold'
  },
  
  //  forget password section
  forget:{
    fontSize:16,
    color: '#FF5412',
    margin:12,
  },
});

const handlesubmit =()=>{}
const Login = ({navigation}) => {
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
       <Text style={styles.imgtxt}>Login</Text>
    </View>
    <InputComponent />
    
        {/* forget password section */}
      <Text style={styles.forget} onPress={() => navigation.navigate('ForgetPassword')} >Forget password?</Text>
      <View style={styles.buttonContainer}>
        <Buttons text='login' onPress={handlesubmit} />
        <View style={styles.signupContainer}>
          <Text style={styles.signuptext}>Don't have an account?</Text>
          <Text style={styles.signup} onPress={() => navigation.navigate('Signup')} >SignUp</Text>
        </View>
      </View>
    </View>
  )
  }; export default Login
