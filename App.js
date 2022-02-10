import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=525001e1`;

    // try with axios next
    const response = await fetch(url);
    const responseJson = await response.json();

    // if a value is inputed, return values
    if(responseJson.Search)
    {
      // call setmovies to set this function as set for movie list
      setMovies(responseJson.Search)
    }
  };

  //  every change in text will call this function 
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]); 

  return (
    <View style={styles.container}>
      {/* Title */}
      <ScrollView style={styles.ScrollView}>
        <Text style={styles.sectiontitle}>Search for movies</Text>

        <View style={styles.items}>

          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
          <MovieList movies={movies}></MovieList>
        </View>

      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  ScrollView: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },  
  sectiontitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000'

  },
  items: {

  },
});
