import React from 'react';
import { View, Text } from 'react-native';

interface Props {
    icon: JSX.Element;
    title: string;
    stat: string;
    statColor: string;
}

export default function TwoLineComponent({
    icon,
    title,
    stat,
    statColor,
}: Props) {
    return (
        <View style={{ display: 'flex', width: '92%', borderRadius: 12, borderWidth: 1, borderColor: '#E3EAFC', backgroundColor: '#FFF', paddingTop: '5%', paddingBottom: '5%', paddingLeft: '4%', paddingRight: '4%' }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '3%' }}>
                {icon}
                <Text style={{ color: '#2B3674', fontSize: 16, fontStyle: 'normal',fontWeight: '600', paddingLeft: '3%' }}>{title}</Text>
            </View>
            <Text style={{ color: `${statColor}`, fontSize: 36, fontStyle: 'normal', fontWeight: '600', }}>{stat}</Text>
        </View>
    );
}
