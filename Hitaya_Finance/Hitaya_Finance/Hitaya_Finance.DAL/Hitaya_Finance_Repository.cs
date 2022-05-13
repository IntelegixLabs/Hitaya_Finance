using System;
using System.Collections.Generic;
using System.Text;
using Hitaya_Finance.DAL.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.SqlClient;
using System.Data;

namespace Hitaya_Finance.DAL
{
    public class Hitaya_Finance_Repository
    {
        Hitaya_TaxContext context;

        public Hitaya_Finance_Repository()
        {
            context = new Hitaya_TaxContext();
        }

        public List<Userdetail> GetAllUser()
        {
            List<Userdetail> usersList = null;
            try
            {
                usersList = context.Userdetails
                                     .FromSqlRaw("SELECT * FROM ufn_GetAllUser()").ToList();
            }
            catch (Exception)
            {
                usersList = null;
            }
            return usersList;
        }


        public int RegisterNewUser(string PAN_CARD, string INDIVIDUAL_TAX, string FIRSTNAME, string LASTNAME, string PHONE_NUMBER, string EMAILID, string GENDER, string DOB, string ADDRESS, string PIN, string RESIDENT, string PASSWORD)
        {

            int result = -1;
            int returnResult = 0;
            try
            {
                SqlParameter prmPANCARD = new SqlParameter("@PAN_CARD", PAN_CARD);
                SqlParameter prmINDIVIDUAL_TAX = new SqlParameter("@INDIVIDUAL_TAX", INDIVIDUAL_TAX);
                SqlParameter prmFIRSTNAME = new SqlParameter("@FIRSTNAME", FIRSTNAME);
                SqlParameter prmLASTNAME = new SqlParameter("@LASTNAME", LASTNAME);
                SqlParameter prmPHONE_NUMBER = new SqlParameter("@PHONE_NUMBER", PHONE_NUMBER);
                SqlParameter prmEMAILID = new SqlParameter("@EMAILID", EMAILID);
                SqlParameter prmGENDER = new SqlParameter("@GENDER", GENDER);
                SqlParameter prmDOB = new SqlParameter("@DOB", DOB);
                SqlParameter prmADDRESS = new SqlParameter("@ADDRESS", ADDRESS);
                SqlParameter prmPIN = new SqlParameter("@PIN", PIN);
                SqlParameter prmRESIDENT = new SqlParameter("@RESIDENT", RESIDENT);
                SqlParameter prmPASSWORD = new SqlParameter("@PASSWORD", PASSWORD);



                SqlParameter prmReturnResult = new SqlParameter("@ReturnResult", System.Data.SqlDbType.Int);
                prmReturnResult.Direction = System.Data.ParameterDirection.Output;

                result = context.Database.ExecuteSqlRaw("EXEC @ReturnResult = usp_RegisterUser @PAN_CARD, @INDIVIDUAL_TAX, @FIRSTNAME, @LASTNAME, @PHONE_NUMBER, @EMAILID, @GENDER, @DOB, @ADDRESS, @PIN, @RESIDENT, @PASSWORD", new[] { prmReturnResult, prmPANCARD, prmINDIVIDUAL_TAX, prmFIRSTNAME, prmLASTNAME, prmPHONE_NUMBER, prmEMAILID, prmGENDER, prmDOB, prmADDRESS, prmPIN, prmRESIDENT, prmPASSWORD });
                returnResult = Convert.ToInt32(prmReturnResult.Value);

                Console.WriteLine(Convert.ToInt32(result));
                Console.WriteLine(returnResult);

            }
            catch (Exception)
            {
                returnResult = -99;
            }
            return returnResult;
        }


        public int LoginValidation(string PAN_CARD, string PASSWORD)
        {

            int result = -1;
            int returnResult = 0;
            try
            {

                SqlParameter prmPAN_CARD = new SqlParameter("@PAN_CARD ", PAN_CARD);
                SqlParameter prmPASSWORD = new SqlParameter("@PASSWORD", PASSWORD);



                SqlParameter prmReturnResult = new SqlParameter("@ReturnResult", System.Data.SqlDbType.Int);
                prmReturnResult.Direction = System.Data.ParameterDirection.Output;

                result = context.Database.ExecuteSqlRaw("EXEC @ReturnResult = usp_LoginValidation @PAN_CARD, @PASSWORD", new[] { prmReturnResult, prmPAN_CARD, prmPASSWORD });
                returnResult = Convert.ToInt32(prmReturnResult.Value);

                Console.WriteLine(Convert.ToInt32(result));
                Console.WriteLine(returnResult);

            }
            catch (Exception)
            {
                returnResult = -99;
            }
            return returnResult;
        }


