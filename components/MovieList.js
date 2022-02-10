import React from "react";
import {Image, View, StyleSheet} from 'react-native' ; 

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => 
                <View key={movie.imdbID + movie.type}>
                    <Image source={{uri: movie.Poster}}
                        style={styles.input} 
                    />
                </View>
                    
            )
            }
        </>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 500,
      width: 300,
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default MovieList