using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SAP_dotnet.Data.Migrations
{
    /// <inheritdoc />
    public partial class podacizaprofesoraistudenta : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2ad3c43b-8694-4181-a4db-80d5375557ad");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5b72e873-a918-4bc6-85c1-95a236d2f02a");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "6948dfa3-d9e9-4954-96b5-89de30f1f321", null, "Member", "MEMBER" },
                    { "b47281e5-3bd4-418e-966e-f96996272276", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6948dfa3-d9e9-4954-96b5-89de30f1f321");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b47281e5-3bd4-418e-966e-f96996272276");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2ad3c43b-8694-4181-a4db-80d5375557ad", null, "Member", "MEMBER" },
                    { "5b72e873-a918-4bc6-85c1-95a236d2f02a", null, "Admin", "ADMIN" }
                });
        }
    }
}
