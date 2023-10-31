using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SAP_dotnet.Models;

namespace SAP_dotnet.Data
{
    public class StoreContext : IdentityDbContext<User>
    {

        public StoreContext(DbContextOptions options) : base(options)
        {
        }
         protected override void OnModelCreating(ModelBuilder builder){
            base.OnModelCreating(builder);
            builder.Entity<IdentityRole>()
            .HasData(
                new IdentityRole{Name="Member",NormalizedName="MEMBER"},
                new IdentityRole{Name="Admin",NormalizedName="ADMIN"}
            );
        }
        public DbSet<Product> Products {get;set;}
        public DbSet<Pitanje> Pitanja {get; set;}
        
    }
}