using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SAP_dotnet.Data.Migrations
{
    /// <inheritdoc />
    public partial class dodajMigraciju432 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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
                    { "2ad3c43b-8694-4181-a4db-80d5375557ad", null, "Member", "MEMBER" },
                    { "5b72e873-a918-4bc6-85c1-95a236d2f02a", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
                    { "7b578560-04f1-4e10-86ea-5228ac84ac27", null, "Member", "MEMBER" },
                    { "9ef7e770-8626-4ac9-9507-9cdcdd4cc985", null, "Admin", "ADMIN" }
                });
        }
    }
}
