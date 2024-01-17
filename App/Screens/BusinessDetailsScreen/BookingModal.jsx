import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';
import Colors from '../../Utils/Colors';
import Heading from '../../Components/Heading';
import { ScrollView } from 'react-native';

export default function BookingModal({hideModal}) {
    const [selectedDate, setSelectedDate] = useState('');
    const[timeList, setTimeList] = useState();
    const[selectedTime, setSelectedTime] = useState();
    const[note, setNote] = useState('');
    useEffect(()=>{
        getTime();
    },[])

    const onDateChange =(date) =>{
        setSelectedDate(date)
      }

    const getTime = () => {
        const timeList = [];
        for(let i=8; i<=12 ; i++){
            timeList.push({
                time:i+':00 AM'
            })
            timeList.push({
                time:i+':30 AM'
            })
        }
        for(let i=1; i<=7 ; i++){
            timeList.push({
                time:i+':00 PM'
            })
            timeList.push({
                time:i+':30 PM'
            })
        }
        setTimeList(timeList);
    }
  return (
    <ScrollView>
    <KeyboardAvoidingView style={{padding:20}}>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', marginBottom:20 }}>
            <Ionicons name="arrow-back-outline" size={30} color="black" onPress={() => hideModal()} />
            <Text style={{
                fontSize: 25,
                fontFamily: 'outfit-medium'
            }}>Booking</Text>
        </View>

        {/* Calendar Section */}
        <Heading text={'Select Date'}/>
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

        {/* Time Select Section */}
        <View style={{marginTop:25}}>
            <Heading text={'Select Time Slot'}/>
            <FlatList
                data={timeList}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index})=>(
                    <TouchableOpacity style={{marginRight:10}}
                        onPress={()=>setSelectedTime(item.time)}
                    >
                        <Text style={[selectedTime == item.time ? styles.selectedTime : styles.unSelectedTime]}>{item.time}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>

        {/* Note Section */}
        <View style={{paddingTop:20}}>
            <Heading text={'Any Suggestion Note'}/>
            <TextInput style={styles.noteTextArea}
                placeholder='Note'
                numberOfLines={4}
                multiline={true}
                onChange={(text)=>setNote(text)}
            />
        </View>

        {/* Confirmation Button */}
        <TouchableOpacity style={{marginTop:15}}>
            <Text style={styles.confirmBtn}>Confirm & Book</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    calendarContainer:{
        backgroundColor:Colors.PRIMARY_LIGHT,
        padding:20,
        borderRadius:15,
    },
    selectedTime:{
        padding:8,
        borderWidth:1,
        borderColor:Colors.PRIMARY,
        borderRadius:99,
        paddingHorizontal:18,
        color:Colors.WHITE,
        backgroundColor:Colors.PRIMARY,
    },
    unSelectedTime:{
        padding:8,
        borderWidth:1,
        borderColor:Colors.PRIMARY,
        borderRadius:99,
        paddingHorizontal:18,
        color:Colors.PRIMARY
    },
    noteTextArea:{
        borderWidth:1,
        borderRadius:15,
        textAlignVertical:'top',
        padding:20,
        fontSize:16,
        fontFamily:'outfit',
        borderColor:Colors.PRIMARY
    },
    confirmBtn:{
        textAlign:'center',
        fontFamily:'outfit-medium',
        fontSize:17,
        backgroundColor:Colors.PRIMARY,
        color:Colors.WHITE,
        borderRadius:99,
        padding:10,
        elevation:2
    }
})