import { StyleSheet } from "react-native";

export const ContainerInitial = StyleSheet.create({
  ContainerMain: {
    width: '100%',
    height: '100%',
    backgroundColor: '#333',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  ContianerAnimated: {
    width: '75%',
    height: '75%',
    backgroundColor: '#e4e8ff',
    elevation: 20,
    zIndex: 999,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Content: {
    position: 'relative'
  },
  TextCenter: {
    color: '#8bbefc',
    fontFamily: 'BigShouldersDisplay_400Regular',
    fontSize: 380
  },
  MotoPicture: {
    width: 390,
    height: 290,
    top: 20,
    left: -230,
    position: 'absolute'
  },
  ContainerMenu: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop: 60
  },
  ContainerLineButton: {
    width: '100%',
  },
  ContainerButton: {
    width: `${100 - 85}%`,
    marginLeft: 20,
    height: 60,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#93bcfc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ContainerMap: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 350,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden'
  },
  ContainerTurnOff: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
    right: 0,
    paddingHorizontal: 20
  },
  ContainerLineOf: {
    height: 65,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden'
  },
  ButtonOfff: {
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  BoxMessage: {
    width: '65%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    color: '#ccc',
    marginRight: 10
  }
});