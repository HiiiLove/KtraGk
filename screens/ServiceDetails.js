
import React,{useEffect} from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';


function ServiceDetails() {
    const route = useRoute();
    const { name, price, createdBy, createdAt, updatedAt } = route.params || {};
    
   
    
    const formattedCreatedAt = new Date(createdAt?.seconds * 1000).toLocaleString();
  const formattedUpdatedAt = new Date(updatedAt?.seconds * 1000).toLocaleString();
    return ( 
        <View style={styles.container}>
            <Text style={styles.txt}>Service name: 
                <Text style={styles.valueText}>{name}</Text>
            </Text>
            <Text style={styles.txt}>Price: 
                <Text style={styles.valueText}>{price}</Text>
            </Text>
            <Text style={styles.txt}>Creator: 
                <Text style={styles.valueText}>{createdBy}</Text>
            </Text>
            <Text style={styles.txt}>Time: 
                <Text style={styles.valueText}>{formattedCreatedAt}</Text>
            </Text>
            <Text style={styles.txt}>Final Update: 
                <Text style={styles.valueText}>{formattedUpdatedAt}</Text>
            </Text>
        </View>
     );
}

const  styles = StyleSheet.create({
    container:{
        flex:1
    },
    txt:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:10,
        color:'#000',
        marginLeft:10
    },
    valueText:{
        fontWeight:'normal'
    }
})

export default ServiceDetails;


/*
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

function ServiceDetails() {
  const route = useRoute();
  const { name, price, createdBy, createdAt, updatedAt } = route.params || {};

  const [formattedCreatedAt, setFormattedCreatedAt] = useState('');
  const [formattedUpdatedAt, setFormattedUpdatedAt] = useState('');

  useEffect(() => {
    const formattedCreated = new Date(createdAt?.seconds * 1000).toLocaleString();
    const formattedUpdated = new Date(updatedAt?.seconds * 1000).toLocaleString();

    setFormattedCreatedAt(formattedCreated);
    setFormattedUpdatedAt(formattedUpdated);
  }, [createdAt, updatedAt]);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        Service name:
        <Text style={styles.valueText}>{name}</Text>
      </Text>
      <Text style={styles.txt}>
        Price:
        <Text style={styles.valueText}>{price}</Text>
      </Text>
      <Text style={styles.txt}>
        Creator:
        <Text style={styles.valueText}>{createdBy}</Text>
      </Text>
      <Text style={styles.txt}>
        Time:
        <Text style={styles.valueText}>{formattedCreatedAt}</Text>
      </Text>
      <Text style={styles.txt}>
        Final Update:
        <Text style={styles.valueText}>{formattedUpdatedAt}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
    marginLeft: 10,
  },
  valueText: {
    fontWeight: 'normal',
  },
});

export default ServiceDetails;
*/