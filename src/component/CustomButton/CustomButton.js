import { Text, StyleSheet , Pressable } from 'react-native';

const CustomButton = ({onPress , text}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container ]}>
            <Text style={[styles.text ]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '50%',
        paddingHorizontal: 30,
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#044cd0',
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default CustomButton;
