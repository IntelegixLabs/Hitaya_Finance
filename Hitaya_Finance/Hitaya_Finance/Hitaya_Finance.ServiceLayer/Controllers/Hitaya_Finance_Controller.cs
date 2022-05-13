using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hitaya_Finance.DAL;
using Hitaya_Finance.DAL.Models;
using Hitaya_Finance.ServiceLayer;
using Hitaya_Finance.ServiceLayer.Models;

namespace Hitaya_Finance.ServiceLayer.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class Hitaya_Finance_Controller : Controller
    {
        public Hitaya_Finance_Repository Hitaya_Finance;

        public Hitaya_Finance_Controller()
        {
            Hitaya_Finance = new Hitaya_Finance_Repository();
        }

        [HttpGet]
        public JsonResult GetAllUser()
        {
            List<Hitaya_Finance.DAL.Models.Userdetail> AllUsers;
            try
            {

                AllUsers = Hitaya_Finance.GetAllUser();

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                AllUsers = null;
            }
            return Json(AllUsers);
        }



        [HttpPost]
        public int RegisterNewUser(Userdetail obj)
        {
            int result;
            try
            {

                result = Hitaya_Finance.RegisterNewUser(obj.PanCard, obj.IndividualTax, obj.Firstname, obj.Lastname, obj.PhoneNumber, obj.Emailid, obj.Gender, obj.Dob, obj.Address, obj.Pin, obj.Resident, obj.Password);

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                result = -99;
            }
            return result;
        }







        [HttpPost]
        public int LoginValidation(Userdetail obj)
        {
            int result;
            try
            {

                result = Hitaya_Finance.LoginValidation(obj.PanCard, obj.Password);

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                result = -99;
            }
            return result;
        }



        [HttpPost]
        public int AddUserInformation(Hitaya_Finance.ServiceLayer.Models.TaxFilling tax)
        {
            int result;
            try
            {

                result = Hitaya_Finance.AddTaxInformation(tax.PanCard, tax.FillingYear, tax.FillingStatus, tax.ItrForm, tax.Reason, tax.TaxRegime, (decimal)tax.TotalYearlyIncome, (decimal)tax.StandardDeduction,
                    (decimal)tax._80c80ccc, (decimal)tax._80dHipSelf, (decimal)tax._80dHipParents, (decimal)tax._80ccd1b, (decimal)tax._80ccd2, (decimal)tax._80e, (decimal)tax._80u, (decimal)tax._80dd, (decimal)tax._80ddb,
                    (decimal)tax._80tta, (decimal)tax.TdsPaid, (decimal)tax.AdvanceTaxPaid, (decimal)tax.TotalTaxableIncome, (decimal)tax.TaxToBePaidRefunded, tax.FormSubmitted, tax.Status);

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                result = -99;
            }
            return result;
        }


        [HttpPost]
        public int UpdateUserInformation(Hitaya_Finance.ServiceLayer.Models.TaxFilling tax)
        {
            int result;
            try
            {

                result = Hitaya_Finance.UpdateTaxInformation(tax.PanCard, tax.FillingYear, tax.FillingStatus, tax.ItrForm, tax.Reason, tax.TaxRegime, (decimal)tax.TotalYearlyIncome, (decimal)tax.StandardDeduction,
                    (decimal)tax._80c80ccc, (decimal)tax._80dHipSelf, (decimal)tax._80dHipParents, (decimal)tax._80ccd1b, (decimal)tax._80ccd2, (decimal)tax._80e, (decimal)tax._80u, (decimal)tax._80dd, (decimal)tax._80ddb,
                    (decimal)tax._80tta, (decimal)tax.TdsPaid, (decimal)tax.AdvanceTaxPaid, (decimal)tax.TotalTaxableIncome, (decimal)tax.TaxToBePaidRefunded, tax.FormSubmitted, tax.Status);

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                result = -99;
            }
            return result;
        }



        [HttpGet]
        public JsonResult GetUserDetails(string PanCard, string TAX_FILLING)
        {
            List<Hitaya_Finance.DAL.Models.Userdetail> userDetails;
            try
            {

                userDetails = Hitaya_Finance.GetUserData(PanCard, TAX_FILLING);

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                userDetails = null;
            }
            return Json(userDetails);
        }


        [HttpGet]
        public JsonResult GetAllUserDetails()
        {
            List<Hitaya_Finance.DAL.Models.Userdetail> userDetails;
            try
            {

                userDetails = Hitaya_Finance.GetAllUserData();

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                userDetails = null;
            }
            return Json(userDetails);
        }
    }
    
}
