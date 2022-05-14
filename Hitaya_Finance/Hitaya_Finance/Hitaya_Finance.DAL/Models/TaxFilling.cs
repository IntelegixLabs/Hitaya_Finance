using System;
using System.Collections.Generic;

#nullable disable

namespace Hitaya_Finance.DAL.Models
{
    public partial class TaxFilling
    {
        public int TaxId { get; set; }
        public string PanCard { get; set; }
        public string FillingYear { get; set; }
        public string FillingStatus { get; set; }
        public string ItrForm { get; set; }
        public string Reason { get; set; }
        public string TaxRegime { get; set; }
        public decimal? TotalYearlyIncome { get; set; }
        public decimal? StandardDeduction { get; set; }
        public decimal? _80c80ccc { get; set; }
        public decimal? _80dHipSelf { get; set; }
        public decimal? _80dHipParents { get; set; }
        public decimal? _80ccd1b { get; set; }
        public decimal? _80ccd2 { get; set; }
        public decimal? _80e { get; set; }
        public decimal? _80u { get; set; }
        public decimal? _80dd { get; set; }
        public decimal? _80ddb { get; set; }
        public decimal? _80tta { get; set; }
        public decimal? TdsPaid { get; set; }
        public decimal? AdvanceTaxPaid { get; set; }
        public decimal? TotalTaxableIncome { get; set; }
        public decimal? TaxToBePaidRefunded { get; set; }
        public string FormSubmitted { get; set; }
        public string Status { get; set; }

        public virtual Userdetail PanCardNavigation { get; set; }
    }
}
