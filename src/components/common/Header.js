//import libraries for component creation
import React from 'react';
import { Text, View } from 'react-native';

//create component
const Header = (props) => { //props are dynamic properties to be used
  const { textStyle, viewStyle } = styles; //destructuring
  return (
    //props textStyle
    //View tag to control alignment and styles
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

//add styling
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center', //vertical
    alignItems: 'center', //horizontal
    height: 60,
    paddingTop: 15,
    shadowColor: '#000', //border style
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20

  }
};
//make a component available to other parts of app
export { Header };
