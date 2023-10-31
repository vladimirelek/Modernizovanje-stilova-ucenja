using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using SAP_dotnet.Models;

namespace SAP_dotnet.Data
{
    public static class DbInitializer
    {
        public  static async Task Initialize (StoreContext context,UserManager<User> userManager){
            if (!userManager.Users.Any()){
                var user=new User{
                    UserName="student",
                    Email="student@test.com",
                    AdresaStanovanja="Sarajevska 11",
                    Ime="Vladimir",
                    Prezime="Elek"
                };
                await userManager.CreateAsync(user,"Pa$$w0rd");
                await userManager.AddToRoleAsync(user,"Member");
                var admin=new User{
                    UserName="profesor",
                    Email="profesor@test.com",
                    AdresaStanovanja="Kasindolska 32",
                    Ime="Stefan",
                    Prezime="Lalović"
                    
                };
                await userManager.CreateAsync(admin,"Pa$$w0rd");
                await userManager.AddToRoleAsync(admin,"Admin");
            }
            if (context.Products.Any()) return;
            var products=new List<Product>{
                new Product{
                    Name="Matematika 2",
                    ImageData="matematika.jpeg",
                },
                new Product{
                    Name="Engleski jezik 3",
                    ImageData="engleski.jpeg",
                },
                new Product{
                    Name="Osnove elektrotehnike",
                    ImageData="oet.jpeg",
                },

            };
            foreach (var product in products)
            {
                context.Add(product);
            }
            context.SaveChanges();
        }
    }
}