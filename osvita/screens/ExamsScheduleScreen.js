import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

const ExamsScheduleScreen = ({ navigation }) => {

    const handleButtonPress = (toolName) => {
        navigation.navigate(toolName);
    };


    const [selectedDate, setSelectedDate] = useState('');

    const exams = [
        { id: 1, subject: 'Математика', date: '2024-10-20', time: '10:00', grade: 5 },
        { id: 2, subject: 'Фізика', date: '2024-10-22', time: '14:00', grade: 4 },
        { id: 3, subject: 'Інформатика', date: '2024-10-25', time: '12:00', grade: 3 },
        { id: 4, subject: 'Хімія', date: '2024-10-28', time: '09:00', grade: 2 },
        // Прошедшие экзамены
        { id: 5, subject: 'Географія', date: '2024-10-19', time: '11:00', grade: 3 },
        { id: 6, subject: 'Математика', date: '2024-10-18', time: '13:00', grade: 2 },
        { id: 7, subject: 'Література', date: '2024-10-15', time: '09:00', grade: 5 },
        { id: 8, subject: 'Біологія', date: '2024-10-18', time: '14:00', grade: 4 },
    ];

    const today = new Date().toISOString().split('T')[0];

    const markedDates = {
        [today]: { marked: true, dotColor: 'red', selected: true, selectedColor: '#00adf5' },
        '2024-10-20': { marked: true, dotColor: 'red' },
        '2024-10-22': { marked: true, dotColor: 'red' },
        '2024-10-25': { marked: true, dotColor: 'red' },
        '2024-10-28': { marked: true, dotColor: 'red' },
        '2024-10-19': { marked: true, dotColor: 'red' },
        '2024-10-18': { marked: true, dotColor: 'red' },
        '2024-10-15': { marked: true, dotColor: 'red' },
    };

    const getWeekDates = () => {
        const startOfWeek = new Date();
        startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

        const dates = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(startOfWeek);
            date.setDate(startOfWeek.getDate() + i);
            dates.push(date.toISOString().split('T')[0]);
        }

        return dates;
    };

    const weekDates = getWeekDates();

    const getGradeStyle = (grade) => {
        if (grade === 5) return styles.gradeSuccess; // зеленый
        if (grade === 4) return styles.gradeGood; // желтый
        if (grade === 3) return styles.gradeAverage; // оранжевый
        if (grade === 2) return styles.gradeFail; // красный
        if (grade === 2) return styles.gradeGrey; // серый
        return styles.gradeDefault; // по умолчанию
    };

    const handleDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    const filteredExams = exams.filter(exam => exam.date === selectedDate);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('СabinetScreen')}>
                    <Image source={require('../imgBtn/profile_img.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Розклад іспитів</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SetingsScreeen')}>
                    <Image source={require('../imgBtn/setings_png.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <Text style={styles.weekDatesText}>{`${weekDates[0]} - ${weekDates[6]}`}</Text>

            <View style={styles.calendarContainer}>
                <Calendar
                    style={styles.calendar}
                    markedDates={markedDates}
                    onDayPress={handleDayPress}
                    theme={{
                        todayTextColor: '#00adf5',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        arrowColor: '#00adf5',
                        selectedDayBackgroundColor: '#00adf5',
                    }}
                />
            </View>

            <ScrollView contentContainerStyle={styles.scheduleContainer}>
            {selectedDate ? (
                filteredExams.length > 0 ? (
                    filteredExams.map(exam => (
                        <View key={exam.id} style={[styles.examCard, getGradeStyle(exam.grade)]}>
                            <Text style={styles.examSubject}>{exam.subject}</Text>
                            <Text style={styles.examDetails}>{`Дата: ${exam.date}`}</Text>
                            <Text style={styles.examDetails}>{`Час: ${exam.time}`}</Text>
                            <Text style={[styles.examGrade, { color: 'black' }]}>Оцінка:  {exam.grade}  </Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.noExamsText}>На цю дату немає іспитів</Text>
                )
            ) : (
                <Text style={styles.noExamsText}>Виберіть дату для перегляду іспитів</Text>
            )}
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
    weekDatesText: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
        color: '#fff',
        marginTop: -30,
    },
    calendarContainer: {
        marginVertical: 20,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#FFF',
        elevation: 5,
    },
    scheduleContainer: {
        paddingBottom: 60,
    },
    examCard: {
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    examSubject: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    examDetails: {
        fontSize: 16,
        color: '#666',
    },
    examGrade: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 0,

    },
    gradeSuccess: {
        backgroundColor: '#d4edda',
    },
    gradeGood: {
        backgroundColor: '#fff3cd',
    },
    gradeAverage: {
        backgroundColor: '#ffeeba',
    },
    gradeFail: {
        backgroundColor: '#f8d7da',
    },
    noExamsText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#666',
        marginTop: 20,
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

    gradeGrey: {
        color: 'grey'
    }
});

export default ExamsScheduleScreen;
