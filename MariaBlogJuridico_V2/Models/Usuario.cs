namespace MariaBlogJuridico_V2.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Email { get; set; }
        public string Senha { get; set; }
    }
}
