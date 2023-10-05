import React from 'react';
import { Alert, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { styles } from './styles';

export const Tabs = ({ tabs, color }) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.containerTab}>
        {tabs.map((tab, index) => (
          <View key={index}>
            <Text style={{ color: color, ...styles.titleSection }}>{tab.name}</Text>
            <View>{tab.component}</View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
