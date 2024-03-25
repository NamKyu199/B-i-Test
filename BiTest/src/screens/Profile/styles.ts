import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#6655D0',
        height: 104
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#FFFFFF',
        paddingTop: 62
    },
    form: {
        marginTop: 24,
        marginHorizontal: 17
    },
    row: {
        flexDirection: 'row',
        marginTop: 12,
        justifyContent: 'space-between',
    },
    textLeft: {
        color: '#939393',
        paddingLeft: 8,
        fontSize: 14,
        fontWeight: '400',
        flex:1.5
    },
    textRight: {
        color: '#333333', 
        paddingRight: 8,
        fontSize: 14,
        fontWeight: '400',
        textAlign:'right',
        flex:4
    },
    admin: {
        color: '#6655D0',
        fontSize: 12,
        fontWeight: '300',
        marginTop: 12,
    }
});

export default styles;