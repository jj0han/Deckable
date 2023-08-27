import React from 'react';
import {View, Text} from 'react-native';
import {FormikInputComponent} from '../../components';

const BasicComponent = ({formik}) => {
  return (
    <View className="gap-y-5 mb-10">
      <View>
        <Text className="text-black text-base font-semibold mb-3">
          PERGUNTA
        </Text>
        <FormikInputComponent
          placeholder={'Digite sua pergunta aqui...'}
          name={'question'}
          formik={formik}
          formikValue={formik.values.name}
          formikErrors={formik.errors.name}
        />
      </View>
    </View>
  );
};

export default BasicComponent;
