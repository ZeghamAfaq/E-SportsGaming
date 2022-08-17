import react from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native'

const Buttons = ({text,onPress}) =>{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttons}>
                <Text style={styles.buttonstext}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default Buttons

const styles=StyleSheet.create({
    buttons:{
        borderRadius:8,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'#FF5412',
        alignItems: 'center'
    },
    buttonstext:{
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize:16,
        alignItems: 'center'
    }
})