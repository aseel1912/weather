import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground } from 'react-native';
import CustomButton from '../component/CustomButton/CustomButton';

//generated api key
const API_KEY = '3ad88db58e874bb065da42cab3696831';
const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  // fetch weather from api
  const fetchWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (city !== '') {
      fetchWeather();
    }

  }, ['city']);

  return (
      <View style={styles.container}>

        <Text style={styles.inputtitle}>Enter A City Name :</Text>

        <TextInput
          style={styles.input}
          placeholder="city name"
          placeholderTextColor={'#eee'}
          value={city}
          onChangeText={setCity}
        />

        <CustomButton onPress={fetchWeather} text={'Get Weather'} />

      {weather && (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>Weather in {weather.name} is</Text>
          <Text style={styles.weatherText2}>{weather.main.temp}°C  {weather.weather[0].description}</Text>
          <Text style={styles.weatherText2}>{Date()}</Text>
        </View>
      )}
 </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  inputtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 13,
    color: '#000',
  },
  input: {
    width: '85%',
    height: 60,
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 25,
    marginBottom: 40,
    color: '#000',
    fontSize: 17,
  },
  weatherContainer: {
    marginTop: 50,
    width:'100%',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
  },
  weatherText: {
    color:'#000',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 7,
    textAlign:'center',
  },
  weatherText2: {
    fontSize: 27,
    textAlign:'center',
    fontWeight: 'bold',
    marginVertical: 7,
    color: 'gray',
    fontStyle: 'italic',
  },
});

export default WeatherApp;