        public int AddTaxInformation(string PAN_CARD, string FILLING_YEAR, string FILLING_STATUS, string ITR_FORM, string REASON, string TAX_REGIME,  decimal TOTAL_YEARLY_INCOME, decimal Standard_Deduction, decimal _80C_80CCC,
            decimal _80D_HIP_Self, decimal _80D_HIP_Parents, decimal _80CCD_1B, decimal _80CCD_2, decimal _80E, decimal _80U,
            decimal _80DD, decimal _80DDB, decimal _80TTA, decimal TDS_PAID, decimal ADVANCE_TAX_PAID, decimal TOTAL_TAXABLE_INCOME,
            decimal TAX_TO_BE_PAID_REFUNDED, string FORM_SUBMITTED, string STATUS)
        {

            int result = -1;
            int returnResult = 0;
            try
            {
                SqlParameter prmPAN_CARD = new SqlParameter("@PAN_CARD", PAN_CARD);
                SqlParameter prmFILLING_YEAR = new SqlParameter("@FILLING_YEAR", FILLING_YEAR);
                SqlParameter prmFILLING_STATUS = new SqlParameter("@FILLING_STATUS", FILLING_STATUS);
                SqlParameter prmITR_FORM = new SqlParameter("@ITR_FORM", ITR_FORM);
                SqlParameter prmREASON = new SqlParameter("@REASON", REASON);
                SqlParameter prmTAX_REGIME = new SqlParameter("@TAX_REGIME", TAX_REGIME);
                SqlParameter prmTOTAL_YEARLY_INCOME = new SqlParameter("@TOTAL_YEARLY_INCOME", TOTAL_YEARLY_INCOME);
                SqlParameter prmStandard_Deduction = new SqlParameter("@Standard_Deduction", Standard_Deduction);
                SqlParameter prm80C_80CCC = new SqlParameter("@80C_80CCC", _80C_80CCC);
                SqlParameter prm80D_HIP_Self = new SqlParameter("@80D_HIP_Self", _80D_HIP_Self);
                SqlParameter prm80D_HIP_Parents = new SqlParameter("@80D_HIP_Parents", _80D_HIP_Parents);
                SqlParameter prm80CCD_1B = new SqlParameter("@80CCD_1B", _80CCD_1B);
                SqlParameter prm80CCD_2 = new SqlParameter("@80CCD_2", _80CCD_2);
                SqlParameter prm80E = new SqlParameter("@80E", _80E);
                SqlParameter prm80U = new SqlParameter("@80U", _80U);
                SqlParameter prm80DD = new SqlParameter("@80DD", _80DD);
                SqlParameter prm80DDB = new SqlParameter("@80DDB", _80DDB);
                SqlParameter prm80TTA = new SqlParameter("@80TTA", _80TTA);
                SqlParameter prmTDS_PAID = new SqlParameter("@TDS_PAID", TDS_PAID);
                SqlParameter prmADVANCE_TAX_PAID = new SqlParameter("@ADVANCE_TAX_PAID", ADVANCE_TAX_PAID);
                SqlParameter prmTOTAL_TAXABLE_INCOME = new SqlParameter("@TOTAL_TAXABLE_INCOME", TOTAL_TAXABLE_INCOME);
                SqlParameter prmTAX_TO_BE_PAID_REFUNDED = new SqlParameter("@TAX_TO_BE_PAID_REFUNDED", TAX_TO_BE_PAID_REFUNDED);
                SqlParameter prmFORM_SUBMITTED = new SqlParameter("@FORM_SUBMITTED", FORM_SUBMITTED);
                SqlParameter prmSTATUS = new SqlParameter("@STATUS", STATUS);



                SqlParameter prmReturnResult = new SqlParameter("@ReturnResult", System.Data.SqlDbType.Int);
                prmReturnResult.Direction = System.Data.ParameterDirection.Output;

                result = context.Database.ExecuteSqlRaw("EXEC @ReturnResult = USP_TAX_FILLING @PAN_CARD, @FILLING_YEAR,@FILLING_STATUS, @ITR_FORM, @REASON, @TAX_REGIME, @TOTAL_YEARLY_INCOME," +
                    "@Standard_Deduction, @80C_80CCC, @80D_HIP_Self, @80D_HIP_Parents, @80CCD_1B, @80CCD_2, @80E, @80U, @80DD, @80DDB, @80TTA," +
                    "@TDS_PAID, @ADVANCE_TAX_PAID, @TOTAL_TAXABLE_INCOME, @TAX_TO_BE_PAID_REFUNDED, @FORM_SUBMITTED, @STATUS",
                    new[] { prmReturnResult, prmPAN_CARD, prmFILLING_YEAR, prmFILLING_STATUS, prmITR_FORM, prmREASON, prmTAX_REGIME, prmTOTAL_YEARLY_INCOME, prmStandard_Deduction, prm80C_80CCC, prm80D_HIP_Self,
                    prm80D_HIP_Parents, prm80CCD_1B, prm80CCD_2, prm80E, prm80U, prm80DD, prm80DDB, prm80TTA, prmTDS_PAID, prmADVANCE_TAX_PAID,
                    prmTOTAL_TAXABLE_INCOME, prmTAX_TO_BE_PAID_REFUNDED, prmFORM_SUBMITTED, prmSTATUS});
                returnResult = Convert.ToInt32(prmReturnResult.Value);

                Console.WriteLine(Convert.ToInt32(result));

            }
            catch (Exception)
            {
                returnResult = -99;
            }
            return returnResult;
        }



