using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SAP_dotnet.Data.Migrations
{
    /// <inheritdoc />
    public partial class migracija11 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ac4d3ded-3533-4200-b3dd-a013a91128b6");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "db7ea47a-f016-4245-a300-67f070b84c90");

            migrationBuilder.RenameColumn(
                name: "Slika",
                table: "Products",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "Naziv",
                table: "Products",
                newName: "ImageData");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "7c6f05f4-f769-4642-9260-3a5a4ff0928d", null, "Member", "MEMBER" },
                    { "f99326c2-7ccc-492a-acf7-83bb8da08cdc", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7c6f05f4-f769-4642-9260-3a5a4ff0928d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f99326c2-7ccc-492a-acf7-83bb8da08cdc");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Products",
                newName: "Slika");

            migrationBuilder.RenameColumn(
                name: "ImageData",
                table: "Products",
                newName: "Naziv");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "ac4d3ded-3533-4200-b3dd-a013a91128b6", null, "Admin", "ADMIN" },
                    { "db7ea47a-f016-4245-a300-67f070b84c90", null, "Member", "MEMBER" }
                });
        }
    }
}
