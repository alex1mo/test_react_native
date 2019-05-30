import React, { Component } from "react";
import { TouchableOpacity, Text, View, Image, ScrollView } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Calendar } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import Swiper from "react-native-swiper";
import Slider from "react-native-slider";

import { styles } from "./App.style";

const sports = [
  {
    label: "Calendar",
    value: "calendar"
  },
  {
    label: "Baseball",
    value: "baseball"
  },
  {
    label: "Hockey",
    value: "hockey"
  }
];

LocaleConfig.locales["fr"] = {
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  ],
  dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
  today: "Aujourd'hui"
};
LocaleConfig.defaultLocale = "fr";

export default class App extends Component {
  state = {
    calendar: false,
    value: 0
  };
  render() {
    const placeholder = {
      label: "Select a sport...",
      value: null,
      color: "#9EA0A4"
    };

    return (
      <Swiper>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Text style={styles.back}>{"<"}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.camera}
                source={require("./assets/camera3.png")}
              />
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView horizontal>
              {(() => {
                let arr = [];
                for (let i = 10; i--; ) {
                  arr.push(
                    <Image
                      style={styles.item}
                      key={i}
                      source={require("./assets/icon.png")}
                    />
                  );
                }
                return arr;
              })()}
            </ScrollView>
          </View>
          <View>
            <RNPickerSelect
              placeholder={placeholder}
              items={sports}
              onValueChange={value => {
                if (value === "calendar" && !this.state.calendar) {
                  this.setState({
                    calendar: !this.state.calendar
                  });
                } else if (this.state.calendar) {
                  this.setState({
                    calendar: !this.state.calendar
                  });
                }

                return value;
              }}
            />
          </View>
          {this.state.calendar && <Calendar />}
        </View>
        <View style={styles.slider}>
          <Slider
            value={this.state.value}
            onValueChange={value => this.setState({ value })}
            maximumValue={100}
            step={1}
          />
          <Text>Value: {this.state.value}</Text>
        </View>
        <View>
          <Text />
        </View>
      </Swiper>
    );
  }
}
