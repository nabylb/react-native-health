import { NativeModules } from 'react-native';

type HealthType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Health } = NativeModules;

export default Health as HealthType;
