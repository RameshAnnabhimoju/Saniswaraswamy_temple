import React from "react";
import godimg from "../../Assets/Images/mandeshwarswamylogo.png";
import govlogo from "../../Assets/Images/AP-Govt-Logo.png";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

function PrintInvoice({ data }) {
  const poojaValues = {
    "1 సారి పూజకు": "1 time pooja",
    "1సం.లో వచ్చే 52 శనివారములకు": "52 Saturdays in a year",
    "శాశ్వత అభిషేకము": "Shashvata Abhishekam",
    "శాశ్వత శనిత్రయోదశులు": "Shashvata shani trayodashulu",
  };
  const poojaNameValues = {
    "ఏకాదశ రుద్రతైలాభిషేకం": "Yekadasa rudra thailabhishekam",

    "మహాన్యాసపూర్వక ఏకవార రుద్రతైలాభిషేకం":
      "Mahanyasapurvaka yekavara rudra thailabhishekam",
    "శని జపం": "Sani japam",

    "శని శాంతి హోమం": "Sani shanthi homam",
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image source={godimg} style={styles.headerGodImage} />
          <View style={styles.headerTitles}>
            <Text style={styles.headerGovtTitle}>
              Endowment Department, Govt of AP.
            </Text>
            <Text style={styles.headerTempleTitle}>
              Sri Mandeswara (Saneswara) Swamy Devastanam
            </Text>
            <Text style={styles.headerAddressTitle}>
              Mandapalli(V), Kothapeta(M) - 533223, DR. B. R. AMBEDKAR
              KONASEEMA DISTRICT(Andhra Pradesh) Ph: 08855 243208
            </Text>
          </View>
          <Image source={govlogo} style={styles.headerGovtImage} />
        </View>
        <View style={styles.dataContainer}>
          <View style={styles.dataSide}>
            <Text style={styles.data}>
              Devotee Name : <Text>{data.name}</Text>
            </Text>
            <Text style={styles.data}>
              Mobile : <Text>{data.mobile}</Text>
            </Text>
            <Text style={styles.data}>
              City : <Text>{data.city}</Text>
            </Text>
            <Text style={styles.data}>
              State : <Text>{data.state}</Text>
            </Text>
            {!!data.poojaName && (
              <Text style={styles.data}>
                Pooja Name : <Text>{poojaNameValues[data.poojaName]}</Text>
              </Text>
            )}
            {!!data.pooja && (
              <Text style={styles.data}>
                Pooja : <Text>{poojaValues[data.pooja]}</Text>
              </Text>
            )}
            {!!data.poojaDate && (
              <Text style={styles.data}>
                Pooja Date : <Text>{data.poojaDate}</Text>
              </Text>
            )}
            {!!data.occation && (
              <Text style={styles.data}>
                occation : <Text>{data.occation}</Text>
              </Text>
            )}
          </View>
          <View style={styles.dataSide}>
            <Text style={styles.data}>
              Reference Id : <Text>{data.referenceId}</Text>
            </Text>
            {!!data.transactionId && (
              <Text style={styles.data}>
                Transaction Id : <Text>{data.transactionId}</Text>
              </Text>
            )}
            <Text style={styles.data}>
              Payment Type : <Text>{data.paymentType}</Text>
            </Text>
            {!!data.paymentMode && (
              <Text style={styles.data}>
                Payment Mode : <Text>{data.paymentMode}</Text>
              </Text>
            )}
            <Text style={styles.data}>
              Amount : <Text>Rs {data.amount}</Text>
            </Text>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <Text style={{ textAlign: "center", marginBottom: 10 }}>
            For any querries contact 08855 243208 or mail to
            aceomandapalli@gmail.com
          </Text>
          <Text style={{ fontSize: "8px", textAlign: "center" }}>
            This is an auto-generated Invoice
          </Text>
        </View>
      </Page>
    </Document>
  );
}
const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: "25px",
  },
  header: {
    flexDirection: "row",
    // justifyContent: "space-between",
    marginBottom: 50,
  },
  headerGodImage: {
    width: "60px",
    height: "50px",
  },
  headerTitles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerGovtTitle: {
    fontSize: "10px",
  },
  headerTempleTitle: {
    fontSize: "14px",
  },
  headerAddressTitle: {
    fontSize: "8px",
  },
  headerGovtImage: {
    width: "50px",
    height: "50px",
    position: "absolute",
    top: 0,
    right: 0,
  },
  dataContainer: {
    fontSize: "12px",
    marginBottom: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerContainer: {
    fontSize: "10px",
  },
  dataSide: {
    width: 400,
  },

  data: {
    marginBottom: 10,
  },
});

export default PrintInvoice;
