import React from 'react';
import { Text, Modal, Pressable, SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { DetailCard } from '../../components/DetailCard';
import { MaterialIcons } from '@expo/vector-icons';

export const Details = ({ item, modalVisible, setModal }) => {
  return (
    <Modal
      style={{ flex: 1, flexDirection: 'center', justifyContent: 'center' }}
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      presentationStyle="pageSheet"
    >
      <SafeAreaView style={styles.centeredView}>
        <DetailCard item={item} />
        <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModal(false)}>
          <View style={styles.wrapperButtonIcon}>
            <Text style={styles.titleButton}>Close Modal</Text>
            <MaterialIcons name="close" size={24} color="white" />
          </View>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
};
