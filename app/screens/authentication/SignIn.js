/* @flow weak */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { Container, Content } from 'native-base';
import { Input } from 'react-native-elements';
import { blue, red600 } from '../../styles/color';
import {
  responsiveFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import _Text from '../../components/Text';
import normzer from '../../utils/normalizer';
import { Formik } from 'formik';
import _ButtonAuth from '../../components/ButtonAuth';
import {
  signinInitialValues,
  SignInDataSchema,
  signupInitialValues,
} from '../../utils/dataSchema';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { SignInAction, SignUpAction } from '../../redux/bio/actions';
import { useDispatch } from 'react-redux';
import { RFValue } from 'react-native-responsive-fontsize';

//
const SignIn = (props) => {
  const [state, setState] = useState({
    isSubmitting: false,
    isSubmittingGoogle: false,
  });
  //
  const dispatch = useDispatch();
  //
  const instructions = () => {};
  const navigation = useNavigation();
  //
  const stated = useSelector((state) => state);
  //
  const { bio } = stated;
  //
  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm },
  ) => {
    try {
      setState({ ...state, isSubmitting: true });
      await dispatch(SignInAction({ ...values, isSignedIn: true }));
      resetForm(signinInitialValues);
      setStatus({ success: true });
      setState({ ...state, isSubmitting: false });
      navigation.navigate('Home');
    } catch (e) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: e.message });
      console.log(e);
    }
  };
  //

  return (
    <View style={styles.container} onTouchStart={() => Keyboard.dismiss()}>
      <StatusBar barStyle={'light-content'} backgroundColor={blue} />
      <View
        style={{
          width: responsiveScreenWidth(80),
          height: 180,
          marginHorizontal: 30,
          marginTop: 60,
        }}
      >
        <Image
          source={require('../../assets/images/logi.png')}
          style={{ width: null, height: null, flex: 1, alignItems: 'center' }}
          // resizeMode={'contain'}
        />
      </View>
      <View style={{ marginHorizontal: 30, marginTop: 50 }}>
        <Formik
          validationSchema={SignInDataSchema}
          initialValues={signinInitialValues}
          onSubmit={onSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            isSubmitting,
            isValid,
            dirty,
            resetForm,
          }) => {
            return (
              <View>
                <View style={{ marginVertical: 15, height: 55 }}>
                  <_Text
                    text={touched.email && errors.email}
                    fontSize={15}
                    color={red600}
                    styles={{ marginLeft: 10 }}
                  />
                  <Input
                    placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
                    placeholder={'Email'}
                    style={{ flex: 1 }}
                    // label={'Username'}
                    // labelStyle={{ color: '#fff' }}
                    caretHidden={false}
                    inputStyle={{
                      color: 'white',
                      fontSize: responsiveFontSize(2.5),
                    }}
                    inputContainerStyle={{
                      backgroundColor: 'transparent',
                      borderBottomWidth: 0.5,
                      borderColor: 'white',
                    }}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </View>
                <View style={{ marginVertical: 15, height: 55 }}>
                  <_Text
                    text={touched.password && errors.password}
                    fontSize={15}
                    color={red600}
                    styles={{ marginLeft: 10 }}
                  />
                  <Input
                    placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
                    placeholder={'Password'}
                    style={{ flex: 1 }}
                    secureTextEntry={true}
                    // label={'Username'}
                    // labelStyle={{ color: '#fff' }}
                    caretHidden={false}
                    inputStyle={{
                      color: 'white',
                      fontSize: responsiveFontSize(2.5),
                    }}
                    inputContainerStyle={{
                      backgroundColor: 'transparent',
                      borderBottomWidth: 0.5,
                      borderColor: 'white',
                    }}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                </View>
                <View style={{ marginTop: 10, marginBottom: 20 }}>
                  <_Text
                    styles={{
                      fontSize: RFValue(18),
                      textAlign: 'right',
                      color: '#fff',
                    }}
                    text={'Forgot password?'}
                  />
                </View>
                <_ButtonAuth
                  text={'SIGN IN'}
                  textColor={blue}
                  fontSize={20}
                  onPress={handleSubmit}
                  disabled={!(isValid && dirty)}
                  bodyStyle={{
                    backgroundColor: '#fff',
                    paddingVertical: 20,
                    marginVertical: 10,
                    marginHorizontal: 10,
                  }}
                  indicatorColor={'red'}
                  // instructions={instructions}
                  {...{ isSubmitting: state.isSubmitting }}
                  values={values}
                />
                <View style={{ marginVertical: 15 }}>
                  <_Text
                    styles={{
                      fontSize: RFValue(20),
                      color: '#fff',
                      textAlign: 'center',
                    }}
                    text={'OR'}
                  />
                </View>
                <_ButtonAuth
                  text={'SIGN UP USING GOOGLE'}
                  textColor={red600}
                  fontSize={20}
                  onPress={handleSubmit}
                  disabled={!(isValid && dirty)}
                  bodyStyle={{
                    backgroundColor: '#fff',
                    paddingVertical: 20,
                    marginVertical: 10,
                    marginHorizontal: 10,
                  }}
                  indicatorColor={'red'}
                  // instructions={instructionsGoogle}
                  {...{ isSubmitting: state.isSubmittingGoogle }}
                  leftIconName={'google'}
                  leftIconType={'FontAwesome'}
                  leftIconStyle={{
                    marginRight: 5,
                    color: red600,
                    fontSize: RFValue(21),
                  }}
                  values={values}
                />
              </View>
            );
          }}
        </Formik>
      </View>
      <TouchableOpacity
        style={{ marginTop: 30 }}
        onPress={() => navigation.navigate('SignUp')}
      >
        <_Text
          styles={{
            fontSize: RFValue(20),
            color: '#fff',
            textAlign: 'center',
            textDecorationLine: 'underline',
          }}
          text={'Create an account'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blue,
  },
});
