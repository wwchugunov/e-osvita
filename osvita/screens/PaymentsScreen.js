import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView, Button } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const PaymentsScreen = ({ navigation }) => {
    const handleButtonPress = (toolName) => {
        navigation.navigate(toolName);
    };

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (payment) => {
        setSelectedPayment(payment);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedPayment(null);
        setSelectedImage(null);
    };

    const handleImageUpload = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                setSelectedImage(response.assets[0].uri);
            }
        });
    };

    const renderIconButton = (iconPath, label) => (
        <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.circleButton} onPress={() => { }}>
                <Image source={iconPath} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.buttonLabel}>{label}</Text>
        </View>
    );

    const renderPaymentDetails = () => {
        if (!selectedPayment) return null;
        return (
            <View style={styles.paymentDetails}>
                <Text style={styles.modalText}>Деталі платежу: {selectedPayment}</Text>

                <Image source={require('../img/pdf.png')} style={styles.uploadedImage} resizeMode="contain" />

                <Button title="Завантажити зображення" onPress={handleImageUpload} />
                <TouchableOpacity onPress={closeModal}>
                    <Text style={styles.closeButtonText}>Закрити</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => handleButtonPress('СabinetScreen')}>
                    <Image source={require('../imgBtn/profile_img.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Платежі</Text>
                <TouchableOpacity onPress={() => handleButtonPress('SetingsScreeen')}>
                    <Image source={require('../imgBtn/setings_png.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.cardContainer}>
                <Image source={require('../img/kard.png')} style={styles.cardImage} resizeMode="contain" />
            </View>

            <View style={styles.buttonContainer}>
                {renderIconButton(require('../img/plus_icon.png'), 'Регулярні \n плетежі')}
                {renderIconButton(require('../img/reverse_icon.png'), 'Платіж \n по шаблону')}
                {renderIconButton(require('../img/docement_icon.png'), 'Шаблони')}
                {renderIconButton(require('../img/hard_icon.png'), 'Благодійність')}
                {/* //плюси */}
            </View>

            <ScrollView style={styles.historyContainer}>
                <Text style={styles.historyTitle}>Історія платежів</Text>

                <TouchableOpacity onPress={() => openModal('Оплата за гуртожиток: 100 UAH')} style={styles.historyItem}>
                    <View style={styles.historyTextContainer}>
                        <Text style={styles.historyLabel}>Плата за гуртожиток {'\n'}3 квартал </Text>
                        <Text style={styles.historyAmount}>-1  343 UAH</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => openModal('Оплата за гуртожиток: 100 UAH')} style={styles.historyItem}>
                    <View style={styles.historyTextContainer}>
                        <Text style={styles.historyLabel}>Плата за навчання {'\n'}Договір №34 </Text>
                        <Text style={styles.historyAmount}>-7 540 UAH</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => openModal('Оплата за гуртожиток: 100 UAH')} style={styles.historyItem}>
                    <View style={styles.historyTextContainer}>
                        <Text style={styles.historyLabel}>Проф внесок {'\n'}Допомога Армії </Text>
                        <Text style={styles.historyAmount}>-900 UAH</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => openModal('Оплата за гуртожиток: 100 UAH')} style={styles.historyItem}>
                    <View style={styles.historyTextContainer}>
                        <Text style={styles.historyLabel}>Плата за гуртожиток {'\n'}4 квартал </Text>
                        <Text style={styles.historyAmount}>-2 098 UAH</Text>
                    </View>
                </TouchableOpacity>

                
            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalView}>
                    {renderPaymentDetails()}
                </View>
            </Modal>

            <View style={styles.footer}>
                <Text style={styles.footerText}>© 2024 Таскомбанк</Text>
                <TouchableOpacity onPress={() => console.log('Политика конфиденциальності')}>
                    <Text style={styles.footerLink}>Политика конфедеційності</Text>
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
    cardContainer: {
        height: 200,
        width: '100%',
        marginBottom: 20,
    },
    cardImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        //текс по центру
    },
    iconContainer: {
        alignItems: 'center',
    },
    circleButton: {
        backgroundColor: '#324F69',
        borderRadius: 50,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 2,
    },
    buttonLabel: {
        marginTop: 5,
        color: '#FFFFFF',
        fontSize: 14,
    },
    historyContainer: {
        marginTop: 20,
    },
    historyTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    historyItem: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 15,
        marginVertical: 5,
        elevation: 2,
        
    },

    historyAmount:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#061148',
    },
    historyText: {
        fontSize: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },

    historyLabel:{
        fontSize: 19,
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    paymentDetails: {
        width: '90%',
        marginLeft: 20,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    historyTextContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',  // чтобы выровнять по вертикали, если нужно
    },
    uploadedImage: {
        width: '100%',
        height: 200,
        marginVertical: 10,
        borderColor: 'black',
    },

    closeButtonText: {
        color: 'red',
        marginTop: 20,
    },
    footer: {
        marginTop: 'auto',
        padding: 10,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
        color: '#444',
    },
    footerLink: {
        fontSize: 12,
        color: '#007BFF',
    },
});

export default PaymentsScreen;
