using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Net;
using System.Numerics;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Windows.Forms;
using static HVACFormsApp.Form1.INSTMAP;
using static System.Windows.Forms.AxHost;

namespace HVACFormsApp
{
    public partial class Form1 : Form
    {


        public class INSTMAP
        {
            public INSTMAP()
            { }

            public int lineLength = 137;
            public static class INSTLengths
            {

                public const int condmodFrom = 0;
                public const int condmodLen = 13;
                public const int condserFrom = 13;
                public const int condserLen = 13;
                public const int ahmodFrom = 29;
                public const int ahmodLen = 13;
                public const int ahserFrom = 42;
                public const int ahserLen = 13;
                public const int pkgmodFrom = 55;
                public const int pkgmodLen = 13;
                public const int pkgserFrom = 68;
                public const int pkgserLen = 13;
                public const int htrmodFrom = 81;
                public const int htrmodLen = 13;
                public const int htrserFrom = 94;
                public const int htrserLen = 13;
                public const int warrFrom = 107;
                public const int warrLen = 8;
                public const int invdataFrom = 116;
                public const int invdataLen = 275;
                
                public const int nameFrom = 0;
                public const int nameLen = 35;
                public const int dateFrom = 35;
                public const int dateLen = 8;
                public const int invFrom = 42;
                public const int invLen = 9;
                public const int addressFrom = 51;
                public const int addressLen = 27;
                public const int cityFrom = 78;
                public const int cityLen =9;
                public const int stateFrom = 87;
                public const int stateLen = 2;
                public const int zipFrom = 89;
                public const int zipLen = 7;
                public const int phoneFrom = 96;
                public const int phoneLen = 15;
                public const int phone1From = 110;
                public const int phone1Len = 15;
                public const int faxFrom = 125;
                public const int faxLen = 15;
                public const int techFrom = 141;
                public const int techLen = 14;

            }

            public INSTMAP(int id, int modnum, string ispStr)
            {
                Id = id;
                Name = ispStr.Substring(INSTLengths.nameFrom - modnum, INSTLengths.nameLen);
                DateStr = ispStr.Substring(INSTLengths.dateFrom - modnum, INSTLengths.dateLen);
                Address = ispStr.Substring(INSTLengths.addressFrom - modnum, INSTLengths.addressLen);
                State = ispStr.Substring(INSTLengths.stateFrom - modnum, INSTLengths.stateLen);
                Zip = ispStr.Substring(INSTLengths.zipFrom - modnum, INSTLengths.zipLen);
                Phone = ispStr.Substring(INSTLengths.phoneFrom - modnum, INSTLengths.phoneLen);
                Tech = ispStr.Substring(INSTLengths.techFrom - modnum, INSTLengths.techLen);
                AmtDue = "";
                AmtPaid = "";
                DatePaid = "";
            }



