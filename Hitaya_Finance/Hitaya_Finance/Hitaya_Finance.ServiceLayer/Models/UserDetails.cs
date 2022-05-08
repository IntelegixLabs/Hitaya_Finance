using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hitaya_Finance.ServiceLayer.Models
{
    public class UserDetails
    {
        public int Userid { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Emailid { get; set; }
        public string PanCard { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public string Roleid { get; set; }
    }
}
