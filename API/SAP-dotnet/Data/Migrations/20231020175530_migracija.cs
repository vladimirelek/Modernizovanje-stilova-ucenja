using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SAP_dotnet.Data.Migrations
{
    /// <inheritdoc />
    public partial class migracija : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "133d42a2-c66a-4df3-894a-87bb97919c76");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f75cd62d-d341-4453-b1bb-54e606eec6f7");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Products");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Products",
                type: "TEXT",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "133d42a2-c66a-4df3-894a-87bb97919c76", null, "Member", "MEMBER" },
                    { "f75cd62d-d341-4453-b1bb-54e606eec6f7", null, "Admin", "ADMIN" }
                });
        }
    }
}
