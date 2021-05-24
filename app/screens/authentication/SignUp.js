/* @flow weak */

import React, { useState, useEffect } from 'react';
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
import { v4 as uuidV4 } from 'uuid';
import _Text from '../../components/Text';
import normzer from '../../utils/normalizer';
import { Formik } from 'formik';
import _ButtonAuth from '../../components/ButtonAuth';
import { signupInitialValues, DataSchema } from '../../utils/dataSchema';
import { useNavigation } from '@react-navigation/native';
import { SignOutAction, SignUpAction } from '../../redux/bio/actions';
import { useDispatch } from 'react-redux';
import { RFValue } from 'react-native-responsive-fontsize';

//
const SignUp = ({}) => {
  const [state, setState] = useState({
    isSubmitting: false,
    isSubmittingGoogle: false,
  });
  //
  const dispatch = useDispatch();
  //
  // useEffect(() => dispatch(SignOutAction));
  //
  const setValues = (setObject, remove) => {
    const valu = Object.keys(setObject).reduce((object, key) => {
      if (key !== remove) {
        object[key] = setObject[key];
      }
      return object;
    }, {});
    return valu;
  };
  //
  const instructions = (values) => {
    setState({ ...state, isSubmitting: true });
    setTimeout(() => {
      // console.log({ ...values, id: uuidV4() });
      dispatch(
        SignUpAction(
          setValues(
            { ...values, id: uuidV4(), isSignedIn: false },
            'confirm_password',
          ),
        ),
      );
      setState({ ...state, isSubmitting: false });
    }, 3000);
    navigation.navigate('Home');
  };
  //
  const instructionsGoogle = (values) => {
    setState({ ...state, isSubmittingGoogle: true });
    setTimeout(() => {
      console.log(values);
      setState({ ...state, isSubmittingGoogle: false });
    }, 3000);
  };
  const navigation = useNavigation();
  //
  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm },
  ) => {
    try {
      setState({ ...state, isSubmitting: true });
      await dispatch(
        SignUpAction({ ...values, id: uuidV4(), isSignedIn: false }),
      );
      resetForm(signupInitialValues);
      setStatus({ success: true });
      setState({ ...state, isSubmitting: false });
      navigation.navigate('SignIn');
    } catch (e) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: e.message });
      console.log(e);
    }
  };
  //
  return (
    <Container style={styles.container} onTouchStart={() => Keyboard.dismiss()}>
      <StatusBar barStyle={'light-content'} backgroundColor={blue} />
      <View
        style={{
          width: responsiveScreenWidth(60),
          height: 180,
          marginHorizontal: 30,
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
          // alignItems: 'center',
          left: responsiveScreenWidth(100) / 8,
        }}
      >
        <Image
          source={require('../../assets/images/logi.png')}
          style={{ width: null, height: null, flex: 1 }}
          resizeMode={'contain'}
        />
      </View>
      <Content
        contentContainerStyle={{
          marginHorizontal: 30,
          marginTop: 10,
          paddingBottom: 25,
        }}
      >
        <Formik
          validationSchema={DataSchema}
          initialValues={signupInitialValues}
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
                    text={touched.fullname && errors.fullname}
                    fontSize={15}
                    color={red600}
                    styles={{ marginLeft: 10 }}
                  />
                  <Input
                    placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
                    placeholder={'Fullname'}
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
                    onChangeText={handleChange('fullname')}
                    onBlur={handleBlur('fullname')}
                    value={values.fullname}
                  />
                </View>
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
                <View style={{ marginVertical: 15, height: 55 }}>
                  <_Text
                    text={touched.confirm_password && errors.confirm_password}
                    fontSize={15}
                    color={red600}
                    styles={{ marginLeft: 10 }}
                  />
                  <Input
                    placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
                    placeholder={'Confirm Password'}
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
                    onChangeText={handleChange('confirm_password')}
                    onBlur={handleBlur('confirm_password')}
                    value={values.confirm_password}
                    touched={touched.confirm_password}
                    error={errors.confirm_password}
                  />
                </View>
                <_ButtonAuth
                  text={'SIGN UP'}
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
        <_Text
          styles={{
            fontSize: RFValue(14),
            color: '#fff',
            textAlign: 'center',
          }}
          text={
            'By creating the account, you agree to the Terms and Condition of the Shopping company'
          }
        />
        <TouchableOpacity
          style={{ marginTop: 30 }}
          onPress={() => navigation.navigate('SignIn')}
        >
          <_Text
            styles={{
              fontSize: RFValue(20),
              color: '#fff',
              textAlign: 'center',
              textDecorationLine: 'underline',
            }}
            text={'Already have an account? Login here'}
          />
        </TouchableOpacity>
      </Content>
    </Container>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blue,
  },
});
