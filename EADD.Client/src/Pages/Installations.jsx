import React, { useState, useEffect } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  headerCell: {
    backgroundColor: '#def2ff',
    color: 'white',
    fontWeight: 'bold',
    fontSize:20
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#def2ff',
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  },
  heading:
  {
    color:(theme.palette.type==="light")?'white':'black',
    backgroundColor:(theme.palette.type==="light")?'blue':'light-blue',
    textAlign:'center',
  },
  grid: 
  {
    width:'100%',
    height:'100%',
    justifyContent: 'left',
    borderRadius: '25px'
  }}
  ));

export default function Installations (props) {
  const classes=useStyles();
const [theme, setTheme]=useState(props.theme);

  const columns = [
    { name: 'name', header: 'Name', minWidth: 50, defaultFlex: 2, render: ({ data }) => <GridLink textVal={data.name} value={data.id}  /> },
    { name: 'date', header: 'Date', maxWidth: 1000, defaultFlex: 1, render: ({ data }) => <GridLink textVal={data.date} value={data.id}  /> },
    { name: 'address', header: 'Address', maxWidth: 1000, defaultFlex: 1, render: ({ data }) => <GridLink textVal={data.address} value={data.id}  /> },
    { name: 'state', header: 'State', maxWidth: 1000, defaultFlex: 1, render: ({ data }) => <GridLink textVal={data.state} value={data.id}  /> },
    { name: 'zip', header: 'Zip', maxWidth: 1000, defaultFlex: 1, render: ({ data }) => <GridLink textVal={data.zip} value={data.id}  /> },
    { name: 'phone', header: 'Age', maxWidth: 1000, defaultFlex: 1, render: ({ data }) => <GridLink textVal={data.phone} value={data.id}  /> },
    { name: 'tech', header: 'Tech', maxWidth: 1000, defaultFlex: 1, render: ({ data }) => <GridLink textVal={data.tech} value={data.id}  /> },
    { name: 'Model', header: 'Model', maxWidth: 1000, defaultFlex: 1, render: ({ data }) => <GridLink textVal={data.model} value={data.id}  /> },
    { name: 'serial', header: 'Serial', maxWidth: 1000, defaultFlex: 1, render: ({ data }) => <GridLink textVal={data.serial} value={data.id}  /> },
    { name: 'notes', header: 'Notes', maxWidth: 1000, defaultFlex: 1, render: ({ data }) => <GridLink textVal={data.notes} value={data.id}  /> },

    
//    Id	 Name	 Date	 Address	 State	 Zip	 Phone	 Tech	 Model	 Serial	 Notes

  ];
  
  const gridStyle = { minHeight: 550, minWidth:800 };
  const GridLink = ({ textVal, value }) => <a style={{ color: 'black', textDecoration:'none' }} href={`/Installation/${value}`} >{textVal}</a>
  
  const dataSource = [
{id:"1", name:"MORRIS NITA                        ", date:"37987", address:"7727    4461 82ND AVE              ", state:"FL", zip:"33781",phone:"544-2058      ", tech:"JIM           ",model:"NCH5530VKD1  ",serial:"L991836853    ",notes:"'INSP A/C HT.NRML OP.'"},
{id:"1", name:"CAMPBELL ROBERT                    ", date:"42736", address:"7816    12100 SEMINOLE BLVD #71    ", state:"FL", zip:"33778",phone:"581-7820      ", tech:"JACK          ",model:"HEIL ST CL   ",serial:"              ",notes:"'OILD MTR"},
{id:"1", name:"HASLAM KEN                         ", date:"42736", address:"7815    6580 SEMINOLE BLVD #124    ", state:"FL", zip:"33772",phone:"399-5811      ", tech:"JACK          ",model:"             ",serial:"              ",notes:"'INSP SYS.OILD MTR"},
{id:"1", name:"JONES ED                           ", date:"42736", address:"7633    12100 SEMINOLE BLVD #118   ", state:"FL", zip:"33778",phone:"586-4136      ", tech:"JACK          ",model:"CARRIER HT PM",serial:"              ",notes:"'INSP UNT.MTR AMPS.PSSBL HT PRBLM.DRT & DR OK.'"},
{id:"1", name:"MOORE J.L.                         ", date:"43101", address:"7654    12300 SEMINOLE BLVD #1     ", state:"FL", zip:"33778",phone:"586-2359      ", tech:"JACK          ",model:"CARRIER HT PM",serial:"12 YRS OLD    ",notes:"'INSPC A/C OILD MTR"},
{id:"1", name:"FULLER CHUCK                       ", date:"43101", address:"7853    148 CYPRESS LN TEAK W      ", state:"FL", zip:"33778",phone:"584-1434      ", tech:"JACK          ",model:"1997 ST CL   ",serial:"              ",notes:"'INSP A/C.R-22 OK"},
{id:"1", name:"MACBETH MEDLEY                     ", date:"43101", address:"7865    8500 ULMERTON RD # 339     ", state:"FL", zip:"33771",phone:"535-8088      ", tech:"JACK          ",model:"             ",serial:"              ",notes:"'INSP A/C.R-22"},
{id:"1", name:"AULETTA VICTOR                     ", date:"44927", address:"7856    2266 GULF TO BAY #217      ", state:"FL", zip:"      ",phone:"799-3961      ", tech:"JACK          ",model:"HEIL 1993    ",serial:"ST CL         ",notes:"'INSP SYS.R-22"},
{id:"1", name:"GEORGE FRANK                       ", date:"44927", address:"7855    55 ROGERS ST P-1           ", state:"FL", zip:"33756",phone:"447-0522      ", tech:"JACK          ",model:"1 1/2 & 3 TN ",serial:"HT PMP 1996   ",notes:"'INSP 2 CARRIER SYS.COMP"},
{id:"1", name:"BRANEY BILL                        ", date:"46023", address:"7828    7001 142ND AVE N #166      ", state:"FL", zip:"33771",phone:"536-4415      ", tech:"ROCKY         ",model:"PH5036AKB4   ",serial:"L950145962    ",notes:"'INSP PKG UNT.OILD MTRS"},
{id:"1", name:"GLYNN WILLIAM                      ", date:"44927", address:"7854    12100 SEMINOLE BLVD #133   ", state:"FL", zip:"33778",phone:"584-0879      ", tech:"JACK          ",model:"PA5536AKA1   ",serial:"L971532521    ",notes:"'R-22 OK"},
{id:"1", name:"CORBIN PIERRE                      ", date:"47119", address:"7830    11300 126TH AVE N #106     ", state:"FL", zip:"33778",phone:"584-4493      ", tech:"ROCKY         ",model:"CARRIER      ",serial:"              ",notes:"'INSP SYS.NRML OP.RUN CAP STRTNG TO RUST.CNTCTR TURNG BLACK DU TO AGE OF EQPMNT-1988.CSTMR DOSNT WANT TO RPLC ANYTHNG.'"},
{id:"1", name:"TREZISE JOAN                       ", date:"36893", address:"7839    3024 EAGLES LANDING CIR.   ", state:"FL", zip:"33761",phone:"796-8410      ", tech:"ROCKY         ",model:"52SEA312301AA",serial:"0395E63090    ",notes:"'CARRIER.CHKD SYS.NRML OP.CHKD AMPS & CHRG.NRML OP.'"},
{id:"1", name:"KRAEMER ROBERT                     ", date:"39449", address:"7751    11165 5TH ST E             ", state:"FL", zip:"      ",phone:"367-3627      ", tech:"ROCKY         ",model:"CH5548VKC1   ",serial:"L961079705    ",notes:"'A/H MOD#NBH5060SKL2"},
{id:"1", name:"GILLEN JAMES                       ", date:"42371", address:"2444    10365 ULMERTON RD # 6      ", state:"FL", zip:"33771",phone:"581-5997      ", tech:"JACK          ",model:"HEIL 1994    ",serial:"              ",notes:"'OILD MTR"},
{id:"1", name:"IANOALE DAN                        ", date:"42371", address:"2442    2266 GULF TO BAY #318      ", state:"FL", zip:"33765",phone:"797-5486      ", tech:"JACK          ",model:"1992",serial:"              ",notes:"'CAP RUSTY.CNTCTR BURNT-CHNG NEXT INSP.OILD COND MTR.CLND DRAN.R-22 OK.SEQ OK.HT OK'"},
{id:"1", name:"GRAMMER MURRELL                    ", date:"43467", address:"7975    12100 SEMINOLE BLVD # 304  ", state:"FL", zip:"33778",phone:"584-4276      ", tech:"ROCKY         ",model:"PA5536AKA2   ",serial:"L984386348    ",notes:"'INSP SYS.FND COND COIL VRY WHIT.CHKD CHRG-OK"},
{id:"1", name:"PLOTKIN LEN                        ", date:"44563", address:"7857    1325 BARRY ST              ", state:"FL", zip:"33756",phone:"461-5637      ", tech:"JACK          ",model:"HEIL 97      ",serial:"              ",notes:"'INSP A/C EVRYTHNG NRML.'"},
{id:"1", name:"BATTEL ANGELO                      ", date:"46389", address:"8065    24862 US 19 N # 2103       ", state:"FL", zip:"33763",phone:"799-7765      ", tech:"JACK          ",model:"             ",serial:"              ",notes:"'INSP UNT.LW R-22.ADD 2#.UNT IS OLD LOOK LIK LEAK AT VLV.                                                                                                                                                                                                                                          PRIC F/2 TN COND-$750 &TAX 1YL5YP WARR.'"},
{id:"1", name:"ROUSE ORVILLE                      ", date:"46389", address:"8067    24862 US 19 N # 906        ", state:"FL", zip:"33763",phone:"796-4683      ", tech:"JACK          ",model:"             ",serial:"              ",notes:"'INSP UNT.LOOKS GD.OILD MTRS"},
{id:"1", name:"WHALEN LARRY                       ", date:"46389", address:"8066    24862 US 19 N #1203        ", state:"FL", zip:"33763",phone:"799-2223      ", tech:"JACK          ",model:"             ",serial:"              ",notes:"'INSP UNT.EVRTHNG NRML.TEMP OUTSID 76D.HI 220 LOW 66. COMPAR NXT TIM.TOPPD OF R-22.'"},
{id:"1", name:"HALVORSEN JOHN                     ", date:"46389", address:"8056    1610 AMBERLEA DR           ", state:"FL", zip:"34698",phone:"736-3431      ", tech:"CHRIS         ",model:"NCH5536VKA1  ",serial:"L924617447    ",notes:"'SRVCD HT PMP F/SESN.LOCATD FLTR AT A/H.CSTMR WANTS RPLCMNTS-SPAC GUARD STCK # 201.'"},
{id:"1", name:"BONNER FRANK                       ", date:"46754", address:"8072    370 144TH AVE              ", state:"FL", zip:"33708",phone:"392-2761      ", tech:"JACK          ",model:"1992 HT PMP  ",serial:"              ",notes:"'INSP SYS.CNTCTR OK.T-STAT LVL.CAP OK.OILD MTR.COMP AMP OK.                                                                                                                                                                                                                                        CAP RUSTY.CHNG NXT INSP.'"},
{id:"1", name:"WOLFE JERRY                        ", date:"46754", address:"8069    11300 124TH AVE # 49       ", state:"FL", zip:"      ",phone:"587-0374      ", tech:"JACK          ",model:"2000 HT PMP  ",serial:"              ",notes:"'UNT LOOKS GREAT.EVRYTHNG NRML.'"},
{id:"1", name:"CONDON & MEEK/ANASTASIA MCFADEN    ", date:"46389", address:"8073    100 WAVERLY WAY #310       ", state:"FL", zip:"      ",phone:"FAX-4491964   ", tech:"DAN           ",model:"             ",serial:"              ",notes:"'INSP A/C.OILD MTRS"},
{id:"1", name:"DELORY JIM                         ", date:"37259", address:"2437    125 REDWOOD LN TEAK W      ", state:"FL", zip:"33770",phone:"586-6615      ", tech:"JACK          ",model:"ST CL 1999   ",serial:"              ",notes:"'INSP UNT.LOOKS GREAT.NRML OP.'"},
{id:"1", name:"HODSON RAY                         ", date:"37259", address:"8071    12100 SEMINOLE BLVD #95    ", state:"FL", zip:"33778",phone:"584-6391      ", tech:"JACK          ",model:"CARRIER 4 TN ",serial:"              ",notes:"'INSP UNT.ADD 2# R-22.INSTLD USD COND MTR NO WARR-$100.                                                                                                                                                                                                                                            $100 OFF NW UNT IS INSTLD BY 12/31/01.PER JACK & DAN.'"},
{id:"1", name:"BROAD SUE                          ", date:"41641", address:"7905    832 NARCISSUS AVE          ", state:"FL", zip:"34630",phone:"442-8324      ", tech:"ROCKY         ",model:"CA9036VKC1   ",serial:"L941386161    ",notes:"'INSP A/C-CHRG"},
{id:"1", name:"MCDONALD GEORGE                    ", date:"40181", address:"8087    7001 142ND AVE N # 239     ", state:"FL", zip:"33771",phone:"531-6074      ", tech:"ROCKY         ",model:"50MH036360C  ",serial:"B966142       ",notes:"'CHKD CHRG"},
{id:"1", name:"GAUL ROBERT                        ", date:"40911", address:"8114    1535 NURSERY RD #202       ", state:"FL", zip:"33756",phone:"443-7080      ", tech:"CHRIS         ",model:"RPKA030JAZ   ",serial:"5345M32951502 ",notes:"'SRVCD HT PMP F/SESN.OILD MTRS"},
{id:"1", name:"FREDERICK ROBERT                   ", date:"41277", address:"8118    1001 STARKEY RD #443       ", state:"FL", zip:"      ",phone:"535-8253      ", tech:"CHRIS         ",model:"50ZP036301   ",serial:"3798642403",notes:"'SRVCD A/C HT F/SESN.OILD MTRS"},
{id:"1", name:"BOUCHARD EUGENE                    ", date:"41642", address:"8121    337 KEATING DR             ", state:"FL", zip:"33770",phone:"585-8215      ", tech:"CHRIS         ",model:"             ",serial:"              ",notes:"'SRVCD A/C F/SESN.LUBD FAN MTRS"},
{id:"1", name:"NIEPOW MARGARET                    ", date:"44564", address:"8176    1000 VARONA ST             ", state:"FL", zip:"33756",phone:"581-1373      ", tech:"ROCKY PAT     ",model:"CH303VKB2    ",serial:"L911580628    ",notes:"'INSP SYS.NO R-22.FLTR DRIR LEKNG.RPLCD FLTR DRIR-$40 & ADD 7# R-22NRML OP.CHKD HT-NRML OP.                                                                                                                                                                                                        USD VAC PUMP ON SYS TO RMV NON CONDNSABLS.RCCMND RPLCNG SYS DU TO AGE OF EQPMNT.'"},
{id:"1", name:"LUGAR SANDY/JEAN EVANS             ", date:"44929", address:"8182    1361 LEONA DR              ", state:"FL", zip:"33770",phone:"581-8678      ", tech:"ROCKY PAT     ",model:"RBEA17J10NUBA",serial:"TM12952664    ",notes:"'MOD#RAKA030JAZ SER#5339M41947892.INSP SYS.CHKD CHRG"},
{id:"1", name:"HOLLINGSWORTH JIM                  ", date:"46025", address:"8185    11424 81ST PL N            ", state:"FL", zip:"33772",phone:"397-8135      ", tech:"ROCKY PAT     ",model:"HP22261-1P   ",serial:"5190J16638    ",notes:"'A/H-CBH19-31-1P.INSP SYS.CHKD CHRG"},
{id:"1", name:"STEVENOR HOWARD                    ", date:"46025", address:"8186    14255 ROSEMARY LN #8207    ", state:"FL", zip:"      ",phone:"595-0839      ", tech:"ROCKY PAT     ",model:"CA9024VKD2   ",serial:"L993039741    ",notes:"'GARDENIA BLDG-INSP SYS.CHKD CHRG & AMPS.NRML OP.'"},
{id:"1", name:"BAXTER TED                         ", date:"37625", address:"8256    12100 SEMINOLE BLVD # 255  ", state:"FL", zip:"33778",phone:"587-6515      ", tech:"ROCKY PAT     ",model:"PS4030B1010  ",serial:"82001",notes:"'INSP A/C.CHKD CHRG-ADD 3# R-22.CHKD AMPS.PSSBL LEK IN REVRSNG VLV.NRML OP.STILL LEK.                                                                                                                                                                                                              PD MASTERCARD #5491000138401034 EXP 7/02.'"},
{id:"1", name:"JOHNSON DEL                        ", date:"44929", address:"8178    3210 SAN BERNADINO DR      ", state:"FL", zip:"      ",phone:"TEN-726-8667  ", tech:"ROCKY PAT     ",model:"B1BM030KB    ",serial:"B1B9505100917 ",notes:"'INSP SYS.CHKD CHRG & AMPS.NRML OP.'"},
{id:"1", name:"LESNETT GRAYSON                    ", date:"37625", address:"8255    12300 SEMINOLE BLVD # 9    ", state:"FL", zip:"      ",phone:"518-6911      ", tech:"ROCKY PAT     ",model:"CA1024VKA1   ",serial:"L883725005    ",notes:"'INSP SYS.RUN CAP BADLY RUSTD"},
{id:"1", name:"ALLHUSEN DONALD                    ", date:"38356", address:"8286    2526 ST RD 580 #108        ", state:"FL", zip:"33761",phone:"796-2885      ", tech:"JACK          ",model:"TEMPSTAR     ",serial:"1989",notes:"'INSP SYS.OILD MTR"},
{id:"1", name:"BRADFORD LUCY                      ", date:"38356", address:"8304    8500 ULMERTON RD # 311     ", state:"FL", zip:"33771",phone:"531-2854      ", tech:"JACK          ",model:"             ",serial:"              ",notes:"'INSP SYS.OILD MTR"},
{id:"1", name:"WESTLAKE TERRY                     ", date:"38356", address:"8306    7001 142ND AVE # 236       ", state:"FL", zip:"33771",phone:"538-9002      ", tech:"JACK          ",model:"96",serial:"              ",notes:"'INSP SYS.OILD MTRS.PRSSR 210/78.NRML OP                                                                                                                                                                                                                                                           CHNGD CNTCTR-HELP CLAIM.'"},
{id:"1", name:"CLANCY ALICE                       ", date:"40182", address:"8323    12551 79TH AVE N           ", state:"FL", zip:"33776",phone:"393-0029      ", tech:"JACK          ",model:"HEIL         ",serial:"95",notes:"'INSP SYS.AMPS"},
{id:"1", name:"DAVENPORT RUTH                     ", date:"39817", address:"2438    204 AVANDA CT              ", state:"FL", zip:"33756",phone:"461-7828      ", tech:"JACK          ",model:"             ",serial:"              ",notes:"'INSP SYS.COMP AMPS"},
{id:"1", name:"GELSINGER DON                      ", date:"39817", address:"8305    2894 BROOKFIELD DR N       ", state:"FL", zip:"33771",phone:"531-3783      ", tech:"JACK          ",model:"             ",serial:"              ",notes:"'INSP SYS.CAPS"},
{id:"1", name:"KOVACH PAT                         ", date:"40182", address:"8322    548 PARAKEET LN            ", state:"FL", zip:"33770",phone:"559-0253      ", tech:"JACK          ",model:"             ",serial:"              ",notes:"'INSP SYS"},
{id:"1", name:"VINCENT JERRY                      ", date:"39817", address:"8309    1071 DONEGAN RD # 1468     ", state:"FL", zip:"      ",phone:"585-6615      ", tech:"JACK          ",model:"             ",serial:"              ",notes:"'INSP SYS.NORML OP.                                                                                                                                                                                                                                                                                INSP WAS N/C.'"},
{id:"1", name:"CHITTENDEN JERRY                   ", date:"40912", address:"8321    9790 66TH ST #178 LAFAYETTE", state:"FL", zip:"33782",phone:"541-9748      ", tech:"JACK          ",model:"CARRIER HT PM",serial:"              ",notes:"'INSP SYS.COMP AMPS"},
{id:"1", name:"DINSMORE MARION                    ", date:"40912", address:"8320    7001 142ND AVE N # 323     ", state:"FL", zip:"33771",phone:"535-6326      ", tech:"JACK          ",model:"YORK 1996    ",serial:"              ",notes:"'INSP SYS.WSHD COIL.PRSSR 220/68.MTR AMPS"},
{id:"1", name:"GERBER BETH                        ", date:"40182", address:"8319    16202 2ND ST E             ", state:"FL", zip:"33708",phone:"319-9024      ", tech:"JACK          ",model:"             ",serial:"              ",notes:"'INSP SYS.COMP AMP OK"},
{id:"1", name:"WITHAM WALLACE                     ", date:"40912", address:"8310    217 TEMPLE LN              ", state:"FL", zip:"33770",phone:"581-8538      ", tech:"JACK          ",model:"ARCOAIR      ",serial:"              ",notes:"'INSP SYS.PRSSR 275/68.COMP & MTR AMPS OK.WASHD COND.T-STAT LEVL'"},
{id:"1", name:"STREB KEN                          ", date:"38356", address:"8303    12100 SEMINOLE BLVD # 150  ", state:"FL", zip:"33778",phone:"581-4622      ", tech:"JACK          ",model:"CARRIER      ",serial:"              ",notes:"'OILD MTR"},
{id:"1", name:"RYAN KEEN                          ", date:"42373", address:"8316    9745 86TH AVE N            ", state:"FL", zip:"33777",phone:"399-2717      ", tech:"JACK          ",model:"HEIL 98      ",serial:"              ",notes:"'INSP SYS.PRSSR"},
{id:"1", name:"OCONNOR BOB                        ", date:"42739", address:"8371    11945 143RD ST N # 3724    ", state:"FL", zip:"      ",phone:"517-0157      ", tech:"CHRIS         ",model:"             ",serial:"              ",notes:"'SRVCD A/C F/SESN.OLD MTRS"},
{id:"1", name:"LEONOWICZ JOHN                     ", date:"43469", address:"7860    29 SABLE PALM-PALM HILL    ", state:"FL", zip:"33770",phone:"559-0143      ", tech:"JACK          ",model:"NPAHC36AK01  ",serial:"L942019296    ",notes:"'INSP SYS.PRSSR"},
{id:"1", name:"TANCREDI TONY                      ", date:"43469", address:"7861    385 MEMORY LN              ", state:"FL", zip:"      ",phone:"587-9935      ", tech:"JACK          ",model:"BARD 2 TN    ",serial:"              ",notes:"'INSP SYS.OILD MTR"},
{id:"1", name:"ZURBRICK BETTY                     ", date:"43469", address:"8426    204 ASPEN CIR.             ", state:"FL", zip:"33777",phone:"397-9278      ", tech:"CHRIS         ",model:"HEIL 3 TN    ",serial:"              ",notes:"'SRVCD A/C F/SMMR.OILD FN MTRS.COMP LRA.WONT STRT.COND ORGNL EQPMNT.TO INSTLD NW COND W 1YL 5YP WARR.10Y COMP P-$1095 & TAX.INCLDS CRAN"},
{id:"1", name:"GARLYCZAK EMILY                    ", date:"45295", address:"8436    1071 DONEGAN RD #305       ", state:"FL", zip:"33771",phone:"581-5730      ", tech:"JACK          ",model:"HEIL         ",serial:"1998",notes:"'INSP SYS.MTR AMPS OK.COMP AMPS OK"},
{id:"1", name:"BRIESE DEAN/MANAGER                ", date:"43469", address:"8475    7001 142ND AVE N # 106     ", state:"FL", zip:"      ",phone:"              ", tech:"JACK          ",model:"OLD          ",serial:"              ",notes:"'INSP SYS.ADD 2# R-22.PSSBL LEK.                                                                                                                                                                                                                                                                   N/C PER DAN.'"},
{id:"1", name:"RUSSIER RITA                       ", date:"43469", address:"7862    6900 ULMERTON RD #201      ", state:"FL", zip:"      ",phone:"538-2164      ", tech:"JACK          ",model:"HEIL 2 TN    ",serial:"98",notes:"'INSP SYS.NRML OP.                                                                                                                                                                                                                                                                                 STOP & CHK R-22 WHEN HOTTR.'"},
{id:"1", name:"OLSEN JACK                         ", date:"44930", address:"8437    10235 PARADISE DR          ", state:"FL", zip:"33773",phone:"391-2082      ", tech:"JACK          ",model:"HEIL         ",serial:"              ",notes:"'INSP SYS.OILD MTR"},
{id:"1", name:"BAKER DON                          ", date:"46026", address:"8479    11300 124TH AVE N # 138    ", state:"FL", zip:"33778",phone:"585-7941      ", tech:"JACK          ",model:"HEIL         ",serial:"98",notes:"'INSP SYS.COMP AMPS"},
{id:"1", name:"DRAGOSZ KATHLEEN                   ", date:"45661", address:"8477    326 WINDRUSH BLVD 11-A     ", state:"FL", zip:"      ",phone:"596-3007      ", tech:"JACK          ",model:"             ",serial:"              ",notes:"'INSP SYS.COMP AMP OK"},
{id:"1", name:"RALSTON ETHEL                      ", date:"46026", address:"8478    12100 SEMINOLE BLVD #149   ", state:"FL", zip:"33778",phone:"585-9443      ", tech:"JACK          ",model:"HEIL         ",serial:"94",notes:"'INSP SYS.OILD MTR"},
{id:"1", name:"HART BOB                           ", date:"46026", address:"8409    222 IRON AGE ST            ", state:"FL", zip:"34695",phone:"669-4591      ", tech:"ROCKY PAT     ",model:"RDLA030JAZ   ",serial:"5157M13947074 ",notes:"'INSP SYS.CHKD CHRG"},
{id:"1", name:"SANSEAIR REALTY/JOHN WOOD          ", date:"40182", address:"8362    1290 GULF BLVD #203        ", state:"FL", zip:"      ",phone:"FAX-593-0286  ", tech:"DAN           ",model:"BRYANT 2 1/2 ",serial:"              ",notes:"'INSP A/C.T.D. IS ONLY 12-13D.EVAP COIL VRY DRTY.IT NEED PULLD & CLND.APPRX CST-$175-$225.THIS WILL HELP GET T.D. BCK TO AT LEAST 15D.COND IS IN A MCHNCL RM W/5 OTHR COND.IT LOOSS EFFCNCY DU TO HOT AIR SURRNDNG UNT.R-22 LEVL OK.COND COIL SHLD ALSO BE CLND ON A RGLR BASIS.IS DRTY NOW.'"},
{id:"1", name:"GRIFFIN RODERICK                   ", date:"36896", address:"8537    1001 STARKEY RD #200       ", state:"FL", zip:"      ",phone:"530-9469      ", tech:"CHRIS         ",model:"CARRIER      ",serial:"              ",notes:"'SRVCD A/C F/ SESN.OILD MTRS.CHKD ELCT"},
{id:"1", name:"BRODIE GLEN                        ", date:"44929", address:"8180    7001 142ND AVE # 88        ", state:"FL", zip:"      ",phone:"1905472-6789  ", tech:"ROCKY PAT     ",model:"PA5530AKA3   ",serial:"L973070499    ",notes:"'INSP SYS.OILD MTR"},

  ];
  const filterValue = [
    // { name: 'id', type: 'string', operator: "contains", value: "" },
    { name: 'name', type: 'string', operator: "contains", value: "" },
    { name: 'date', type: 'string', operator: "contains", value: "" },
    { name: 'address', type: 'string', operator: "contains", value: "" },
    { name: 'state', type: 'string', operator: "contains", value: "" },
    { name: 'zip', type: 'string', operator: "contains", value: "" },
    { name: 'phone', type: 'string', operator: "contains", value: "" },
    { name: 'tech', type: 'string', operator: "contains", value: "" },
    { name: 'model', type: 'string', operator: "contains", value: "" },
    { name: 'serial', type: 'string', operator: "contains", value: "" },
    { name: 'notes', type: 'string', operator: "contains", value: "" }

  ]
  return(
      <ReactDataGrid
      idProperty="id"
      columns={columns}
      dataSource={dataSource}
      style={gridStyle}
      classes={{ headerCell: classes.headerCell, row: classes.row }}
      defaultFilterValue={filterValue}
      
    
    />
     
    )
  };