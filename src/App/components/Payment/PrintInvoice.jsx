import React from "react";
// import godimg from "../../Assets/Images/mandeshwarswamylogo.png";
// import govlogo from "../../Assets/Images/AP-Govt-Logo.png";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  //   Image,
} from "@react-pdf/renderer";

function PrintInvoice() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text>Sri Mandeswara (Saneswara) Swamy Devastanam</Text>
          <Text>
            Mandapalli(V), Kothapeta(M) - 533223, DR. B. R. AMBEDKAR
            KONASEEMA DISTRICT(Andhra Pradesh) Ph: 08855 243208
          </Text>
          <Text>Endowment Department, Govt of AP.</Text>
        </View>
      </Page>
    </Document>
  );
}
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
});

export default PrintInvoice;
