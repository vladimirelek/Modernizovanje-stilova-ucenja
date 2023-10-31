using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SAP_dotnet.Data.Migrations
{
    /// <inheritdoc />
    public partial class rolaPopravni : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "515e3e95-ce89-4e95-8dc9-66937c7c3de3");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e15b73f0-b630-4127-83cb-3b02f27fc72f");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "24c4b057-9972-4413-8c78-d4af870058d9", null, "Admin", "ADMIN" },
                    { "6869a105-75cf-428f-a654-be2b1e8717a6", null, "Member", "MEMBER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "24c4b057-9972-4413-8c78-d4af870058d9");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6869a105-75cf-428f-a654-be2b1e8717a6");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "515e3e95-ce89-4e95-8dc9-66937c7c3de3", null, "Member", "MEMBER" },
                    { "e15b73f0-b630-4127-83cb-3b02f27fc72f", null, "Admin", "ADMIN" }
                });
        }
    }
}
