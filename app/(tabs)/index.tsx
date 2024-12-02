import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Facebook
        </Text>
      </View>

      {/* Login Form */}
      <View style={styles.formContainer}>
        <TextInput
          placeholder='Email or Phone Number'
          style={styles.input}
          placeholderTextColor='#aaa'
        />
        <TextInput
          placeholder='Password'
          secureTextEntry
          style={styles.input}
          placeholderTextColor='#aaa'
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Passwprd?</Text>
        </TouchableOpacity>
        <View style={styles.divider}>
          <View style={styles.line} />
            <Text style={styles.text}>Or</Text>
          <View style={styles.line} />
        </View>
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountText}>Create New Account</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Meta © 2024</Text>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 50,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 48,
    color: '#1877f2',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    textTransform: 'lowercase',
  },
  formContainer: {
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#f6f6f6',
  },
  loginButton: {
    backgroundColor: '#1877f2',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#1877f2',
    textAlign: 'center',
    marginBottom: 20,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  text: {
    marginHorizontal: 8,
    fontSize: 16,
    color: '#555',
  },
  createAccountButton: {
    backgroundColor: '#42b72a',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  createAccountText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  about: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
  },
  footer: {
    marginTop: 50,
    alignItems: 'center',
  },
  footerText: {
    color: '#aaa',
    fontSize: 12,
  },
});
