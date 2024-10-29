import { Pressable, Text, View } from "react-native"
type Props = {
    title: string;
    backgroundcolor: string;
    color?: String;
    onPress: () => void;
    disabled?:boolean;
    
};
export const CustomButton = ({title,backgroundcolor,color,onPress,disabled }: Props) => {
    return (
        <Pressable 
        disabled = {disabled}
        style={({pressed}) => [{
            paddingVertical:5,
        backgroundColor: backgroundcolor,
        borderRadius: 10,
        height:50,
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        opacity:pressed ? 0.5 : 1,
    },
{opacity: disabled ? 0.5: 1}]}
    onPress={onPress}
    >
            <Text style={{fontSize:20,}}>{title}</Text>
        </Pressable>
    );
};