import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    textAlign:'center'
  },
  logo: {
    width: 400,
    height: 100,
    resizeMode: 'contain',
    marginStart:-30,
    
  }
});

export default styles;
