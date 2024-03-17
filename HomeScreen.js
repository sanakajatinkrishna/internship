import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.counterFrame}>
        <Text style={styles.counterText}>Select PG</Text>
        <Image
          source={require('./down.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomFrame}>
        <View style={styles.mealFrame}>
          <Text style={[styles.mealText, styles.breakfastText]}>Breakfast</Text>
          <Text style={styles.mealText}>Lunch</Text>
          <Text style={styles.mealText}>Dinner</Text>
        </View>
        <View style={styles.rectangle}></View>
        <View style={styles.newFrame}>
          <View style={styles.newRectangle}>
            <Text style={styles.dosaText}>Dosa</Text>
          </View>
          <View style={styles.newRectangle}>
            <Text style={styles.dosaText}>Dosa</Text>
          </View>
          <View style={styles.newRectangle}>
            <Text style={styles.dosaText}>Dosa</Text>
          </View>
        </View>
        <View style={styles.newFrame}>
          <View style={styles.newRectangle}>
            <Text style={styles.dosaText}>Dosa</Text>
          </View>
          <View style={styles.newRectangle}>
            <Text style={styles.dosaText}>Dosa</Text>
          </View>
          <View style={styles.newRectangle}>
            <Text style={styles.dosaText}>Dosa</Text>
          </View>
        </View>
        <View style={styles.newFrame}>
          <Text style={styles.newFrameText}>9Am to 11Am</Text>
          <Text style={styles.newFrameText}>9Am to 11Am</Text>
          <Text style={styles.newFrameText}>9Am to 11Am</Text>
        </View>
        <View style={styles.pgNameContainer}>
          <Text style={styles.pgNameText}>My PG </Text>
          <View style={styles.pgRectangle}>
            <View style={styles.pgImageBackground}>
              <Image
                source={require('./fe4b51f7529e3415b56fe10f44a7b2e8.png')}
                style={styles.rectangleImage}
              />
            </View>
            <Text style={styles.pgInfoText}>All Rooms: 20</Text>
            <Text style={styles.pgAdditionalInfoText}>All floors: 04</Text>
          </View>
          <View style={styles.additionalInfoContainer}>
            <Text style={styles.additionalInfoText}>My RENTS</Text>
            <View style={styles.rentsRectangle}>
              <View style={styles.rentsImageBackground}>
                <Image
                  source={require('./fe4b51f7529e3415b56fe10f44a7b2e8.png')}
                  style={styles.rentsImage}
                />
              </View>
              <Text style={styles.membersPaidText}>Members paid: 20(32)</Text>
              <Text style={styles.membersUnpaidText}>Members unpaid: 12</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.bottomBarItem}>
          <Image source={require('./home.png')} style={styles.bottomBarImage} />
          {/* Rectangle below the first image of bottom bar */}
          <View style={styles.bottomBarRectangle}></View>
        </View>
        <Image source={require('./group.png')} style={styles.bottomBarImage} />
        <Image source={require('./split.png')} style={styles.bottomBarImage} />
        <Image
          source={require('./profile.png')}
          style={styles.bottomBarImage}
        />
        {/* Add more images as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 13,
  },
  counterFrame: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F3F3F3',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: 146,
    height: 44,
  },
  counterText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
    marginRight: 10,
    width: 76,
  },
  image: {
    width: 20,
    height: 20,
  },
  bottomFrame: {
    marginTop: 20,
    width: 350,
    height: 244,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 10,
    padding: 16,
  },
  mealFrame: {
    width: 272,
    height: 34,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  mealText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
  },
  breakfastText: {
    fontSize: 14,
    lineHeight: 22,
  },
  rectangle: {
    width: 303,
    height: 1,
    backgroundColor: '#D9D9D9',
  },
  newFrame: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  newRectangle: {
    width: 65,
    height: 28,
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#F9F9F9',
  },
  dosaText: {
    width: 31,
    height: 20,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
    color: '#000000',
  },
  pgNameContainer: {
    position: 'absolute',
    top: 300,
    left: 22,
  },
  pgNameText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 22,
    lineHeight: 30,
    color: '#1F7F8B',
  },
  pgRectangle: {
    width: 346,
    height: 99,
    top: 30,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    position: 'absolute',
  },
  pgInfoText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
    position: 'absolute',
    left: 123,
  },
  pgAdditionalInfoText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
    position: 'absolute',
    top: 25,
    left: 123,
  },
  pgImageBackground: {
    width: 57,
    height: 57,
    backgroundColor: '#E7FCFF',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    left: 4,
  },
  rectangleImage: {
    width: 36,
    height: 36,
  },
  additionalInfoContainer: {
    position: 'absolute',
    top: 150,
    left: 2,
  },
  additionalInfoText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 22,
    lineHeight: 24,
    color: '#1F7F8B',
  },
  rentsRectangle: {
    width: 346,
    height: 99,
    top: 120,
    left: 0,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    position: 'absolute',
  },
  rentsImageBackground: {
    width: 57,
    height: 57,
    backgroundColor: '#E7FCFF',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    left: 4,
  },
  rentsImage: {
    width: 36,
    height: 36,
    position: 'absolute',
    top: 10,
    left: 9,
  },
  membersPaidText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
    position: 'absolute',
    width: 179,
    height: 24,
    top: 20,
    left: 120,
  },
  membersUnpaidText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
    position: 'absolute',
    width: 161,
    height: 24,
    top: 45,
    left: 120,
  },
  // Styles for the bottom bar
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 64,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#D9D9D9',
  },
  bottomBarImage: {
    width: 30,
    height: 30,
  },
  bottomBarRectangle: {
    width: 30,
    height: 2,
    borderRadius: 10,
    backgroundColor: '#1F7F8B',
    marginTop: 5,
  },
});

export default App;
