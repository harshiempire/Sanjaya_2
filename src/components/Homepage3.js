import React, { useState } from "react";
import Imgcomp from "./Imgcomp";

const Homepage3 = () => {
  //   const [details, setDetails] = useState({
  //     section: "",
  //     rollno: "",
  //   });

  //   const handleInputs = (e) => {
  //     setDetails({ ...details, [e.target.name]: e.target.value });

  //     console.log(details);
  //   };
  const getUser = async (e) => {
    e.preventDefault();

    setImg("http://teleuniv.in/sanjaya/student-images/" + rollno + ".jpg");
  };
  const CSD = [
    "20BD1A6701",
    "20BD1A6702",
    "20BD1A6703",
    "20BD1A6704",
    "20BD1A6705",
    "20BD1A6706",
    "20BD1A6707",
    "20BD1A6708",
    "20BD1A6709",
    "20BD1A6710",
    "20BD1A6711",
    "20BD1A6712",
    "20BD1A6713",
    "20BD1A6714",
    "20BD1A6715",
    "20BD1A6716",
    "20BD1A6717",
    "20BD1A6718",
    "20BD1A6719",
    "20BD1A6720",
    "20BD1A6721",
    "20BD1A6722",
    "20BD1A6723",
    "20BD1A6724",
    "20BD1A6725",
    "20BD1A6726",
    "20BD1A6727",
    "20BD1A6728",
    "20BD1A6729",
    "20BD1A6730",
    "20BD1A6731",
    "20BD1A6732",
    "20BD1A6733",
    "20BD1A6734",
    "20BD1A6735",
    "20BD1A6736",
    "20BD1A6737",
    "20BD1A6738",
    "20BD1A6739",
    "20BD1A6740",
    "20BD1A6741",
    "20BD1A6742",
    "20BD1A6743",
    "20BD1A6744",
    "20BD1A6745",
    "20BD1A6746",
    "20BD1A6747",
    "20BD1A6748",
    "20BD1A6749",
    "20BD1A6750",
    "20BD1A6751",
    "20BD1A6752",
    "20BD1A6753",
    "20BD1A6754",
    "20BD1A6755",
    "20BD1A6756",
    "20BD1A6757",
    "20BD1A6758",
    "20BD1A6759",
    "20BD1A6760",
    "20BD1A6761",
    "20BD1A6762",
    "20BD1A6763",
    "20BD1A6764",
  ];
  const CSEA = [
    "20BD1A0501",
    "20BD1A0502",
    "20BD1A0503",
    "20BD1A0504",
    "20BD1A0505",
    "20BD1A0506",
    "20BD1A0507",
    "20BD1A0508",
    "20BD1A0509",
    "20BD1A050A",
    "20BD1A050B",
    "20BD1A050C",
    "20BD1A050D",
    "20BD1A050E",
    "20BD1A050F",
    "20BD1A050G",
    "20BD1A050H",
    "20BD1A050J",
    "20BD1A050K",
    "20BD1A050L",
    "20BD1A050M",
    "20BD1A050N",
    "20BD1A050P",
    "20BD1A050Q",
    "20BD1A050R",
    "20BD1A050T",
    "20BD1A050U",
    "20BD1A050V",
    "20BD1A050W",
    "20BD1A050X",
    "20BD1A050Y",
    "20BD1A050Z",
    "20BD1A0511",
    "20BD1A0512",
    "20BD1A0513",
    "20BD1A0514",
    "20BD1A0515",
    "20BD1A0516",
    "20BD1A0517",
    "20BD1A0518",
    "20BD1A0519",
    "20BD1A051A",
    "20BD1A051B",
    "20BD1A051C",
    "20BD1A051D",
    "20BD1A051E",
    "20BD1A051F",
    "20BD1A051G",
    "20BD1A051H",
    "20BD1A051J",
    "20BD1A051K",
    "20BD1A051L",
    "20BD1A051M",
    "20BD1A051N",
    "20BD1A051P",
    "20BD1A051Q",
    "20BD1A051R",
    "20BD1A051T",
    "20BD1A051U",
    "20BD1A051V",
    "20BD1A051W",
    "20BD1A051X",
    "20BD1A051Y",
    "20BD1A051Z",
    "20BD1A05K1",
    "20BD1A05K2",
  ];
  const CSEB = [
    "20BD1A0521",
    "20BD1A0522",
    "20BD1A0523",
    "20BD1A0524",
    "20BD1A0525",
    "20BD1A0526",
    "20BD1A0527",
    "20BD1A0528",
    "20BD1A0529",
    "20BD1A052A",
    "20BD1A052B",
    "20BD1A052C",
    "20BD1A052D",
    "20BD1A052E",
    "20BD1A052F",
    "20BD1A052G",
    "20BD1A052H",
    "20BD1A052J",
    "20BD1A052K",
    "20BD1A052L",
    "20BD1A052M",
    "20BD1A052N",
    "20BD1A052P",
    "20BD1A052Q",
    "20BD1A052R",
    "20BD1A052T",
    "20BD1A052U",
    "20BD1A052V",
    "20BD1A052W",
    "20BD1A052X",
    "20BD1A052Y",
    "20BD1A052Z",
    "20BD1A0531",
    "20BD1A0532",
    "20BD1A0533",
    "20BD1A0534",
    "20BD1A0535",
    "20BD1A0536",
    "20BD1A0537",
    "20BD1A0538",
    "20BD1A0539",
    "20BD1A053A",
    "20BD1A053B",
    "20BD1A053C",
    "20BD1A053D",
    "20BD1A053E",
    "20BD1A053F",
    "20BD1A053G",
    "20BD1A053H",
    "20BD1A053J",
    "20BD1A053K",
    "20BD1A053L",
    "20BD1A053M",
    "20BD1A053N",
    "20BD1A053P",
    "20BD1A053Q",
    "20BD1A053R",
    "20BD1A053T",
    "20BD1A053U",
    "20BD1A053V",
    "20BD1A053W",
    "20BD1A053X",
    "20BD1A053Y",
    "20BD1A053Z",
    "20BD1A05K3",
    "20BD1A05K4",
  ];
  const CSEC = [
    "20BD1A0541",
    "20BD1A0542",
    "20BD1A0543",
    "20BD1A0544",
    "20BD1A0545",
    "20BD1A0546",
    "20BD1A0547",
    "20BD1A0548",
    "20BD1A0549",
    "20BD1A054A",
    "20BD1A054B",
    "20BD1A054C",
    "20BD1A054D",
    "20BD1A054E",
    "20BD1A054F",
    "20BD1A054G",
    "20BD1A054H",
    "20BD1A054J",
    "20BD1A054K",
    "20BD1A054L",
    "20BD1A054M",
    "20BD1A054N",
    "20BD1A054P",
    "20BD1A054Q",
    "20BD1A054R",
    "20BD1A054T",
    "20BD1A054U",
    "20BD1A054V",
    "20BD1A054W",
    "20BD1A054X",
    "20BD1A054Y",
    "20BD1A054Z",
    "20BD1A0551",
    "20BD1A0552",
    "20BD1A0553",
    "20BD1A0554",
    "20BD1A0555",
    "20BD1A0556",
    "20BD1A0557",
    "20BD1A0558",
    "20BD1A0559",
    "20BD1A055A",
    "20BD1A055B",
    "20BD1A055C",
    "20BD1A055D",
    "20BD1A055E",
    "20BD1A055F",
    "20BD1A055G",
    "20BD1A055H",
    "20BD1A055J",
    "20BD1A055K",
    "20BD1A055L",
    "20BD1A055M",
    "20BD1A055N",
    "20BD1A055P",
    "20BD1A055Q",
    "20BD1A055R",
    "20BD1A055T",
    "20BD1A055U",
    "20BD1A055V",
    "20BD1A055W",
    "20BD1A055X",
    "20BD1A055Y",
    "20BD1A05KZ",
    "20BD1A05K5",
  ];
  const CSED = [
    "20BD1A0561",
    "20BD1A0562",
    "20BD1A0563",
    "20BD1A0564",
    "20BD1A0565",
    "20BD1A0566",
    "20BD1A0567",
    "20BD1A0568",
    "20BD1A0569",
    "20BD1A056A",
    "20BD1A056B",
    "20BD1A056C",
    "20BD1A056D",
    "20BD1A056E",
    "20BD1A056F",
    "20BD1A056G",
    "20BD1A056H",
    "20BD1A056J",
    "20BD1A056K",
    "20BD1A056L",
    "20BD1A056M",
    "20BD1A056N",
    "20BD1A056P",
    "20BD1A056Q",
    "20BD1A056R",
    "20BD1A056T",
    "20BD1A056U",
    "20BD1A056V",
    "20BD1A056W",
    "20BD1A056X",
    "20BD1A056Y",
    "20BD1A056Z",
    "20BD1A0571",
    "20BD1A0572",
    "20BD1A0573",
    "20BD1A0574",
    "20BD1A0575",
    "20BD1A0576",
    "20BD1A0577",
    "20BD1A0578",
    "20BD1A0579",
    "20BD1A057A",
    "20BD1A057B",
    "20BD1A057C",
    "20BD1A057D",
    "20BD1A057E",
    "20BD1A057F",
    "20BD1A057G",
    "20BD1A057H",
    "20BD1A057J",
    "20BD1A057K",
    "20BD1A057L",
    "20BD1A057M",
    "20BD1A057N",
    "20BD1A057P",
    "20BD1A057Q",
    "20BD1A057R",
    "20BD1A057T",
    "20BD1A057U",
    "20BD1A057V",
    "20BD1A057W",
    "20BD1A057X",
    "20BD1A057Y",
    "20BD1A057Z",
    "20BD1A05K6",
  ];
  const CSEE = [
    "20BD1A0581",
    "20BD1A0582",
    "20BD1A0583",
    "20BD1A0584",
    "20BD1A0585",
    "20BD1A0586",
    "20BD1A0587",
    "20BD1A0588",
    "20BD1A0589",
    "20BD1A058A",
    "20BD1A058B",
    "20BD1A058C",
    "20BD1A058D",
    "20BD1A058E",
    "20BD1A058F",
    "20BD1A058G",
    "20BD1A058H",
    "20BD1A058J",
    "20BD1A058K",
    "20BD1A058L",
    "20BD1A058M",
    "20BD1A058N",
    "20BD1A058P",
    "20BD1A058Q",
    "20BD1A058R",
    "20BD1A058T",
    "20BD1A058U",
    "20BD1A058V",
    "20BD1A058W",
    "20BD1A058X",
    "20BD1A058Y",
    "20BD1A058Z",
    "20BD1A0591",
    "20BD1A0592",
    "20BD1A0593",
    "20BD1A0594",
    "20BD1A0595",
    "20BD1A0596",
    "20BD1A0597",
    "20BD1A0598",
    "20BD1A0599",
    "20BD1A059A",
    "20BD1A059B",
    "20BD1A059C",
    "20BD1A059D",
    "20BD1A059E",
    "20BD1A059F",
    "20BD1A059G",
    "20BD1A059H",
    "20BD1A059J",
    "20BD1A059K",
    "20BD1A059L",
    "20BD1A059M",
    "20BD1A059N",
    "20BD1A059P",
    "20BD1A059Q",
    "20BD1A059R",
    "20BD1A059T",
    "20BD1A059U",
    "20BD1A059V",
    "20BD1A059W",
    "20BD1A059X",
    "20BD1A059Y",
    "20BD1A059Z",
    "20BD1A05K7",
  ];
  const CSEF = [
    "20BD1A05A1",
    "20BD1A05A2",
    "20BD1A05A3",
    "20BD1A05A4",
    "20BD1A05A5",
    "20BD1A05A6",
    "20BD1A05A7",
    "20BD1A05A8",
    "20BD1A05A9",
    "20BD1A05AA",
    "20BD1A05AB",
    "20BD1A05AC",
    "20BD1A05AD",
    "20BD1A05AE",
    "20BD1A05AF",
    "20BD1A05AG",
    "20BD1A05AH",
    "20BD1A05AJ",
    "20BD1A05AK",
    "20BD1A05AL",
    "20BD1A05AM",
    "20BD1A05AN",
    "20BD1A05AP",
    "20BD1A05AQ",
    "20BD1A05AR",
    "20BD1A05AT",
    "20BD1A05AU",
    "20BD1A05AV",
    "20BD1A05AW",
    "20BD1A05AX",
    "20BD1A05AY",
    "20BD1A05AZ",
    "20BD1A05B1",
    "20BD1A05B2",
    "20BD1A05B3",
    "20BD1A05B4",
    "20BD1A05B5",
    "20BD1A05B6",
    "20BD1A05B7",
    "20BD1A05B8",
    "20BD1A05B9",
    "20BD1A05BA",
    "20BD1A05BB",
    "20BD1A05BC",
    "20BD1A05BD",
    "20BD1A05BE",
    "20BD1A05BF",
    "20BD1A05BG",
    "20BD1A05BH",
    "20BD1A05BJ",
    "20BD1A05BK",
    "20BD1A05BL",
    "20BD1A05BM",
    "20BD1A05BN",
    "20BD1A05BP",
    "20BD1A05BQ",
    "20BD1A05BR",
    "20BD1A05BT",
    "20BD1A05BU",
    "20BD1A05BV",
    "20BD1A05BW",
    "20BD1A05BX",
  ];
  const CSEG = [
    "20BD1A05C1",
    "20BD1A05C2",
    "20BD1A05C3",
    "20BD1A05C4",
    "20BD1A05C5",
    "20BD1A05C6",
    "20BD1A05C7",
    "20BD1A05C8",
    "20BD1A05C9",
    "20BD1A05CA",
    "20BD1A05CB",
    "20BD1A05CC",
    "20BD1A05CD",
    "20BD1A05CE",
    "20BD1A05CF",
    "20BD1A05CG",
    "20BD1A05CH",
    "20BD1A05CJ",
    "20BD1A05CK",
    "20BD1A05CL",
    "20BD1A05CM",
    "20BD1A05CN",
    "20BD1A05CP",
    "20BD1A05CQ",
    "20BD1A05CR",
    "20BD1A05CT",
    "20BD1A05CU",
    "20BD1A05CV",
    "20BD1A05CW",
    "20BD1A05CX",
    "20BD1A05CY",
    "20BD1A05CZ",
    "20BD1A05D1",
    "20BD1A05D2",
    "20BD1A05D3",
    "20BD1A05D4",
    "20BD1A05D5",
    "20BD1A05D6",
    "20BD1A05D7",
    "20BD1A05D8",
    "20BD1A05D9",
    "20BD1A05DA",
    "20BD1A05DB",
    "20BD1A05DC",
    "20BD1A05DD",
    "20BD1A05DE",
    "20BD1A05DF",
    "20BD1A05DG",
    "20BD1A05DH",
    "20BD1A05DJ",
    "20BD1A05DK",
    "20BD1A05DL",
    "20BD1A05DM",
    "20BD1A05DN",
    "20BD1A05DP",
    "20BD1A05DQ",
    "20BD1A05DR",
    "20BD1A05DT",
    "20BD1A05DU",
    "20BD1A05DV",
    "20BD1A05DW",
  ];
  const CSMA = [
    "20BD1A6601",
    "20BD1A6602",
    "20BD1A6603",
    "20BD1A6604",
    "20BD1A6605",
    "20BD1A6606",
    "20BD1A6607",
    "20BD1A6608",
    "20BD1A6609",
    "20BD1A660A",
    "20BD1A660B",
    "20BD1A660C",
    "20BD1A660D",
    "20BD1A660E",
    "20BD1A660F",
    "20BD1A660G",
    "20BD1A660H",
    "20BD1A660J",
    "20BD1A660K",
    "20BD1A660L",
    "20BD1A660M",
    "20BD1A660N",
    "20BD1A660P",
    "20BD1A660Q",
    "20BD1A660R",
    "20BD1A660T",
    "20BD1A660U",
    "20BD1A660V",
    "20BD1A660W",
    "20BD1A660X",
    "20BD1A660Y",
    "20BD1A660Z",
    "20BD1A6611",
    "20BD1A6612",
    "20BD1A6613",
    "20BD1A6614",
    "20BD1A6615",
    "20BD1A6616",
    "20BD1A6617",
    "20BD1A6618",
    "20BD1A6619",
    "20BD1A661A",
    "20BD1A661B",
    "20BD1A661C",
    "20BD1A661D",
    "20BD1A661E",
    "20BD1A661F",
    "20BD1A661G",
    "20BD1A661H",
    "20BD1A661J",
    "20BD1A661K",
    "20BD1A661L",
    "20BD1A661M",
    "20BD1A661N",
    "20BD1A661P",
    "20BD1A661Q",
    "20BD1A661R",
    "20BD1A661T",
    "20BD1A661U",
    "20BD1A661V",
    "20BD1A661W",
    "20BD1A661X",
    "20BD1A661Y",
    "20BD1A661Z",
    "20BD1A66K1",
  ];
  const CSMB = [
    "20BD1A6621",
    "20BD1A6622",
    "20BD1A6623",
    "20BD1A6624",
    "20BD1A6625",
    "20BD1A6626",
    "20BD1A6627",
    "20BD1A6628",
    "20BD1A6629",
    "20BD1A662A",
    "20BD1A662B",
    "20BD1A662C",
    "20BD1A662D",
    "20BD1A662E",
    "20BD1A662F",
    "20BD1A662G",
    "20BD1A662H",
    "20BD1A662J",
    "20BD1A662K",
    "20BD1A662L",
    "20BD1A662M",
    "20BD1A662N",
    "20BD1A662P",
    "20BD1A662Q",
    "20BD1A662R",
    "20BD1A662T",
    "20BD1A662U",
    "20BD1A662V",
    "20BD1A662W",
    "20BD1A662X",
    "20BD1A662Y",
    "20BD1A662Z",
    "20BD1A6631",
    "20BD1A6632",
    "20BD1A6633",
    "20BD1A6634",
    "20BD1A6635",
    "20BD1A6636",
    "20BD1A6637",
    "20BD1A6638",
    "20BD1A6639",
    "20BD1A663A",
    "20BD1A663B",
    "20BD1A663C",
    "20BD1A663D",
    "20BD1A663E",
    "20BD1A663F",
    "20BD1A663G",
    "20BD1A663H",
    "20BD1A663J",
    "20BD1A663K",
    "20BD1A663L",
    "20BD1A663M",
    "20BD1A663N",
    "20BD1A663P",
    "20BD1A663Q",
    "20BD1A663R",
    "20BD1A663T",
    "20BD1A663U",
    "20BD1A663V",
    "20BD1A663W",
    "20BD1A663X",
    "20BD1A663Y",
    "20BD1A663Z",
    "20BD1A66K2",
  ];
  const CSMC = [
    "20BD1A6641",
    "20BD1A6642",
    "20BD1A6643",
    "20BD1A6644",
    "20BD1A6645",
    "20BD1A6646",
    "20BD1A6647",
    "20BD1A6648",
    "20BD1A6649",
    "20BD1A664A",
    "20BD1A664B",
    "20BD1A664C",
    "20BD1A664D",
    "20BD1A664E",
    "20BD1A664F",
    "20BD1A664G",
    "20BD1A664H",
    "20BD1A664J",
    "20BD1A664K",
    "20BD1A664L",
    "20BD1A664M",
    "20BD1A664N",
    "20BD1A664P",
    "20BD1A664Q",
    "20BD1A664R",
    "20BD1A664T",
    "20BD1A664U",
    "20BD1A664V",
    "20BD1A664W",
    "20BD1A664X",
    "20BD1A664Y",
    "20BD1A664Z",
    "20BD1A6651",
    "20BD1A6652",
    "20BD1A6653",
    "20BD1A6654",
    "20BD1A6655",
    "20BD1A6656",
    "20BD1A6657",
    "20BD1A6658",
    "20BD1A6659",
    "20BD1A665A",
    "20BD1A665B",
    "20BD1A665C",
    "20BD1A665D",
    "20BD1A665E",
    "20BD1A665F",
    "20BD1A665G",
    "20BD1A665H",
    "20BD1A665J",
    "20BD1A665K",
    "20BD1A665L",
    "20BD1A665M",
    "20BD1A665N",
    "20BD1A665P",
    "20BD1A665Q",
    "20BD1A665R",
    "20BD1A665T",
    "20BD1A665U",
    "20BD1A665V",
    "20BD1A665W",
    "20BD1A665X",
    "20BD1A665Y",
    "20BD1A665Z",
  ];
  const ITA = [
    "20BD1A1201",
    "20BD1A1202",
    "20BD1A1203",
    "20BD1A1204",
    "20BD1A1205",
    "20BD1A1206",
    "20BD1A1207",
    "20BD1A1208",
    "20BD1A1209",
    "20BD1A1210",
    "20BD1A1211",
    "20BD1A1212",
    "20BD1A1213",
    "20BD1A1214",
    "20BD1A1215",
    "20BD1A1216",
    "20BD1A1217",
    "20BD1A1218",
    "20BD1A1219",
    "20BD1A1220",
    "20BD1A1221",
    "20BD1A1222",
    "20BD1A1223",
    "20BD1A1224",
    "20BD1A1225",
    "20BD1A1226",
    "20BD1A1227",
    "20BD1A1228",
    "20BD1A1229",
    "20BD1A1230",
    "20BD1A1231",
    "20BD1A1232",
    "20BD1A1233",
    "20BD1A1234",
    "20BD1A1235",
    "20BD1A1236",
    "20BD1A1237",
    "20BD1A1238",
    "20BD1A1239",
    "20BD1A1240",
    "20BD1A1241",
    "20BD1A1242",
    "20BD1A1243",
    "20BD1A1244",
    "20BD1A1245",
    "20BD1A1246",
    "20BD1A1247",
    "20BD1A1248",
    "20BD1A1249",
    "20BD1A1250",
    "20BD1A1251",
    "20BD1A1252",
    "20BD1A1253",
    "20BD1A1254",
    "20BD1A1255",
    "20BD1A1256",
    "20BD1A1257",
    "20BD1A1258",
    "20BD1A1259",
    "20BD1A1260",
    "20BD1A1261",
    "20BD1A1262",
    "20BD1A1263",
    "20BD1A1264",
    "20BD1A1265",
  ];
  const ITB = [
    "20BD1A1266",
    "20BD1A1267",
    "20BD1A1268",
    "20BD1A1269",
    "20BD1A1270",
    "20BD1A1271",
    "20BD1A1272",
    "20BD1A1273",
    "20BD1A1274",
    "20BD1A1275",
    "20BD1A1276",
    "20BD1A1277",
    "20BD1A1278",
    "20BD1A1279",
    "20BD1A1280",
    "20BD1A1281",
    "20BD1A1282",
    "20BD1A1283",
    "20BD1A1284",
    "20BD1A1285",
    "20BD1A1286",
    "20BD1A1287",
    "20BD1A1288",
    "20BD1A1289",
    "20BD1A1290",
    "20BD1A1291",
    "20BD1A1292",
    "20BD1A1293",
    "20BD1A1294",
    "20BD1A1295",
    "20BD1A1296",
    "20BD1A1297",
    "20BD1A1298",
    "20BD1A1299",
    "20BD1A12A0",
    "20BD1A12A1",
    "20BD1A12A2",
    "20BD1A12A3",
    "20BD1A12A4",
    "20BD1A12A5",
    "20BD1A12A6",
    "20BD1A12A7",
    "20BD1A12A8",
    "20BD1A12A9",
    "20BD1A12B0",
    "20BD1A12B1",
    "20BD1A12B2",
    "20BD1A12B3",
    "20BD1A12B4",
    "20BD1A12B5",
    "20BD1A12B6",
    "20BD1A12B7",
    "20BD1A12B8",
    "20BD1A12B9",
    "20BD1A12C0",
    "20BD1A12C1",
    "20BD1A12C2",
    "20BD1A12C3",
    "20BD1A12C4",
    "20BD1A12C5",
    "20BD1A12C6",
    "20BD1A12C7",
    "20BD1A12C8",
    "20BD1A12C9",
    "20BD1A12D0",
  ];
  const all = [
    CSEA,
    CSEB,
    CSEC,
    CSED,
    CSEE,
    CSEF,
    CSEG,
    CSMA,
    CSMB,
    CSMC,
    ITA,
    ITB,
    CSD,
    [],
  ];
  //   console.log(all[0]);
  const Getthem = (e) => {
    e.preventDefault();
    // console.log(all[section]);
  };
  console.log(Getthem);

  const [section, setSection] = useState(13);
  const [rollno, setRollno] = useState("");
  const [img, setImg] = useState("");

  const handleInputs = (e) => {
    setRollno(e.target.value.toUpperCase());
  };

  return (
    <div className="container">
      <form>
        <select
          name="section"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        >
          <option value="">SELECT</option>
          <option value={0}>CSE-A</option>
          <option value={1}>CSE-B</option>
          <option value={2}>CSE-C</option>
          <option value={3}>CSE-D</option>
          <option value={4}>CSE-E</option>
          <option value={5}>CSE-F</option>
          <option value={6}>CSE-G</option>
          <option value={7}>CSM-A</option>
          <option value={8}>CSM-B</option>
          <option value={9}>CSM-C</option>
          <option value={10}>IT-A</option>
          <option value={11}>IT-B</option>
          <option value={12}>CSD</option>
        </select>
        <div className="col">
          <input
            type="submit"
            name="signin"
            id="signin"
            value="Get"
            className="btn1 mb-4 mt-3 p-2"
            onClick={Getthem}
          />
        </div>
        OR
        <input type="text" value={rollno} onChange={handleInputs} />
        <div className="col">
          <input
            type="submit"
            name="signin"
            id="signin"
            value="Send"
            className="btn1 mb-4 mt-3 p-2"
            onClick={getUser}
          />
        </div>
      </form>
      {all[section].map((roll) => {
        return <Imgcomp url={roll} />;
      })}
    </div>
  );
};

export default Homepage3;
