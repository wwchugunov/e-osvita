import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert, StyleSheet, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';

const RegistrationScreen = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [educationalInstitution, setEducationalInstitution] = useState('');
    const [faculty, setFaculty] = useState('');
    const [courseGroup, setCourseGroup] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegister = () => {
        console.log('Регистрация:', { fullName, educationalInstitution, faculty, courseGroup, email, phone });
        Alert.alert(
            "Відкрити картку?",
            "Після реєстрації ви зможете відкрити картку.",
            [
                { text: "Ні", onPress: () => console.log("Отменено"), style: "cancel" },
                { text: "Так", onPress: () => {
                    console.log("Картка відкрита");
                    navigation.navigate('Tools'); // Переход на экран ToolsScreen
                }}
            ]
        );
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.container}>
                        <Text style={styles.title}>Реєстрація</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="ПІБ"
                            placeholderTextColor="#A0A3B1"
                            value={fullName}
                            onChangeText={setFullName}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Навчальний заклад"
                            placeholderTextColor="#A0A3B1"
                            value={educationalInstitution}
                            onChangeText={setEducationalInstitution}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Факультет"
                            placeholderTextColor="#A0A3B1"
                            value={faculty}
                            onChangeText={setFaculty}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Курс, група"
                            placeholderTextColor="#A0A3B1"
                            value={courseGroup}
                            onChangeText={setCourseGroup}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Електронна пошта"
                            placeholderTextColor="#A0A3B1"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Телефон"
                            placeholderTextColor="#A0A3B1"
                            value={phone}
                            onChangeText={setPhone}
                            keyboardType="phone-pad"
                        />

                        <TouchableOpacity style={styles.registerBtn} onPress={handleRegister}>
                            <Text style={styles.btnText}>РЕЄСТРАЦІЯ</Text>
                        </TouchableOpacity>

                        <View style={styles.socialButtonsContainer}>
                            <TouchableOpacity style={styles.socialBtn} onPress={() => console.log('Apple Sign In')}>
                                <Text style={styles.socialBtnText}>Увійти за допомогою Apple</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.socialBtn} onPress={() => console.log('BankID')}>
                                <Text style={styles.socialBtnText}>Увійти за допомогою BankID</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.footer}>
                            <View style={styles.footerLinks}>
                                <TouchableOpacity onPress={() => console.log('tascombank.ua')}>
                                    <Text style={styles.footerLink}>tascombank.ua</Text>
                                </TouchableOpacity>
                                <Text style={styles.footerText}>Освіта від Таскомбанку</Text>
                            </View>
                            <TouchableOpacity onPress={() => console.log('Logo')}>
                                <Image
                                    source={require('../img/logo.png')}
                                    style={styles.logo}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#E0E5EC',
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        height: 50,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        color: '#324F69',
    },
    registerBtn: {
        backgroundColor: '#324F69',
        paddingVertical: 15,
        borderRadius: 12,
        marginTop: 20,
        alignItems: 'center',
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    socialButtonsContainer: {
        marginTop: 30,
        marginBottom: 20,
    },
    socialBtn: {
        backgroundColor: '#FFF',
        paddingVertical: 10,
        borderRadius: 12,
        marginVertical: 5,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#324F69',
    },
    socialBtnText: {
        color: '#324F69',
        fontSize: 16,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        alignItems: 'center',
    },
    footerLinks: {
        alignItems: 'flex-start',
    },
    footerLink: {
        color: '#324F69',
        textDecorationLine: 'underline',
    },
    footerText: {
        color: '#A0A3B1',
    },
    logo: {
        width: 100,
        height: 36,
    },
});

export default RegistrationScreen;
