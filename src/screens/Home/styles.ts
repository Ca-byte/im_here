import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  
  },
  eventName: {
    color: '#0057E9',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  input: {
    flex: 1,
    backgroundColor:'#1F1E25',
    borderRadius: 5,
    color: '#FFFF',
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  form: {
    width: '100%',
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42


  },
   button:{
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#87E911',
    alignItems: "center",
    justifyContent: "center",
  }, 

  buttonText: {
    color: '#FFFF',
    fontSize: 24,
  },
  listEmptyText: {
    color: '#FFFF',
    fontSize: 16,
    textAlign: 'center'
  }
 
})
