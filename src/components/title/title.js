import react from "react";
import { View, Text } from "react-native";
import styles from "./titleStule"

export default function Titulo(){

return (
    <View style = {styles.boxTitle}>
        <Text style={styles.TextTitle} > Seu programa de Loyalty </Text>
    </View>
);
}