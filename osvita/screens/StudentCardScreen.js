import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';

const StudentCard = ({ navigation }) => {
    const handleButtonPress = (toolName) => {
        navigation.navigate(toolName);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => handleButtonPress('СabinetScreen')}>
                    <Image source={require('../imgBtn/profile_img.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Студентський квиток</Text>
                <TouchableOpacity onPress={() => handleButtonPress('SetingsScreeen')}>
                    <Image source={require('../imgBtn/setings_png.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.cardStudentBox}>
                    <View style={styles.titleCard}>
                        <Text style={styles.titleCardName}>Студентський квиток</Text>
                        <Image source={require('../img/photos.png')} style={styles.photoCard} />
                    </View>
                    <View style={styles.oboutCard}>
                        <View style={styles.idCard}>
                            <Text style={styles.oboutTextStyle}>КВ</Text>
                            <Text style={styles.oboutTextStyle}>98274462</Text>
                        </View>

                        <View style={styles.dateTime}>
                            <Text style={styles.oboutTextStyle}>Дійсний до </Text>
                            <Text style={styles.oboutTextStyle}>12.12.2024 р.</Text>
                        </View>

                        <View style={styles.typelisens}>
                            <Text style={styles.oboutTextStyle}>Форма навчання: денна</Text>
                        </View>

                        <View style={styles.typeuniversetet}>
                            <Text style={styles.oboutTextStyle}>Факультет: Фінансів та банківської справи</Text>
                        </View>

                        <View style={styles.nameScool}>
                            <Text style={styles.oboutTextStyle}>Національна Академія Внутрішніх {'\n'}Справ</Text>
                        </View>
                    </View>

                    <View style={styles.studentCardBtn}>
                        <Text style={styles.fullNameStudent}>Іванова Олена Ігорівна</Text>
                        <TouchableOpacity>
                            <Image source={require('../imgBtn/studentCardShare.png')} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <View style={styles.footerLinks}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://tascombank.ua')}>
                        <Text style={styles.footerLink}>tascombank.ua</Text>
                    </TouchableOpacity>
                    <Text style={styles.footerText}>освіта від Таскомбанку</Text>
                </View>
                <TouchableOpacity onPress={() => Linking.openURL('https://example.com')}>
                    <Image source={require('../img/logo.png')} style={styles.logo} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B2C1C8',
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 35,
    },
    headerTitle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    icon: {
        width: 30,
        height: 30,
        marginHorizontal: 10,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
    },
    cardStudentBox: {
        width: '95%',
        backgroundColor: '#FFF',
        height: 550,
        alignSelf: 'center',
        borderRadius: 20,
        padding: 20,
        paddingTop: 25,
    },
    titleCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleCardName: {
        width: '50%',
        fontSize: 20,
        marginTop: -100,
        fontWeight: 'bold',
        fontFamily: 'Lato',
    },
    photoCard: {
        width: 150,
        height: 190,
    },
    oboutCard: {
        marginTop: -50,
    },
    oboutTextStyle: {
        fontSize: 20,
    },
    idCard: {
        paddingBottom: 10,
    },
    dateTime: {
        paddingBottom: 10,
    },
    typelisens: {
        paddingBottom: 10,
    },
    typeuniversetet: {
        paddingBottom: 10,
    },
    nameScool: {
        width: '130%',
    },
    studentCardBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 80,
    },
    fullNameStudent: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 20,
        paddingLeft: 15,
        paddingRight: 15,
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

export default StudentCard;
