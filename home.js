import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { activateKabaya, closeKabaya, testKabaya } from './redux';

  export class Home extends Component {
    render() {

        if(this.props.kabaya.title){
            return (
                <View>
                <Text style={{marginTop: 200}}>{this.props.kabaya.title}</Text>
                    <Button
                    onPress={() => this.props.closeKabaya({})}
                    title="Click me"
                    color="#841584"

                    />
                </View>
            );
        }

        

        return (
            <View>
            <Text style={{marginTop: 200}}>成功!</Text>
                <Button
                onPress={() => this.props.testKabaya({ title: 'テストのカバヤです' })}
                title="Click me"
                color="#841584"

                accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
  }

const mapStateToProps = state => ({
　  // storeは巨大なJsonの塊なので、kabayaにjsonから取って来たデータを代入している。 
  kabaya: state.kabaya,
});

const mapDispatchToProps = {  
  // action creatorの名前が入っている。
  activateKabaya,
  testKabaya,
  closeKabaya,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default Container;