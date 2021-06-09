import React from 'react';
import {Button, View, Text} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const moment = require('moment');

export default class App extends React.Component {
  state = {
    visible: false,
    date: '',
  };
  showDatePicker = () => {
    this.setState({visible: true});
  };
  hideDatePicker = () => {
    this.setState({visible: false});
  };
  handleConfirm = date => {
    // console.log(date);
    console.log(moment(date).format('YYYY-MM-DD'));
    this.setState({date: date});
    this.hideDatePicker();
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Button
          title="Show Date Picker"
          onPress={() => this.showDatePicker()}
        />
        <DateTimePickerModal
          isVisible={this.state.visible}
          mode="date"
          onConfirm={date => this.handleConfirm(date)}
          onCancel={() => this.hideDatePicker()}
        />
      </View>
    );
  }
}
