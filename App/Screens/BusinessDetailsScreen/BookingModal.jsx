import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';
import Colors from '../../Utils/Colors';

export default function BookingModal({hideModal}) {
    const [selectedStartDate, setSelectedStartDate] = useState('');
    const onDateChange =(date) =>{
        
          setSelectedStartDate(date)
    
      }
  return (
    <View style={{padding:20}}>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <Ionicons name="arrow-back-outline" size={30} color="black" onPress={() => hideModal()} />
            <Text style={{
                fontSize: 25,
                fontFamily: 'outfit-medium'
            }}>Booking</Text>
        </View>

        {/* Calendar Section */}
        <View style={styles.calendarContainer}>
            <CalendarPicker
                onDateChange={(date)=>onDateChange(date)}
                width={340}
                minDate={Date.now()}
                todayBackgroundColor={Colors.BLACK}
                todayTextStyle={{color:Colors.WHITE}}
                selectedDayTextColor={Colors.WHITE}
                selectedDayColor={Colors.PRIMARY}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    calendarContainer:{
        backgroundColor:Colors.PRIMARY_LIGHT,
        padding:20,
        borderRadius:15,
    }
})