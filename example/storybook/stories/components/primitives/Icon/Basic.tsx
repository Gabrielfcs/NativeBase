import React from 'react';
import { Icon, MoonIcon, Stack } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { G, Path } from 'react-native-svg';

export const Example = () => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} space={8}>
      <MoonIcon />
      {/* Not Recommended */}
      <Icon as={<Ionicons name="md-checkmark-circle" />} />
      {/* Recommended */} <Icon as={Ionicons} name="md-checkmark-circle" />
      <Icon viewBox="0 0 870 873">
        <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
          <Path
            d="M435 .1C194.8.1.1 194.8.1 435c0 187.3 118.4 346.9 284.4 408.1 3.3-29.9 15-57.2 32.7-79.6 12.1-15.4 26.9-28.5 43.9-38.4 2.1-5 4.6-10.6 7.1-16.6-50.3-26-84.7-78.1-84.7-138.6 0-51.7 25.3-97.7 64-125.9-10.9-20.6-21.3-40.2-31.8-58.2-18.1-31.5-46.7-59.7-68.4-78.9-21 11.9-47.8 4.7-59.7-16.3-11.9-21-4.7-47.8 16.3-59.7 21-11.9 47.4-4.7 59.7 15.9v.4c7.2 12.7 7.2 27.5 1.8 39.8 22.8 19.5 56.8 52.5 77.8 89 9.8 17 19.5 34.7 29.3 53.5 20.3-9.4 42.7-14.8 66.2-14.8 21.3 0 41.6 4.3 60.1 11.9 9.8-18.5 19.5-36.2 28.9-52.8 21-36.2 54.6-68.7 77.4-88.3-5.4-12.3-5.4-26.8 1.8-39.4v-.4c12.3-20.6 38.7-27.9 59.3-15.9 21 11.9 28.2 38.7 16.3 59.3-11.9 21-38.4 28.2-59.3 16.3-21.7 18.8-49.9 47.4-68 78.5-10.1 17.4-20.3 36.5-30.8 56.4 42 27.9 69.8 75.3 69.8 129.5 0 63-36.9 116.9-90.4 141.5.9 2.7 2 4.9 3 7.2 47 22.3 81.1 67.4 87.9 121.1C755.9 776 869.9 618.8 869.9 435 869.9 194.8 675.2.1 435 .1z"
            fill="#CA0000"
          />
        </G>
      </Icon>
    </Stack>
  );
};
