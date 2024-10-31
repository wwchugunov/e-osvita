import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import moment from 'moment'; // Не забудьте установить moment.js, если еще не установлено

const ScheduleScreen = ({ navigation }) => {

    const handleButtonPress = (toolName) => {
        navigation.navigate(toolName);
    };

    // Пример данных для расписания с состоянием
    const [classes] = useState([
        { id: 1, subject: 'Математика', time: '10:00 - 11:30', status: 'Пройдено' },
        { id: 2, subject: 'Фізика', time: '12:00 - 13:30', status: 'Пропущено' },
        { id: 3, subject: 'Інформатика', time: '14:00 - 15:30', status: 'Очікується' },
        { id: 4, subject: 'Хімія', time: '16:00 - 17:30', status: 'Пройдено' },
    ]);

    // Дни недели
    const daysOfWeek = [
        { day: 'Пн', number: moment().isoWeekday(1).format('D') },
        { day: 'Вт', number: moment().isoWeekday(2).format('D') },
        { day: 'Ср', number: moment().isoWeekday(3).format('D') },
        { day: 'Чт', number: moment().isoWeekday(4).format('D') },
        { day: 'Пт', number: moment().isoWeekday(5).format('D') },
        { day: 'Сб', number: moment().isoWeekday(6).format('D') },
        { day: 'Вс', number: moment().isoWeekday(7).format('D') },
    ];

    const getClassBackgroundColor = (status) => {
        switch (status) {
            case 'Пройдено':
                return '#d4edda'; // Бледно-зеленый
            case 'Пропущено':
                return '#e2e3e5'; // Бледно-серый
            case 'Очікується':
                return '#ffffff'; // Белый
            default:
                return '#ffffff'; // Белый по умолчанию
        }
    };

    const isToday = (number) => {
        return number === moment().format('D'); // Проверяем, является ли число сегодняшним
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => handleButtonPress('СabinetScreen')}>
                    <Image source={require('../imgBtn/profile_img.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Розклад занять</Text>
                <TouchableOpacity onPress={() => handleButtonPress('SetingsScreeen')}>
                    <Image source={require('../imgBtn/setings_png.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>
            
            {/* Строка с днями недели и числами */}
            <View style={styles.daysContainer}>
                {daysOfWeek.map((item, index) => (
                    <View key={index} style={styles.dayContainer}>
                        <Text style={styles.day}>{item.day}</Text>
                        <Text style={[styles.date, isToday(item.number) ? styles.todayDate : null]}>
                            {item.number}
                        </Text>
                    </View>
                ))}
            </View>

            <ScrollView contentContainerStyle={styles.scheduleContainer}>
                {classes.map((classItem) => (
                    <TouchableOpacity
                        key={classItem.id}
                        style={[styles.classCard, { backgroundColor: getClassBackgroundColor(classItem.status) }]}
                        onPress={() => {
                            // Здесь можно добавить функциональность для перехода на экран с историей
                            console.log(`Перейти к истории для: ${classItem.subject}`);
                        }}
                    >
                        <Text style={styles.classSubject}>{classItem.subject}</Text>
                        <Text style={styles.classTime}>{classItem.time}</Text>
                        <Text style={styles.classStatus}>{classItem.status}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>


            <View style={styles.footer}>
                <Text style={styles.footerText}>© 2024 Таскомбанк</Text>
                <TouchableOpacity onPress={() => console.log('Политика конфиденциальности')}>
                    <Text style={styles.footerLink}>Политика конфедеційності</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B2C1C8',
        padding: 5,
    },
    title: {
        marginTop: 50,
        color: 'blue',
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 20,
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
    daysContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    dayContainer: {
        alignItems: 'center',
    },
    day: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#324F69',
    },
    date: {
        fontSize: 16,
        color: 'black',
    },
    todayDate: {
        color: 'red', // Цвет для выделения сегодняшней даты
        fontWeight: 'bold', // Жирный шрифт для выделения
    },
    scheduleContainer: {
        paddingBottom: 60,
    },
    classCard: {
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    classSubject: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    classTime: {
        fontSize: 16,
        color: '#666',
    },
    classStatus: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    footer: {
        alignItems: 'center',
        paddingVertical: 20,
        marginBottom: 20,
    },
    footerText: {
        color: '#fff',
        marginBottom: 5,
    },
    footerLink: {
        color: '#007BFF',
        textDecorationLine: 'underline',
    },

});

export default ScheduleScreen;
