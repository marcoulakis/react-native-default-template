import { useTranslation } from 'react-i18next';
import {
  StyleSheet,
  Text, View
} from 'react-native';

const Home= () => {
  const {t, i18n} = useTranslation();

  return (
    <View style={styles.centeredView}>
      <Text style={styles.textStyle}>{t("translation.home")}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 70,
    },
});
