using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.Json;
using System.Linq;

#nullable disable

namespace Hitaya_Finance.DAL.Models
{
    public partial class Hitaya_TaxContext : DbContext
    {
        public Hitaya_TaxContext()
        {
        }

        public Hitaya_TaxContext(DbContextOptions<Hitaya_TaxContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TaxFilling> TaxFillings { get; set; }
        public virtual DbSet<Userdetail> Userdetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var builder = new ConfigurationBuilder()
                       .SetBasePath(Directory.GetCurrentDirectory())
                       .AddJsonFile("appsettings.json");
            var config = builder.Build();

            var connectionString = config.GetConnectionString("HitayaDBConnectionString");


            if (!optionsBuilder.IsConfigured)
            {
                //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<TaxFilling>(entity =>
            {
                entity.HasKey(e => new { e.PanCard, e.FillingYear })
                    .HasName("PK_TAX");

                entity.ToTable("TAX_FILLING");

                entity.Property(e => e.PanCard)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("PAN_CARD");

                entity.Property(e => e.FillingYear)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("FILLING_YEAR");

                entity.Property(e => e.AdvanceTaxPaid)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("ADVANCE_TAX_PAID");

                entity.Property(e => e.FormSubmitted)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("FORM_SUBMITTED");

                entity.Property(e => e.StandardDeduction)
                    .HasColumnType("decimal(20, 2)")
                    .HasColumnName("Standard_Deduction");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("STATUS");

                entity.Property(e => e.TaxId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("TAX_ID");

                entity.Property(e => e.TaxToBePaidRefunded)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("TAX_TO_BE_PAID_REFUNDED");

                entity.Property(e => e.TdsPaid)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("TDS_PAID");

                entity.Property(e => e.TotalTaxableIncome)
                    .HasColumnType("decimal(20, 2)")
                    .HasColumnName("TOTAL_TAXABLE_INCOME");

                entity.Property(e => e.TotalYearlyIncome)
                    .HasColumnType("decimal(20, 2)")
                    .HasColumnName("TOTAL_YEARLY_INCOME");

                entity.Property(e => e._80c80ccc)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("80C_80CCC");

                entity.Property(e => e._80ccd1b)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("80CCD_1B");

                entity.Property(e => e._80ccd2)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("80CCD_2");

                entity.Property(e => e._80dHipParents)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("80D_HIP_Parents");

                entity.Property(e => e._80dHipSelf)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("80D_HIP_Self");

                entity.Property(e => e._80dd)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("80DD");

                entity.Property(e => e._80ddb)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("80DDB");

                entity.Property(e => e._80e)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("80E");

                entity.Property(e => e._80tta)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("80TTA");

                entity.Property(e => e._80u)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("80U");

                entity.HasOne(d => d.PanCardNavigation)
                    .WithMany(p => p.TaxFillings)
                    .HasForeignKey(d => d.PanCard)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TAX_FILLI__PAN_C__2B3F6F97");
            });

            modelBuilder.Entity<Userdetail>(entity =>
            {
                entity.HasKey(e => e.PanCard)
                    .HasName("pk_PanCard");

                entity.ToTable("USERDETAILS");

                entity.Property(e => e.PanCard)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("PAN_CARD");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("ADDRESS");

                entity.Property(e => e.Emailid)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("EMAILID");

                entity.Property(e => e.Firstname)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("FIRSTNAME");

                entity.Property(e => e.Lastname)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("LASTNAME");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("PASSWORD");

                entity.Property(e => e.PhoneNumber)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("PHONE_NUMBER");

                entity.Property(e => e.Roleid)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("ROLEID");

                entity.Property(e => e.Userid)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("USERID");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