            public INSTMAP(int id, string ispStr)
            {


                string rem = "";

                Id = id;
                Name = ispStr.Substring(INSTLengths.nameFrom, INSTLengths.nameLen);
                DateStr = ispStr.Substring(INSTLengths.dateFrom, INSTLengths.dateLen);
                Address = ispStr.Substring(INSTLengths.addressFrom, INSTLengths.addressLen);
                State = ispStr.Substring(INSTLengths.stateFrom, INSTLengths.stateLen);
                Zip = ispStr.Substring(INSTLengths.zipFrom, INSTLengths.zipLen);
                Phone = ispStr.Substring(INSTLengths.phoneFrom, INSTLengths.phoneLen);
                Tech = ispStr.Substring(INSTLengths.techFrom, INSTLengths.techLen);
                AmtDue = "";
                AmtPaid = "";
                DatePaid = "";
                rem = ispStr.Substring(INSTLengths.techFrom + INSTLengths.techLen, ispStr.Length - (INSTLengths.techFrom + INSTLengths.techLen));
                if (rem.Length > 0)
                {
                    if (rem.IndexOf("@") > -1)
                    {
                        string[] remArr = rem.Split("@");
                        //seeAllEncodings(remArr[0].ToString()+"@");
                        AmtDue = remArr[0].ToString() + "@";
                        if (remArr.Length > 1)
                        {
                            AmtPaid = remArr[1].ToString() + "@";
                            if (remArr.Length > 2)
                            {
                                DatePaid = remArr[remArr.Length - 1].ToString().Trim();

                            }
                        }
                    }
                }
            }
            public int Id { get; set; }
            public string Name { get; set; }
            public string DateStr { get; set; }
            public string InvNum { get; set; }
            public string Address { get; set; }
            public string State { get; set; }
            public string City { get; set; }
            public string Zip { get; set; }
            public string Phone { get; set; }
            public string Phone1 { get; set; }
            public string Fax { get; set; }
            public string Tech { get; set; }
            public string CondMod { get; set; }
            public string CondSer { get; set; }
            public string AhMod { get; set; }
            public string AhSer { get; set; }
            public string PkgMod { get; set; }
            public string PkgSer { get; set; }
            public string HtrMod { get; set; }
            public string HtrSer { get; set; }
            public string Warr { get; set; }
            public string InvData { get; set; }

            public string AmtDue { get; set; }
            public string AmtPaid { get; set; }
            public string DateDue { get; set; }
            public string DatePaid { get; set; }

      

        }



        public class INSPMAP
        {
            
            public static class ISPLengths
            {
                public const int modelFrom = 0;
                public const int modelLen = 13;
                public const int serialFrom = 15;
                public const int serialLen = 14;
                public const int notesFrom = 29;
                public const int notesLen = 440;
                public const int nameFrom = 469;
                public const int nameLen = 35;
                public const int dateFrom = 504;
                public const int dateLen = 8;
                public const int addressFrom = 512;
                public const int addressLen = 35;
                public const int stateFrom = 555;
                public const int stateLen = 2;
                public const int zipFrom = 557;
                public const int zipLen = 6;
                public const int phoneFrom = 563;
                public const int phoneLen = 14;
                public const int phone1From = 577;
                public const int phone1Len = 14;
                public const int techFrom = 591;
                public const int techLen = 14;

            }

            public INSPMAP(int id, int modnum, string ispStr)
            {
                Id = id;
                Name = ispStr.Substring(ISPLengths.nameFrom-modnum, ISPLengths.nameLen);
                DateStr = ispStr.Substring(ISPLengths.dateFrom - modnum, ISPLengths.dateLen);
                Address = ispStr.Substring(ISPLengths.addressFrom - modnum, ISPLengths.addressLen);
                State = ispStr.Substring(ISPLengths.stateFrom - modnum, ISPLengths.stateLen);
                Zip = ispStr.Substring(ISPLengths.zipFrom - modnum, ISPLengths.zipLen);
                Phone = ispStr.Substring(ISPLengths.phoneFrom - modnum, ISPLengths.phoneLen);
                Tech = ispStr.Substring(ISPLengths.techFrom - modnum, ISPLengths.techLen);
                Model = "";
                Serial = "";
                Notes = "";
                AmtDue = "";
                AmtPaid = "";
                DatePaid = "";
            }

       

