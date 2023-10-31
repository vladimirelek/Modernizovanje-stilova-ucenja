using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SAP_dotnet.Data.Migrations
{
    /// <inheritdoc />
    public partial class dodajMigraciju : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7c6f05f4-f769-4642-9260-3a5a4ff0928d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f99326c2-7ccc-492a-acf7-83bb8da08cdc");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "7b578560-04f1-4e10-86ea-5228ac84ac27", null, "Member", "MEMBER" },
                    { "9ef7e770-8626-4ac9-9507-9cdcdd4cc985", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7b578560-04f1-4e10-86ea-5228ac84ac27");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9ef7e770-8626-4ac9-9507-9cdcdd4cc985");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "7c6f05f4-f769-4642-9260-3a5a4ff0928d", null, "Member", "MEMBER" },
                    { "f99326c2-7ccc-492a-acf7-83bb8da08cdc", null, "Admin", "ADMIN" }
                });
        }
    }
}
