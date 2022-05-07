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

                result = Hitaya_Finance.RegisterNewUser(obj.Firstname, obj.Lastname, obj.Emailid, obj.PanCard, obj.Password, obj.PhoneNumber, obj.Address);

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

                result = Hitaya_Finance.AddTaxInformation(tax.PanCard, tax.FillingYear, tax.TotalYearlyIncome, tax.StandardDeduction,
                    tax._80c80ccc, tax._80dHipSelf, tax._80dHipParents, tax._80ccd1b, tax._80ccd2, tax._80e, tax._80u, tax._80dd, tax._80ddb,
                    tax._80tta, tax.TdsPaid, tax.AdvanceTaxPaid, tax.TotalTaxableIncome, tax.TaxToBePaidRefunded, tax.FormSubmitted, tax.Status);

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                result = -99;
            }
            return result;
        }



        [HttpGet]
        public JsonResult GetUserDetails(string PanCard)
        {
            List<Hitaya_Finance.DAL.Models.Userdetail> userDetails;
            try
            {

                userDetails = Hitaya_Finance.GetUserData(PanCard);

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
