using Microsoft.EntityFrameworkCore;
using MariaBlogJuridico_V2.Models;

namespace MariaBlogJuridico_V2.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // Isso diz: "Crie uma tabela 'Artigos' baseada na classe Artigo"
        public DbSet<Artigo> Artigos { get; set; }

        //  Cria a tabela de Usuários baseada na classe Usuario
        public DbSet<Usuario> Usuarios { get; set; }
    }
}
