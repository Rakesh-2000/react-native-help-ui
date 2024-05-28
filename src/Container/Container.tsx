import React, { FC, ReactNode } from 'react';
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';

// Define props for Container component
interface ContainerProps extends React.ComponentPropsWithoutRef<typeof SafeAreaView> {
  children: ReactNode; // Children of the Container component
  backgroundColor?: string; // Background color of the Container component
}

// Define Container component
const Container: FC<ContainerProps> = ({ children, backgroundColor = '#fff', ...rest }) => {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]} {...rest}>
      {children}
    </SafeAreaView>
  );
};

// Define styles for Container component
interface Styles {
  container: ViewStyle; 
}

// Define styles using StyleSheet
const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default Container; 