import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ToolsScreen = ({ navigation }) => {
    const handleButtonPress = (toolName) => {
        navigation.navigate(toolName);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => handleButtonPress('СabinetScreen')}>
                    <Image source={require('../imgBtn/profile_img.png')} style={styles.icon}  />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Панель інструментів</Text>
                <TouchableOpacity onPress={() => handleButtonPress('SetingsScreeen')}>
                    <Image source={require('../imgBtn/setings_png.png')} style={styles.icon} onPress={() => handleButtonPress('StudentCard')} />
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>

                {/* Кнопка "Студентський квиток" */}
                <TouchableOpacity style={styles.blueButton} onPress={() => handleButtonPress('StudentCard')}>
                    <View style={styles.toolButtonContent}>
                        <Image source={require('../imgBtn/eBiletimg.png')} style={styles.buttonIcon} />
                        <Text style={styles.blueButtonText}>Студентський квиток</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.toolButton} onPress={() => handleButtonPress('ScheduleScreen')}>
                    <Image source={require('../imgBtn/taskLisen.png')} style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Розклад занять</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.toolButton} onPress={() => handleButtonPress('ExamsScheduleScreen')}>
                    <Image source={require('../imgBtn/taskLisen.png')} style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Розклад іспитів</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.toolButton} onPress={() => handleButtonPress('PerformanceScreen')}>
                    <Image source={require('../imgBtn/dashbord.png')} style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Успішність</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.toolButton} onPress={() => handleButtonPress('StudentGuideScreen')}>
                    <Image source={require('../imgBtn/todoolist.png')} style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Довідник студента</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.toolButton} onPress={() => handleButtonPress('PaymentsScreen')}>
                    <Image source={require('../imgBtn/pay.png')} style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Платежі</Text>
                </TouchableOpacity>
            </View>

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
    toolButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 18,
        height: 80,
        width: '90%',
        marginVertical: 10,
        paddingHorizontal: 15,
        elevation: 2,
    },
    buttonIcon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#324F69',
        flex: 1, // Заставляем текст занимать оставшееся пространство
        textAlign: 'right', // Выравниваем текст вправо
    },
    blueButton: {
        backgroundColor: '#324F69',
        borderRadius: 18,
        width: '90%',
        marginVertical: 10,
        alignItems: 'center', // Центрируем содержимое по горизонтали
        justifyContent: 'center', // Центрируем содержимое по вертикали
        elevation: 2,
        paddingLeft: 15,
        paddingRight: 15,
        height: 80,
    },
    
    toolButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        width: '100%',
        justifyContent: 'center', // Центрируем содержимое по горизонтали
    },
    blueButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10,
        flex: 1, // Заставляем текст занимать оставшееся пространство
        textAlign: 'right', // Выравниваем текст вправо
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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

export default ToolsScreen;