            public INSPMAP(int id, string ispStr)
            {


                string rem = "";
                
                Id = id;
                Name = ispStr.Substring(ISPLengths.nameFrom, ISPLengths.nameLen);
                DateStr = ispStr.Substring(ISPLengths.dateFrom, ISPLengths.dateLen);
                Address = ispStr.Substring(ISPLengths.addressFrom, ISPLengths.addressLen);
                State = ispStr.Substring(ISPLengths.stateFrom, ISPLengths.stateLen);
                Zip = ispStr.Substring(ISPLengths.zipFrom, ISPLengths.zipLen);
                Phone = ispStr.Substring(ISPLengths.phoneFrom, ISPLengths.phoneLen);
                Tech = ispStr.Substring(ISPLengths.techFrom, ISPLengths.techLen);
                Model = ispStr.Substring(ISPLengths.modelFrom, ISPLengths.modelLen);
                Serial = ispStr.Substring(ISPLengths.serialFrom, ISPLengths.serialLen);
                Notes = ispStr.Substring(ISPLengths.notesFrom, ISPLengths.notesLen);
                AmtDue = "";
                AmtPaid = "";
                DatePaid = "";
                rem = ispStr.Substring(ISPLengths.techFrom + ISPLengths.techLen, ispStr.Length - (ISPLengths.techFrom + ISPLengths.techLen));
                if (rem.Length > 0)
                {
                    if (rem.IndexOf("@") > -1)
                    {
                        string[] remArr = rem.Split("@");
                        //seeAllEncodings(remArr[0].ToString()+"@");
                        AmtDue = remArr[0].ToString() + "@";
                        if (remArr.Length > 1)
                        {
                            AmtPaid = remArr[1].ToString() + "@";
                            if (remArr.Length > 2)
                            {
                                    DatePaid = remArr[remArr.Length - 1].ToString().Trim();
                             
                            }
                        }
                    }
                }
            }
           public int Id { get; set; }
            public string Name { get; set; }
            public string DateStr { get; set; }
            public string Address { get; set; }
            public string State { get; set; }
            public string Zip { get; set; }
            public string Phone { get; set; }
            public string Tech { get; set; }
            public string Model { get; set; }
            public string Serial { get; set; }
            public string Notes { get; set; }
            public string AmtDue { get; set; }
            public string AmtPaid { get; set; }
            
            public string DatePaid { get; set; }


        }


        public Form1()
        {
            InitializeComponent();
           
        }


        private void button2_Click(object sender, EventArgs e)
        {
            string SourceDirectory = textBox1.Text;
            string DestinationDirectory = textBox2.Text;
            string heading = textBox3.Text;
            string SearchPattern = textBox5.Text;
            string fileType = listBox1.SelectedItem.ToString();
            string[] files = Directory.GetFiles(SourceDirectory, SearchPattern, SearchOption.AllDirectories);
            for (int x = 0; x < files.Length - 1; x++)
            {
                string fnOut = files[x].Substring(files[x].LastIndexOf("\\") + 1, (files[x].IndexOf(".")) - files[x].LastIndexOf("\\")) + "DMD";
                string fileNameOut = DestinationDirectory + "\\" + files[x].Substring(files[x].LastIndexOf("\\") + 1, (files[x].IndexOf(".")) - files[x].LastIndexOf("\\")) + "csv";
                if (File.Exists(fileNameOut))
                {
                    File.Delete(fileNameOut);
                }
            }
            for (int x = 0; x < files.Length - 1; x++)
            {
                string fnOut = files[x].Substring(files[x].LastIndexOf("\\") + 1, (files[x].IndexOf(".")) - files[x].LastIndexOf("\\")) + "DMD";
                string fileNameOut = DestinationDirectory + "\\" + files[x].Substring(files[x].LastIndexOf("\\") + 1, (files[x].IndexOf(".")) - files[x].LastIndexOf("\\")) + "csv";

                using (FileStream fs = File.Open(files[x], FileMode.Open))
                {

                    using (StreamReader reader = new StreamReader(fs))
                    {
                        string fsStr = reader.ReadToEnd();


                        FileStream fsout = new FileStream(fileNameOut, FileMode.OpenOrCreate);
                        {

                            switch (fileType)
                            {
                                case "Inspections":
                                    {
                                        CreateInspections(fsout, fsStr, heading, fnOut);
                                        break;
                                    }
                                case "Installs":
                                    {
                                        CreateInstalls(fsout, fsStr, heading, fnOut);
                                        break;
                                    }
                                case "Labor":
                                    {
                                        break;
                                    }
                                default:
                                    {
                                        break;
                                    }
                            }
                        }

                    }
                }
            }
        }
        public enum stepValue
        {
            Amount1,
            Amount2,
            DateInv,
            DatePaid
        }

