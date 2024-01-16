import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function PageHeading({title}) {
    const navigation = useNavigation();
    return (
        <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <Ionicons name="arrow-back-outline" size={30} color="black" onPress={() => navigation.goBack()} />
            <Text style={{
                fontSize: 25,
                fontFamily: 'outfit-medium'
            }}>{title}</Text>
        </View>
    )
}