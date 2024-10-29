import { StyleSheet, Text } from "react-native"

type Props = {
    text: String;
};

export const Label = ({ text}: Props) => {
    return <Text style={styles.Label}>{text}</Text>;
    
};

const styles= StyleSheet.create({
    Label:{
        fontSize: 20,
        fontWeight: 'bold',
    }
});