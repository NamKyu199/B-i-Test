import React from "react";
import styles from "./style";
import { Image, SafeAreaView, Text, View } from "react-native";
import { backIcon, notiIcon } from "../../image";

const CommonAppBar = (props: any) => {
    let prefixIcon =  <Image source= {backIcon}/>
    // let subfixIcon =  

    if(props.imagePath != null){
        prefixIcon = <Image source={props.imagePath}/>
    }
    return (<>
        <View style={styles.container}>
            <SafeAreaView>
                <View style = {styles.row}>
                    {prefixIcon}
                    <Text style = {styles.title}>{props.title}</Text>
                    {notiIcon}
                </View>
            </SafeAreaView>
            

        </View>
    </>)
}

export default CommonAppBar