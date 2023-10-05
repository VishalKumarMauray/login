import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const createAccount = () => {
  return (
    <View style={{flex:1, margin:20,justifyContent:'center'}}>
        <View style={{position:'absolute',top:20}}>
        <Text style={{color:'#4e5c68',fontWeight:'bold',fontSize:16}}>Create Account</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{
                    height: 2,
                    width: 110,
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
        </View>
                <Text style={{color:'#4e5c68'}}>
                    Simple steps
                </Text>
                <Text style={{ color: '#4e5c68', fontWeight: '100', fontSize: 45 }}>
                Identity
            </Text>
            <Text style={{ color: '#4e5c68', fontWeight: '100', fontSize: 45 }}>
                Address
            </Text>
            <Text style={{ color: '#4e5c68', fontWeight: '100', fontSize: 45 }}>
                Activity.
            </Text>
            <View style={styles.button}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                        Let's Go
                    </Text>
                </View>
    </View>
  )
}

export default createAccount

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