        private void CreateInstalls(FileStream fsout, string fsStr, string heading, string fnOut)
        {
//            fsStr =fsStr.Replace('\0', ' ');
            fsStr = fsStr.Replace('\n', '\0');
            List<INSTMAP> instMaps = new List<INSTMAP>();
            int fsStrLength = fsStr.Length;
            int spltLen = 595;
            int spltLen1 = 155;
            int spltLen2 = 48;
            int spltLen3 = 391;
            int start = 0;
            int end = 0;
            int instCount = 0;
            List<string> spltLines = new List<string>();
            DateTime dateresult = new DateTime();
            int fsStrLen = fsStr.Length;
            while (fsStrLen > (start + spltLen1))
            {
                if (fnOut == "INSTL17.DMD")
                {
                    if (instMaps.Count == 15) { 
                        INSTMAP currinst = instMaps[instMaps.Count - 1];
                }
                    string here = "here";
                }
                    try
                {
                    INSTMAP install = new INSTMAP();
                
                    int step = (int)stepValue.Amount1;
                    string workStr1 = fsStr.Substring(start, spltLen1);
                    char[] wrkChar = workStr1.ToCharArray();
                    bool run = true;

                    for (int x2 = 0; x2 < wrkChar.Length && run; x2++)
                    {
                        if (wrkChar[x2].ToString().Trim() == "")
                        {
                            start++;
                            workStr1 = workStr1.Substring(1);
                        }
                        else
                        {
                            run = false;
                        }
                    }
                    instCount++;
                    install.Id = instCount;
                    install.Name = workStr1.Substring(INSTLengths.nameFrom, INSTLengths.nameLen);
                    start += INSTLengths.nameLen;
                    install.DateStr = workStr1.Substring(INSTLengths.dateFrom, INSTLengths.dateLen);
                    start += INSTLengths.dateLen;
                    install.InvNum = workStr1.Substring(INSTLengths.invFrom, INSTLengths.invLen);
                    start += INSTLengths.invLen;
                    install.Address = workStr1.Substring(INSTLengths.addressFrom, INSTLengths.addressLen);
                    start += INSTLengths.addressLen;
                    install.City = workStr1.Substring(INSTLengths.cityFrom, INSTLengths.cityLen);
                    start += INSTLengths.cityLen;
                    install.State = workStr1.Substring(INSTLengths.stateFrom, INSTLengths.stateLen);
                    start += INSTLengths.stateLen;
                    install.Zip = workStr1.Substring(INSTLengths.zipFrom, INSTLengths.zipLen);
                    start += INSTLengths.zipLen;
                    install.Phone = workStr1.Substring(INSTLengths.phoneFrom, INSTLengths.phoneLen);
                    start += INSTLengths.phoneLen;
                    install.Phone1 = workStr1.Substring(INSTLengths.phone1From, INSTLengths.phone1Len);
                    start += INSTLengths.phone1Len;
                    install.Fax = workStr1.Substring(INSTLengths.faxFrom, INSTLengths.faxLen);
                    start += INSTLengths.faxLen;
                    install.Tech = workStr1.Substring(INSTLengths.techFrom, INSTLengths.techLen);
                    start += INSTLengths.techLen;
                    string workStr2a = fsStr.Substring(start-1, spltLen2);
                    string workStr2 = fsStr.Substring(start, spltLen2);
                    char[] workStr2Arr = workStr2.ToCharArray();
                    int frst = workStr2.IndexOf("@");
                    string scndStr = workStr2.Substring(frst+1, workStr2.Length - (frst+1));
                    int scnd = scndStr.IndexOf("@")+frst;
                        install.AmtDue = workStr2.Substring(1, frst);
                    start += install.AmtDue.Length;
                        install.AmtPaid = workStr2.Substring(frst+1, (scnd-frst)+1);
                    start += install.AmtPaid.Length;
                    start++;
                    string stopStr = fsStr.Substring(start, 1);
                    while (stopStr != "0" && stopStr!="1")
                    {
                        start++;
                        stopStr = fsStr.Substring(start, 1);
                    }
                    install.DateDue = fsStr.Substring(start, 8);
                    start += install.DateDue.Length;

                    
                    install.DatePaid = fsStr.Substring(start, 8);
                    start += install.DatePaid.Length;


                    start++;
                    stopStr = fsStr.Substring(start, 1);
                    string stopStr1 = fsStr.Substring(start+1, 1);
                    string pattern = @"^[a-zA-Z0-9]+$";
                    // Create a Regex  
                    Regex rg = new Regex(pattern);
                    MatchCollection matched = rg.Matches(stopStr);
                    MatchCollection matched1 = rg.Matches(stopStr1);
                    while ((matched.Count<1 && stopStr!=" ") || (matched1.Count<1 && stopStr1!= " "))
                    {
                        start++;
                        stopStr = fsStr.Substring(start, 1);
                        stopStr1 = fsStr.Substring(start+1, 1);
                        matched = rg.Matches(stopStr);
                        matched1 = rg.Matches(stopStr1);
                    }
                    start++;
                    //string str = fsStr.Substring(x1 * spltLen, (x1 * spltLen) + spltLen);
                    //INSTMAP map = new INSTMAP(x1, str);
                    //instMaps.Add(map);
                    
                    string workStr3 = fsStr.Substring(start, spltLen3);
                    
                    workStr3 = fsStr.Substring(start, spltLen3);
                    install.CondMod = workStr3.Substring(INSTLengths.condmodFrom, INSTLengths.condmodLen);
                    start += INSTLengths.faxLen;
                    install.CondSer = workStr3.Substring(INSTLengths.condserFrom, INSTLengths.condserLen);
                    start += INSTLengths.condserLen;
                    install.AhMod = workStr3.Substring(INSTLengths.ahmodFrom, INSTLengths.ahmodLen);
                    start += INSTLengths.ahmodLen;
                    install.AhSer = workStr3.Substring(INSTLengths.ahserFrom, INSTLengths.ahserLen);
                    start += INSTLengths.ahserLen;
                    install.PkgMod = workStr3.Substring(INSTLengths.pkgmodFrom, INSTLengths.pkgmodLen);
                    start += INSTLengths.pkgmodLen;
                    install.PkgSer = workStr3.Substring(INSTLengths.pkgserFrom, INSTLengths.pkgserLen);
                    start += INSTLengths.pkgserLen;
                    install.HtrMod = workStr3.Substring(INSTLengths.htrmodFrom, INSTLengths.htrmodLen);
                    start += INSTLengths.htrmodLen;
                    install.HtrSer = workStr3.Substring(INSTLengths.htrserFrom, INSTLengths.htrserLen);
                    start += INSTLengths.htrserLen;
                    install.Warr = workStr3.Substring(INSTLengths.warrFrom, INSTLengths.warrLen);
                    start += INSTLengths.warrLen;
                    install.InvData = workStr3.Substring(INSTLengths.invdataFrom, INSTLengths.invdataLen);
                    start += INSTLengths.invdataLen;
                    string fsStrRem = fsStr.Substring(start);
                    bool run3 = true;
                    for (int z = 0; z < fsStrRem.Length && run3; z++)
                    {
                        if (fsStrRem.Substring(z, 1).Trim() == "")
                        {
                            start++;
                        }
                        else
                        {
                            run3 = false;
                        }
                    }
                    end = start;
                    instMaps.Add(install);
                }
                catch (Exception ex)
                { 
                    string here = ex.Message; 
                }
            }
         
                using (StreamWriter write = new StreamWriter(fsout))
                {
                write.WriteLine(heading);
                for (int z = 0; z < instMaps.Count - 1; z++)
                    {
                    string line = fnOut + "','" + instMaps[z].Id.ToString() + "','" + instMaps[z].Name.ToString().Replace("'", "")+ "','" + instMaps[z].DateStr.ToString() + "','" + instMaps[z].Address.ToString().Replace("'", "")+ "','" + instMaps[z].State.ToString().Replace("'", "")+ "','" + instMaps[z].Zip.ToString().Replace("'", "")+ "','" + instMaps[z].Phone.ToString().Replace("'", "") + "','" + instMaps[z].Fax.ToString().Replace("'", "") + "','" + instMaps[z].Tech.ToString().Replace("'", "")+ "','" + instMaps[z].DateDue.ToString() + "','" + instMaps[z].DatePaid.ToString() +
                    //"','" + instMaps[z].AmtDue.ToString().Trim() + 
                    "','" + instMaps[z].CondMod.ToString().Trim().Replace("'", "")+ "','" + instMaps[z].CondSer.ToString().Trim().Replace("'", "")+ "','" + instMaps[z].AhMod.ToString().Trim().Replace("'", "")+ "','" + instMaps[z].AhSer.ToString().Trim().Replace("'", "")+ "','" + instMaps[z].PkgMod.ToString().Trim().Replace("'", "")+ "','" + instMaps[z].PkgSer.ToString().Trim() + "','" + instMaps[z].HtrMod.ToString().Trim() + "','" + instMaps[z].HtrSer.ToString().Trim().Replace("'", "")+ "','" + instMaps[z].Warr.ToString().Trim().Replace("'", "")+ "','" + instMaps[z].InvData.ToString().Trim().Replace("'", "");

                    string line1 = fnOut + "|" + instMaps[z].Id.ToString() + "|" + instMaps[z].Name.ToString() + "|" + instMaps[z].DateStr.ToString() + "|" + instMaps[z].Address.ToString() + "|" + instMaps[z].State.ToString() + "|" + instMaps[z].Zip.ToString() + "|" + instMaps[z].Phone.ToString() + "|" + instMaps[z].Tech.ToString() + "|" + instMaps[z].DateDue.ToString() + "|" + instMaps[z].DatePaid.ToString() +
                     //"|" + instMaps[z].AmtDue.ToString().Trim() + 
                     "|" + instMaps[z].CondMod.ToString().Trim() + "|" + instMaps[z].CondSer.ToString().Trim() + "|" + instMaps[z].AhMod.ToString().Trim() + "|" + instMaps[z].AhSer.ToString().Trim() + "|" + instMaps[z].PkgMod.ToString().Trim() + "','" + instMaps[z].PkgSer.ToString().Trim() + "|" + instMaps[z].HtrMod.ToString().Trim() + "|" + instMaps[z].HtrSer.ToString().Trim() + "|" + instMaps[z].Warr.ToString().Trim() + "|" + instMaps[z].InvData.ToString().Trim();
                    write.WriteLine(line);
                }

                }

            
        }
        private void CreateInspections(FileStream fsout, string fsStr, string heading, string fnOut)
        {
                        List<INSPMAP> inspMaps = new List<INSPMAP>();
                        int fsStrLength = fsStr.Length;
                        int y = 0;
                        using (StreamWriter write = new StreamWriter(fsout))
                        {
                            string[] fsLines = fsStr.Split("\0\0\0\0\0\0\0\0");
                            INSPMAP map = new INSPMAP(0, INSPMAP.ISPLengths.nameFrom, fsLines[0]);
                            inspMaps.Add(map);
                            write.WriteLine(heading);
                            for (int x1 = 1; x1 < (fsLines.Length); x1++)
                            {


                                string str = fsLines[x1];
                                if (str.Length > 600)
                                {
                                    map = new INSPMAP(x1, str);
                                    inspMaps.Add(map);

                                }
                            }
                            var inspMapsDist = inspMaps.Where(p => p.AmtDue != null).GroupBy(p => p.AmtDue).Select(g => new
                            {
                                AmtPaid = g.Key,
                                Count = g.Select(l => l.Id).Distinct().Count()
                            }).OrderByDescending(a => a.Count).ToList();


                            for (int z = 0; z < inspMaps.Count - 1; z++)
                            {
                                string line = fnOut + "," + inspMaps[z].Id.ToString() + "," + inspMaps[z].Name.ToString() + "," + inspMaps[z].DateStr.ToString() + "," + inspMaps[z].Address.ToString() + "," + inspMaps[z].State.ToString() + "," + inspMaps[z].Zip.ToString() + "," + inspMaps[z].Phone.ToString() + "," + inspMaps[z].Tech.ToString() + "," + inspMaps[z + 1].Model.ToString() + "," + inspMaps[z + 1].Serial.ToString() + ",'" + inspMaps[z + 1].Notes.ToString().Trim() + "'";
                                //string line = fnOut + "," + inspMaps[z].Id.ToString() + "," + inspMaps[z].Name.ToString() + "," + inspMaps[z].DateStr.ToString() + "," + inspMaps[z].Address.ToString() + "," + inspMaps[z].State.ToString() + "," + inspMaps[z].Zip.ToString() + "," + inspMaps[z].Phone.ToString() + "," + inspMaps[z].Tech.ToString() + "," + inspMaps[z].AmtDue.ToString() + "," + inspMaps[z].AmtPaid.ToString() + "," + inspMaps[z].DatePaid.ToString() + "," + inspMaps[z + 1].Model.ToString() + "," + inspMaps[z + 1].Serial.ToString() + "," + inspMaps[z + 1].Notes.ToString();
                                write.WriteLine(line);
                            }

                        }

                    }

