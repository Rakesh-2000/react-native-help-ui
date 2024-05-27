import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
  Dimensions,
} from 'react-native';

// Get the screen width for default button width calculations
const screenWidth = Dimensions.get('window').width;

// Define the possible button types
type ButtonType = 'primary' | 'bordered';

// Define the prop types for the ButtonHelp component
interface ButtonHelpProps {
  onPress: (event: GestureResponderEvent) => void; // Function to handle button press
  style?: ViewStyle; // Custom styles for the button container
  width?: number | string; // Custom width for the button
  height?: number | string; // Custom height for the button
  title?: string; // Text to display on the button
  background?: string; // Background color for the button
  color?: string; // Text color for the button
  disabled?: boolean; // Disable the button if true
  type?: ButtonType; // Button type: 'primary' or 'bordered'
}

// ButtonHelp functional component
const ButtonHelp: React.FC<ButtonHelpProps> = ({
  onPress,
  style,
  width = screenWidth * 0.9, // Default width is 90% of screen width
  height = 50, // Default height is 50
  title = 'Button', // Default button text
  background = 'orange', // Default background color
  color = '#FFFFFF', // Default text color
  disabled = false, // Button is enabled by default
  type = 'primary', // Default button type is 'primary'
}) => {
  // Determine if the button type is 'bordered'
  const isBordered = type === 'bordered';
  
  // Combine styles based on the button type and state
  const buttonStyles = [
    styles.button,
    style,
    {
      width,
      height,
      backgroundColor: isBordered ? 'transparent' : background,
      borderColor: isBordered ? background : 'transparent',
      borderWidth: isBordered ? 1 : 0,
    },
    disabled && styles.disabledButton, // Apply disabled style if button is disabled
  ];

  // Combine text styles based on the button type
  const textStyles = [styles.text, { color: isBordered ? background : color }];

  // Render the button
  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyles}
      disabled={disabled}
    >
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

// Define styles for the button and text
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5, // Default border radius
    marginBottom: 10, // Default margin bottom
  } as ViewStyle,
  text: {
    fontSize: 16, // Default font size
  } as TextStyle,
  disabledButton: {
    backgroundColor: '#A9A9A9', // Color for disabled button
  } as ViewStyle,
});

export default ButtonHelp;
