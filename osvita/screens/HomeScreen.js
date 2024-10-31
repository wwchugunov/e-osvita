import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Е-ОСВІТА</Text>
      <Image
        source={require('../img/qr.png')} 
        style={styles.qrCode}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btnsign} onPress={() => navigation.navigate('Tools')}>
          <Text style={styles.btnText}>ВХІД</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnsign} onPress={() => navigation.navigate('Registration')}>
          <Text style={styles.btnText}>РЕЄСТРАЦІЯ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerLinks}>
          <TouchableOpacity onPress={() => Linking.openURL('https://tascombank.ua')}>
            <Text style={styles.footerLink}>tascombank.ua</Text>
          </TouchableOpacity>
          <Text style={styles.footerText}>освіта від Таскомбанку</Text>
        </View>
        <TouchableOpacity onPress={() => Linking.openURL('https://example.com')}>
          <Image
            source={require('../img/logo.png')} 
            style={styles.logo}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#B2C1C8',
  },
  title: {
    fontSize: 70,
    marginTop: 60,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  qrCode: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginVertical: 20,
    marginTop: 150,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  btnsign: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
  },
  btnText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
  },
  footerLinks: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  footerLink: {
    color: '#007BFF',
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
  footerText: {
    color: '#333',
    marginBottom: 0,
  },
  logo: {
    width: 100,
    height: 36,
  },
});

export default HomeScreen;
