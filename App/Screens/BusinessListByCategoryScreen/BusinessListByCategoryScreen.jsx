import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItem from './BusinessListItem';
import Colors from '../../Utils/Colors';

export default function BusinessListByCategoryScreen() {
    const param = useRoute().params;
    const navigation = useNavigation();
    const[businessList, setBusinessList]=useState([]);
    useEffect(() => {
        param&&getBusinessListByCategory();
    }, [param])

    const getBusinessListByCategory = () => {
        GlobalApi.getBusinessListByCategory(param.category)
        .then((res) => {
            setBusinessList(res?.businessLists)
        })
    }
    return (
        <View style={{ padding: 20, paddingTop: 30 }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                <Ionicons name="arrow-back-outline" size={30} color="black" onPress={()=>navigation.goBack()}/>
                <Text style={{
                    fontSize: 25,
                    fontFamily: 'outfit-medium'
                }}>{param.category}</Text>
            </View>
            {businessList?.length > 0 ?
            <FlatList
                data={businessList}
                style={{marginTop:15}}
                renderItem={({item, index})=>(
                    <BusinessListItem business={item}/>
                )}
            />
            :
            <Text style={{fontFamily:'outfit-medium', fontSize:20, textAlign:'center',
        marginTop:'20%', color:Colors.GRAY}}>No Business Found</Text>
            }
        </View>
    )
}