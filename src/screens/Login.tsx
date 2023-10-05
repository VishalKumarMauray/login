import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const LoginPage = ({ navigation }: { navigation: any }) => {
    return (
        <View style={{ margin: 20, justifyContent: 'center', flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#4e5c68', fontWeight: 'bold', fontSize: 16 }}>
                    AI
                </Text>
                <Text style={{ fontStyle: 'italic', fontSize: 16, color: '#4e5c68' }}>folios</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{
                    height: 2,
                    width: 50,
                    backgroundColor: '#f01ddb'
                }}>
                </View>
                <View style={{
                    height: 10,
                    width: 10,
                    backgroundColor: '#f01ddb',
                    borderRadius: 20,
                }}>

                </View>
            </View>
            <Text style={{ color: '#4e5c68', fontWeight: '300', fontSize: 50 }}>
                Machine
            </Text>
            <Text style={{ color: '#4e5c68', fontWeight: '300', fontSize: 50 }}>
                aided
            </Text>
            <Text style={{ color: '#4e5c68', fontWeight: '300', fontSize: 50 }}>
                intelligent
            </Text>
            <Text style={{ color: '#4e5c68', fontWeight: '300', fontSize: 50, marginBottom: 20 }}>
                investing
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                <Text style={{ color: '#4e5c68' }}>
                    with multi-asset
                </Text>
                <View style={{ paddingHorizontal: 5, marginBottom: 50 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#4e5c68' }}>
                        ETF
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#4e5c68' }}>
                        ESG
                    </Text>
                </View>
                <Text style={{ color: '#4e5c68' }}>
                    portfolios
                </Text>
            </View>
            <Text style={{
                fontWeight: '500', fontSize: 16, marginBottom: 40, alignSelf: 'flex-end', position: 'absolute'
                , bottom: 65, right: 12, color: '#4e5c68'
            }}>
                Create Account
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('create account')} activeOpacity={0.8}>
                <View >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                        Login
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f01ddb',
        position: 'absolute',
        bottom: 20,
        right: 0,
        paddingHorizontal: 45,
        paddingVertical: 10,
        borderRadius: 20,
        elevation: 4,
        shadowColor: 'black'
    }
})