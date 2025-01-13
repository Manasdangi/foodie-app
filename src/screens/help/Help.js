import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import PageHeader from '../../components/pageHeader/PageHeader';

const FAQItem = ({question, answer}) => (
  <TouchableOpacity style={styles.faqItem}>
    <Text style={styles.question}>{question}</Text>
    <Text style={styles.answer}>{answer}</Text>
  </TouchableOpacity>
);

const ContactInfo = ({email, phone, hours}) => (
  <View>
    <Text style={styles.contactText}>Email: {email}</Text>
    <Text style={styles.contactText}>Phone: {phone}</Text>
    <Text style={styles.contactText}>Available: {hours}</Text>
  </View>
);

export default function Help() {
  return (
    <ScrollView style={styles.container}>
      {/* Page Title */}
      <PageHeader headerText={'Help & Support'} />

      {/* FAQ Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        <FAQItem
          question="How can I reset my password?"
          answer="You can reset your password by going to the Profile page, clicking on the 'Settings' option, and selecting 'Reset Password.'"
        />
        <FAQItem
          question="How do I contact support?"
          answer="You can contact support by emailing us at support@example.com or through the 'Contact Us' section below."
        />
        <FAQItem
          question="Where can I view my order history?"
          answer="You can view your order history by going to the 'Your History' option in the Profile section."
        />
      </View>

      {/* Contact Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.contactText}>
          For any issues or questions, feel free to reach out to us:
        </Text>
        <ContactInfo
          email="support@example.com"
          phone="+123 456 7890"
          hours="Mon-Fri, 9AM - 6PM"
        />
      </View>

      {/* Other Resources */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Other Resources</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Terms and Conditions</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    marginBottom: 20,
    fontSize: 20,
    marginRight: 30,
    color: '#2284b2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFA500',
    marginBottom: 10,
  },
  faqItem: {
    marginBottom: 15,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  answer: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    paddingLeft: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  option: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFA500',
    elevation: 3,
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
});
