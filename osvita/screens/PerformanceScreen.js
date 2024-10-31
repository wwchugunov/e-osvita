import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Svg, Circle } from 'react-native-svg';

const subjectsData = [
    { id: 1, subject: 'Математика', attendance: 80, success: 85, grade: '5' },
    { id: 2, subject: 'Фізика', attendance: 70, success: 75, grade: '4' },
    { id: 3, subject: 'Хімія', attendance: 90, success: 92, grade: '3' },
    { id: 4, subject: 'Інформатика', attendance: 85, success: 88, grade: '2' },
    { id: 5, subject: 'Історія', attendance: 60, success: 65, grade: '4' },
];

const circleSize = 60;
const strokeWidth = 8;

const ExamsScheduleScreen = ({ navigation }) => {

    const handleButtonPress = (toolName) => {
        navigation.navigate(toolName);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => handleButtonPress('СabinetScreen')}>
                    <Image source={require('../imgBtn/profile_img.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Успішніть</Text>
                <TouchableOpacity onPress={() => handleButtonPress('SetingsScreeen')}>
                    <Image source={require('../imgBtn/setings_png.png')} style={styles.icon} onPress={() => handleButtonPress('StudentCard')} />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {subjectsData.map((subject) => (
                    <TouchableOpacity key={subject.id} style={styles.card}>
                        <View style={styles.cardContent}>
                            <View style={styles.textContainer}>
                                <Text style={styles.subject}>{subject.subject}</Text>
                                <Text style={styles.grade}>Оцінка: {subject.grade}</Text>
                                <Text style={styles.attendance}>Відвідуваність: {subject.attendance}%</Text>
                                <Text style={styles.success}>Успішність: {subject.success}%</Text>
                            </View>
                            <View style={styles.circleContainer}>
                                <Svg height={circleSize} width={circleSize}>
                                    <Circle
                                        cx={circleSize / 2}
                                        cy={circleSize / 2}
                                        r={(circleSize - strokeWidth) / 2}
                                        stroke="#f5f5f5" // Цвет для "Не выполнено"
                                        strokeWidth={strokeWidth}
                                        fill="none"
                                    />
                                    <Circle
                                        cx={circleSize / 2}
                                        cy={circleSize / 2}
                                        r={(circleSize - strokeWidth) / 2}
                                        stroke={getColorByPercentage(subject.attendance)} // Цвет в зависимости от процента
                                        strokeWidth={strokeWidth}
                                        fill="none"
                                        strokeDasharray={`${(subject.attendance / 100) * Math.PI * ((circleSize - strokeWidth) / 2)} ${(Math.PI * ((circleSize - strokeWidth) / 2))}`} // Даш-аррай для круговой диаграммы
                                    />
                                </Svg>
                                <Text style={styles.circleText}>{subject.attendance}%</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
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

const getColorByPercentage = (percentage) => {
    if (percentage >= 90) return '#4CAF50'; // зеленый
    if (percentage >= 75) return '#FFC107'; // желтый
    return '#F44336'; // красный
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B2C1C8',
        padding: 20,
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
    title: {
        fontSize: 30, // Уменьшен размер
        color: 'blue',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18, // Уменьшен размер
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    scrollContainer: {
        flexGrow: 1,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10, // Уменьшен отступ
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row', // Расположение элементов в строку
        alignItems: 'center', // Выравнивание по центру
    },
    cardContent: {
        flexDirection: 'row', // Расположение текста и диаграммы в строку
        justifyContent: 'space-between', // Разделение по обе стороны
        flex: 1,
    },
    textContainer: {
        flex: 1, // Занимает оставшееся место
        marginRight: 10, // Отступ справа для диаграммы
    },
    subject: {
        fontSize: 18, // Уменьшен размер
        fontWeight: 'bold',
        color: '#324F69',
    },
    grade: {
        fontSize: 16, // Уменьшен размер
        color: '#555',
    },
    attendance: {
        fontSize: 16, // Уменьшен размер
        color: '#007BFF',
    },
    success: {
        fontSize: 16, // Уменьшен размер
        color: '#28A745', // Зеленый цвет для успешности
    },
    circleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleText: {
        position: 'absolute',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
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

export default ExamsScheduleScreen;
