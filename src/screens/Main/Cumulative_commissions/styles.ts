import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        width:393,
        height:853,
        backgroundColor:'#FFFFFF',
    },
    header:{
        width:393,
        height:60,
        backgroundColor:'#6655D0',
    },
    information:{
        width:393,
        height:24,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:16,
    },
    back:{
        width:24,
        height:24,
        color: '#FFFFFF',
        marginLeft:16,
    },
    Rose:{
        width:251,
        height:20,
        fontFamily:'Roboto',
        fontSize:20,
        lineHeight:20,
        textAlign:'center',
        color: '#FFFFFF',
        marginLeft:10,
    },
    notifications:{
        width:28,
        height:31,
        marginLeft:57,
        marginTop:10,
    },
});

export default styles;