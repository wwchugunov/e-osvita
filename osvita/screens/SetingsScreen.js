import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity, Linking, Alert, Image, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';
import * as Notifications from 'expo-notifications';

const SetingsScreeen = ({ navigation }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false); // Системная тема отключена для примера
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
    const [isAutoUpdateEnabled, setIsAutoUpdateEnabled] = useState(false);
    const [syncFrequency, setSyncFrequency] = useState('15 хвилин');
    const [isModalVisible, setModalVisible] = useState(false); // Видимость модального окна

    // Функция для запроса разрешений на уведомления
    useEffect(() => {
        const requestNotificationPermissions = async () => {
            const { status } = await Notifications.requestPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Помилка', 'Дозвіл на отримання сповіщень не було надано.');
            }
        };

        requestNotificationPermissions();
    }, []);

    // Функция для отправки тестового уведомления
    const sendTestNotification = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Тестове сповіщення 📬",
                body: "Це тестове повідомлення для перевірки сповіщень.",
            },
            trigger: null, // Немедленно
        });
    };

    const handleButtonPress = (toolName) => {
        navigation.navigate(toolName);
    };

    // Переключение темы
    const toggleTheme = () => setIsDarkTheme(previousState => !previousState);

    // Включить/выключить уведомления
    const toggleNotifications = () => {
        setIsNotificationsEnabled(previousState => !previousState);
        if (!isNotificationsEnabled) {
            sendTestNotification();
        }
    };

    // Переключение автоматических обновлений
    const toggleAutoUpdate = () => {
        setIsAutoUpdateEnabled(previousState => !previousState);
        Alert.alert('Інформація', `Автоматичне оновлення ${!isAutoUpdateEnabled ? 'включено' : 'вимкнено'}`);
    };

    // Открыть модальное окно для выбора частоты синхронизации
    const openFrequencyModal = () => {
        setModalVisible(true);
    };

    // Закрыть модальное окно и выбрать частоту синхронизации
    const selectSyncFrequency = (frequency) => {
        setSyncFrequency(frequency);
        setModalVisible(false);
        Alert.alert('Частота синхронізації', `Синхронізація встановлена кожні ${frequency}`);
    };

    return (
        <View style={[styles.container, { backgroundColor: isDarkTheme ? '#333' : '#fff' }]}>
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => handleButtonPress('СabinetScreen')}>
                        <Image source={require('../imgBtn/profile_img.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Налаштування</Text>
                    <TouchableOpacity onPress={() => handleButtonPress('SetingsScreeen')}>
                        <Image source={require('../imgBtn/setings_png.png')} style={styles.icon} />
                    </TouchableOpacity>
                </View>

                {/* Настройка темы */}
                <View style={styles.optionContainer}>
                    <Text style={[styles.optionText, { color: isDarkTheme ? 'white' : 'black' }]}>Змінити тему</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isDarkTheme ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={toggleTheme}
                        value={isDarkTheme}
                    />
                </View>

                {/* Включить/отключить уведомления */}
                <View style={styles.optionContainer}>
                    <Text style={[styles.optionText, { color: isDarkTheme ? 'white' : 'black' }]}>Увімкнути сповіщення</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isNotificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={toggleNotifications}
                        value={isNotificationsEnabled}
                    />
                </View>

                {/* Автоматическое обновление */}
                <View style={styles.optionContainer}>
                    <Text style={[styles.optionText, { color: isDarkTheme ? 'white' : 'black' }]}>Автоматичне оновлення</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isAutoUpdateEnabled ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={toggleAutoUpdate}
                        value={isAutoUpdateEnabled}
                    />
                </View>

                {/* Настройка частоты синхронизации */}
                <View style={styles.optionContainer}>
                    <Text style={[styles.optionText, { color: isDarkTheme ? 'white' : 'black' }]}>Частота синхронізації</Text>
                    <TouchableOpacity onPress={openFrequencyModal}>
                        <Text style={styles.syncOptionText}>{syncFrequency}</Text>
                    </TouchableOpacity>
                </View>

                {/* Отобразить версию приложения */}
                <View style={styles.optionContainer}>
                    <Text style={[styles.optionText, { color: isDarkTheme ? 'white' : 'black' }]}>Версія додатка</Text>
                    <Text style={[styles.versionText, { color: isDarkTheme ? 'gray' : 'black' }]}>1.0.0</Text>
                </View>

                {/* Кнопка "Обратная связь" */}
                <TouchableOpacity
                    style={styles.feedbackButton}
                    onPress={() => Linking.openURL('mailto:support@example.com')}
                >
                    <Text style={styles.feedbackText}>Залишити відгук</Text>
                </TouchableOpacity>

                {/* Политика конфиденциальности */}
                <TouchableOpacity onPress={() => Linking.openURL('https://example.com/privacy')}>
                    <Text style={[styles.privacyText, { color: isDarkTheme ? '#1e90ff' : '#1e90ff' }]}>
                        Політика конфіденційності
                    </Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Модальное окно выбора частоты */}
            <Modal visible={isModalVisible} transparent={true} animationType="fade">
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles.modalOverlay} />
                </TouchableWithoutFeedback>
                <View style={styles.centeredView}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Оберіть частоту синхронізації</Text>
                        <TouchableOpacity onPress={() => selectSyncFrequency('5 хвилин')}>
                            <Text style={styles.modalOption}>5 хвилин</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => selectSyncFrequency('15 хвилин')}>
                            <Text style={styles.modalOption}>15 хвилин</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => selectSyncFrequency('30 хвилин')}>
                            <Text style={styles.modalOption}>30 хвилин</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>


            {/* Футер */}
            <View style={styles.footer}>
                <Text style={[styles.footer, { color: isDarkTheme ? '#fff' : '#324F69' }]}>© 2024 Е-ОІСВІТА</Text>
            </View>
        </View>
    );
};

// Стили
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        marginBottom: 20,
        marginTop: 35,
        backgroundColor: '#B2C1C8',
        borderRadius: 10
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
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    optionText: {
        fontSize: 18,
    },
    versionText: {
        fontSize: 16,
    },
    syncOptionText: {
        color: '#1e90ff',
        marginTop: 10,
    },
    feedbackButton: {
        marginTop: 30,
        padding: 15,
        backgroundColor: '#324F69',
        borderRadius: 8,
        alignItems: 'center',
    },
    feedbackText: {
        fontSize: 18,
        color: 'white',
    },
    privacyText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 50,
    },
    footer: {
        // backgroundColor: '#B2C1C8',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 34
    },
    footerText: {
        color: 'black',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',  // Центрирование по вертикали
        alignItems: 'center',  // Центрирование по горизонтали
    },
    modalContent: {
        width: '80%',  // Ширина модального окна
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',  // Центрирование текста и кнопок внутри
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,  // Тень для Android
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    modalOption: {
        fontSize: 18,
        paddingVertical: 10,
        textAlign: 'center',
        color: '#324F69',
    },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',  // Полупрозрачный фон
    },
});

export default SetingsScreeen;
