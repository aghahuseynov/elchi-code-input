import React, { Component } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

class CodeInput extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    code: {
      "0": "",
      "1": "",
      "2": "",
      "3": "",
      "4": "",
    },
    fullCode: "",
    auto: false,
  };
  inputRefs = [...Array(5).keys()];
  changeCode = (chr, value) => {
    this.setState((state) => (state.code[chr] = value.toUpperCase()));
    if (value == "") {
      if (chr != 0) this.inputRefs[chr - 1].focus();
      return;
    }
    if (chr + 1 < 5) {
      this.inputRefs[chr + 1].focus();
    }
  };

  render() {
    const { auto, code } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          ref={(ref) => (this.inputRefs[0] = ref)}
          maxLength={1}
          selectTextOnFocus
          editable={true}
          onChangeText={(text) => (!auto ? this.changeCode(0, text) : null)}
          value={code[0] || ""}
          style={styles.textInput}
        />

        <TextInput
          ref={(ref) => (this.inputRefs[1] = ref)}
          maxLength={1}
          selectTextOnFocus
          editable={true}
          onChangeText={(text) => (!auto ? this.changeCode(1, text) : null)}
          onKeyPress={({ nativeEvent }) => {
            nativeEvent.key === "Backspace" ? this.changeCode(1, "") : null;
          }}
          value={code[1] || ""}
          style={styles.textInput}
        />
        <TextInput
          ref={(ref) => (this.inputRefs[2] = ref)}
          maxLength={1}
          selectTextOnFocus
          editable={true}
          onChangeText={(text) => (!auto ? this.changeCode(2, text) : null)}
          onKeyPress={({ nativeEvent }) => {
            nativeEvent.key === "Backspace" ? this.changeCode(2, "") : null;
          }}
          value={code[2] || ""}
          style={styles.textInput}
        />
        <TextInput
          ref={(ref) => (this.inputRefs[3] = ref)}
          maxLength={1}
          selectTextOnFocus
          editable={true}
          onChangeText={(text) => (!auto ? this.changeCode(3, text) : null)}
          onKeyPress={({ nativeEvent }) => {
            nativeEvent.key === "Backspace" ? this.changeCode(3, "") : null;
          }}
          value={code[3] || ""}
          style={styles.textInput}
        />
        <TextInput
          ref={(ref) => (this.inputRefs[4] = ref)}
          maxLength={1}
          selectTextOnFocus
          editable={true}
          onKeyPress={({ nativeEvent }) => {
            nativeEvent.key === "Backspace" ? this.changeCode(4, "") : null;
          }}
          onChangeText={(text) => {
            this.changeCode(4, text);
            console.log("calıştı");
            this.props.codeResult(code[0] + code[1] + code[2] + code[3] + text);
          }}
          value={code[4] || ""}
          style={styles.textInput}
        />
      </View>
    );
  }
}

export default CodeInput;