        public int UpdateTaxInformation(string PAN_CARD, string FILLING_YEAR, string FILLING_STATUS, string ITR_FORM, string REASON, string TAX_REGIME, decimal TOTAL_YEARLY_INCOME, decimal Standard_Deduction, decimal _80C_80CCC,
            decimal _80D_HIP_Self, decimal _80D_HIP_Parents, decimal _80CCD_1B, decimal _80CCD_2, decimal _80E, decimal _80U,
            decimal _80DD, decimal _80DDB, decimal _80TTA, decimal TDS_PAID, decimal ADVANCE_TAX_PAID, decimal TOTAL_TAXABLE_INCOME,
            decimal TAX_TO_BE_PAID_REFUNDED, string FORM_SUBMITTED, string STATUS)
        {

            int result = -1;
            int returnResult = 0;
            try
            {
                SqlParameter prmPAN_CARD = new SqlParameter("@PAN_CARD", PAN_CARD);
                SqlParameter prmFILLING_YEAR = new SqlParameter("@FILLING_YEAR", FILLING_YEAR);
                SqlParameter prmFILLING_STATUS = new SqlParameter("@FILLING_STATUS", FILLING_STATUS);
                SqlParameter prmITR_FORM = new SqlParameter("@ITR_FORM", ITR_FORM);
                SqlParameter prmREASON = new SqlParameter("@REASON", REASON);
                SqlParameter prmTAX_REGIME = new SqlParameter("@TAX_REGIME", TAX_REGIME);
                SqlParameter prmTOTAL_YEARLY_INCOME = new SqlParameter("@TOTAL_YEARLY_INCOME", TOTAL_YEARLY_INCOME);
                SqlParameter prmStandard_Deduction = new SqlParameter("@Standard_Deduction", Standard_Deduction);
                SqlParameter prm80C_80CCC = new SqlParameter("@80C_80CCC", _80C_80CCC);
                SqlParameter prm80D_HIP_Self = new SqlParameter("@80D_HIP_Self", _80D_HIP_Self);
                SqlParameter prm80D_HIP_Parents = new SqlParameter("@80D_HIP_Parents", _80D_HIP_Parents);
                SqlParameter prm80CCD_1B = new SqlParameter("@80CCD_1B", _80CCD_1B);
                SqlParameter prm80CCD_2 = new SqlParameter("@80CCD_2", _80CCD_2);
                SqlParameter prm80E = new SqlParameter("@80E", _80E);
                SqlParameter prm80U = new SqlParameter("@80U", _80U);
                SqlParameter prm80DD = new SqlParameter("@80DD", _80DD);
                SqlParameter prm80DDB = new SqlParameter("@80DDB", _80DDB);
                SqlParameter prm80TTA = new SqlParameter("@80TTA", _80TTA);
                SqlParameter prmTDS_PAID = new SqlParameter("@TDS_PAID", TDS_PAID);
                SqlParameter prmADVANCE_TAX_PAID = new SqlParameter("@ADVANCE_TAX_PAID", ADVANCE_TAX_PAID);
                SqlParameter prmTOTAL_TAXABLE_INCOME = new SqlParameter("@TOTAL_TAXABLE_INCOME", TOTAL_TAXABLE_INCOME);
                SqlParameter prmTAX_TO_BE_PAID_REFUNDED = new SqlParameter("@TAX_TO_BE_PAID_REFUNDED", TAX_TO_BE_PAID_REFUNDED);
                SqlParameter prmFORM_SUBMITTED = new SqlParameter("@FORM_SUBMITTED", FORM_SUBMITTED);
                SqlParameter prmSTATUS = new SqlParameter("@STATUS", STATUS);



                SqlParameter prmReturnResult = new SqlParameter("@ReturnResult", System.Data.SqlDbType.Int);
                prmReturnResult.Direction = System.Data.ParameterDirection.Output;

                result = context.Database.ExecuteSqlRaw("EXEC @ReturnResult = USP_UPDATE_TAX_FILLING @PAN_CARD, @FILLING_YEAR,@FILLING_STATUS, @ITR_FORM, @REASON, @TAX_REGIME, @TOTAL_YEARLY_INCOME," +
                    "@Standard_Deduction, @80C_80CCC, @80D_HIP_Self, @80D_HIP_Parents, @80CCD_1B, @80CCD_2, @80E, @80U, @80DD, @80DDB, @80TTA," +
                    "@TDS_PAID, @ADVANCE_TAX_PAID, @TOTAL_TAXABLE_INCOME, @TAX_TO_BE_PAID_REFUNDED, @FORM_SUBMITTED, @STATUS",
                    new[] { prmReturnResult, prmPAN_CARD, prmFILLING_YEAR, prmFILLING_STATUS, prmITR_FORM, prmREASON, prmTAX_REGIME, prmTOTAL_YEARLY_INCOME, prmStandard_Deduction, prm80C_80CCC, prm80D_HIP_Self,
                    prm80D_HIP_Parents, prm80CCD_1B, prm80CCD_2, prm80E, prm80U, prm80DD, prm80DDB, prm80TTA, prmTDS_PAID, prmADVANCE_TAX_PAID,
                    prmTOTAL_TAXABLE_INCOME, prmTAX_TO_BE_PAID_REFUNDED, prmFORM_SUBMITTED, prmSTATUS});
                returnResult = Convert.ToInt32(prmReturnResult.Value);

                Console.WriteLine(Convert.ToInt32(result));

            }
            catch (Exception)
            {
                returnResult = -99;
            }
            return returnResult;
        }


        public List<Userdetail> GetUserData(string PAN_CARD, string FILLING_YEAR)
        {
            List<Userdetail> lstdetail = null;
            try
            {
                SqlParameter prmPAN_CARD = new SqlParameter("@PAN_CARD", PAN_CARD);
                SqlParameter prmFILLING_YEAR = new SqlParameter("@FILLING_YEAR", FILLING_YEAR);

                lstdetail = context.Userdetails
                                     .FromSqlRaw("SELECT * FROM ufn_GetSpecificTax(@PAN_CARD, @FILLING_YEAR)", new[] { prmPAN_CARD, prmFILLING_YEAR }).ToList();
            }
            catch (Exception)
            {
                lstdetail = null;
            }
            return lstdetail;
        }

        public List<Userdetail> GetAllUserData()
        {
            List<Userdetail> alldetail = null;
            try
            {
                
                alldetail = context.Userdetails
                                     .FromSqlRaw("SELECT * FROM ufn_GetAllUser()").ToList();
            }
            catch (Exception)
            {
                alldetail = null;
            }
            return alldetail;
        }


    }
}
