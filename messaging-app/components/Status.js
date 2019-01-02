import React from "react";
import { Constants } from "expo";
import {
  StyleSheet,
  Platform,
  NetInfo,
  Text,
  View,
  StatusBar
} from "react-native";

export default class Status extends React.Component {
  state = {
    info: null
  };

  async componentWillMount() {
    this.subscription = NetInfo.addEventListener('connectionChange', this.handleChange);

    const info = await NetInfo.getConnectionInfo();

    this.setState({ info });

    // setTimeout(() => this.handleChange('none'), 3000); 
  }

  componentWillUnmount() {
      this.subscription.remove();
  }

  handleChange = (info) => {
    this.setState({ info });
  };

  render() {
    const { info } = this.state;

    const isConnected = info !== "none";
    const backgroundColor = isConnected ? "white" : "red";

    const statusBar = (
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={isConnected ? "dark-content" : "light-content"}
        animated={false}
      />
    );
// We use pointerEvent={'none'} so that this component doesn’t prevent us from tapping the ScrollView we’ll render it.
    const messageContainer = (
      <View style={styles.messageContainer} pointerEvents={"none"}>
        {statusBar}
        {!isConnected && (
          <View style={styles.bubble}>
            <Text style={styles.text}>No network connection</Text>
          </View>
        )}
      </View>
    );

    if (Platform.OS === "ios") {
      return <View style={[styles.status, { backgroundColor }]} />;
    }

    return messageContainer;
  }
}

const statusHeight = Platform.OS === "ios" ? Constants.statusBarHeight : 0;

const styles = StyleSheet.create({
  status: {
    zIndex: 1,
    height: statusHeight
  },
  messageContainer: {
    zIndex: 1,
    position: "absolute",
    top: statusHeight + 20,
    right: 0,
    left: 0,
    height: 80,
    alignItems: "center"
  },
  bubble: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "red"
  },
  text: {
    color: "white"
  }
});
