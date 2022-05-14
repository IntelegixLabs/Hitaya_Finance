using System;
using System.Collections.Generic;

#nullable disable

namespace Hitaya_Finance.DAL.Models
{
    public partial class Userdetail
    {
        public Userdetail()
        {
            TaxFillings = new HashSet<TaxFilling>();
        }

        public int Userid { get; set; }
        public string PanCard { get; set; }
        public string IndividualTax { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string PhoneNumber { get; set; }
        public string Emailid { get; set; }
        public string Gender { get; set; }
        public string Dob { get; set; }
        public string Address { get; set; }
        public string Pin { get; set; }
        public string Resident { get; set; }
        public string Password { get; set; }
        public string Roleid { get; set; }

        public virtual ICollection<TaxFilling> TaxFillings { get; set; }
    }
}
