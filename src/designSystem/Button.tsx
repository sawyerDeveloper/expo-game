import { Pressable, StyleSheet, Text, View } from 'react-native'


export const Button = ({ title, onPress }) => {

    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.label}>{title}</Text>
            </View>
        </Pressable>)
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        minWidth: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fdd'
    },
    label: {
        color: '#b2b'
    }
});