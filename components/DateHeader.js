import React, { Component } from 'react'
import { Text } from 'react-native'
import { purple } from '../utils/colors'

export default function DateHeader({date}) {
    return ( 
        <Text style={{color: purple, fontSize: 25, marginTop: 20}}>
            {date} 
        </Text>
    )
}