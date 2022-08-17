import * as React from 'react';
import { StyleSheet,TextInput, View, Image, Button,Text } from 'react-native';
import Buttons from '../components/Buttons';
import Header from '../components/Header';
import SignupInputs from '../components/SignupInputs';



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
    bottom:30
  },
  
  //  Have Account section
  login:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  HaveAccount:{
    fontSize:16,
    color: 'white',
    margin:12,
  },
  loginText:{
    fontSize:16,
    color: '#FF5412',
  }
});


const handlesubmit =()=>{
  alert('Form submited successfully ')
}
const SignUp = ({navigation} ) => {
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
       <Text style={styles.imgtxt}>SignUp</Text>
    </View>

    {/* signup inputs component */}
    <SignupInputs />

    {/* submit button */}
      <View style={styles.buttonContainer}>
        <Buttons text='signup' onPress={handlesubmit}  />
      </View>


       {/* if user already have an account */}
        <View style={styles.login}>
            <Text style={styles.HaveAccount}>Have an account?</Text>
            <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>Login</Text>
        </View>
    </View>
  )
  }; export default SignUp
