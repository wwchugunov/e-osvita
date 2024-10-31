import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, Image, FlatList } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const StudentGuideScreen = ({ navigation }) => {
    const handleLinkPress = (url) => {
        Linking.openURL(url);
    };

    // Данные для плиток
    const buttonsData = [
        { id: '1', icon: 'university', text: 'Дистанційне навчання', url: 'https://www.naiau.kiev.ua/distancijne-navchannya.html' },
        { id: '2', icon: 'library', text: 'Новини', url: 'https://www.naiau.kiev.ua/news/' },
        { id: '3', icon: 'courses', text: 'Курси та матеріали', url: 'https://www.dcaf.ch/resources?type=publications' },
        { id: '4', icon: 'events', text: 'Культурне життя', url: 'https://www.naiau.kiev.ua/vykhovna-robota-ta-dozvillia/' },
        { id: '5', icon: 'clubs', text: 'Видання кафедр', url: 'https://www.naiau.kiev.ua/vidannya-kafedr/' },
        { id: '6', icon: 'events', text: 'Законодавство', url: 'https://www.naiau.kiev.ua/pravova-prosvita/' },
        { id: '6', icon: 'card', text: 'Відкрити картку', url: 'https://events.university.edu' },
    ];

    // Иконка для кнопки
    const renderIcon = (type) => {
        switch (type) {
            case 'university':
                return (
                    <Svg width="50" height="50" viewBox="0 0 24 24" fill="white">
                        <Path d="M12 2L2 7v7l10 5 10-5V7l-10-5zM12 15l-6-3v-3l6 3 6-3v3l-6 3z" />
                    </Svg>
                );
            case 'library':
                return (
                    <Svg width="50" height="50" viewBox="0 0 24 24" fill="white">
                        <Path d="M4 20h16v-2H4v2zm0-4h16v-2H4v2zm0-4h16v-2H4v2zm0-4h16V6H4v2zm0-8v2h16V2H4z" />
                    </Svg>
                );
            case 'courses':
                return (
                    <Svg width="50" height="50" viewBox="0 0 24 24" fill="white">
                        <Path d="M20 2H4v18h16V2zm-2 16H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V8h12v2z" />
                    </Svg>
                );
            case 'clubs':
                return (
                    <Svg width="50" height="50" viewBox="0 0 24 24" fill="white">
                        <Path d="M12 2l8 4-3 9-5-4-5 4-3-9z" />
                    </Svg>
                );
            case 'events':
                return (
                    <Svg width="50" height="50" viewBox="0 0 24 24" fill="white">
                        <Path d="M12 2L2 7v15h20V7l-10-5zm-1 3.5V12h-2V5.5h2zm4 0V12h-2V5.5h2zM6 11h2v2H6v-2zm0 4h2v2H6v-2zm10 0h2v2h-2v-2zm-6 2h4v2h-4v-2z" />
                    </Svg>
                );
            case 'card':
                return (
                    <Svg width="50" height="50" viewBox="0 0 24 24" fill="white">
                        <Path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM3 5V19H21V5H3ZM3 7H21V9H3V7ZM3 11H21V13H3V11ZM3 15H21V17H3V15Z" />
                    </Svg>
                );

            default:
                return null;
        }
    };

    // Отрисовка кнопок в виде плитки
    const renderButton = ({ item }) => (
        <TouchableOpacity style={styles.button} onPress={() => handleLinkPress(item.url)}>
            {renderIcon(item.icon)}
            <Text style={styles.buttonText}>{item.text}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('CabinetScreen')}>
                    <Image source={require('../imgBtn/profile_img.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Довідник</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SetingsScreeen')}>
                    <Image source={require('../imgBtn/setings_png.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <FlatList
                data={buttonsData}
                renderItem={renderButton}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.listContainer}
            />

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
        padding: 20,
        backgroundColor: '#B2C1C8',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
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
    button: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#324F69',
        borderRadius: 10,
        padding: 15,
        margin: 10,
        elevation: 5,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center',
    },
    listContainer: {
        paddingBottom: 20,
    },
    row: {
        justifyContent: 'space-between',
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

export default StudentGuideScreen;