        private void listBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (listBox1.SelectedItem.ToString() == "Inspections")
            {
                textBox1.Text = @"C:\Users\Amy\OneDrive\Documents\DM\DATA";
                textBox2.Text = @"C:\Users\Amy\OneDrive\Documents\DM\DATA\INSPECTIONS";
                textBox5.Text = "INSP**.DMD";

                //textBox3.Text = "FileName, Id, Name, Date, Address, State, Zip, Phone, Tech,AmtDue, AmtPaid, DatePaid, Model, Serial, Notes";
                textBox3.Text = "FileName, Id, Name, Date, Address, State, Zip, Phone, Tech, Model, Serial, Notes";
            }   
            if (listBox1.SelectedItem.ToString() == "Labor")
            {
                textBox1.Text = @"C:\Users\Amy\OneDrive\Documents\DM\DATA";
                textBox2.Text = @"C:\Users\Amy\OneDrive\Documents\DM\DATA\LABOR";
                textBox5.Text = "LABOR**.DMD";

                //textBox3.Text = "FileName, Id, Name, Date, Address, State, Zip, Phone, Tech,AmtDue, AmtPaid, DatePaid, Model, Serial, Notes";
                textBox3.Text = "FileName, Id, Name, Date, Address, State, Zip, Phone, Tech, Model, Serial, Notes";
            }
            if (listBox1.SelectedItem.ToString() == "Installs")
            {
                textBox1.Text = @"C:\Users\Amy\OneDrive\Documents\DM\DATA";
                textBox2.Text = @"C:\Users\Amy\OneDrive\Documents\DM\DATA\INSTALLS";
                textBox5.Text = "INSTL**.DMD";
                textBox3.Text = "FileName, Id, Name, Date, Address, State, Zip, Phone, Fax, Tech, DateDue, DatePaid, CondMod, CondSerial,AHMod,AHSer,PKGMod,PkgSer,HtrMod,HtrSer,Warr, Notes";
                    }
        }
    }
}
