using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MariaBlogJuridico_V2.Migrations
{
    /// <inheritdoc />
    public partial class AdicionarImagemArtigo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UrlImagem",
                table: "Artigos",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UrlImagem",
                table: "Artigos");
        }
    }
}
