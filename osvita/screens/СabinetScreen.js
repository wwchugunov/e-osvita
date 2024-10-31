import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, SafeAreaView, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const CabinetScreen = ({ navigation }) => {
    const handleButtonPress = (toolName) => {
        navigation.navigate(toolName);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Хедер */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => handleButtonPress('Tools')}>
                    <Svg width={30} height={30} viewBox="0 0 24 24">
                        <Path d="M3 9.5L12 3L21 9.5V21H15V15H9V21H3V9.5Z" fill="#324F69" />
                    </Svg>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Профіль</Text>
                <TouchableOpacity onPress={() => handleButtonPress('Home')}>
                    <Svg width={30} height={30} viewBox="0 0 24 24">
                        <Path d="M10 17L15 12L10 7V10H3V14H10V17Z" fill="#324F69" />
                    </Svg>
                </TouchableOpacity>
            </View>

            {/* Фотография пользователя */}
            <View style={styles.photoContainer}>
                <Image 
                    source={require('../img/photos.png')} 
                    style={styles.photo} 
                    resizeMode="cover" // Масштабирование изображения
                />
            </View>

            {/* Информация на белой плитке */}
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Факультет: <Text style={styles.infoTextBold}>Фінансів та банківської справи</Text></Text>
                <Text style={styles.infoText}>Курс: <Text style={styles.infoTextBold}>3</Text></Text>
                <Text style={styles.infoText}>Група: <Text style={styles.infoTextBold}>13м</Text></Text>
                <Text style={styles.infoText}>Пошта: <Text style={styles.infoTextBold}>example@example.com</Text></Text>
                <Text style={styles.infoText}>Телефон: <Text style={styles.infoTextBold}>+380 99 123 4567</Text></Text>
                <Text style={styles.infoText}>Наступна оплата: <Text style={styles.infoTextBold}>15.12.2024 оплата навчання за наступний семестр</Text></Text>
            </View>

            {/* Элементы управления */}
            <View style={styles.controlsContainer}>
                <TouchableOpacity style={styles.controlButton} onPress={() => handleButtonPress('EditProfile')}>
                    <Text style={styles.controlButtonText}>Редагувати профіль</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.controlButton} onPress={() => Linking.openURL('https://tascombank.ua/you/cards')}>
                    <Text style={styles.controlButtonText}>Відкрити картку</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.controlButton} onPress={() => handleButtonPress('Tools')}>
                    <Text style={styles.controlButtonText}>Функції</Text>
                </TouchableOpacity>
            </View>

            {/* Футер */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>© 2024 Ваша компанія</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        marginBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
    },
    headerTitle: {
        fontSize: 20,
        color: '#324F69', // Изменен цвет заголовка
        fontWeight: 'bold',
    },
    photoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    photo: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
    },
    infoContainer: {
        backgroundColor: '#FAFAFA',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
        width: '90%', // Ширина плитки соответствует ширине кнопок
        alignSelf: 'center', // Центрирование плитки
    },
    infoText: {
        fontSize: 16,
        marginBottom: 10,
        color: '#555',
        lineHeight: 22,
    },
    infoTextBold: {
        fontWeight: 'bold',
    },
    controlsContainer: {
        flexDirection: 'column', // Изменен на вертикальное расположение
        alignItems: 'center', // Центрирование кнопок
        marginBottom: 20,
    },
    controlButton: {
        backgroundColor: '#324F69', // Цвет кнопок
        borderRadius: 8,
        paddingVertical: 12, // Размер кнопок
        marginBottom: 10,
        width: '90%', // Ширина кнопок
        alignItems: 'center',
    },
    controlButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    footer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    footerText: {
        color: '#777',
    },
});

export default CabinetScreen;
