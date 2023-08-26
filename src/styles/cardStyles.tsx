import {StyleSheet} from 'react-native';
import {colors} from './colors';
const commonStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
    color: colors.textGray,
  },
});

export const cardStyles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  card: {
    ...commonStyles.container,
  },
  title: {
    ...commonStyles.title,
  },
  content: {
    ...commonStyles.content,
  },
});
